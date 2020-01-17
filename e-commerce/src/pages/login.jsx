
import React from 'react'; 
import Header from '../components/header';
import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";
import axios from "axios"

class Login extends React.Component {

    afterSignin = async () => {
        console.warn("ready to axios")
        const self = this
        const input = {
            username : this.props.username,
            password : this.props.password
        }

        let signIn = {
            method:"get",
            url: "http://0.0.0.0:5000/login",
            headers: {
                "Content-Type": "application/json"
            },
            params : input
        };

        await axios(signIn)
            .then(function(response) {
                console.warn('respon data')
                if(response.data.hasOwnProperty("token")) {
                    console.warn('token', response.data.token)
                    localStorage.setItem("token", response.data.token)
                    localStorage.setItem("auth", "true")
                    store.setState({auth : true})
                    self.props.history.push("/")
                }
            })
            .catch(function(error) {
                console.log(error)
            })
    }

    render () {
        return (
            <React.Fragment>
                <Header {...this.props}/>
                <div className="container ">
                    <div className="row mr-0 ml-0">
                        
                        <div className="col-lg-3 col-md-3 col-sm-1 col-1"></div>
                        <div className="col-lg-6 col-md-6 col-sm-10 col-10">

                            <div className="d-flex justify-content-center h-100 mt-5">
                                <div className="card">
                                    <div className="card-header">
                                        <h3>Log In</h3>
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
                                                <input type="password" className="form-control" placeholder="password" id="password"  name="password" onChange= {e => this.props.setInput(e)} required/>
                                            </div>
                                            {/* <div className="form-group"> */}
                                                <button type="submit" value="Login" className="btn float-right login_btn" onClick={()=> this.afterSignin()}>Log In
                                                </button>
                                            {/* </div> */}
                                        </form>
                                    </div>
                                    <div className="card-footer">
                                        <div className="d-flex justify-content-center links">
                                            Belum punya akun?<Link to='/register' style={{color:'#FFCC00'}}>Register</Link>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <Link style={{color:'#FFCC00'}}>Lupa password?</Link>
                                        </div>
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
export default connect('username, password, apiUrl, auth', actions)(withRouter(Login))
