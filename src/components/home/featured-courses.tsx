import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

export function FeaturedCourses() {
  const courses = [
    {
      id: 1,
      title: "Toán lớp 12 - Chương 1: Hàm số",
      subject: "Toán",
      teacher: "Thầy Nguyễn Văn A",
      rating: 4.9,
      students: 2500,
      color: "from-blue-400 to-blue-600",
    },
    {
      id: 2,
      title: "Văn lớp 10 - Văn học hiện đại",
      subject: "Ngữ văn",
      teacher: "Cô Trần Thị B",
      rating: 4.8,
      students: 1800,
      color: "from-purple-400 to-purple-600",
    },
    {
      id: 3,
      title: "Tiếng Anh lớp 8 - IELTS Starter",
      subject: "Tiếng Anh",
      teacher: "Cô Lê Thị C",
      rating: 4.95,
      students: 3200,
      color: "from-green-400 to-green-600",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Khóa học nổi bật</h2>
            <p className="text-muted-foreground">Những khóa học được yêu thích nhất</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <div className={`w-full h-48 bg-gradient-to-br ${course.color} flex items-center justify-center`}>
                  <svg className="w-16 h-16 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <Badge className="absolute top-3 left-3 bg-primary">{course.subject}</Badge>
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2">{course.title}</CardTitle>
                <CardDescription>GV: {course.teacher}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{course.rating}</span>
                  </div>
                  <div>{course.students.toLocaleString()} học sinh</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
