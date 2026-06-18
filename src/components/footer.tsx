import Link from "next/link";
import { GraduationCap } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-primary">EduAI Việt Nam</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Nền tảng học tập trực tuyến với AI gia sư thông minh, hỗ trợ học sinh từ lớp 1 đến lớp 12.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Sản phẩm</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-primary">Trang chủ</Link></li>
              <li><Link href="/classes" className="text-muted-foreground hover:text-primary">Lớp học</Link></li>
              <li><Link href="/courses" className="text-muted-foreground hover:text-primary">Khóa học</Link></li>
              <li><Link href="/ai-tutor" className="text-muted-foreground hover:text-primary">AI Gia sư</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Hỗ trợ</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-primary">Hướng dẫn sử dụng</Link></li>
              <li><Link href="/" className="text-muted-foreground hover:text-primary">Câu hỏi thường gặp</Link></li>
              <li><Link href="/" className="text-muted-foreground hover:text-primary">Liên hệ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Về chúng tôi</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-primary">Giới thiệu</Link></li>
              <li><Link href="/" className="text-muted-foreground hover:text-primary">Tuyển dụng</Link></li>
              <li><Link href="/" className="text-muted-foreground hover:text-primary">Điều khoản</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t pt-6 text-center text-sm text-muted-foreground">
          © 2026 EduAI Việt Nam. Tất cả quyền được bảo lưu.
        </div>
      </div>
    </footer>
  );
}
