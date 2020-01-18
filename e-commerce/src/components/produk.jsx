import React from 'react';
import view from '../images/view.svg'
import { Link, withRouter } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions } from "../store/store";
class Produk extends React.Component{
    getDetailProduk = () => {
        this.props.history.push('/produk/'+this.props.number)
    }

    render(){
        return(
            <React.Fragment>
                <div className="mix col-lg-4 col-md-6 col-6 best">
                    <div className="product-item">
                        <figure>
                            <img src={this.props.foto_produk} alt=""/>
                            <div className="pi-meta">
                                <Link onClick = {()=>this.getDetailProduk()}>
                                    <div className="pi-m-right text-center">
                                        <img src={view} alt="" style={{width:'30px'}}/>
                                        <p>Lihat Produk</p>
                                    </div>
                                </Link>
                            </div>
                        </figure>
                        <div className="product-info">
                            <Link onClick = {()=>this.getDetailProduk()}><h6>{this.props.nama_produk}</h6></Link>
                            <p>Rp. {this.props.harga}</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


export default connect('produkList', actions)(withRouter(Produk))


