import React from 'react'; 
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";
class RiwayatPesanan extends React.Component {

    render () {

        return (
            <React.Fragment>
                <div className="container">
                    <div className="border bg-white py-3 pl-3 pr-3">
                        <h4>Order ID : {this.props.value.id}</h4>
                        <h6>Nama Penerima : {this.props.value.nama_penerima} </h6>
                        <h6>No HP : {this.props.value.no_hp_penerima}</h6>
                        <h6>Alamat : {this.props.value.alamat_pengiriman}</h6>
                        <h6>Total Harga : {this.props.value.total_harga}</h6>
                        <h6>Status : {this.props.value.status}</h6>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default  connect('', actions)(withRouter(RiwayatPesanan));


