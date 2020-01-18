import React from 'react'; 
import Header from '../components/header';
import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";
import axios from "axios"

class DetailProduk extends React.Component {

    componentDidMount = async () => {
        const self = this
        const index = await self.props.match.params.index;
        const listProduk = await self.props.produkList;
        const currentProduk = await listProduk[index];

        if(currentProduk==null){
            this.props.history.replace('/not_match')
        }
        await store.setState({produkData:currentProduk})
    }

    addKeranjang = async () => {
        const self = this
        const input = {
            produk_id : self.props.produkData.id,
            kuantitas : parseInt(self.props.kuantitas)
        }
        let keranjang = {
            method:"post",
            url: "http://0.0.0.0:5000/keranjang",
            headers: {
                "Content-Type": "application/json",
                'Authorization':'Bearer ' + localStorage.getItem("token")
            },
            data : input
        };

        await axios(keranjang)
            .then(function(response){
                alert("produk berhasil ditambahkan ke keranjang");
            })
            .catch((error) => {
                console.log(error);
                alert("error");
            });
    }

    render () {

        return (
            <React.Fragment>
                <Header/>             
                <div className="page-area product-page spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <figure>
                                    <img className="product-big-img" src={this.props.produkData.foto_produk} alt="" style={{width:'95%'}}/>
                                </figure>
                            </div>
                            <div className="col-lg-6">
                                <div className="product-content">
                                    <h2>{this.props.produkData.nama_produk}</h2>
                                    <div className="pc-meta">
                                    <h4 className="price">Rp. {this.props.produkData.harga}</h4>
                                    </div>
                                    <p>{this.props.produkData.deskripsi}</p>
                                    <div>
                                        <span>Stock :</span>
                                        <span>{this.props.produkData.stok}</span>
                                    </div>
                                    <div className="quantity mb-5">
                                        <span>Kuantitas : </span>
                                        <input type="number" min="1" max={this.props.produkData.stok} name="kuantitas" step="1" onChange= {e => this.props.setInput(e)}/>
                                    </div>
                                    <Link onClick={() => this.addKeranjang()} className="site-btn btn-full border bg-white py-3 pr-3 pl-3">Tambah ke keranjang</Link>
                                </div>
                            </div>
                        </div>
                        <div className="product-details">
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1">
                                    <ul className="nav" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="1-tab" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">Deskripsi Produk</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="3-tab" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false">Review (0)</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content">
                                        <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab-1">
                                            <p>{this.props.produkData.deskripsi}</p>
                                        </div>
                                        <div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="tab-3">
                                            
                                        </div>
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
export default connect('kategori, produkList, produkData, kuantitas', actions)(withRouter(DetailProduk));

