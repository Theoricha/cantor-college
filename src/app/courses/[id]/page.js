import {courseDetails, fetchCourseDetails} from "@/app/lib/db"
const CourseDetails = async({params}) => {
    const {id} = await params;
    console.log(id);
    const CourseDetails = await fetchCourseDetails(id);
      return (
      <div className='container'>
        <h2>Course Details</h2>
        <h3>{CourseDetails.CourseTitle}</h3>
        <p>Ucas Code: {CourseDetails.UcasCode}</p>
        <p>Course Type: {CourseDetails.CourseType}</p>
        <p>Study Length: {CourseDetails.StudyLength}</p>
        <p>Year of Entry: {CourseDetails.YearOfEntry}</p>
        <p>{CourseDetails.ModeOfAttendance}</p>
        <p>{CourseDetails.CourseSummary}</p>
      </div>
    );
  }
  export default CourseDetails
