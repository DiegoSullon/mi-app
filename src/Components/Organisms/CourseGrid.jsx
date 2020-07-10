import React from 'react';
import Curso from '../Molecules/Curso';
import withLoader from '../HOC/withLoader';
const CourseGrid = ({ courses }) => (
  <div className="ed-grid m-grid-3">
    {
      courses.map(curso => <Curso id={curso.id} image={curso.image} nombre={curso.nombre} price={curso.price} edad={curso.price} />)
    }
  </div>

)
export default withLoader("courses", CourseGrid) 