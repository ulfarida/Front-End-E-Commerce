import React from 'react';
import profile from '../images/profile.svg'
import { Link, withRouter } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions, store } from "../store/store";
import transaksi from '../images/transaksi.svg'
import user from '../images/user.svg'
import produk from '../images/produk.svg'
import logout from '../images/logout.svg'

const AdminList = (props) => {
    return(
        <React.Fragment>
            <div className='border d-flex align-items-center pl-3 bg-warning' style={{height:'50px'}}>
                <Link to='/admin/transaksi' style={{color:'black'}}>
                    <img src={transaksi} alt="" width='30px' className='mr-3'/>
                    Riwayat Transaksi
                </Link>
            </div>
            <div className='border d-flex align-items-center pl-3 bg-warning' style={{height:'50px'}}>
                <Link to='/admin/produk' style={{color:'black'}}>
                    <img src={produk} alt="" width='30px' className='mr-3'/>
                    Produk
                </Link>
            </div>
            <div className='border d-flex align-items-center pl-3 bg-warning' style={{height:'50px'}}>
                <Link to='/admin/user' style={{color:'black'}}>
                    <img src={user} alt="" width='30px' className='mr-3'/>
                    User
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


export default connect('', actions)(withRouter(AdminList))
