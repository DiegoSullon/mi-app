import React from 'react';

const Curso = () => (

    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src="https://edteam-media.s3.amazonaws.com/courses/original/4d60ef81-2e58-457f-97c7-ee8847663985.jpg" alt="logoGo" />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">
                Programación orientada a objetos con Go
        </h3>
            <div className="s-mb-2 s-main-center">
                <div className="card__teacher s-cross-center">
                    <div className="card__avatar s-mr-1">
                        <div className="circle img-container">
                            <img src="https://lh3.googleusercontent.com/a-/AOh14Gjbd4Iyn73_jo8xMB8sKFJ0BG_MuQjrPtp6Bj9YsA" alt="profesor" />
                        </div>
                    </div>
                    <span className="small">Diego Sullon</span>
                </div>
            </div>
            <div className="s-main-center">
                <a className="button--ghost-alert button--tiny" href="google.com">$ 200USD</a>
            </div>
        </div>
    </article>

)
export default Curso;