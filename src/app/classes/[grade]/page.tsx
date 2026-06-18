"use client";

import { useParams, useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const subjectsByLevel = {
  elementary: [
    { name: "Toán", icon: "🧮" },
    { name: "Tiếng Việt", icon: "📚" },
    { name: "Tiếng Anh", icon: "🌍" },
    { name: "Khoa học", icon: "🔬" },
    { name: "Lịch sử và Địa lý", icon: "🗺️" },
  ],
  middle: [
    { name: "Toán", icon: "🧮" },
    { name: "Ngữ văn", icon: "📚" },
    { name: "Tiếng Anh", icon: "🌍" },
    { name: "Vật lý", icon: "⚛️" },
    { name: "Hóa học", icon: "🧪" },
    { name: "Sinh học", icon: "🧬" },
    { name: "Lịch sử", icon: "📜" },
    { name: "Địa lý", icon: "🗺️" },
    { name: "Tin học", icon: "💻" },
  ],
  high: [
    { name: "Toán", icon: "🧮" },
    { name: "Ngữ văn", icon: "📚" },
    { name: "Tiếng Anh", icon: "🌍" },
    { name: "Vật lý", icon: "⚛️" },
    { name: "Hóa học", icon: "🧪" },
    { name: "Sinh học", icon: "🧬" },
    { name: "Lịch sử", icon: "📜" },
    { name: "Địa lý", icon: "🗺️" },
    { name: "Tin học", icon: "💻" },
    { name: "Giáo dục kinh tế pháp luật", icon: "⚖️" },
  ],
};

export default function ClassDetailPage() {
  const params = useParams();
  const router = useRouter();
  const grade = Number(params.grade);
  
  let subjects;
  if (grade >=1 && grade <=5) subjects = subjectsByLevel.elementary;
  else if (grade >=6 && grade <=9) subjects = subjectsByLevel.middle;
  else subjects = subjectsByLevel.high;

  return (
    <div className="py-16">
      <div className="container">
        <Button variant="ghost" onClick={() => router.back()} className="mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" /> Quay lại
        </Button>
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-4">Lớp {grade}</h1>
          <p className="text-muted-foreground">Chọn môn học để bắt đầu học</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {subjects.map((subject, idx) => (
            <Link href={`/classes/${grade}/${encodeURIComponent(subject.name)}`} key={idx}>
              <Card className="hover:border-primary hover:shadow-lg transition-all cursor-pointer">
                <CardContent className="flex flex-col items-center justify-center p-8">
                  <span className="text-6xl mb-4">{subject.icon}</span>
                  <h3 className="text-xl font-semibold text-center">{subject.name}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
