import { serve } from "https://deno.land/std@0.114.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import nodemailer from "npm:nodemailer";

type Email = {
  id: string;
  sender: string;
  email: string;
  message: string;
  submitted_at: string;
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: Deno.env.get("SMTP_USER"),
    pass: Deno.env.get("SMTP_PASS"),
  },
});

serve(async (req) => {
  const { id, email, sender, message, submitted_at }: Email = await req.json();

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  try {
    if (!id || !email || !sender || !message || !submitted_at) {
      throw new Error("Invalid or missing request parameters.");
    }

    const info = await sendEmail({
      id,
      email,
      sender,
      message,
      submitted_at,
    });

    await supabase
      .from("contacts")
      .update({ email_sent: true })
      .eq("id", id)
      .throwOnError();

    return new Response(JSON.stringify({ message: "Email sent", info }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
    });
  }
});

async function sendEmail({ id, sender, email, submitted_at }: Email) {
  console.log(`Sending email from ${sender}...`);

  const mailOptions = {
    from: Deno.env.get("SMTP_USER"), 
    to: email,
    subject: `Enquiry with ${Deno.env.get("HOST_NAME")!} submitted!`,
    html: `
     <h4>Hi ${sender}</h4>
     <p>Your enquiry submitted through ${Deno.env.get(
       "HOST_NAME",
     )!}'s portfolio has been
     saved. We will be getting in touch with you soon.
     
     </br>
     Thank You.</p>

     <small style="font-weight:medium;">${new Date(
       submitted_at,
     ).toLocaleDateString("en-US")} - Reference Id: ${id}</small>
    `,
  };

  return await transporter.sendMail(mailOptions);
}
