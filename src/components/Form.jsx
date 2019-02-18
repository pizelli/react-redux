import './Form.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addAtestado, editRegistro, handleChange } from '../actions'

class FormCad extends Component {

    constructor(props) {
        super(props)

        let { dispatch } = props
        this.dispatch = dispatch;
    }

    handleChange = e => {
        this.props.handleChange({ [e.target.name]: e.target.value })
    }

    ver = () => {
        console.log(this.props)
    }

    send = () => {
        let { nome, email } = this.refs
        this.dispatch(addAtestado({
            nome: nome.value,
            email: email.value
        }))
        this.clearInputs()
        // this.props.history.push('/atestado')
    }

    edit = () => {
        let { nome, email } = this.refs
        this.dispatch(editRegistro({
            id: 1,
            nome: nome.value,
            email: email.value
        }))
    }

    clearInputs = () => {
        let { nome, email } = this.refs
        nome.value = ''
        email.value = ''
        nome.focus()
    }

    render() {
        return (
            <div className="form">
                <div>
                    <label htmlFor="nomeAnimal">Nome do animal:</label>
                    <input ref="nome" type="text" name="nome"
                        onChange={handleChange} />
                </div>
                <br />
                <div>
                    <label htmlFor="nomeProprietario">Nome do proprietário:</label>
                    <input ref="email" type="text" name="email"
                        onChange={handleChange} />
                </div>
                <br />
                <div>
                    <button onClick={this.send}>Enviar</button>
                    <button onClick={this.ver}>Ver</button>
                </div>
                <div>
                    <h3>Cadastros:</h3>
                    <ul>
                        {this.props.lista.map((item, index) => {
                            return (<li key={index}>{item.nome} - {item.email}</li>)
                        })}
                    </ul>
                </div>
                {this.props.lista[0] && <span><button onClick={this.edit}>{this.props.lista[0].nome}</button></span>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        lista: state.atestados
    }
}

export default connect(mapStateToProps)(FormCad)