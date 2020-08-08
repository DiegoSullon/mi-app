import React from "react"
import CoursesContext from "./CoursesContext"
import axios from "axios"

class CoursesProvider extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            courses: []
        }
    }
    componentDidMount() {
        axios.get('http://my-json-server.typicode.com/diegosullon/json-db/cursos').then(
            resp => {
                this.setState({ courses: resp.data })
            }
        )
    }
    render() {
        return (
            <CoursesContext.Provider value={this.state}>
                {this.props.children}
            </CoursesContext.Provider>
        )
    }
}
export default CoursesProvider