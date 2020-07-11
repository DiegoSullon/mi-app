import React, { useState } from 'react';
import useCourse from '../CustomHooks/useCourse';
const Course = ({ match }) => {
    
    const [comment, setComment] = useState("Sin comentarios")
    const course = useCourse(match.params.id)
   
    const setMyComment = e =>{
        setComment(e.target.value)
    }
    return (
        <div className="ed-grid m-grid-3">
            {course ? (
                <>
                    <div className="l-block">
                        <h1 className="m-cols-3"> Curso: {course.nombre} </h1>
                        <img className="m-cols-1" src={course.image} alt="Imagen" />
                        <p className="m-cols2"> {course.price} </p>
                    </div>
                    <div className="">
                        <h2>Escribe tu comentario</h2>
                        <input type="text" placeholder="Escribe..." onChange={setMyComment.bind(this)}/>
                        <p>{comment}</p>
                    </div>
                </>
            ) : (
                    <h1>El curso no existe</h1>
                )
            }
        </div>
    )
}
export default Course;