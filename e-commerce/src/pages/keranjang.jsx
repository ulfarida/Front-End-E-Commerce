import React from 'react'; 
import Header from '../components/header';
import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";
import axios from "axios"

class Keranjang extends React.Component {

    componentDidMount = async () => {

        let keranjang = {
            method:"get",
            url: "http://0.0.0.0:5000/keranjang",
            headers: {
                "Content-Type": "application/json",
                'Authorization':'Bearer ' + localStorage.getItem("token")
            }
        };

        await axios(keranjang)
            .then((response) => {
                store.setState({keranjang : response.data, keranjangData : response.data.produk})
            })
            .catch(function(error) {
                console.log(error)
            })
    }


    render () {

        let keranjangDetail;
        let keranjangProduk;
        if(this.props.keranjangData!==undefined) {
            keranjangDetail = this.props.keranjangData

            keranjangProduk = keranjangDetail.map((value) => {
                return (
                    <tbody>
                        <tr>
                            <td className="product-col">
                                <img src={value.produk.foto_produk} alt=""/>
                                <div className="pc-title">
                                    <h4>{value.produk.nama_produk}</h4>
                                    <a href="#">Edit Product</a>
                                </div>
                            </td>
                            <td className="price-col">Rp. {value.produk.harga}</td>
                            <td className="quy-col">
                                <div className="quy-input">
                                    {value.produk.kuantitas}
                                    <input type="number" min="01" style={{width:'50px'}} placeholder={value.kuantitas}/>
                                </div>
                            </td>
                            <td className="total-col">Rp. {value.harga}</td>
                        </tr>
                    </tbody>
                )
            })
        }

        return (
            <React.Fragment>
                <Header/>
                <div className="page-area cart-page spad mt-5">
                    <div className="container">
                        <div className="cart-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="product-th text-center">Produk</th>
                                        <th>Harga</th>
                                        <th>Kuantitas</th>
                                        <th className="total-th">Total</th>
                                    </tr>
                                </thead>
                                {keranjangProduk}
                            </table>
                        </div>
                        <div className="row cart-buttons align-items-center">
                            <div className="col-lg-4 col-md-4">
                                <h5>Total harga :</h5>
                                <h1>Rp. {this.props.keranjang.total_harga}</h1>
                            </div>
                            <div className="col-lg-4 col-md-4 text-lg-right text-left">
                            </div>
                            <div className="col-lg-4 col-md-4 text-lg-center text-center site-btn btn-continue">
                                <Link onClick={() => this.props.history.push('/checkout')} className="text-center" href="checkout.html">Checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 pl-5">
                    <div className="cart-total-details">
                    </div>
                </div>
            </React.Fragment>

        )
    }
}
export default  connect('auth, keranjang, keranjangData', actions)(withRouter(Keranjang));


