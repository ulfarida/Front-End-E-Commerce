import React from 'react'; 
import Header from '../components/header';
import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";
import axios from 'axios';
import Swal from "sweetalert2";

class Checkout extends React.Component {

    state = {
        nama : this.props.nama,
        telepon : this.props.telepon,
        alamat : this.props.alamat,
        email : this.props.email,
        metodePembayaran : this.props.metodePembayaran,
        jasaKirim : this.props.jasaKirim
    }

    changeInput = (event) => {
        this.setState({ [event.target.name] : event.target.value })
    }

    getCheckout = async () => {
        const input = {
            nama_penerima : this.state.nama,
            no_hp_penerima : this.state.telepon,
            alamat_pengiriman : this.state.alamat,
            metode_pembayaran : this.state.metodePembayaran,
            jasa_kirim : this.state.jasaKirim
        }

        let checkout = {
            method:"post",
            url: "https://babybun.my.id/checkout",
            headers: {
                "Content-Type": "application/json",
                'Authorization':'Bearer ' + localStorage.getItem("token")
            },
            data : input
        };

        await axios(checkout)
            .then((response) => {
                this.props.history.push('/checkout-berhasil')
            })
            .catch(function(error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!'
                })
                console.log(error)
            })
    }

    render () {
        let checkoutDetail;
        let checkoutProduk;
        if(this.props.keranjangData!==undefined) {
            checkoutDetail = this.props.keranjangData
            checkoutProduk = checkoutDetail.map((value) => {
                return (
                    <tr>
                        <td>{value.produk.nama_produk}</td>
                        <td>{value.harga}</td>
                    </tr>
                )
            })
        }
    
        return (
            <React.Fragment>
                <Header/>
                <div className="page-area cart-page spad">
                    <div className="container mt-5">
                        <form className="checkout-form" onSubmit={e => e.preventDefault()}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <h4 className="checkout-title">Informasi Pengiriman</h4>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <label className='mb-0 pb-0'>Nama Penerima</label>
                                            <input type="text" name="nama" value={this.state.nama} onChange={(e) => this.changeInput(e)}/>
                                            <label className='mb-0 pb-0'>Nomer Telepon Penerima</label>
                                            <input type="text"  name="telepon" value={this.state.telepon} onChange={(e) => this.changeInput(e)}/>
                                            <label className='mb-0 pb-0'>Alamat Pengiriman</label>
                                            <input type="text"  name="alamat" value={this.state.alamat} onChange={(e) => this.changeInput(e)}/>
                                            <label className='mb-0 pb-0'>Email</label>
                                            <input type="email"  name="email" value={this.state.email} onChange={(e) => this.changeInput(e)}/>
                                            <label className='mb-0 pb-0'>Metode Pembayaran</label>
                                            <select  name="metodePembayaran" value={this.state.metodePembayaran} onChange={(e) => this.changeInput(e)}>
                                                <option>Transfer Bank</option>
                                                <option>Virtual Account</option>
                                                <option>Kartu Kredit/ Debit Online</option>
                                                <option>Indomart</option>
                                                <option>Alfamart</option>
                                                <option></option>
                                            </select>
                                            <label className='mb-0 pb-0'>Jasa Kirim</label>
                                            <select  name="jasaKirim" value={this.state.jasaKirim} onChange={(e) => this.changeInput(e)}>
                                                <option>JNE</option>
                                                <option>JNT Express</option>
                                                <option>Grab Express</option>
                                                <option>Gosend Instan</option>
                                                <option></option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="order-card">
                                        <div className="order-details">
                                            <div className="od-warp">
                                                <h4 className="checkout-title">Pesanan Anda</h4>
                                                <table className="order-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Produk</th>
                                                            <th>Total Harga</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {checkoutProduk}
                                                        <tr className="mt-5 pt-5">
                                                            <td>SubTotal</td>
                                                            <td>{this.props.keranjang.total_harga}</td>
                                                        </tr>
                                                        <tr className="cart-subtotal">
                                                            <td>Ongkos Kirim</td>
                                                            <td>Free</td>
                                                        </tr>
                                                        <tr className="cart-subtotal">
                                                            <td>Diskon</td>
                                                            <td>0</td>
                                                        </tr>
                                                    </tbody>
                                                    <tfoot>
                                                        <tr className="order-total">
                                                            <th>Total</th>
                                                            <th>{this.props.keranjang.total_harga}</th>
                                                        </tr>
                                                    </tfoot>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="pt-5">
                                            <Link onClick={()=>this.getCheckout()} className="site-btn btn-full mt-5" style={{color: "black"}}>Buat Pesanan</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}

export default  connect('nama, alamat, telepon, email, metodePembayaran, jasaKirim, keranjangData, keranjang', actions)(withRouter(Checkout));



