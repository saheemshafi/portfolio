import supabase from "@/lib/supabase/supabase";
import { contactFormSchema } from "@/lib/zod/contactFormSchema";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const contactInfo = contactFormSchema.parse(body);

    const contact = await supabase
      .from("contacts")
      .insert({
        sender: contactInfo.name,
        email: contactInfo.email,
        message: contactInfo.message,
      })
      .select()
      .throwOnError();

    const response = await supabase.functions.invoke("send-email", {
      body: contact.data?.[0] || {},
    });

    if (response.error) {
      throw response.error;
    }

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
