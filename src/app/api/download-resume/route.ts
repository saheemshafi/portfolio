import supabase from "@/lib/supabase/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { data, error } = await supabase.storage
    .from("portfolio-bucket")
    .download("/docs/saheemshafi-resume.pdf");

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 503 });
  }

  return new NextResponse(data, {
    headers: {
      "Content-Disposition": "attachment",
    },
  });
}
