# Lộ Trình Phát Triển EduAI Việt Nam

## Giai đoạn 1: MVP (Minimum Viable Product) - Hoàn thành cơ bản
**Mục tiêu**: Ra mắt sản phẩm với các tính năng cốt lõi để thu hút người dùng đầu tiên
**Thời gian dự kiến**: 2 tháng

### 1.1 Xác thực người dùng
- [ ] Đăng ký / Đăng nhập bằng email, mật khẩu
- [ ] Xác thực bằng Google, Facebook
- [ ] Đổi mật khẩu, quên mật khẩu
- [ ] Quản lý hồ sơ cá nhân

### 1.2 Hệ thống học tập
- [ ] Hoàn thiện trang chi tiết môn học (classes/[grade]/[subject])
- [ ] Upload và phát video (tích hợp Cloudflare Stream / Vimeo)
- [ ] Upload và xem PDF
- [ ] Lưu tiến độ học tập
- [ ] Ghi chú bài học

### 1.3 Hệ thống bài tập & kiểm tra
- [ ] Trắc nghiệm tự động chấm điểm
- [ ] Giải thích đáp án chi tiết
- [ ] Bài tập tự luận (gửi bài, giáo viên chấm)
- [ ] Đề thi thử (đếm ngược thời gian)
- [ ] Lịch sử làm bài

### 1.4 AI Gia sư nâng cao
- [ ] Tích hợp OpenAI GPT-4o / Gemini API
- [ ] Giải bài tập có lời giải từng bước
- [ ] Hỏi đáp về bài học
- [ ] Tóm tắt bài học
- [ ] Tạo đề luyện tập tùy chỉnh
- [ ] Lưu lịch sử trò chuyện

### 1.5 Gamification
- [ ] Điểm kinh nghiệm (XP)
- [ ] Cấp độ (Level)
- [ ] Huy hiệu (Badges)
- [ ] Bảng xếp hạng (Leaderboard)
- [ ] Nhiệm vụ hàng ngày

### 1.6 Admin Dashboard
- [ ] Quản lý người dùng (học sinh, giáo viên, phụ huynh)
- [ ] Quản lý khóa học, chương, bài học
- [ ] Quản lý đề thi và bài tập
- [ ] Thống kê và báo cáo
- [ ] Quản lý thanh toán

## Giai đoạn 2: Tăng trưởng (Growth) - 6 tháng
**Mục tiêu**: Mở rộng tính năng, thu hút nhiều người dùng, cải thiện trải nghiệm

### 2.1 Phụ huynh & Giáo viên
- [ ] Dashboard phụ huynh (xem tiến độ con, điểm số)
- [ ] Dashboard giáo viên (tạo khóa học, quản lý lớp học, chấm bài)
- [ ] Giao viên tạo và chia sẻ bài tập
- [ ] Thông báo đến phụ huynh

### 2.2 Cộng đồng & Mạng xã hội
- [ ] Forum hỏi đáp
- [ ] Nhóm học tập
- [ ] Chia sẻ thành tựu lên mạng xã hội
- [ ] Học cùng bạn bè

### 2.3 Nội dung
- [ ] Hoàn thiện nội dung cho tất cả các môn (Lớp 1-12)
- [ ] Đề thi THPT Quốc gia các năm
- [ ] Đề thi học sinh giỏi
- [ ] Tài liệu ôn tập

### 2.4 Thanh toán
- [ ] Gói Premium tháng/năm
- [ ] Thanh toán VNPay, MoMo, ZaloPay
- [ ] Mua khóa học riêng lẻ
- [ ] Học thử miễn phí

### 2.5 Cải thiện trải nghiệm
- [ ] Ứng dụng di động (PWA)
- [ ] Tải xuống nội dung để xem offline
- [ ] Nhạc nền khi học
- [ ] Chế độ tối (Dark Mode)
- [ ] Đa ngôn ngữ (Tiếng Việt, Tiếng Anh)

## Giai đoạn 3: Mở rộng (Scale) - 12 tháng
**Mục tiêu**: Phát triển thành nền tảng EdTech hàng đầu Việt Nam, hỗ trợ hàng triệu người dùng

### 3.1 Nâng cao AI
- [ ] Đề xuất lộ trình học tập cá nhân hóa
- [ ] Phân tích điểm yếu và đề xuất cải thiện
- [ ] Tự động tạo bài tập dựa trên trình độ
- [ ] Giáo viên ảo riêng cho mỗi học sinh

### 3.2 Hệ thống lớn
- [ ] Di chuyển từ SQLite sang PostgreSQL
- [ ] Tối ưu hóa database cho truy vấn nhanh
- [ ] Cache (Redis)
- [ ] CDN cho nội dung tĩnh và video
- [ ] Microservices architecture

### 3.3 Hợp tác
- [ ] Hợp tác với các trường học
- [ ] Giáo viên đối tác tạo nội dung
- [ ] Chứng chỉ hoàn thành khóa học
- [ ] Chương trình liên kết

### 3.4 Marketing & Bán hàng
- [ ] Affiliate program
- [ ] Giảng dạy trực tiếp (Live classes)
- [ ] Webinar miễn phí
- [ ] Tổng đài hỗ trợ học viên 24/7

## Công nghệ sử dụng chi tiết

### Frontend
- **Next.js 16** - Framework React
- **TypeScript** - Ngôn ngữ chính
- **Tailwind CSS** - Styling
- **Shadcn UI** - Component library
- **Framer Motion** - Animation
- **Lucide React** - Icons
- **React Player** - Video player
- **React Query** - Data fetching

### Backend
- **Next.js API Routes** - API
- **Node.js** - Runtime
- **PostgreSQL** - Database (sau MVP)
- **Prisma** - ORM
- **Redis** - Caching

### AI & Tích hợp
- **OpenAI API** - AI Tutor
- **Cloudflare Stream** - Video hosting
- **AWS S3** - File storage
- **VNPay / MoMo** - Payment

### DevOps
- **Vercel** - Hosting
- **GitHub Actions** - CI/CD
- **Docker** - Containerization

## Kế hoạch phát triển theo tuần

### Tháng 1
- Tuần 1: Xác thực người dùng & Hồ sơ cá nhân
- Tuần 2: Hoàn thiện hệ thống khóa học, bài học
- Tuần 3: Hệ thống bài tập trắc nghiệm
- Tuần 4: AI Tutor tích hợp OpenAI/Gemini

### Tháng 2
- Tuần 1: Gamification & Dashboard học sinh
- Tuần 2: Admin Dashboard
- Tuần 3: Testing, fixing bugs
- Tuần 4: Deploy MVP & Marketing thử nghiệm
