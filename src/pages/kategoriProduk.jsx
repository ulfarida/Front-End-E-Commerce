import React from 'react'; 
import Header from '../components/header';
import Filter from '../components/filterProduk';
import Produk from '../components/produk';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";
import axios from "axios"
import Swal from "sweetalert2"

class KategoriProduk extends React.Component {

    componentDidMount = async () => {
        let produk = {
            method:"get",
            url: "https://babybun.my.id/produk",
            headers: {
                "Content-Type": "application/json"
            }
        };

        await axios(produk)
            .then(async (response) => {
                const produks = response.data.filter(item => {
                    if (item.kategori === this.props.kategori) {
                        return item;
                    }
                    return false;
                    })
                await store.setState({ produkList : produks})
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!'
                })
            });
    }


    render () {

        let itemProduk;
        if(this.props.produkList!==undefined && this.props.produkList!==null) {
            const listProduk = this.props.produkList
            itemProduk = listProduk.map((item, key) => {
                return (
                    <Produk 
                        key={key} 
                        number = {key}
                        nama_produk={item.nama_produk} 
                        foto_produk={item.foto_produk} 
                        harga={item.harga}
                        stok={item.stok}
                        deskripsi={item.deskripsi}
                        lokasi={item.lokasi} 
                        {...this.props}
                        />
                );
            });
        }
        return (
            <div>
                <Header/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <Filter/>
                        </div>
                        <div className="col-md-9 mr-0 ml-0">
                            <div className="row search-result mt-5">
                                {itemProduk}
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

        )
    }
}
export default connect('kategori, produkList', actions)(withRouter(KategoriProduk));
