import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export function ClassesSection() {
  const classes = [
    { name: "Lớp 1", grade: 1 },
    { name: "Lớp 2", grade: 2 },
    { name: "Lớp 3", grade: 3 },
    { name: "Lớp 4", grade: 4 },
    { name: "Lớp 5", grade: 5 },
    { name: "Lớp 6", grade: 6 },
    { name: "Lớp 7", grade: 7 },
    { name: "Lớp 8", grade: 8 },
    { name: "Lớp 9", grade: 9 },
    { name: "Lớp 10", grade: 10 },
    { name: "Lớp 11", grade: 11 },
    { name: "Lớp 12", grade: 12 },
  ];

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Chọn lớp của bạn</h2>
          <p className="text-muted-foreground">Lựa chọn lớp học phù hợp để bắt đầu hành trình học tập</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {classes.map((cls) => (
            <Link key={cls.grade} href={`/classes/${cls.grade}`}>
              <Card className="hover:border-primary hover:shadow-lg transition-all cursor-pointer">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <span className="text-3xl font-bold text-primary">{cls.grade}</span>
                  <span className="text-sm text-muted-foreground mt-1">{cls.name}</span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
