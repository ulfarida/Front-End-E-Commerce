import React from 'react'; 
import Header from '../components/header';
import ProfilList from '../components/profilList';
import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";
import axios from "axios"

class Riwayat extends React.Component {

    state = {
        transaksiList : []
    }

    componentDidMount = async () => {
        let transaksi = {
            method:"get",
            url: "https://babybun.my.id/transaksi",
            headers: {
                "Content-Type": "application/json",
                'Authorization':'Bearer ' + localStorage.getItem("token")
            }
        };

        await axios(transaksi)
            .then((response) => {
                this.setState({transaksiList : response.data})
            })
            .catch(function(error) {
                console.log(error)
            })
    }

    render () {

        const transaksiData = this.state.transaksiList
        const transaksiDetail = transaksiData.map((item) => {
            return (
                <tr className='bg-white'>
                    <td>{item.id}</td>
                    <td><Link style={{color:'black'}}>{item.nama_penerima}</Link></td>
                    <td>{item.alamat_pengiriman}</td>
                    <td>{item.no_hp_penerima}</td>
                    <td>Rp. {item.total_harga}</td>
                    <td>{item.status}</td>
                </tr>
            );
        });

        return (
            <React.Fragment>
                <Header/>
                <div className="container-fluid">
                    <div className="row mt-5 ml-3">
                        <div className="col-md-3 col-lg-3 col-sm-12 col-12">
                            <ProfilList />
                        </div>
                        <div className="col-md-9 col-lg-9 col-sm-12 col-12">
                        <div className="container py-0">
                            <div className="row text-center border-bottom justify-content-center">
                                <h3>Riwayat Pesanan</h3>
                            </div>
                        </div>
                            <table class="table table-bordered mt-3">
                                <thead>
                                    <tr className='bg-warning text-center'>
                                    <th scope="col">ID</th> 
                                    <th scope="col">Nama Penerima</th>
                                    <th scope="col">Alamat</th>
                                    <th scope="col">No HP Penerima</th>
                                    <th scope="col">Total Harga</th>
                                    <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {transaksiDetail}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                
            </React.Fragment>

        )
    }
}
export default connect('', actions)(withRouter(Riwayat));
