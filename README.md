# EduAI Việt Nam

Nền tảng học tập trực tuyến hiện đại dành cho học sinh Việt Nam từ lớp 1 đến lớp 12, tích hợp AI Gia sư hỗ trợ học tập 24/7.

## 🚀 Tính năng chính

- 📚 **Học tập toàn diện**: Từ lớp 1 đến lớp 12 với nhiều môn học (Toán, Văn, Anh, Vật lý, Hóa học)
- 🎥 **Video bài giảng**: Video thực tế từ YouTube (VietJack và các nguồn giáo dục uy tín)
- 📝 **Nội dung chi tiết**: Giải thích lý thuyết, công thức, ví dụ minh họa
- ✅ **Bài kiểm tra**: Trắc nghiệm tự động chấm điểm với giải thích đáp án
- 🤖 **AI Gia sư**: Hỗ trợ học tập 24/7, trả lời câu hỏi, giải đáp thắc mắc
- 📊 **Dashboard**: Thống kê tiến độ học tập cá nhân
- 📱 **Responsive**: Hỗ trợ mọi thiết bị, màn hình

## 🛠️ Công nghệ sử dụng

- **Next.js 16** - Framework React hiện đại
- **TypeScript** - Kiểm tra kiểu tĩnh
- **Tailwind CSS 4** - Utility-first CSS
- **React 19** - Thư viện UI
- **Framer Motion** - Animation
- **Lucide React** - Icons
- **better-sqlite3** - CSDL (dự phòng)

## 🚀 Bắt đầu

### Cài đặt

```bash
npm install
```

### Chạy development server

```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

### Build production

```bash
npm run build
npm start
```

## 📂 Cấu trúc dự án

```
src/
├── app/
│   ├── page.tsx              # Trang chủ
│   ├── layout.tsx            # Layout chung
│   ├── classes/              # Trang chọn lớp, môn học
│   ├── courses/              # Trang khóa học, bài học
│   ├── quizzes/              # Trang bài kiểm tra
│   ├── dashboard/            # Trang dashboard
│   ├── ai-tutor/             # Trang AI Gia sư
│   └── api/                  # API routes
├── components/
│   ├── ui/                   # Component UI cơ bản
│   ├── home/                 # Component trang chủ
│   ├── navbar.tsx            # Thanh điều hướng
│   └── footer.tsx            # Footer
└── lib/
    ├── data.ts               # Dữ liệu khóa học
    ├── db.ts                 # Kết nối CSDL
    └── utils.ts              # Helper functions
```

## 📚 Dữ liệu học tập

Dự án bao gồm:
- Toán lớp 10, 11, 12
- Ngữ văn lớp 10, 11
- Tiếng Anh lớp 8, 9
- Vật lý lớp 12
- Hóa học lớp 10

Mỗi môn học có nhiều chương, bài học với video và nội dung chi tiết.

## 🌟 Đóng góp

Mọi đóng góp đều được chào đón! Vui lòng tạo issue hoặc pull request.

## 📝 Giấy phép

MIT License
