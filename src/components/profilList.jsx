import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions, store } from "../store/store";
import transaksi from '../images/transaksi.svg'
import logout from '../images/logout.svg'
import profil from '../images/profil.svg'
import wishlist from '../images/wishlist.svg'
import password from '../images/password.svg'

const ProfilList = (props) => {
    return(
        <React.Fragment>
            <div className='border d-flex align-items-center pl-3 bg-warning' style={{height:'50px'}}>
                <Link to='/profil' style={{color:'black'}}>
                    <img src={profil} alt="" width='30px' className='mr-3'/>
                    Profil
                </Link>
            </div>
            <div className='border d-flex align-items-center pl-3 bg-warning' style={{height:'50px'}}>
                <Link to='/riwayat-pesanan' style={{color:'black'}}>
                    <img src={transaksi} alt="" width='30px' className='mr-3'/>
                    Riwayat Pesanan
                </Link>
            </div>
            <div className='border d-flex align-items-center pl-3 bg-warning' style={{height:'50px'}}>
                <Link to='/wishlist' style={{color:'black'}}>
                    <img src={wishlist} alt="" width='30px' className='mr-3'/>
                    Wishlist
                </Link>
            </div>
            <div className='border d-flex align-items-center pl-3 bg-warning' style={{height:'50px'}}>
                <Link to='/ubahpassword' style={{color:'black'}}>
                    <img src={password} alt="" width='30px' className='mr-3'/>
                    Ubah Password
                </Link>
            </div>
            <div className='border d-flex align-items-center pl-3 bg-warning' style={{height:'50px'}}>
                <Link to='/' onClick={()=>props.afterLogOut()} style={{color:'black'}}>
                    <img src={logout} alt="" width='30px' className='mr-3'/>
                    Logout
                </Link>
            </div>
        </React.Fragment>
    )
}


export default connect('', actions)(withRouter(ProfilList))
