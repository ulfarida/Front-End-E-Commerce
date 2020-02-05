import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../store/store";

const Filter = (props) => {
    return(
        <React.Fragment>
            <div className="container border bg-white mt-5 pb-5 rounded">
                <div className="col-lg-12 mt-5 mb-3 text-center">
                    <h5>Filter</h5>
                </div>
                <div className="row">
                <div className="col-lg-12">
                <div className="nav-item dropdown mb-2  text-center">
                    <a href="#" className="btn btn-info dropdown-toggle" data-toggle="dropdown">Kategori&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</a>
                    <div className="dropdown-menu">
                        <Link to='/makanan-susu' onClick={() => props.changeCategory('Makanan dan Susu')} className="dropdown-item">Makanan dan Susu</Link>
                        <Link to='/alat-makan' onClick={() => props.changeCategory('Alat Makan')} className="dropdown-item">Alat makan</Link>
                        <Link to='/perlengkapan-mandi' onClick={() => props.changeCategory('Perlengkapan Mandi')} className="dropdown-item">Perlengkapan Mandi</Link>
                        <Link to='/mainan' onClick={() => props.changeCategory('Mainan')} className="dropdown-item">Mainan</Link>
                        <Link to='/pakaian' onClick={() => props.changeCategory('Pakaian')} className="dropdown-item">Pakaian</Link>
                        <Link to='/popok' onClick={() => props.changeCategory('Popok')} className="dropdown-item">Popok</Link>
                    </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                <div className="nav-item dropdown mb-2  text-center">
                    <a href="#" className="btn btn-info dropdown-toggle" data-toggle="dropdown">Harga&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;</a>
                    <div className="dropdown-menu">
                        <a href="#" className="dropdown-item">Dibawah Rp 100.000</a>
                        <a href="#" className="dropdown-item">Rp 100.000-Rp 200.000</a>
                        <a href="#" className="dropdown-item">Rp 200.000-Rp 300.000</a>
                        <a href="#" className="dropdown-item">Rp 300.000-Rp 500.000</a>
                        <a href="#" className="dropdown-item">Diatas Rp 500.000</a>
                    </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                <div className="nav-item dropdown mb-2  text-center">
                    <a href="#" className="btn btn-info dropdown-toggle" data-toggle="dropdown">Lokasi&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</a>
                    <div className="dropdown-menu">
                        <a href="#" className="dropdown-item">Jakarta</a>
                        <a href="#" className="dropdown-item">Malang</a>
                        <a href="#" className="dropdown-item">Surabaya</a>
                    </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                <div className="nav-item dropdown mb-2 text-center">
                    <a href="#" className="btn btn-info dropdown-toggle" data-toggle="dropdown">Rating&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</a>
                    <div className="dropdown-menu">
                        <a href="#" className="dropdown-item">3++</a>
                        <a href="#" className="dropdown-item">4++</a>
                        <a href="#" className="dropdown-item">5</a>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </React.Fragment>
    )
}


export default  connect('', actions)(Filter)
