
import React from 'react'; 
import Header from '../components/header';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";
import axios from "axios"
import Swal from "sweetalert2"

class UbahProfil extends React.Component {

    changeProfil = async (e) => {
        console.warn("ready to axios")
        const self = this
        const input = {
            nama : this.props.nama,
            alamat : this.props.alamat,
            no_hp : this.props.telepon,
            tangal_lahir : this.props.tangalLahir,
            foto_profil : this.props.fotoProfil
        }

        let profil = {
            method:"put",
            url: "https://babybun.my.id/profil",
            headers: {
                "Content-Type": "application/json",
                'Authorization':'Bearer ' + localStorage.getItem("token"),
            },
            data : input
        };

        await axios(profil)
            .then(function(response){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Ubah Profil Berhasil',
                    showConfirmButton: false,
                    timer: 1500
                })
                self.props.history.push("/profil");
            })
            .catch(function(error){
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!'
                })
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
                                        <h3>Ubah Profil</h3>
                                    </div>
                                    <div className="card-body" onSubmit={e => e.preventDefault()}>
                                        <form>
                                            <div className="input-group form-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                                </div>
                                                <input type="text" className="form-control" placeholder="nama" id="nama"  name="nama" onChange= {e => this.props.setInput(e)}/>
                                                
                                            </div>
                                            <div className="input-group form-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                                </div>
                                                <input type="text" className="form-control" placeholder="alamat" id="alamat"  name="alamat" onChange= {e => this.props.setInput(e)}/>
                                            </div>
                                            <div className="input-group form-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                                </div>
                                                <input type="text" className="form-control" placeholder="telepon" id="telepon"  name="telepon" onChange= {e => this.props.setInput(e)}/>
                                            </div>
                                            <div className="input-group form-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                                </div>
                                                <input type="text" className="form-control" placeholder="tanggal lahir" id="tanggal_lahir"  name="tanggalLahir" onChange= {e => this.props.setInput(e)}/>
                                            </div>
                                                <button type="submit" value="Login" className="btn float-right login_btn" onClick={()=> this.changeProfil()}>Ubah Profil
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
export default connect('nama, alamat, telepon, tanggalLahir, fotoProfil', actions)(withRouter(UbahProfil))
