import React from 'react';
import logo from '../images/logo.svg'
import search from '../images/search.png'
import cart from '../images/cart.svg'
import profile from '../images/profile.svg'
import { connect } from "unistore/react";
import { actions, store } from "../store/store";
import { Link, withRouter } from 'react-router-dom';

class Header extends React.Component{

    render(){

        const isLogin = localStorage.getItem("auth")
        console.warn('ini islogin', isLogin)

        return(
            <React.Fragment>
                <nav className="navbar navbar-expand-md navbar-light" style={{backgroundColor:'#f0134d', heigh:'200px'}}>
                <div className="container">
                    <img src={logo} alt="" style={{height:'65px'}}/>
                    <div className="navbar-nav">
                        <Link to='/' className="nav-item nav-link active babybun" style={{color:'black', fontSize:'25px', color:'white'}}>BABYBUN</Link>
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
                                    <Link to='/makanan-susu' onClick={() => store.setState({kategori : 'Makanan dan Susu'})}className="dropdown-item">Makanan dan Susu</Link>
                                    <Link to='/alat-makan' onClick={() => store.setState({kategori : 'Alat Makan'})} className="dropdown-item">Alat makan</Link>
                                    <Link to='/perlengkapan-mandi' onClick={() => store.setState({kategori : 'Perlengkapan Mandi' })}className="dropdown-item">Perlengkapan Mandi</Link>
                                    <Link to='/mainan' onClick={() => store.setState({kategori : 'Mainan' })}className="dropdown-item">Mainan</Link>
                                    <Link to='/pakaian' onClick={() => store.setState({kategori : 'Pakaian' })}className="dropdown-item">Pakaian</Link>
                                    <Link to='/popok' onClick={() => store.setState({kategori : 'Popok' })}className="dropdown-item">Popok</Link>
                                </div>
                            </div>
                            <form className="form-inline">
                                <div className="input-group">                    
                                    <input type="text" className="form-control" placeholder="Search"/>
                                    <div className="input-group-append search-button">
                                        <button type="button" className="btn btn-warning"><img src={search} style={{height:'20px'}} alt=""/></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        { isLogin == "true" ?
                        <div className="navbar-nav">
                            <Link to='/keranjang'><img src={cart} alt="" style={{height:'40px'}} className='mr-5'/></Link>
                            <Link to='profil'><img src={profile} alt="" style={{height:'40px'}}/></Link>
                            {/* <a href="#" className="nav-item nav-link">Log Out</a> */}
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
}


export default connect('auth', actions)(withRouter(Header))
