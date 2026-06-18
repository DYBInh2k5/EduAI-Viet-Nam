"use client";

import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, Circle, PlayCircle, FileText } from "lucide-react";
import Link from "next/link";
import { ALL_COURSES } from "@/lib/data";

export default function CourseDetailPage() {
  const params = useParams();
  const router = useRouter();
  const courseId = parseInt(params.courseId as string);
  const course = ALL_COURSES.find(c => c.id === courseId) || ALL_COURSES[0];
  const chapters = course.chapters;

  return (
    <div className="py-12">
      <div className="container">
        <Button variant="ghost" onClick={() => router.back()} className="mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" /> Quay lại
        </Button>

        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
          <p className="text-muted-foreground text-lg">{course.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardContent className="p-0">
                <div className="bg-gray-100 aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <PlayCircle className="h-20 w-20 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Xem bài đầu tiên</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mô tả khóa học</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Khóa học Toán lớp 12 này giúp bạn nắm vững kiến thức về hàm số bậc hai, 
                  các dạng toán thông dụng và cách giải quyết các bài tập trong đề thi THPT Quốc gia.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Nội dung khóa học</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {chapters.map((chapter, idx) => (
                  <div key={chapter.id} className={idx > 0 ? "border-t" : ""}>
                    <button className="w-full text-left p-4 hover:bg-muted font-semibold flex justify-between items-center">
                      <span>{chapter.title}</span>
                    </button>
                    <div className="space-y-1 pb-4">
                      {chapter.lessons.map((lesson) => {
                        const link = lesson.type === "quiz" 
                          ? `/quizzes/${lesson.id}` 
                          : `/courses/${params.courseId}/lessons/${lesson.id}`;
                          
                        return (
                          <Link href={link} key={lesson.id} className="flex items-center gap-3 px-6 py-2 hover:bg-muted rounded-sm mx-2 transition-colors">
                            {lesson.completed ? (
                              <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                            ) : (
                              <Circle className="h-5 w-5 text-muted-foreground shrink-0" />
                            )}
                            {lesson.type === "video" && <PlayCircle className="h-4 w-4 text-primary shrink-0" />}
                            {lesson.type === "pdf" && <FileText className="h-4 w-4 text-primary shrink-0" />}
                            {lesson.type === "quiz" && <div className="h-4 w-4 text-primary shrink-0">📝</div>}
                            <span className="text-sm flex-1">{lesson.title}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
