import React from 'react'; 
import Header from '../components/header';
import AdminList from '../components/adminList';
import { Link, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";
import axios from "axios"
import edit from '../images/edit.svg'
import deleted from '../images/delete.svg'


class ProdukAdmin extends React.Component {

    state = {
        produkList : []
    }

    componentDidMount = async () => {
        await this.getProdukList()
    }

    getProdukList = async () => {
        let transaksi = {
            method:"get",
            url: "http://0.0.0.0:5000/produk",
            headers: {
                "Content-Type": "application/json"
            }
        };

        await axios(transaksi)
            .then((response) => {
                this.setState({produkList : response.data})
            })
            .catch(function(error) {
                console.log(error)
            })
    }

    deleteProduk = async id => {
        let produkData = {
            method:"delete",
            url: "http://0.0.0.0:5000/admin/produk/"+id,
            headers: {
                "Content-Type": "application/json",
                'Authorization':'Bearer ' + localStorage.getItem("token")
            }
        };

        await axios(produkData)
            .then((response) => {
                alert('produk berhasil dihapus')
            })
            .catch(function(error) {
                console.log(error)
            })

        this.getProdukList()
    }

    render () {

        const produkData = this.state.produkList
        const produkDetail = produkData.map((item) => {
            return (
                <tr className='bg-white'>
                    <td>{item.id}</td>
                    <td><Link style={{color:'black'}}>{item.nama_produk}</Link></td>
                    <td>{item.kategori}</td>
                    <td>Rp. {item.harga}</td>
                    <td>{item.stok}</td>
                    <td>{item.lokasi}</td>
                    <td><Link to='/edit-produk' onClick={()=>store.setState({produkId : item.id})}><img src={edit} alt="" style={{width:'20px'}} className='mr-3'/></Link>
                    <Link onClick={ () => this.deleteProduk(item.id)}><img src={deleted} alt="" style={{width:'20px'}}/></Link></td>
                </tr>
            );
        });

        return (
            <React.Fragment>
                <Header/>
                <div className="container-fluid">
                    <div className="row ml-3 mr-2">
                        <div className="col-md-3 col-lg-3 col-sm-12 col-12 mt-5">
                           <AdminList/>
                        </div>
                        <div className="col-md-9 col-lg-9 col-sm-12 col-12 mt-5 pl-3">
                            <Link to='/tambah-produk'><button type="button" className="btn btn-danger">Tambah Produk</button></Link>
                            <table className="table table-hover table-bordered mt-4">
                                <thead>
                                    <tr className='bg-warning text-center'>
                                        <th scope="col">ID</th>
                                        <th scope="col">Nama Produk</th>
                                        <th scope="col">Kategori</th>
                                        <th scope="col" width='120px'>Harga</th>
                                        <th scope="col">Stok</th>
                                        <th scope="col">Lokasi</th>
                                        <th scope="col" width='85px'>Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {produkDetail}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                
            </React.Fragment>

        )
    }
}
export default connect('profilData', actions)(withRouter(ProdukAdmin));
