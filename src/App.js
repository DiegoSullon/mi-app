import React from 'react';
// import './App.css';
import "./styles/styles.scss"
import Curso from './curso'

const App = () => (
  <>
    <div className="main-banner l-section img-container" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" alt="banner" src="https://cdn.pixabay.com/photo/2020/03/06/11/14/black-4906807_960_720.jpg" />
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Título del banner</p>
            <p> Subtítulo del banner</p>
            <a href="https://google.com" className="button">Botón del banner</a>
          </div>
        </div>
      </div>
    </div>
    <div className="ed-grid m-grid-3">
      <Curso />
      <Curso />
      <Curso />
      <Curso />
    </div>
  </>
)

export default App;
