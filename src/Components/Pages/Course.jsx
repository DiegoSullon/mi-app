import React from 'react';
const cursos = [
    { "id": "1", "image": "https://edteam-media.s3.amazonaws.com/courses/original/4d60ef81-2e58-457f-97c7-ee8847663985.jpg", "nombre": "Diego", "price": "$30", "edad": "19" },
    { "id": "2", "image": "https://edteam-media.s3.amazonaws.com/courses/original/4d60ef81-2e58-457f-97c7-ee8847663985.jpg", "nombre": "Jorge", "price": "$40", "edad": "18" },
    { "id": "3", "image": "https://edteam-media.s3.amazonaws.com/courses/original/4d60ef81-2e58-457f-97c7-ee8847663985.jpg", "nombre": "Martin", "price": "$10", "edad": "21" }
]
const Course = ({ match }) => {
    const cursoActual = cursos.filter(c => c.id === match.params.id)[0]
    return (
        <div className="ed-grid m-grid-3">
            {cursoActual ? (
                <>
                    <h1 className="m-cols-3"> Curso: {cursoActual.nombre} </h1>
                    <img className="m-cols-1" src={cursoActual.image} alt="Imagen" />
                    <p className="m-cols2"> {cursoActual.price} </p>
                </>
            ) : (
                    <h1>El curso no existe</h1>
                )
            }
        </div>
    )
}
export default Course;