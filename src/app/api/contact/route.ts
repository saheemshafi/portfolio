import supabase from "@/lib/supabase/supabase";
import { contactFormSchema } from "@/lib/zod/contactFormSchema";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const contactInfo = contactFormSchema.parse(body);

    const response = await supabase
      .from("contacts")
      .insert({
        from: contactInfo.name,
        email: contactInfo.email,
        message: contactInfo.message,
      })
      .throwOnError();

    return NextResponse.json(
      { success: true, message: "Message Sent!" },
      { statusText: response.statusText, status: response.status },
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = error.issues.map(
        (issue) => `Zod-[${issue.path[0]}]: ${issue.message}`,
      );
      return NextResponse.json({ success: false, errors }, { status: 422 });
    } else if (error instanceof Error) {
      return NextResponse.json(
        { success: false, errors: [error.message] },
        { status: 400 },
      );
    }
  }
}
