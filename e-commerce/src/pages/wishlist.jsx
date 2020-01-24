import React from 'react'; 
import Header from '../components/header';
import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";
import axios from "axios"
import deleted from '../images/delete.svg'
import ProfilList from '../components/profilList';
import Swal from "sweetalert2"

class Wishlist extends React.Component {

    componentDidMount = async () => {
        this.getWishlist()
    }

    getWishlist = async () => {
        let wishlist = {
            method:"get",
            url: "http://0.0.0.0:5000/wishlist",
            headers: {
                "Content-Type": "application/json",
                'Authorization':'Bearer ' + localStorage.getItem("token")
            }
        };

        await axios(wishlist)
            .then((response) => {
                store.setState({wishlistData : response.data})
            })
            .catch(function(error) {
                console.log(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!'
                })
            })
    }

    hapusProduk = async wishlistId => {
        const self = this
        let wishlist = {
            method:"delete",
            url: "http://0.0.0.0:5000/wishlist/"+(wishlistId)*1,
            headers: {
                "Content-Type": "application/json",
                'Authorization':'Bearer ' + localStorage.getItem("token")
            }
        };

        await axios(wishlist)
            .then((response) => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'produk berhasil di hapus dari wishlist',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(function(error) {
                console.log(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!'
                })
            })

        self.getWishlist()
    }


    render () {

        let wishlistDetail;
        let wishlistProduk;
        if(this.props.wishlistData!==undefined) {
            wishlistDetail = this.props.wishlistData

            wishlistProduk = wishlistDetail.map((value) => {
                return (
                    <tbody>
                        <tr>
                            <td className="product-col">
                                <img src={value.detail_produk.foto_produk} alt=""/>
                                <div className="pc-title">
                                    <h4>{value.detail_produk.nama_produk}</h4>
                                    <Link onClick={()=>this.hapusProduk(value.id)}><img src={deleted} alt="" width='20px'/></Link>
                                </div>
                            </td>
                            <td className="price-col">Rp. {value.detail_produk.harga}</td>
                        </tr>
                    </tbody>
                )
            })
        }

        return (
            <React.Fragment>
                <Header/>
                <div className="page-area cart-page spad mt-5">
                    <div className="container-fluid">
                        <div className="row mt-5 ml-3 mr-3">
                            <div className="col-md-3 col-lg-3 col-sm-12 col-12">
                                <ProfilList />
                            </div>
                            <div className="col-md-9 col-lg-9 col-sm-12 col-12">
                                <div className="container py-0">
                                    <div className="row text-center border-bottom justify-content-center">
                                    <h3>Wishlist</h3>
                                </div>
                            </div>
                                    <div className="cart-table mt-4">
                                        <table>
                                            <thead>
                                                <tr style={{backgroundColor:'#fcc200'}}>
                                                    <th className="product-th text-center">Produk</th>
                                                    <th width='150px'>Harga</th>
                                                </tr>
                                            </thead>
                                            {wishlistProduk}
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 pl-5">
                                <div className="cart-total-details">
                                </div>
                            </div>
                            </div>
                        </div>
            </React.Fragment>

        )
    }
}
export default  connect('auth, wishlistData, kuantitas', actions)(withRouter(Wishlist));


