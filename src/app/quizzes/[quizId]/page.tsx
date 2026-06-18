"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, XCircle } from "lucide-react";
import { 
  MATH_12_QUIZ, 
  MATH_10_QUIZ, 
  CHEMISTRY_10_QUIZ,
  LITERATURE_11_QUIZ,
  ENGLISH_8_QUIZ,
  PHYSICS_12_QUIZ
} from "@/lib/data";

// Quiz metadata mapping
const quizMetadata: Record<number, { title: string; subject: string; classId: number; questions: any[] }> = {
  1: { title: "Kiểm tra chương 1: Hàm số bậc hai", subject: "Toán", classId: 12, questions: MATH_12_QUIZ },
  2: { title: "Kiểm tra chương 1: Mệnh đề và tập hợp", subject: "Toán", classId: 10, questions: MATH_10_QUIZ },
  3: { title: "Kiểm tra cấu tạo nguyên tử", subject: "Hóa học", classId: 10, questions: CHEMISTRY_10_QUIZ },
  4: { title: "Kiểm tra văn học trung đại", subject: "Ngữ văn", classId: 11, questions: LITERATURE_11_QUIZ },
  5: { title: "Kiểm tra tiếng Anh lớp 8", subject: "Tiếng Anh", classId: 8, questions: ENGLISH_8_QUIZ },
  6: { title: "Kiểm tra điện tích và điện trường", subject: "Vật lý", classId: 12, questions: PHYSICS_12_QUIZ },
};

export default function QuizPage() {
  const params = useParams();
  const router = useRouter();
  const quizId = parseInt(params.quizId as string);
  
  // Get quiz data, fallback to quiz 1 if not found
  const quizData = quizMetadata[quizId] || quizMetadata[1];
  
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelectAnswer = (questionId: number, optionIndex: number) => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
  };

  const calculateScore = () => {
    let score = 0;
    quizData.questions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctOption) score++;
    });
    return score;
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <div className="py-12">
      <div className="container max-w-3xl">
        <Button variant="ghost" onClick={() => router.back()} className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" /> Quay lại
        </Button>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold">{quizData.title}</h1>
            <Badge className="bg-primary">{quizData.subject}</Badge>
            <Badge variant="secondary">Lớp {quizData.classId}</Badge>
          </div>
          <p className="text-muted-foreground">Câu hỏi trắc nghiệm, chấm điểm tự động</p>
        </div>

        <div className="space-y-6">
          {quizData.questions.map((q, index) => {
            const isAnswered = selectedAnswers[q.id] !== undefined;
            const isCorrect = isSubmitted && selectedAnswers[q.id] === q.correctOption;
            const isWrong = isSubmitted && selectedAnswers[q.id] !== undefined && selectedAnswers[q.id] !== q.correctOption;

            return (
              <Card key={q.id}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-semibold text-sm">
                      {index + 1}
                    </span>
                    <CardTitle className="text-lg">{q.text}</CardTitle>
                    {isSubmitted && (
                      isCorrect ? (
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      ) : (
                        <XCircle className="w-6 h-6 text-red-500" />
                      )
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 mb-4">
                    {q.options.map((option, optIdx) => {
                      const isSelected = selectedAnswers[q.id] === optIdx;
                      const isCorrectOption = isSubmitted && q.correctOption === optIdx;
                      const isWrongOption = isSubmitted && isSelected && q.correctOption !== optIdx;

                      return (
                        <button
                          key={optIdx}
                          onClick={() => handleSelectAnswer(q.id, optIdx)}
                          disabled={isSubmitted}
                          className={`flex items-center gap-3 p-3 rounded-lg border text-left transition-all ${
                            isSubmitted
                              ? isCorrectOption
                                ? "bg-green-50 border-green-200"
                                : isWrongOption
                                ? "bg-red-50 border-red-200"
                                : "border-gray-200"
                              : isSelected
                              ? "border-primary bg-primary/5"
                              : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                          } disabled:opacity-50 disabled:cursor-not-allowed`}
                        >
                          <span className={`flex items-center justify-center w-6 h-6 rounded-full border-2 font-semibold text-sm ${
                            isSubmitted
                              ? isCorrectOption
                                ? "bg-green-500 text-white border-green-500"
                                : isWrongOption
                                ? "bg-red-500 text-white border-red-500"
                                : "border-gray-300"
                              : isSelected
                              ? "bg-primary text-white border-primary"
                              : "border-gray-300"
                          }`}>
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span className="flex-1">{option}</span>
                          {isSubmitted && isCorrectOption && (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          )}
                          {isSubmitted && isWrongOption && (
                            <XCircle className="w-5 h-5 text-red-500" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                  {isSubmitted && q.explanation && (
                    <div className="mt-4 p-4 rounded-lg bg-blue-50 border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-2">Giải thích đáp án:</h4>
                      <p className="text-blue-700">{q.explanation}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {!isSubmitted ? (
          <div className="mt-8 flex justify-end">
            <Button
              onClick={handleSubmit}
              disabled={Object.keys(selectedAnswers).length !== quizData.questions.length}
              className="px-8"
            >
              Nộp bài
            </Button>
          </div>
        ) : (
          <Card className="mt-8 bg-gradient-to-br from-blue-50 to-purple-50">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-2">Kết quả bài kiểm tra</h2>
              <p className="text-6xl font-bold text-primary mb-2">
                {calculateScore()}/{quizData.questions.length}
              </p>
              <p className="text-muted-foreground">
                Điểm: {Math.round((calculateScore() / quizData.questions.length) * 100)}%
              </p>
              <div className="mt-6 flex gap-3 justify-center">
                <Button variant="outline" onClick={() => router.back()}>
                  Quay lại
                </Button>
                <Button onClick={() => window.location.reload()}>
                  Làm lại
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
