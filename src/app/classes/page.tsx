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

export default function ClassesPage() {
  return (
    <div className="py-16">
      <div className="container">
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-4">Chọn lớp học</h1>
          <p className="text-muted-foreground">Lựa chọn lớp và môn học để bắt đầu</p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Tiểu học (Lớp 1 - 5)</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
            {[1,2,3,4,5].map((grade) => (
              <Link href={`/classes/${grade}`} key={grade}>
                <Card className="hover:border-primary hover:shadow-md transition-all cursor-pointer">
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <span className="text-4xl mb-2">🎒</span>
                    <span className="text-2xl font-bold text-primary">Lớp {grade}</span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Trung học cơ sở (Lớp 6 - 9)</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[6,7,8,9].map((grade) => (
              <Link href={`/classes/${grade}`} key={grade}>
                <Card className="hover:border-primary hover:shadow-md transition-all cursor-pointer">
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <span className="text-4xl mb-2">📚</span>
                    <span className="text-2xl font-bold text-primary">Lớp {grade}</span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Trung học phổ thông (Lớp 10 - 12)</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[10,11,12].map((grade) => (
              <Link href={`/classes/${grade}`} key={grade}>
                <Card className="hover:border-primary hover:shadow-md transition-all cursor-pointer">
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <span className="text-4xl mb-2">🎓</span>
                    <span className="text-2xl font-bold text-primary">Lớp {grade}</span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
