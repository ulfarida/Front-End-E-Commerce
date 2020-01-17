import React from 'react'; 
import Header from '../components/header';
import check from '../images/check.svg'
import Filter from '../components/filterProduk';
import Produk from '../components/produk';
import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";

class CheckoutSukses extends React.Component {

    render () {

        return (
            <React.Fragment>
                <Header/>
                <div className="container">
                   <div className="row">
                       <div className="col-lg-2 col-md-2 col-sm-1 col-1"></div>
                       <div className="col-lg-8 col-md-8 col-sm-10 col-10 pt-4">
                           <div className="border bg-white">
                               <div className="row pl-5 pr-5 py-4 align-items-center">
                                   <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                       <img className="" src={check} alt="" width="100%" />
                                   </div>
                                   <div className="col-lg-8 col-md-8 col-sm-5 col-5">
                                       <h2>Pembelian Berhasil</h2>
                                   </div>
                               </div>
                               <div className="pl-5 pr-5 mt-2 mb-5 text-center">
                                   <div>
                                        <h5>Selesaikan pembayaran anda dalam waktu 24 jam</h5><br/>
                                        <h3>Rp. 500.000</h3>
                                   </div>
                                       <h6>Transfer pembayaran anda ke</h6>
                                   <div className="border py-3 pl-3 mb-3" style={{backgroundColor : '#ff6f5e'}}>
                                       <h5>rekening BRI</h5>
                                       <h2>0051.0119.3773.509</h2>
                                       <h6>atas nama PT. BABYBUN Tbk</h6>
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
export default connect('', actions)(withRouter(CheckoutSukses));
