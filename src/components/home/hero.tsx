"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, BookOpen, Trophy } from "lucide-react";

export function Hero() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
                <Bot className="h-4 w-4" />
                Học tập thông minh với AI
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Học tập trực tuyến <br />
                <span className="text-primary">với AI Gia sư 24/7</span>
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              Nền tảng giáo dục toàn diện cho học sinh từ lớp 1 đến lớp 12 với
              bài giảng video, bài tập, đề thi và AI gia sư hỗ trợ 24/7.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="text-base">
                Bắt đầu học miễn phí <ArrowRight className="h-5 w-5 ml-1" />
              </Button>
              <Button size="lg" variant="outline" className="text-base">
                <BookOpen className="h-5 w-5 mr-2" /> Xem khóa học
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-6 pt-4"
            >
              <div className="flex items-center gap-2">
                <Trophy className="h-6 w-6 text-yellow-500" />
                <span className="font-semibold">100.000+</span>
                <span className="text-muted-foreground text-sm">Học sinh</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-blue-500" />
                <span className="font-semibold">500+</span>
                <span className="text-muted-foreground text-sm">Khóa học</span>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-50"></div>
              <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-2xl border p-8">
                <div className="aspect-video w-full bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg className="w-20 h-20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-lg font-medium">Video bài giảng</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
