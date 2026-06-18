import { Hero } from "@/components/home/hero";
import { ClassesSection } from "@/components/home/classes-section";
import { FeaturedCourses } from "@/components/home/featured-courses";

export default function Home() {
  return (
    <>
      <Hero />
      <ClassesSection />
      <FeaturedCourses />
    </>
  );
}
