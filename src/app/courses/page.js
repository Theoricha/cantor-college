import { courseDetails } from "@/app/lib/db";
import Link from "next/link";
import "./courses.css"
export const metadata = {
    title: "Course Information",
  };
const Courses = async () => {
  const course = await courseDetails();
  console.dir(course)
  return (
    <div className='container'>
      <h2>Course List</h2>
            <ul className="courses-list">
                {course.map((course, index) => (
                    <li key={index}>
                        <Link href={`./courses/${course.ID}`}>{course.CourseTitle}</Link>
                    </li>
                ))}
            </ul>
    </div>
  );
};
export default Courses;
