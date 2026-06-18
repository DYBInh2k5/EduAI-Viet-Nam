import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  const courses = db.prepare("SELECT * FROM courses").all();
  return NextResponse.json(courses);
}
