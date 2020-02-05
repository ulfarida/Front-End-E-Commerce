
import React from 'react'; 
import Header from '../components/header';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";
import axios from "axios"
import '../style/form.css'
import Swal from "sweetalert2"

class EditProduk extends React.Component {

    componentDidMount = async () => {
        const self = this
        console.warn('id produk', self.props.produkId )
        
        let produkData = {
            method:"get",
            url: "https://babybun.my.id/produk/"+(self.props.produkId)*1,
            headers: {
                "Content-Type": "application/json"
            }
        };

        await axios(produkData)
        
        .then(function(response){
            console.warn('cari produk details');
                store.setState({
                    namaProduk : response.data.nama_produk,
                    fotoProduk : response.data.foto_produk,
                    kategori : response.data.kategori,
                    harga : response.data.harga,
                    stok : response.data.stok,
                    deskripsiProduk : response.data.deskripsi,
                    lokasi : response.data .lokasi,
                })
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

    editProduk = async () => {
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
            method:"put",
            url: "https://babybun.my.id/admin/produk/"+(self.props.produkId)*1,
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
                    title: 'Produk berhasil diedit',
                    showConfirmButton: false,
                    timer: 1500
                  })
                self.props.history.push("/admin/produk");
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
                        <h2 className="text-center mb-5">Edit Produk</h2>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <form action="" onSubmit={e => e.preventDefault()} >
                            <div className="row">
                                <div className="col-25">
                                <label for="fname">Nama Produk</label>
                                </div>
                                <div className="col-75">
                                <input type="text" id="fname" name="namaProduk" onChange= {e => this.props.setInput(e)} value={this.props.namaProduk}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                <label for="lname">Link Foto Produk</label>
                                </div>
                                <div className="col-75">
                                <input type="text" id="lname" name="fotoProduk" onChange= {e => this.props.setInput(e)} value={this.props.fotoProduk} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                <label for="lname">Harga</label>
                                </div>
                                <div className="col-75">
                                <input type="text" id="lname" name="harga" onChange= {e => this.props.setInput(e)} value={this.props.harga}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                <label for="lname">Stok</label>
                                </div>
                                <div className="col-75">
                                <input type="text" id="lname" name="stok" onChange= {e => this.props.setInput(e)} value={this.props.stok}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                <label for="lname">Lokasi</label>
                                </div>
                                <div className="col-75">
                                <input type="text" id="lname" name="Lokasi" onChange= {e => this.props.setInput(e)} value={this.props.lokasi}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                <label for="country">Kategori</label>
                                </div>
                                <div className="col-75">
                                <select id="country" name="kategoriProduk" onChange= {e => this.props.setInput(e)}>
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
                                <textarea id="subject" name="deskripsiProduk" style={{height:"200px"}} onChange= {e => this.props.setInput(e)} value={this.props.deskripsiProduk}></textarea>
                                </div>
                            </div>
                            <div className="row ">
                                <input style={{backgroundColor:'#f0134d'}} type="submit" value="Edit Produk" onClick= {() => this.editProduk()} />
                            </div>
                            </form>
                        </div>
                    </div>
                    </div>

            </React.Fragment>

        )
    }
    }
export default connect('namaProduk, kategoriProduk, fotoProduk, harga, stok, lokasi, deskripsiProduk, foto_profil, produkId', actions)(withRouter(EditProduk))
