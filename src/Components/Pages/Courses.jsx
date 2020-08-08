import React from 'react';
import CourseGrid from '../Organisms/CourseGrid';
import CoursesContext from '../Context/CoursesContext';
import { useContext } from 'react';


const Courses = () => {
  const { courses } = useContext(CoursesContext)
  return (
    < CourseGrid courses={courses} />
  )
}
export default Courses;