import React from 'react'; 
import Header from '../components/header';
import Filter from '../components/filterProduk';
import Produk from '../components/produk';
import { withRouter  } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";
import axios from "axios"

class ListProduk extends React.Component {

    componentDidMount = async () => { 

        let produk = {
            method:"get",
            url: "http://0.0.0.0:5000/produk",
            headers: {
                "Content-Type": "application/json"
            }
        };

        const result = await axios(produk)
            .then(function(response){
                store.setState({ produkList : response.data})
            })
            .catch((error) => {
                console.log(error);
                alert("error");
            });
        console.warn('axios', result);
        
    }


    render () {

        const listProduk = this.props.produkList
        const itemProduk = listProduk.map((item, key) => {
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
export default connect('kategori, produkList', actions)(withRouter(ListProduk));
