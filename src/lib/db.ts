import Database from "better-sqlite3";
import path from "path";

const dbPath = path.join(process.cwd(), "data", "eduai.db");

// Ensure data directory exists
import fs from "fs";
const dataDir = path.dirname(dbPath);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const db = new Database(dbPath);

db.pragma("journal_mode = WAL");

// Create tables
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'student',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS classes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    grade INTEGER NOT NULL UNIQUE,
    name TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS subjects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    level TEXT NOT NULL,
    icon TEXT
  );

  CREATE TABLE IF NOT EXISTS courses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    subject_id INTEGER NOT NULL,
    class_id INTEGER NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    image_url TEXT,
    teacher_id INTEGER,
    FOREIGN KEY (subject_id) REFERENCES subjects(id),
    FOREIGN KEY (class_id) REFERENCES classes(id),
    FOREIGN KEY (teacher_id) REFERENCES users(id)
  );

  CREATE TABLE IF NOT EXISTS chapters (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    course_id INTEGER NOT NULL,
    title TEXT NOT NULL,
    order_index INTEGER NOT NULL,
    FOREIGN KEY (course_id) REFERENCES courses(id)
  );

  CREATE TABLE IF NOT EXISTS lessons (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    chapter_id INTEGER NOT NULL,
    title TEXT NOT NULL,
    video_url TEXT,
    pdf_url TEXT,
    content TEXT,
    order_index INTEGER NOT NULL,
    FOREIGN KEY (chapter_id) REFERENCES chapters(id)
  );

  CREATE TABLE IF NOT EXISTS quizzes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    lesson_id INTEGER,
    chapter_id INTEGER,
    course_id INTEGER NOT NULL,
    title TEXT NOT NULL,
    type TEXT NOT NULL DEFAULT 'multiple_choice',
    FOREIGN KEY (lesson_id) REFERENCES lessons(id),
    FOREIGN KEY (chapter_id) REFERENCES chapters(id),
    FOREIGN KEY (course_id) REFERENCES courses(id)
  );

  CREATE TABLE IF NOT EXISTS questions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    quiz_id INTEGER NOT NULL,
    text TEXT NOT NULL,
    explanation TEXT,
    order_index INTEGER NOT NULL,
    FOREIGN KEY (quiz_id) REFERENCES quizzes(id)
  );

  CREATE TABLE IF NOT EXISTS question_options (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    question_id INTEGER NOT NULL,
    text TEXT NOT NULL,
    is_correct BOOLEAN NOT NULL DEFAULT 0,
    FOREIGN KEY (question_id) REFERENCES questions(id)
  );
`);

// Seed initial data
const seedData = () => {
  // Check if data already exists
  const classCount = db.prepare("SELECT COUNT(*) as count FROM classes").get() as { count: number };
  if (classCount.count > 0) return;

  // Insert classes
  const insertClass = db.prepare("INSERT INTO classes (grade, name) VALUES (?, ?)");
  for (let i = 1; i <= 12; i++) {
    insertClass.run(i, `Lớp ${i}`);
  }

  // Insert subjects
  const insertSubject = db.prepare("INSERT INTO subjects (name, level, icon) VALUES (?, ?, ?)");
  const elementarySubjects = [
    ["Toán", "elementary", "🧮"],
    ["Tiếng Việt", "elementary", "📚"],
    ["Tiếng Anh", "elementary", "🌍"],
    ["Khoa học", "elementary", "🔬"],
    ["Lịch sử và Địa lý", "elementary", "🗺️"],
  ];
  const middleSubjects = [
    ["Toán", "middle", "🧮"],
    ["Ngữ văn", "middle", "📚"],
    ["Tiếng Anh", "middle", "🌍"],
    ["Vật lý", "middle", "⚛️"],
    ["Hóa học", "middle", "🧪"],
    ["Sinh học", "middle", "🧬"],
    ["Lịch sử", "middle", "📜"],
    ["Địa lý", "middle", "🗺️"],
    ["Tin học", "middle", "💻"],
  ];
  const highSubjects = [
    ["Toán", "high", "🧮"],
    ["Ngữ văn", "high", "📚"],
    ["Tiếng Anh", "high", "🌍"],
    ["Vật lý", "high", "⚛️"],
    ["Hóa học", "high", "🧪"],
    ["Sinh học", "high", "🧬"],
    ["Lịch sử", "high", "📜"],
    ["Địa lý", "high", "🗺️"],
    ["Tin học", "high", "💻"],
    ["Giáo dục kinh tế pháp luật", "high", "⚖️"],
  ];

  [...elementarySubjects, ...middleSubjects, ...highSubjects].forEach(([name, level, icon]) => {
    insertSubject.run(name, level, icon);
  });

  // Insert sample courses
  const insertCourse = db.prepare(`
    INSERT INTO courses (subject_id, class_id, title, description, image_url) 
    VALUES (?, ?, ?, ?, ?)
  `);
  const sampleCourse = {
    subjectId: 1,
    classId: 12,
    title: "Toán lớp 12 - Chương 1: Hàm số",
    description: "Khóa học Toán lớp 12 chương 1 về Hàm số",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop",
  };
  insertCourse.run(
    sampleCourse.subjectId,
    sampleCourse.classId,
    sampleCourse.title,
    sampleCourse.description,
    sampleCourse.imageUrl
  );
};

seedData();

export default db;
