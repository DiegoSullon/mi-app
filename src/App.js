import React from 'react';
// import './App.css';
import "./styles/styles.scss";
import Banner from './jsx/Banner';
import Formulario from './jsx/Formulario';
import CourseGrid from './jsx/CourseGrid';
import Course from './jsx/Course';
import MainMenu from './jsx/MainMenu';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Historial from './jsx/Historial';





const App = () => (
  <Router>
    <MainMenu />
    <Switch>
      <Route path="/" exact component={Banner} />
      <Route path="/formulario" exact component={() => <Formulario name="contacto" />} />
      <Route path="/cursos/:id" exact component={Course} />
      <Route path="/cursos" exact component={CourseGrid} />
      <Route path="/historial/:valor" exact component={Historial} />
      <Route path="/historial" exact component={Historial} />
      <Route component={() => (
        <div className="ed-grid">
          <h1>Error 404</h1>
          <span>Pagina no encontrada</span>
        </div>
      )} />
    </Switch>

  </Router>
)

export default App;
