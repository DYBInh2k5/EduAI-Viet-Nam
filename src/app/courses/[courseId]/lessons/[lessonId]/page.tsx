"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, PlayCircle, Download, CheckCircle } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ALL_COURSES } from "@/lib/data";

export default function LessonDetailPage() {
  const params = useParams();
  const router = useRouter();
  const courseId = parseInt(params.courseId as string);
  const lessonId = parseInt(params.lessonId as string);
  const course = ALL_COURSES.find(c => c.id === courseId) || ALL_COURSES[0];
  const lesson = course.chapters.flatMap(c => c.lessons).find(l => l.id === lessonId) || course.chapters[0].lessons[0];
  const [isCompleted, setIsCompleted] = useState(lesson.completed || false);

  return (
    <div className="py-8">
      <div className="container">
        <Button variant="ghost" onClick={() => router.back()} className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" /> Quay lại
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-6">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                {lesson.videoUrl ? (
                  <div className="aspect-video">
                    <iframe
                      className="w-full h-full"
                      src={lesson.videoUrl}
                      title={lesson.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <div className="aspect-video bg-gray-100 flex items-center justify-center">
                    <div className="text-center">
                      <PlayCircle className="h-24 w-24 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500">Video bài giảng sẽ được cập nhật sớm</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{lesson.title}</CardTitle>
                <CardDescription>{course.title}</CardDescription>
              </CardHeader>
              <CardContent>
                {lesson.content ? (
                  <div className="mb-6 whitespace-pre-line text-lg leading-relaxed">
                    {lesson.content}
                  </div>
                ) : (
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Nội dung bài học sẽ được cập nhật chi tiết sớm nhất.
                  </p>
                )}
                
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Video tham khảo thêm:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a 
                      href="https://www.youtube.com/embed/DFKtjW22IyY" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg border hover:border-primary hover:bg-primary/5 transition-all"
                    >
                      <div className="w-12 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-sm">Hàm số bậc hai - THPT Đỗ Đăng Tuyển</p>
                        <p className="text-xs text-muted-foreground">Bài giảng trực tuyến</p>
                      </div>
                    </a>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Tài liệu tham khảo trực tuyến:</h3>
                  <div className="grid gap-3">
                    <a 
                      href="https://vi.wikipedia.org/wiki/H%C3%A0m_s%E1%BB%91_b%E1%BA%ADc_hai" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg border hover:border-primary hover:bg-primary/5 transition-all"
                    >
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Wikipedia: Hàm số bậc hai</p>
                        <p className="text-sm text-muted-foreground">Tài liệu tiếng Việt đầy đủ, có ví dụ minh họa</p>
                      </div>
                    </a>
                    <a 
                      href="https://xaydungso.vn/blog/huong-dan-cach-tinh-ham-so-bac-2-chi-tiet-va-de-hieu-vi-cb.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg border hover:border-primary hover:bg-primary/5 transition-all"
                    >
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Xây Dựng Số: Cách tính hàm số bậc 2</p>
                        <p className="text-sm text-muted-foreground">Hướng dẫn chi tiết, dễ hiểu với nhiều ví dụ</p>
                      </div>
                    </a>
                    <a 
                      href="https://bangioi.vn/blog/lop-12/chien-luoc-giai-quyet-bai-toan-ve-ham-so-da-thuc-lop-12-huong-dan-chi-tiet-va-vi-du-minh-hoa" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg border hover:border-primary hover:bg-primary/5 transition-all"
                    >
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Bạn Giỏi: Chiến lược giải bài toán hàm số đa thức</p>
                        <p className="text-sm text-muted-foreground">Luyện tập cho đề thi THPT Quốc gia</p>
                      </div>
                    </a>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Button variant="ghost" className="gap-2">
                    <Download className="h-4 w-4" /> Tải tài liệu PDF
                  </Button>
                  <Button
                    className={isCompleted ? "bg-green-600 hover:bg-green-700" : ""}
                    onClick={() => setIsCompleted(!isCompleted)}
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    {isCompleted ? "Đã hoàn thành" : "Đánh dấu hoàn thành"}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="notes">
              <TabsList>
                <TabsTrigger value="notes">Ghi chú</TabsTrigger>
                <TabsTrigger value="qa">Hỏi đáp</TabsTrigger>
                <TabsTrigger value="comments">Bình luận</TabsTrigger>
              </TabsList>
              <TabsContent value="notes">
                <Card>
                  <CardHeader>
                    <CardTitle>Ghi chú của bạn</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Textarea placeholder="Nhập ghi chú của bạn ở đây..." className="min-h-[200px]" />
                  </CardContent>
                  <CardFooter className="justify-end">
                    <Button>Lưu ghi chú</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="qa">
                <Card>
                  <CardHeader>
                    <CardTitle>Hỏi đáp với giáo viên</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-4">
                      <Avatar>
                        <AvatarImage src="https://i.pravatar.cc/40" />
                        <AvatarFallback>GV</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-medium">Giáo viên Nguyễn Văn A</p>
                        <p className="text-muted-foreground">Nếu bạn có bất kỳ câu hỏi nào, hãy hỏi ở đây!</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Avatar>
                        <AvatarFallback>HS</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-medium">Học sinh</p>
                        <p className="text-muted-foreground">Thưa cô, làm thế nào để xác định parabol?</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="comments">
                <Card>
                  <CardHeader>
                    <CardTitle>Bình luận</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-4">
                      <Avatar>
                        <AvatarFallback>NT</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-medium">Nguyễn Thị</p>
                        <p className="text-muted-foreground">Bài giảng rất rõ ràng, dễ hiểu!</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Danh sách bài học</CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-1">
                {[
                  { title: "Bài 1: Định nghĩa và đồ thị", active: true },
                  { title: "Bài 2: Giá trị lớn nhất nhỏ nhất", active: false },
                  { title: "Bài 3: Bất phương trình", active: false },
                ].map((lesson, idx) => (
                  <div
                    key={idx}
                    className={`p-4 ${lesson.active ? "bg-primary/10 border-l-4 border-primary" : "hover:bg-muted"} cursor-pointer`}
                  >
                    <span className={`text-sm ${lesson.active ? "font-semibold" : ""}`}>{lesson.title}</span>
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
