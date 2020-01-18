
import React from 'react'; 
import Header from '../components/header';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";
import axios from "axios"

class UbahPassword extends React.Component {

    changePassword = async (e) => {
        const self = this
        const input = {
            password_lama : this.props.password_lama,
            password_baru : this.props.password_baru,
            konfirmasi_password : this.props.confirm_password,
        }

        let ubahPassword = {
            method:"put",
            url: "http://0.0.0.0:5000/password",
            headers: {
                'Authorization':'Bearer ' + localStorage.getItem("token"),
                "Content-Type": "application/json"
            },
            data : input
        };

        await axios(ubahPassword)
            .then(function(response){
                self.props.history.push("/login");
                alert(response.data.message)
            })
            .catch(function(error){
                console.log(error);
                alert(error);
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
                                        <h3>Ubah Password</h3>
                                    </div>
                                    <div className="card-body" onSubmit={e => e.preventDefault()}>
                                        <form>
                                            <div className="input-group form-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                                </div>
                                                <input type="password" className="form-control" placeholder="password lama" id="password_lama"  name="password_lama" onChange= {e => this.props.setInput(e)} required/>
                                                
                                            </div>
                                            <div className="input-group form-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                                </div>
                                                <input type="password" className="form-control" placeholder="password baru" id="password_baru"  name="password_baru" onChange= {e => this.props.setInput(e)} required/>
                                            </div>
                                            <div className="input-group form-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                                </div>
                                                <input type="password" className="form-control" placeholder="konfirmasi password" id="konfirmasi_password"  name="confirm_password" onChange= {e => this.props.setInput(e)} required/>
                                            </div>
                                                <button type="submit" value="Login" className="btn float-right login_btn" onClick={()=> this.changePassword()} style={{width:'150px', marginTop:'30px'}}>Ubah Password
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
export default connect('password_lama, password_baru, confirm_password', actions)(withRouter(UbahPassword))
