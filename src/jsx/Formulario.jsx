import React from 'react';

class Formulario extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nombre: "",
            correo: "",
            fecha: new Date()
        }
        this.cambiarCorreo = this.cambiarCorreo.bind(this)
        // this.cambiarFecha= this.cambiarFecha.bind(this)
    }

    cambiarNombre(e) {
        this.setState({
            nombre: e.target.value
        })
    }
    cambiarCorreo(e) {
        this.setState({
            correo: e.target.value
        })
    }
    cambiarFecha(){
        this.setState({
            fecha: new Date()
        })
    }

    // this.setState({})

    render() {

        return (
            <div className="ed-grid">
                <h1>Formulario {this.props.name} </h1>
                <h4>Fecha actual: {this.state.fecha.toString()}</h4>
                <form id="elemento">
                    <div className="ed-grid m-grid-2">
                        <div className="form__item">
                            <label >Nombre</label>
                            <input type="text" onChange={e => this.cambiarNombre(e)} />
                        </div>
                        <div className="form__item">
                            <label >Correo electronico</label>
                            <input type="email" onChange={this.cambiarCorreo} />
                        </div>
                    </div>
                </form>
                <div className="l-section">
                    <h2>{`Hola ${this.state.nombre}`}</h2>
                    <span>{`Correo ${this.state.correo}`} </span>
                </div>

            </div>
        )
    }

    componentDidMount() {
        let elemento = document.getElementById("elemento");
        console.log(elemento);
        this.intervaloFecha= setInterval(()=>{
            this.cambiarFecha()
        },1000)
    }
    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps);
        console.log(prevState);
    }
    // limpiar intervalo al desmontar
    componentWillUnmount(){
        clearInterval(this.intervaloFecha)
    }

}
export default Formulario;