import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, Search, User } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <GraduationCap className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-primary">EduAI Việt Nam</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            Trang chủ
          </Link>
          <Link href="/classes" className="text-sm font-medium hover:text-primary">
            Lớp học
          </Link>
          <Link href="/courses" className="text-sm font-medium hover:text-primary">
            Khóa học
          </Link>
          <Link href="/ai-tutor" className="text-sm font-medium hover:text-primary">
            AI Gia sư
          </Link>
          <Link href="/dashboard" className="text-sm font-medium hover:text-primary">
            Dashboard
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Link href="/dashboard">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          <Button variant="ghost">Đăng nhập</Button>
          <Button>Đăng ký</Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
