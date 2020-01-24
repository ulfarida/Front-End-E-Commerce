import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../store/store";
import profile from '../images/profile.svg'
import edit from '../images/edit.svg'

const ProfilInfo = (props) => {
    return(
        <React.Fragment>
            {/* <div className="container bg-white mt-3 rounded pt-2">
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
                        <h6>: {props.nama}</h6><br/>
                        <h6>: {props.alamat}</h6><br/>
                        <h6>: {props.telepon}</h6><br/>
                        <h6>: {props.email}</h6><br/>
                        <h6>: {props.tanggalLahir}</h6><br/>
                    </div>
                    <div className="mt-5 pl-5">
                        <Link to="/ubahprofil">Ubah Profil</Link>
                    </div>
                </div>
            </div> */}

            <div className="container py-0">
                <div className="row text-center border-bottom justify-content-center">
                    <h3>Profil</h3>
                </div>
            </div>
            <div className="border rounded border-warning bg-white mt-4">
                <div className="row">
                    <div className="col-md-8">
                    <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-4 mt-5 pl-5 profil-info">
                        <p>Nama Lengkap</p><br/>
                        <p>Alamat</p><br/>
                        <p>Telepon</p><br/>
                        <p>Email</p><br/>
                        <p>Tanggal Lahir</p><br/>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8 col-8 mt-5 pl-5 profil-info">
                        <p>: {props.nama}</p><br/>
                        <p>: {props.alamat}</p><br/>
                        <p>: {props.telepon}</p><br/>
                        <p>: {props.email}</p><br/>
                        <p>: {props.tanggalLahir}</p><br/>
                    </div>
                </div>
                </div>
                    <div className="col-md-4 py-4 text-center">
                        <img src={profile} alt="" width='170px'/>
                    <div className="mt-1 mb-2 py-4 ">
                        <img src={edit} alt="" width='22px' className="mr-1 text-center"/>
                        <Link to="/ubahprofil">
                        Ubah Profil</Link>
                    </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}


export default connect('nama, alamat, telepon, email, tanggalLahir', actions)(withRouter(ProfilInfo))
