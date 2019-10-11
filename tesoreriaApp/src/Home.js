import React, { Component } from 'react';
import { withCookies } from 'react-cookie';
import { connect } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import { AwesomeButton, AwesomeButtonProgress, AwesomeButtonSocial } from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";
import eric from 'react-awesome-button/src/styles/themes/theme-eric';
class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }
    logout() {
        let idUser = this.props.cookies.get('rcc_idadmin');
        const API = "http://localhost:3000";
        let url = API + '/api/admin/logout/'+idUser;
        // fetch(url , {
        //     method: 'DELETE',
        //     headers = new Headers({'Content-Type':'application/json'}),
        //     body: JSON.stringify({idUser})
        // })
    }
    render() {
        if (!this.props.cookies.get('rcc_idadmin')) {
            return <Redirect to="/" />
        }
        return (
            <div className="container d-flex mt-5 justify-content-around align-items-center h-100">
                <div className="btn-group">
                    <AwesomeButton type="primary"
                        href="./lista"
                        size="icon">
                        <i className="fa fa-list-alt" aria-hidden="true"></i>
                    </AwesomeButton>
                </div>
                <div className="btn-group">
                    <AwesomeButton type="primary" >Agregar Ofrenda</AwesomeButton>
                </div>
                <div className="btn-group">
                    <AwesomeButton type="primary" 
                    action = {this.logout}>
                        <i className="fa fa-sign-out" aria-hidden="true"></i>
                    </AwesomeButton>
                </div>
            </div>
        );
    }
}

export default withCookies(connect()(Home));