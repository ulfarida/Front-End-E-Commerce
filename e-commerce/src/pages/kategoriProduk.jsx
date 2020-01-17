import React from 'react'; 
import Header from '../components/header';
import Filter from '../components/filterProduk';
import Produk from '../components/produk';
import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";
import axios from "axios"

class KategoriProduk extends React.Component {

    componentDidMount = async () => { 
        const self = this
        const kategori = await self.props.match.params.kategori
        if(self.props.kategori!==kategori){
            await self.hitCategory();
        }
    }

    componentWillUpdate = async () =>{
        const self = this
        const kategori = await self.props.match.params.kategori
        if(self.props.kategori!==kategori){
            await self.hitCategory();
        }
    }

    hitCategory = async () => {
        const self = this
        let produk = {
            method:"get",
            url: "http://0.0.0.0:5000/produk",
            headers: {
                "Content-Type": "application/json"
            }
        };

        await axios(produk)
            .then(function(response){
                const produks = response.data.filter(item => {
                    if (item.kategori === self.props.kategori) {
                        return item;
                    }
                    return false;
                    })

                store.setState({ produkList : produks})
                console.log('response data', response.data);
            })
            .catch((error) => {
                alert("error");
            });
    }


    render () {

        let itemProduk;
        if(this.props.produkList!==undefined && this.props.produkList!==null) {
            const listProduk = this.props.produkList
            console.log('ini list produk', listProduk);
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
                            <Filter />
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
