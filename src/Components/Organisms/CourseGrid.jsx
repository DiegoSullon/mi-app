import React from 'react';
import Curso from '../Molecules/Curso';
let persona={"nombre":"Alvaro Montenegro","edad":"28"};
let image="https://edteam-media.s3.amazonaws.com/courses/original/4d60ef81-2e58-457f-97c7-ee8847663985.jpg";
const cursos=[
    {"id": "1","image":"https://edteam-media.s3.amazonaws.com/courses/original/4d60ef81-2e58-457f-97c7-ee8847663985.jpg","nombre":"Diego","price":"$30","edad":"19"},
    {"id": "2","image":"https://edteam-media.s3.amazonaws.com/courses/original/4d60ef81-2e58-457f-97c7-ee8847663985.jpg","nombre":"Jorge","price":"$40","edad":"18"},
    {"id": "3","image":"https://edteam-media.s3.amazonaws.com/courses/original/4d60ef81-2e58-457f-97c7-ee8847663985.jpg","nombre":"Martin","price":"$10","edad":"21"}
]
const CourseGrid = ()=>(
    <div className="ed-grid m-grid-3">
      <Curso id="1" image={image} nombre={persona.nombre} price="$200" edad={persona.edad}/>
      {
        // recorrer array
        cursos.map(curso => <Curso id={curso.id} image={curso.image} nombre={curso.nombre} price={curso.price} edad={curso.price} /> )
      }
    </div>
)
export default CourseGrid;