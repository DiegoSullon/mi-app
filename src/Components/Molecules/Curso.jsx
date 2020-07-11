import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const mayorEdad = edad => edad > 20;

const Curso = ({id, image, nombre, price, edad }) => (

    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <Link to={`/cursos/${id}`}>
                <img src={image} alt="logoGo" />
            </Link>
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">
                {mayorEdad(edad) ? "Curso Go" : "Curso PhP"}
            </h3>
            <div className="s-mb-2 s-main-center">
                <div className="card__teacher s-cross-center">
                    <div className="card__avatar s-mr-1">
                        <div className="circle img-container">
                            <img src="https://lh3.googleusercontent.com/a-/AOh14Gjbd4Iyn73_jo8xMB8sKFJ0BG_MuQjrPtp6Bj9YsA" alt="profesor" />
                        </div>
                    </div>
                    <span className="small">{nombre}</span>
                </div>
            </div>
            <div className="s-main-center">
                <a className="button--ghost-alert button--tiny" href="google.com">{price}</a>
            </div>
        </div>
    </article>

)
Curso.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    nombre: PropTypes.string
}
Curso.defaultProps = {
    title: "No se encontró título",
    image: "https://cdn.pixabay.com/photo/2020/03/06/11/14/black-4906807_960_720.jpg",
    price: "__",
    nombre: ""

}
export default Curso;