// Dữ liệu toàn bộ hệ thống
export interface Course {
  id: number;
  subject: string;
  classId: number;
  title: string;
  description: string;
  color: string;
  chapters: Chapter[];
}

export interface Chapter {
  id: number;
  title: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: number;
  title: string;
  type: "video" | "pdf" | "quiz";
  completed?: boolean;
  content?: string;
  videoUrl?: string;
}

export interface QuizQuestion {
  id: number;
  text: string;
  options: string[];
  correctOption: number;
  explanation?: string;
}

// Dữ liệu khóa học Toán lớp 10
export const MATH_10_COURSE: Course = {
  id: 5,
  subject: "Toán",
  classId: 10,
  title: "Toán lớp 10 - Toàn bộ chương trình",
  description: "Nâng cao kiến thức toán lớp 10 với các bài giảng chi tiết từ VietJack",
  color: "from-blue-400 to-indigo-600",
  chapters: [
    {
      id: 1,
      title: "Chương 1: Mệnh đề và tập hợp",
      lessons: [
        {
          id: 1,
          title: "Bài 1: Mệnh đề và mệnh đề chứa biến",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/xNPMKgXSnL8?si=eduai",
          content: `
**Mệnh đề** là một câu khẳng định đúng hoặc sai. Một câu khẳng định đúng gọi là mệnh đề đúng, một câu khẳng định sai gọi là mệnh đề sai. Một mệnh đề không thể vừa đúng vừa sai.

**Phủ định của một mệnh đề**: Ký hiệu mệnh đề phủ định của mệnh đề P là ¬P. Nếu P đúng thì ¬P sai, nếu P sai thì ¬P đúng.

**Mệnh đề kéo theo**: Mệnh đề "Nếu P thì Q" được gọi là mệnh đề kéo theo, ký hiệu P ⇒ Q. Mệnh đề P ⇒ Q chỉ sai khi P đúng và Q sai.
          `
        },
        {
          id: 2,
          title: "Bài 2: Tập hợp và các phép toán trên tập hợp",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/p3g958bqhLA?si=eduai",
          content: `
**Tập hợp** là một tập hợp các đối tượng được gọi là phần tử của tập hợp. Ký hiệu: A = {1, 2, 3}

**Các phép toán trên tập hợp**:
- **Giao**: A ∩ B là tập các phần tử thuộc cả A và B
- **Hợp**: A ∪ B là tập các phần tử thuộc A hoặc B
- **Hiệu**: A \\ B là tập các phần tử thuộc A nhưng không thuộc B
          `
        },
        {
          id: 3,
          title: "Bài 3: Các tập hợp số",
          type: "pdf",
          content: `
**Tập hợp số tự nhiên**: N = {0, 1, 2, 3, ...}
**Tập hợp số nguyên**: Z = {..., -2, -1, 0, 1, 2, ...}
**Tập hợp số hữu tỉ**: Q = {p/q | p, q ∈ Z, q ≠ 0}
**Tập hợp số thực**: R
          `
        },
        {
          id: 4,
          title: "Kiểm tra chương 1",
          type: "quiz"
        }
      ]
    },
    {
      id: 2,
      title: "Chương 2: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn",
      lessons: [
        {
          id: 5,
          title: "Bài 1: Bất đẳng thức",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/p3g958bqhLA?si=eduai",
          content: `
**Bất đẳng thức** là một mệnh đề so sánh hai biểu thức bằng các dấu <, >, ≤, ≥.

**Các tính chất cơ bản của bất đẳng thức**:
1. Nếu a < b thì a + c < b + c
2. Nếu a < b và c > 0 thì ac < bc
3. Nếu a < b và c < 0 thì ac > bc
          `
        },
        {
          id: 6,
          title: "Bài 2: Bất phương trình bậc nhất hai ẩn",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/PvKrwTzWfEI?si=eduai",
          content: `
Bất phương trình bậc nhất hai ẩn có dạng ax + by + c < 0 (hoặc ≤, >, ≥)
          `
        },
        {
          id: 7,
          title: "Bài 3: Hệ bất phương trình bậc nhất hai ẩn",
          type: "pdf",
          content: `
Hệ bất phương trình bậc nhất hai ẩn là tập hợp nhiều bất phương trình bậc nhất hai ẩn.
          `
        }
      ]
    },
    {
      id: 3,
      title: "Chương 3: Hệ thức lượng trong tam giác",
      lessons: [
        {
          id: 8,
          title: "Bài 1: Giá trị lượng giác của một góc từ 0° đến 180°",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/xNPMKgXSnL8?si=eduai",
          content: `
**Giá trị lượng giác**:
- sinα = y/r
- cosα = x/r
- tanα = y/x (x ≠ 0)
- cotα = x/y (y ≠ 0)

**Giá trị lượng giác của các góc đặc biệt**:
- sin0° = 0, cos0° = 1
- sin90° = 1, cos90° = 0
- sin180° = 0, cos180° = -1
          `
        },
        {
          id: 9,
          title: "Bài 2: Hệ thức lượng trong tam giác",
          type: "video",
          content: `
**Định lý sin**: a/sinA = b/sinB = c/sinC = 2R
**Định lý cosin**: a² = b² + c² - 2bc cosA
          `
        },
        {
          id: 10,
          title: "Bài 3: Luyện tập hệ thức lượng",
          type: "pdf"
        }
      ]
    },
    {
      id: 4,
      title: "Chương 4: Vectơ",
      lessons: [
        {
          id: 11,
          title: "Bài 1: Khái niệm vectơ",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/xNPMKgXSnL8?si=eduai",
          content: `
**Vectơ** là một đoạn thẳng có hướng. Vectơ có ba yếu tố: gốc, hướng, độ dài.

**Hai vectơ bằng nhau**: Cùng phương, cùng hướng, cùng độ dài.
**Vectơ đối nhau**: Cùng phương, ngược hướng, cùng độ dài.
          `
        },
        {
          id: 12,
          title: "Bài 2: Tổng và hiệu của hai vectơ",
          type: "video",
          content: `
**Tổng hai vectơ**: Theo quy tắc hình thang hoặc quy tắc tam giác.
**Hiệu hai vectơ**: a - b = a + (-b)
          `
        },
        {
          id: 13,
          title: "Bài 3: Tích của một vectơ với một số",
          type: "pdf"
        },
        {
          id: 14,
          title: "Bài 4: Vectơ trong mặt phẳng tọa độ",
          type: "video"
        },
        {
          id: 15,
          title: "Bài 5: Tích vô hướng của hai vectơ",
          type: "pdf"
        }
      ]
    }
  ]
};

// Dữ liệu khóa học Toán lớp 11
export const MATH_11_COURSE: Course = {
  id: 2,
  subject: "Toán",
  classId: 11,
  title: "Toán lớp 11 - Hàm số lượng giác và ứng dụng",
  description: "Học về hàm số sin, cos, tan và các công thức lượng giác cơ bản",
  color: "from-indigo-400 to-indigo-600",
  chapters: [
    {
      id: 1,
      title: "Chương 1: Hàm số lượng giác",
      lessons: [
        { 
          id: 1, 
          title: "Bài 1: Góc và số đo góc", 
          type: "video",
          videoUrl: "https://www.youtube.com/embed/DFKtjW22IyY?si=eduai",
          content: `
**Góc**: Được tạo bởi hai tia chung gốc.
**Số đo góc**: Độ (°) hoặc radian (rad). π rad = 180°
          `
        },
        { 
          id: 2, 
          title: "Bài 2: Giá trị lượng giác của góc", 
          type: "video",
          content: `
Giá trị lượng giác được xác định trên đường tròn đơn vị.
          `
        },
        { 
          id: 3, 
          title: "Bài 3: Công thức cộng", 
          type: "pdf",
          content: `
sin(A+B) = sinA cosB + cosA sinB
cos(A+B) = cosA cosB - sinA sinB
tan(A+B) = (tanA + tanB)/(1 - tanA tanB)
          `
        }
      ]
    }
  ]
};

// Dữ liệu khóa học Toán lớp 12
export const MATH_12_COURSE: Course = {
  id: 1,
  subject: "Toán",
  classId: 12,
  title: "Toán lớp 12 - Chương 1: Hàm số bậc hai",
  description: "Nâng cao kiến thức về hàm số bậc hai, các dạng toán và giải đề",
  color: "from-blue-400 to-blue-600",
  chapters: [
    {
      id: 1,
      title: "Chương 1: Hàm số bậc hai",
      lessons: [
        {
          id: 1,
          title: "Bài 1: Định nghĩa và đồ thị hàm số bậc hai",
          type: "video",
          completed: true,
          videoUrl: "https://www.youtube.com/embed/DFKtjW22IyY?si=eduai",
          content: `
Hàm số bậc hai có dạng tổng quát: y = ax² + bx + c (với a ≠ 0)
- Nếu a > 0: Parabol quay lên
- Nếu a < 0: Parabol quay xuống
- Tọa độ đỉnh parabol: (-b/(2a), f(-b/(2a)))
- Trục đối xứng: x = -b/(2a)
          `
        },
        {
          id: 2,
          title: "Bài 2: Tập xác định, giá trị lớn nhất, giá trị nhỏ nhất",
          type: "video"
        },
        {
          id: 3,
          title: "Bài 3: Bất phương trình bậc hai",
          type: "pdf"
        },
        {
          id: 4,
          title: "Kiểm tra chương 1",
          type: "quiz"
        }
      ]
    },
    {
      id: 2,
      title: "Chương 2: Hàm số lượng giác",
      lessons: [
        {
          id: 5,
          title: "Bài 1: Hàm số sin và cos",
          type: "video"
        },
        {
          id: 6,
          title: "Bài 2: Công thức cộng",
          type: "video"
        },
        {
          id: 7,
          title: "Bài 3: Bài tập vận dụng",
          type: "pdf"
        }
      ]
    }
  ]
};

// Dữ liệu khóa học Ngữ văn lớp 11
export const LITERATURE_11_COURSE: Course = {
  id: 6,
  subject: "Ngữ văn",
  classId: 11,
  title: "Ngữ văn lớp 11 - Văn học Việt Nam hiện đại",
  description: "Tìm hiểu các tác phẩm văn học hiện đại Việt Nam tiêu biểu",
  color: "from-pink-400 to-purple-600",
  chapters: [
    {
      id: 1,
      title: "Chương 1: Văn học trung đại Việt Nam",
      lessons: [
        {
          id: 1,
          title: "Bài 1: Ôn tập văn học trung đại Việt Nam",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/NnkAfnzDlDI?si=eduai",
          content: `
**Văn học trung đại Việt Nam**: Phát triển từ thế kỷ X đến thế kỷ XIX.
- **Nội dung yêu nước**: Gắn với lý tưởng trung quân ái quốc
- **Tự hào về truyền thống dân tộc**
- **Yêu con người, yêu ngôn ngữ dân tộc**
- **Căm thù giặc, quyết tâm đánh giặc cứu nước**
          `
        },
        {
          id: 2,
          title: "Bài 2: Chí Phèo - Nam Cao",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/MU-Tz2FcOSQ?si=eduai",
          content: `
**Tác giả Nam Cao** (1917-1951): Tên khai sinh Trần Hữu Tri, quê Hà Nam. Ông là nhà văn lớn của văn học Việt Nam hiện đại.

**Tác phẩm Chí Phèo** (1941): Truyện ngắn về số phận bi thương của người nông dân bị bóc lột trong xã hội cũ. Chí Phèo là người bị xã hội làm cho tha hóa, nhưng vẫn còn mầm mống nhân tính.
          `
        },
        {
          id: 3,
          title: "Bài 3: Câu chuyện và điểm nhìn trong truyện kể",
          type: "pdf",
          content: `
**Điểm nhìn**: Góc độ người kể chuyện.
- Điểm nhìn thứ nhất (tôi)
- Điểm nhìn thứ ba (người ta, anh ấy, cô ấy)
          `
        }
      ]
    },
    {
      id: 2,
      title: "Chương 2: Cấu tứ và hình ảnh trong thơ trữ tình",
      lessons: [
        {
          id: 4,
          title: "Bài 1: Nhớ đồng - Huy Cận",
          type: "video",
          content: `
Thơ trữ tình thể hiện tình cảm của nhà thơ trước thiên nhiên và cuộc sống.
          `
        },
        {
          id: 5,
          title: "Bài 2: Tràng giàng - Nguyễn Khuyến",
          type: "pdf"
        }
      ]
    }
  ]
};

// Dữ liệu khóa học Ngữ văn lớp 10
export const LITERATURE_10_COURSE: Course = {
  id: 3,
  subject: "Ngữ văn",
  classId: 10,
  title: "Ngữ văn lớp 10 - Văn học hiện đại Việt Nam",
  description: "Tìm hiểu các tác phẩm văn học hiện đại tiêu biểu",
  color: "from-purple-400 to-purple-600",
  chapters: [
    {
      id: 1,
      title: "Chương 1: Văn học hiện đại Việt Nam",
      lessons: [
        { id: 1, title: "Bài 1: Xu hướng văn học", type: "video" },
        { id: 2, title: "Bài 2: Tác giả tiêu biểu", type: "pdf" }
      ]
    }
  ]
};

// Dữ liệu khóa học Tiếng Anh lớp 8
export const ENGLISH_8_COURSE: Course = {
  id: 7,
  subject: "Tiếng Anh",
  classId: 8,
  title: "Tiếng Anh lớp 8 - Nâng cao kỹ năng",
  description: "Nâng cao kỹ năng nghe, nói, đọc, viết tiếng Anh",
  color: "from-green-400 to-teal-600",
  chapters: [
    {
      id: 1,
      title: "Chương 1: Khoa học và công nghệ",
      lessons: [
        {
          id: 1,
          title: "Lesson 1: Science and Technology",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/5qap5aO4i9A?si=eduai",
          content: `
**Vocabulary**:
- Science (n): khoa học
- Technology (n): công nghệ
- Invention (n): phát minh
- Discover (v): khám phá
- Innovation (n): đổi mới

**Grammar**: Future tenses - will, be going to, present continuous
          `
        },
        {
          id: 2,
          title: "Lesson 2: Inventions",
          type: "video",
          content: `
**Reading**: The history of important inventions
**Speaking**: Talk about your favorite invention
          `
        },
        {
          id: 3,
          title: "Lesson 3: Life on other planets",
          type: "pdf"
        }
      ]
    },
    {
      id: 2,
      title: "Chương 2: Giao tiếp",
      lessons: [
        {
          id: 4,
          title: "Lesson 4: Communication",
          type: "video",
          content: `
**Communication forms**:
- Face-to-face
- Phone call
- Email
- Social media
          `
        },
        {
          id: 5,
          title: "Lesson 5: Future continuous",
          type: "pdf"
        }
      ]
    },
    {
      id: 3,
      title: "Chương 3: Ngữ pháp cơ bản",
      lessons: [
        {
          id: 6,
          title: "Lesson 6: Reported speech",
          type: "video",
          content: `
**Reported speech**:
Direct: "I love English", she said.
Reported: She said she loved English.
          `
        }
      ]
    }
  ]
};

// Dữ liệu khóa học Tiếng Anh lớp 9
export const ENGLISH_9_COURSE: Course = {
  id: 4,
  subject: "Tiếng Anh",
  classId: 9,
  title: "Tiếng Anh lớp 9 - Luyện thi vào lớp 10",
  description: "Đề xuất và hướng dẫn làm các đề thi vào lớp 10 môn Tiếng Anh",
  color: "from-green-400 to-green-600",
  chapters: [
    {
      id: 1,
      title: "Chương 1: Ngữ pháp cơ bản",
      lessons: [
        { id: 1, title: "Bài 1: Thì hiện tại đơn", type: "video" },
        { id: 2, title: "Bài 2: Thì quá khứ đơn", type: "video" }
      ]
    }
  ]
};

// Dữ liệu khóa học Vật lý lớp 12
export const PHYSICS_12_COURSE: Course = {
  id: 8,
  subject: "Vật lý",
  classId: 12,
  title: "Vật lý lớp 12 - Điện học và sóng điện từ",
  description: "Học về điện trường, điện tích, mạch dao động và sóng điện từ",
  color: "from-yellow-400 to-orange-600",
  chapters: [
    {
      id: 1,
      title: "Chương 1: Điện tích và điện trường",
      lessons: [
        {
          id: 1,
          title: "Bài 1: Điện tích và điện trường",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/MvQZh3FaNbw?si=eduai",
          content: `
**Điện tích**: Có hai loại điện tích: dương và âm.
- Điện tích được đo bằng Coulomb (C)
- Điện tích nguyên tố: e = 1.6×10⁻¹⁹ C

**Định luật Coulomb**:
F = k × |q₁ × q₂| / r²
với k = 9×10⁹ N·m²/C²
          `
        },
        {
          id: 2,
          title: "Bài 2: Điện trường và cường độ điện trường",
          type: "video",
          content: `
**Điện trường**: Là môi trường vật chất đặc biệt bao quanh các điện tích.
**Cường độ điện trường**: E = F/q₀ (đơn vị: V/m)
          `
        },
        {
          id: 3,
          title: "Bài 3: Điện thế và hiệu điện thế",
          type: "pdf"
        }
      ]
    },
    {
      id: 2,
      title: "Chương 2: Dao động và sóng điện từ",
      lessons: [
        {
          id: 4,
          title: "Bài 4: Mạch dao động LC",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/MvQZh3FaNbw?si=eduai",
          content: `
**Mạch dao động LC**: Gồm cuộn cảm L và tụ điện C mắc nối tiếp.
**Chu kỳ dao động**: T = 2π√(LC)
**Tần số dao động**: f = 1/(2π√(LC))
          `
        },
        {
          id: 5,
          title: "Bài 5: Sóng điện từ",
          type: "pdf",
          content: `
**Sóng điện từ**: Là sóng điện từ trường lan truyền trong không gian.
- Tốc độ sóng điện từ trong chân không: c = 3×10⁸ m/s
- Công thức: c = λf
          `
        }
      ]
    }
  ]
};

// Dữ liệu khóa học Hóa học lớp 10
export const CHEMISTRY_10_COURSE: Course = {
  id: 9,
  subject: "Hóa học",
  classId: 10,
  title: "Hóa học lớp 10 - Cấu tạo nguyên tử và bảng tuần hoàn",
  description: "Học về cấu tạo nguyên tử, bảng tuần hoàn và liên kết hóa học",
  color: "from-cyan-400 to-blue-600",
  chapters: [
    {
      id: 1,
      title: "Chương 1: Cấu tạo nguyên tử",
      lessons: [
        {
          id: 1,
          title: "Bài 1: Thành phần nguyên tử",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/RGXJ5wqsqOo?si=eduai",
          content: `
**Thành phần nguyên tử**:
- **Hạt nhân**: Gồm proton (điện tích +) và nơtron (không điện tích)
- **Vỏ electron**: Gồm các electron (điện tích -) chuyển động xung quanh hạt nhân

**Số hiệu nguyên tử (Z)**: Số proton trong hạt nhân
**Số khối (A)**: Tổng số proton và nơtron
          `
        },
        {
          id: 2,
          title: "Bài 2: Nguyên tố hóa học và đồng vị",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/uUdf3QVrLlU?si=eduai",
          content: `
**Nguyên tố hóa học**: Là tập hợp các nguyên tử có cùng số proton.
**Đồng vị**: Là các nguyên tử của cùng một nguyên tố nhưng có số nơtron khác nhau.
          `
        },
        {
          id: 3,
          title: "Bài 3: Cấu hình electron",
          type: "pdf"
        }
      ]
    },
    {
      id: 2,
      title: "Chương 2: Bảng tuần hoàn các nguyên tố hóa học",
      lessons: [
        {
          id: 4,
          title: "Bài 4: Cấu tạo bảng tuần hoàn",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/3KAqiyd8Skc?si=eduai",
          content: `
**Bảng tuần hoàn**:
- **Chu kỳ**: 7 chu kỳ (ngang)
- **Nhóm**: 18 nhóm (dọc)
- **Phân loại**: Kim loại, phi kim, khí hiếm

**Xu hướng biến đổi**:
- Trong một nhóm: Bán kính nguyên tử tăng từ trên xuống
- Trong một chu kỳ: Bán kính nguyên tử giảm từ trái sang phải
          `
        },
        {
          id: 5,
          title: "Bài 5: Xu hướng biến đổi tính chất",
          type: "pdf"
        }
      ]
    },
    {
      id: 3,
      title: "Chương 3: Liên kết hóa học",
      lessons: [
        {
          id: 6,
          title: "Bài 6: Liên kết ion",
          type: "video"
        },
        {
          id: 7,
          title: "Bài 7: Liên kết cộng hóa trị",
          type: "pdf"
        }
      ]
    }
  ]
};

// Tất cả các khóa học
export const ALL_COURSES: Course[] = [
  MATH_12_COURSE,
  MATH_11_COURSE,
  MATH_10_COURSE,
  LITERATURE_11_COURSE,
  LITERATURE_10_COURSE,
  ENGLISH_8_COURSE,
  ENGLISH_9_COURSE,
  PHYSICS_12_COURSE,
  CHEMISTRY_10_COURSE
];

// Câu hỏi kiểm tra Toán 10 chương 1
export const MATH_10_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    text: "Mệnh đề là gì?",
    options: [
      "Câu hỏi",
      "Câu khẳng định đúng hoặc sai",
      "Câu mệnh lệnh",
      "Câu cảm thán"
    ],
    correctOption: 1,
    explanation: "Mệnh đề là một câu khẳng định đúng hoặc sai"
  },
  {
    id: 2,
    text: "Tập hợp các số tự nhiên là:",
    options: [
      "{..., -2, -1, 0, 1, 2, ...}",
      "{0, 1, 2, 3, ...}",
      "{1, 2, 3, ...}",
      "{p/q | p, q ∈ Z, q ≠ 0}"
    ],
    correctOption: 1,
    explanation: "Tập hợp số tự nhiên N = {0, 1, 2, 3, ...}"
  },
  {
    id: 3,
    text: "Nếu A = {1, 2, 3}, B = {2, 3, 4} thì A ∩ B là:",
    options: [
      "{1, 2, 3, 4}",
      "{2, 3}",
      "{1}",
      "{4}"
    ],
    correctOption: 1,
    explanation: "Giao của hai tập hợp là tập các phần tử thuộc cả hai tập"
  },
  {
    id: 4,
    text: "Phủ định của mệnh đề 'P đúng' là:",
    options: [
      "P đúng",
      "P sai",
      "Không xác định",
      "Cả đúng và sai"
    ],
    correctOption: 1,
    explanation: "Phủ định của P đúng là P sai"
  }
];

// Câu hỏi kiểm tra Toán 12 chương 1
export const MATH_12_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    text: "Hàm số bậc hai có dạng tổng quát là gì?",
    options: [
      "y = ax + b",
      "y = ax² + bx + c (a ≠ 0)",
      "y = ax³ + bx² + cx + d",
      "y = a/x"
    ],
    correctOption: 1,
    explanation: "Hàm số bậc hai luôn có dạng ax² + bx + c với a khác 0"
  },
  {
    id: 2,
    text: "Nếu a > 0, parabol của hàm số bậc hai sẽ?",
    options: [
      "Quay lên",
      "Quay xuống",
      "Đi qua gốc tọa độ",
      "Song song với trục Ox"
    ],
    correctOption: 0,
    explanation: "Khi a > 0, parabol quay lên"
  },
  {
    id: 3,
    text: "Đỉnh của parabol có tọa độ là gì?",
    options: [
      "(-b/(2a), -Δ/(4a))",
      "(b/(2a), Δ/(4a))",
      "(-b/(2a), Δ/(4a))",
      "(b/(2a), -Δ/(4a))"
    ],
    correctOption: 0,
    explanation: "Đỉnh parabol nằm tại x = -b/(2a) và y = -Δ/(4a)"
  }
];

// Câu hỏi kiểm tra Hóa 10 chương 1
export const CHEMISTRY_10_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    text: "Các hạt cấu tạo nên hạt nhân nguyên tử là:",
    options: [
      "Electron và proton",
      "Proton và nơtron",
      "Nơtron và electron",
      "Electron, proton và nơtron"
    ],
    correctOption: 1,
    explanation: "Hạt nhân gồm proton và nơtron"
  },
  {
    id: 2,
    text: "Số hiệu nguyên tử (Z) là:",
    options: [
      "Số nơtron",
      "Số proton",
      "Số electron",
      "Tổng số proton và nơtron"
    ],
    correctOption: 1,
    explanation: "Số hiệu nguyên tử là số proton trong hạt nhân"
  },
  {
    id: 3,
    text: "Đồng vị là các nguyên tử:",
    options: [
      "Cùng nguyên tố, cùng số nơtron",
      "Cùng nguyên tố, khác số nơtron",
      "Khác nguyên tố, cùng số nơtron",
      "Khác nguyên tố, khác số nơtron"
    ],
    correctOption: 1,
    explanation: "Đồng vị là các nguyên tử cùng nguyên tố nhưng khác số nơtron"
  }
];

// Câu hỏi kiểm tra Văn 11
export const LITERATURE_11_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    text: "Tác giả Chí Phèo là ai?",
    options: [
      "Nam Cao",
      "Nguyễn Du",
      "Xuân Diệu",
      "Huy Cận"
    ],
    correctOption: 0,
    explanation: "Nam Cao là tác giả của tác phẩm Chí Phèo"
  },
  {
    id: 2,
    text: "Chí Phèo được xuất bản năm nào?",
    options: [
      "1940",
      "1941",
      "1942",
      "1945"
    ],
    correctOption: 1,
    explanation: "Chí Phèo được xuất bản năm 1941"
  },
  {
    id: 3,
    text: "Điểm nhìn thứ nhất là:",
    options: [
      "Người ta",
      "Tôi",
      "Anh ấy",
      "Cô ấy"
    ],
    correctOption: 1,
    explanation: "Điểm nhìn thứ nhất dùng đại từ 'tôi'"
  }
];

// Câu hỏi kiểm tra Anh 8
export const ENGLISH_8_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    text: "What is the past tense of 'go'?",
    options: [
      "goed",
      "went",
      "gone",
      "going"
    ],
    correctOption: 1,
    explanation: "The past tense of 'go' is 'went'"
  },
  {
    id: 2,
    text: "'Invention' means:",
    options: [
      "Khám phá",
      "Phát minh",
      "Đổi mới",
      "Khoa học"
    ],
    correctOption: 1,
    explanation: "'Invention' nghĩa là phát minh"
  },
  {
    id: 3,
    text: "Choose the correct sentence:",
    options: [
      "She said she love English",
      "She said she loved English",
      "She said she loves English",
      "She said she loving English"
    ],
    correctOption: 1,
    explanation: "In reported speech, we change present tense to past tense"
  }
];

// Câu hỏi kiểm tra Vật lý 12
export const PHYSICS_12_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    text: "Điện tích nguyên tố có giá trị là:",
    options: [
      "1.6×10⁻¹⁹ C",
      "9.1×10⁻³¹ C",
      "1.67×10⁻²⁷ C",
      "3×10⁸ C"
    ],
    correctOption: 0,
    explanation: "Điện tích nguyên tố e = 1.6×10⁻¹⁹ C"
  },
  {
    id: 2,
    text: "Định luật Coulomb nói về:",
    options: [
      "Lực tương tác giữa hai điện tích",
      "Điện trường",
      "Điện thế",
      "Sóng điện từ"
    ],
    correctOption: 0,
    explanation: "Định luật Coulomb nói về lực tương tác giữa hai điện tích"
  },
  {
    id: 3,
    text: "Tốc độ sóng điện từ trong chân không là:",
    options: [
      "3×10⁶ m/s",
      "3×10⁸ m/s",
      "3×10¹⁰ m/s",
      "3×10¹² m/s"
    ],
    correctOption: 1,
    explanation: "Tốc độ sóng điện từ c = 3×10⁸ m/s"
  }
];
