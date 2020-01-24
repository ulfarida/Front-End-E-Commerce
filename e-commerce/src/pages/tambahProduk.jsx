
import React from 'react'; 
import Header from '../components/header';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";
import axios from "axios"
import '../style/form.css'
import Swal from 'sweetalert2';

class TambahProduk extends React.Component {

    addProduct = async (e) => {
        const self = this
        const input = {
            nama_produk : this.props.namaProduk,
            foto_produk : this.props.fotoProduk,
            kategori : this.props.kategoriProduk,
            harga : (this.props.harga)*1,
            stok : (this.props.stok)*1,
            deskripsi : this.props.deskripsiProduk,
            lokasi : this.props.lokasi
        }

        let produkData = {
            method:"post",
            url: "http://0.0.0.0:5000/admin/produk",
            headers: {
                "Content-Type": "application/json",
                'Authorization':'Bearer ' + localStorage.getItem("token")
            },
            data : input
        };

        await axios(produkData)
            .then(function(response){
                Swal.fire({
					position: 'center',
					icon: 'success',
					title: 'Produk berhasil ditambahkan',
					showConfirmButton: false,
					timer: 1500
				});
                self.props.history.push("/tambah-produk");
            })
            .catch(function(error){
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!'
                })
            });
    }


    render () {
        return (
            <React.Fragment>
                <Header/>
                <div className="container mt-2">
                        <h2 className="text-center mb-5">Tambah Produk</h2>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <form action="" onSubmit={e => e.preventDefault()} >
                            <div className="row">
                                <div className="col-25">
                                <label for="fname">Nama Produk</label>
                                </div>
                                <div className="col-75">
                                <input type="text" id="fname" name="namaProduk" onChange= {e => this.props.setInput(e)} required/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                <label for="lname">Link Foto Produk</label>
                                </div>
                                <div className="col-75">
                                <input type="text" id="lname" name="fotoProduk" onChange= {e => this.props.setInput(e)} required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                <label for="lname">Harga</label>
                                </div>
                                <div className="col-75">
                                <input type="text" id="lname" name="harga" onChange= {e => this.props.setInput(e)} required/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                <label for="lname">Stok</label>
                                </div>
                                <div className="col-75">
                                <input type="text" id="lname" name="stok" onChange= {e => this.props.setInput(e)} required/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                <label for="lname">Lokasi</label>
                                </div>
                                <div className="col-75">
                                <input type="text" id="lname" name="Lokasi" onChange= {e => this.props.setInput(e)} required/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                <label for="country">Kategori</label>
                                </div>
                                <div className="col-75">
                                <select id="country" name="kategoriProduk" onChange= {e => this.props.setInput(e)} required>
                                    <option value="">Pilih Kategori *</option>
                                    <option value="Makanan dan Susu">Makanan dan Susu</option>
                                    <option value="Alat Makan">Alat Makan</option>
                                    <option value="Perlengkapan Mandi">Perlengkapan Mandi</option>
                                    <option value="Mainan">Mainan</option>
                                    <option value="Pakaian">Pakaian</option>
                                    <option value="Popok">Popok</option>
                                </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                <label for="subject">Deskripsi Produk</label>
                                </div>
                                <div className="col-75">
                                <textarea id="subject" name="deskripsiProduk" style={{height:"200px"}}onChange= {e => this.props.setInput(e)} required></textarea>
                                </div>
                            </div>
                            <div className="row ">
                                <input style={{backgroundColor:'#f0134d'}} type="submit" value="Tambah Produk" onClick= {() => this.addProduct()} />
                            </div>
                            </form>
                        </div>
                    </div>
                    </div>

            </React.Fragment>

        )
    }
    }
export default connect('namaProduk, kategoriProduk, fotoProduk, harga, stok, lokasi, deskripsiProduk, foto_profil', actions)(withRouter(TambahProduk))
