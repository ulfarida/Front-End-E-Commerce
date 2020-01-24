import React from 'react'; 
import Header from '../components/header';
import AdminList from '../components/adminList';
import { Link, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";
import axios from "axios"


class Transaksi extends React.Component {

    state = {
        transaksiList : [],
        transaksiId : ''
    }

    componentDidMount = async () => {
        await this.getTransaksi()
    }

    getTransaksi =async  () => {
        let transaksi = {
            method:"get",
            url: "http://0.0.0.0:5000/admin/transaksi",
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

    editTransaksi = async (status, transaksiId) => {
        const self = this
        await self.setState({transaksiId : (transaksiId)*1})
        console.warn('transaksi id', self.state.transaksiId);
        
        const input = {
            "status" : status
        }
        const transaksi = {
            method:"put",
            url: "http://0.0.0.0:5000/admin/transaksi/"+ self.state.transaksiId,
            headers: {
                "Content-Type": "application/json",
                'Authorization':'Bearer ' + localStorage.getItem("token")
            },
            data : input
        };

        await axios(transaksi)
            .then((response) => {
                this.getTransaksi()
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
                    <td>
                        <div className="dropdown">
                            <div className="dropdown-toggle" data-toggle="dropdown">{item.status}</div>
                            <div className="dropdown-menu">
                                <div className="dropdown-item" onClick={()=>this.editTransaksi('belum dibayar', item.id)}>belum dibayar</div>
                                <div className="dropdown-item" onClick={()=>this.editTransaksi('dikemas', item.id)}>dikemas</div>
                                <div className="dropdown-item" onClick={()=>this.editTransaksi('dikirim', item.id)}>dikirim</div>
                                <div className="dropdown-item" onClick={()=>this.editTransaksi('selesai', item.id)}>selesai</div>
                                <div className="dropdown-item" onClick={()=>this.editTransaksi('batal', item.id)}>batal</div>
                            </div>
                        </div>
                    </td>
                </tr>
            );
        });

        return (
            <React.Fragment>
                <Header/>
                <div className="container-fluid">
                    <div className="row ml-3 mr-3">
                        <div className="col-md-3 col-lg-3 col-sm-12 col-12 mt-5">
                           <AdminList/>
                        </div>
                        <div className="col-md-9 col-lg-9 col-sm-12 col-12 mt-5 pl-5">
                            <table class="table table-bordered">
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
export default connect('profilData', actions)(withRouter(Transaksi));
