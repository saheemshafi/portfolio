import supabase from "@/lib/supabase/supabase";
import { contactFormSchema } from "@/lib/zod/contactFormSchema";
import { env } from "@/lib/zod/envSchema";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "MAILID@gmail.com",
    pass: "YOUR PASSWORD",
  },
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const contactInfo = contactFormSchema.parse(body);

    await supabase
      .from("contacts")
      .insert({
        from: contactInfo.name,
        email: contactInfo.email,
        message: contactInfo.message,
        email_sent: true,
      })
      .throwOnError();

    return NextResponse.json(
      { success: true, message: `Message Sent!` },
      { statusText: "Email sent!", status: 200 },
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = error.issues.map(
        (issue) => `Zod-[${issue.path[0]}]: ${issue.message}`,
      );
      return NextResponse.json({ success: false, errors }, { status: 422 });
    } else {
      return NextResponse.json(
        {
          success: false,
          errors: [
            error instanceof Error ? error.message : "Something went wrong!",
          ],
        },
        { status: 500 },
      );
    }
  }
}
