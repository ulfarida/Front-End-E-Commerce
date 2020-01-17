import React from 'react';
import logo from '../images/logo.svg'
import search from '../images/search.png'
import profile from '../images/profile.svg'
import { Link, withRouter } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions, store } from "../store/store";

class ProfilInfo extends React.Component{

    render(){

        return(
            <React.Fragment>
                <div className="container bg-white mt-3 rounded pt-2">
                    <div className="col-lg-12 mt-5 mb-3 text-center mb-3 profil-info">
                        <h5>Profil</h5>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-4 mt-5 pl-5 profil-info">
                            <h6>Nama Lengkap</h6><br/>
                            <h6>Alamat</h6><br/>
                            <h6>Telepon</h6><br/>
                            <h6>Email</h6><br/>
                            <h6>Tanggal Lahir</h6><br/>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-8 col-8 mt-5 pl-5 profil-info">
                            <h6>: {this.props.nama}</h6><br/>
                            <h6>: {this.props.alamat}</h6><br/>
                            <h6>: {this.props.telepon}</h6><br/>
                            <h6>: {this.props.email}</h6><br/>
                            <h6>: {this.props.tanggalLahir}</h6><br/>
                        </div>
                        <div className="mt-5 pl-5">
                            <Link to="/ubahprofil">Ubah Profil</Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


export default connect('nama, alamat, telepon, email, tanggalLahir', actions)(withRouter(ProfilInfo))
