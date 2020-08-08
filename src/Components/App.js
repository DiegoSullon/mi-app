import React from 'react';
import "../styles/styles.scss";
import Home from './Pages/Home';
import Formulario from './Pages/Formulario';
import Courses from './Pages/Courses';
import Course from './Pages/Course';
import MainMenu from './Organisms/MainMenu';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Historial from './Pages/Historial';
import Users from './Pages/Users';
import CoursesProvider from './Context/CoursesProvider';





const App = () => (
  <CoursesProvider>
    <Router>
      <MainMenu />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/formulario" exact component={() => <Formulario name="contacto" />} />
        <Route path="/cursos/:id" exact component={Course} />
        <Route path="/cursos" exact component={Courses} />
        <Route path="/usuarios" component={Users} />
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
  </CoursesProvider>
)

export default App;
