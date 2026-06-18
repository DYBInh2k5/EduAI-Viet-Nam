"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Award, Trophy, TrendingUp, Clock, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const recentActivities = [
  { id: 1, type: "lesson", title: "Đã hoàn thành: Định nghĩa hàm số bậc hai", time: "2 giờ trước" },
  { id: 2, type: "quiz", title: "Điểm: 10/10 - Kiểm tra chương 1", time: "Hôm qua" },
  { id: 3, type: "badge", title: "Đã đạt được huy hiệu: Học sinh siêng năng", time: "Hôm qua" }
];

const coursesInProgress = [
  { id: 1, title: "Toán lớp 12 - Chương 1", progress: 75, color: "from-blue-500 to-blue-600" },
  { id: 2, title: "Ngữ văn lớp 10 - Văn học hiện đại", progress: 40, color: "from-purple-500 to-purple-600" },
  { id: 3, title: "Tiếng Anh lớp 8 - IELTS Starter", progress: 60, color: "from-green-500 to-green-600" }
];

const badges = [
  { id: 1, name: "Học sinh siêng năng", icon: "🔥", earned: true },
  { id: 2, name: "Điểm 10", icon: "⭐", earned: true },
  { id: 3, name: "Đầu banh", icon: "🏆", earned: false },
  { id: 4, name: "5 ngày liên tục", icon: "📅", earned: false }
];

export default function StudentDashboard() {
  return (
    <div className="py-12">
      <div className="container max-w-6xl">
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-2">Xin chào, Nguyễn Văn A! 👋</h1>
          <p className="text-muted-foreground">Theo dõi tiến độ học tập của bạn</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300 }}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Tổng XP</CardTitle>
                <TrendingUp className="w-4 h-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">1,250</div>
                <p className="text-xs text-muted-foreground">+50 hôm nay</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300 }}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Bài học hoàn thành</CardTitle>
                <BookOpen className="w-4 h-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">/ 100 khóa học</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300 }}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Thời gian học</CardTitle>
                <Clock className="w-4 h-4 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">12h 30m</div>
                <p className="text-xs text-muted-foreground">Tuần này</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300 }}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Huy hiệu</CardTitle>
                <Award className="w-4 h-4 text-yellow-600" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">2</div>
                <p className="text-xs text-muted-foreground">/ 10 huy hiệu</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Khóa học đang học</CardTitle>
                <CardDescription>Tiếp tục hành trình học tập của bạn</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {coursesInProgress.map((course) => (
                  <div key={course.id} className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${course.color} flex items-center justify-center text-white`}>
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium mb-1">{course.title}</h4>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${course.color} transition-all duration-1000`}
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{course.progress}% hoàn thành</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Hoạt động gần đây</CardTitle>
                <CardDescription>Các hoạt động bạn vừa thực hiện</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                      {activity.type === "lesson" && <BookOpen className="w-4 h-4 text-blue-600" />}
                      {activity.type === "quiz" && <CheckCircle className="w-4 h-4 text-green-600" />}
                      {activity.type === "badge" && <Trophy className="w-4 h-4 text-yellow-600" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">{activity.title}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Huy hiệu của bạn</CardTitle>
                <CardDescription>Thu thập nhiều huy hiệu hơn nhé!</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {badges.map((badge) => (
                    <div
                      key={badge.id}
                      className={`p-4 rounded-lg border text-center transition-all ${badge.earned ? "border-gray-200" : "border-gray-100 bg-gray-50 opacity-50"}`}
                    >
                      <div className="text-4xl mb-2">{badge.icon}</div>
                      <p className="text-sm font-medium">{badge.name}</p>
                      {badge.earned && (
                        <Badge className="mt-2 bg-green-500">Đã đạt được</Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
