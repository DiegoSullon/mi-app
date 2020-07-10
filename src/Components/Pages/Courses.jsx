import React from 'react';

import axios from 'axios';
import CourseGrid from '../Organisms/CourseGrid';


class Courses extends React.Component {
  constructor(prosp){
    super(prosp);
    this.state={
      cursos:[]
    }
  }
  componentDidMount(){
    axios.get('http://my-json-server.typicode.com/diegosullon/json-db/cursos').then(
      resp=>{
        this.setState({cursos:resp.data})
      }
    )
  }
  render() {
    const {cursos} = this.state
    return <CourseGrid courses={cursos}/>

  }
}
export default Courses;