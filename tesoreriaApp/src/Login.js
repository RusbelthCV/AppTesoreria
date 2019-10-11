//Configuraciones
import React from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import { withCookies } from 'react-cookie';
import { connect } from 'react-redux';
import md5 from 'md5';
import './css/login.scss';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            key: '',
            divError: 'd-none'
        };
        this.change = this.change.bind(this);
        this.send = this.send.bind(this);
        this.close = this.close.bind(this);
    }
    close() {
        this.setState({
            divError: 'd-none'
        });
    }
    send(e) {
        e.preventDefault();

        let user = {
            name: this.state.name,
            key: this.state.key
        };

        //console.log(user);
        //Query to the API and datas for realize the query
        const API = "http://localhost:3000";
        const url = API + '/api/admin/login';
        fetch(url , {
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(response => {
            if(!response.ok){
                this.setState({
                    divError : 'd-block'
                });
            }
            else {
                return response.data;
            }
        })
        .then(token => {
            console.log(token);
            if(token) {
                this.props.cookies.set('rcc_nameadmin',token.nameadmin,{path:'/'});
                this.props.cookies.set('rcc_idadmin',token.idadmin,{path:'/'});
                this.props.cookies.set('rcc_token',token.token,{path:'/'});
                this.props.dispatch({
                    type: 'LOGIN',
                    nameadmin: token.nameadmin,
                    idadmin: token.idadmin,
                    token:token.token
                });
                this.setState({
                    logued: true
                });
            }
        })
        .catch(error => console.log(error));
    }
    change(e) {
        this.setState( {
            [e.target.name]: e.target.value
        });
    }
    render() {
        if(this.state.logued) {
            return <Redirect to = "/home" />
        }
        return (
            <div className = "container justify-content-center align-items-center">
                <div className='row justify-content-center align-items-center h-100' >
                    <form onSubmit = {(e) => this.send(e)} className = "div-content-login">
                        <div className="form-group text-center">
                            <label htmlFor = "name">Name</label>
                            <input type = "text" className="form-control" id = "name" name = "name" onChange = {this.change} />
                        </div>
                        <div className = "form-group text-center">
                            <label htmlFor = "key">Key</label>
                            <input type = "password" className = "form-control" id = "key" name = "key" onChange = {this.change} />
                        </div>
                        <div className = "buttons justify-content-around">
                            <button type = "submit" className = "btn btn-primary btn-lg buttonSubmit">Log In</button>
                            <NavLink to = "/home" className = "btn btn-lg backButton">Back</NavLink>
                        </div>
                        <div className={"alert alert-danger mt-3 p-3 rounded "+ this.state.divError} role="alert">
                        <button type = "button" className = "close" data-dismiss = "alert" aria-label = "Close" onClick = {this.close}>
                            <span>&times;</span>
                        </button>
                        <h4 className="alert-heading">ERROR EN LAS CREDENCIALES</h4>
                        <hr></hr>
                        <p>Las credenciales insertadas no son válidas</p>
                        <p className="mb-0">Vuelva a intentarlo</p>
                        </div>
                    </form>
                    
                </div>
            </div>
        );
    }
}

export default withCookies(connect()(Login));