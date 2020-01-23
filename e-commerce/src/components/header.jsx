import React from 'react';
import logo from '../images/logo.svg'
import search from '../images/search.png'
import cart from '../images/cart.svg'
import profile from '../images/profile.svg'
import { connect } from "unistore/react";
import { actions, store } from "../store/store";
import { Link, withRouter } from 'react-router-dom';
import admin from '../images/admin.svg'

const Header = (props) => {
    return(
        <React.Fragment>
            <nav className="navbar navbar-expand-md navbar-light" style={{backgroundColor:'#f0134d', height:'100px'}}>
            <div className="container">
                
                <div className="navbar-nav">
                    <Link to='/' className="nav-item nav-link active babybun" style={{color:'black', fontSize:'25px', color:'white'}}><img src={logo} alt="" style={{height:'65px'}}/>BABYBUN</Link>
                </div>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav">
                    </div>
                    <div className="navbar-nav">
                        <div className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" data-toggle="dropdown" style={{color:'white', fontSize:'20px'}}>Kategori</Link>
                            <div className="dropdown-menu">
                                <Link to='/makanan-susu' onClick={() => props.changeCategory('Makanan dan Susu')} className="dropdown-item">Makanan dan Susu</Link>
                                <Link to='/alat-makan' onClick={() => props.changeCategory('Alat Makan')} className="dropdown-item">Alat makan</Link>
                                <Link to='/perlengkapan-mandi' onClick={() => props.changeCategory('Perlengkapan Mandi')}className="dropdown-item">Perlengkapan Mandi</Link>
                                <Link to='/mainan' onClick={() => props.changeCategory('Mainan' )}className="dropdown-item">Mainan</Link>
                                <Link to='/pakaian' onClick={() => props.changeCategory('Pakaian')}className="dropdown-item">Pakaian</Link>
                                <Link to='/popok' onClick={() => props.changeCategory('Popok')}className="dropdown-item">Popok</Link>
                            </div>
                        </div>
                        <form className="form-inline">
                            <div className="input-group">                    
                                <input type="text" className="form-control" placeholder="Search" onChange={(e)=>this.props.setInput(e)} name='search'/>
                                <div className="input-group-append search-button">
                                    <Link to='/search' type="button" className="btn btn-warning"><img src={search} style={{height:'20px'}} alt="" onClick={()=>props.doSearch()}/></Link>
                                </div>
                            </div>
                        </form>
                    </div>
                    { localStorage.getItem("auth") == "true" ?
                    localStorage.getItem("isadmin") == "true" ?
                    <div className="navbar-nav">
                        <Link to='/admin/produk' className="nav-item nav-link" style={{color:'white', fontSize:'20px'}}>
                            <img src={admin} alt="" width='50px'/>
                        </Link>
                    </div>
                    :
                    <div className="navbar-nav">
                        <Link to='/keranjang'><img src={cart} alt="" style={{height:'40px'}} className='mr-5'/></Link>
                        <Link to='profil'><img src={profile} alt="" style={{height:'40px'}}/></Link>
                    </div>
                    :
                    <div className="navbar-nav">
                        <Link to='/login' style={{color:'white', fontSize:'20px'}} className="nav-item nav-link">Log In</Link>
                        <Link to='/register' style={{color:'white', fontSize:'20px'}}className="nav-item nav-link">Register</Link>
                    </div>
                    }
                </div>
            </div>
            </nav>
        </React.Fragment>
    )
}


export default connect('', actions)(withRouter(Header))
