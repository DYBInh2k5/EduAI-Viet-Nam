"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, BookOpen, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ALL_COURSES } from "@/lib/data";

export default function CoursesPage() {
  const [search, setSearch] = useState("");
  
  const courses = ALL_COURSES;

  const filtered = courses.filter(course => 
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="py-16">
      <div className="container">
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
            <BookOpen className="h-10 w-10 text-primary" />
            Tất cả khóa học
          </h1>
          <div className="flex gap-4 mt-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Tìm kiếm khóa học..." 
                className="pl-10"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((course) => (
            <Link href={`/courses/${course.id}`} key={course.id}>
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className="relative">
                <div className={`w-full h-48 bg-gradient-to-br ${course.color} flex items-center justify-center`}>
                  <svg className="w-16 h-16 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <Badge className="absolute top-4 left-4 bg-primary">Lớp {course.classId}</Badge>
              </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>4.9</span>
                  </div>
                  <div>1200 học sinh</div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
