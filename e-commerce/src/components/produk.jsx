import React from 'react';
import view from '../images/view.svg'
import search from '../images/search.png'
import profile from '../images/profile.svg'
import { Link, withRouter } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions, store } from "../store/store";
import axios from "axios"

class Produk extends React.Component{
    getDetailProduk = () => {
        this.props.history.push('/produk/'+this.props.number)
        // console.warn('ini produk ke', this.props.produkList[this.props.number])
    }

    // addKeranjang = async () => {
    //     const self = this
    //     const input = {
    //         produk_id : this.props.nama,
    //         kuantitas : this.props.alamat
    //     }
    //     let keranjang = {
    //         method:"post",
    //         url: "http://0.0.0.0:5000/keranjang",
    //         headers: {
    //             "Content-Type": "application/json",
    //             'Authorization':'Bearer ' + localStorage.getItem("token")
    //         }
    //     };

    //     await axios(keranjang)
    //         .then(function(response){
    //             store.setState({ produkList : response.data})
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //             alert("error");
    //         });
    // }

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
                            <a href="#" className="site-btn btn-line">ADD TO CART</a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


export default connect('produkList', actions)(withRouter(Produk))


