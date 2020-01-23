
import React from 'react'; 
import Header from '../components/header';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";
import axios from "axios"
import Swal from "sweetalert2"

class Register extends React.Component {

    afterRegister = async (e) => {
        const self = this
        const input = {
            username : this.props.username,
            email : this.props.email,
            password : this.props.password,
            confirm_password : this.props.confirm_password
        }

        let register = {
            method:"post",
            url: "http://0.0.0.0:5000/register",
            headers: {
                "Content-Type": "application/json"
            },
            data : input
        };

        await axios(register)
            .then(function(response){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Registrasi Berhasil. Silakan Login',
                    showConfirmButton: false,
                    timer: 1500
                })
                self.props.history.push("/login");
                // alert("Registrasi Berhasil. Silakan Login")
            })
            .catch(function(error){
                console.log(error);
                alert("error");
            });
    }

    render () {
        return (
            <React.Fragment>
                <Header/>
                <div className="container ">
                    <div className="row mr-0 ml-0">
                        <div className="col-lg-3 col-md-3 col-sm-1 col-1"></div>
                        <div className="col-lg-6 col-md-6 col-sm-10 col-10">
                            <div className="d-flex justify-content-center h-100 mt-5">
                                <div className="card">
                                    <div className="card-header">
                                        <h3>Register</h3>
                                    </div>
                                    <div className="card-body" onSubmit={e => e.preventDefault()}>
                                        <form>
                                            <div className="input-group form-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                                </div>
                                                <input type="text" className="form-control" placeholder="username" id="username"  name="username" onChange= {e => this.props.setInput(e)} required/>
                                                
                                            </div>
                                            <div className="input-group form-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                                </div>
                                                <input type="email" className="form-control" placeholder="email" id="email"  name="email" onChange= {e => this.props.setInput(e)} required/>
                                            </div>
                                            <div className="input-group form-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                                </div>
                                                <input type="password" className="form-control" placeholder="password" id="password"  name="password" onChange= {e => this.props.setInput(e)} required/>
                                            </div>
                                            <div className="input-group form-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                                </div>
                                                <input type="password" className="form-control" placeholder="konfirmasi password" id="confirm_password"  name="confirm_password" onChange= {e => this.props.setInput(e)} required/>
                                            </div>
                                                <button type="submit" value="Login" className="btn float-right login_btn" onClick={()=> this.afterRegister()}>Register
                                                </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default connect('username, email, password, confirm_password, apiUrl, auth', actions)(withRouter(Register))
