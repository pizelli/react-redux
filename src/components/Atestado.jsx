import React from 'react'
import { connect } from 'react-redux'

class Atestado extends React.Component {

    inicio = () => {
        this.props.history.push('/')
    }

    render(){
        return (
            <div>
                <h1>Atestado</h1>
                <button onClick={this.inicio}>Inicio</button>
                <div>
                    <ul>
                        {this.props.lista.map((item, index) => 
                            <li key={index}>{item.nome} - {item.email}</li>)}
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    lista: state.atestados
})

export default connect(mapStateToProps)(Atestado)