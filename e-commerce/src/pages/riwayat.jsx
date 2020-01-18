import React from 'react'; 
import Header from '../components/header';
import ProfilList from '../components/profilList';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import RiwayatPesanan from '../components/riwayatPesanan';
import { actions } from "../store/store";
import axios from "axios"

class Riwayat extends React.Component {

    state = {
        transaksiList : []
    }

    componentDidMount = async () => {
        let transaksi = {
            method:"get",
            url: "http://0.0.0.0:5000/transaksi",
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
                <RiwayatPesanan value={item}
                    {...this.props}
                    />
            );
        });
    
        return (
            <React.Fragment>
                <Header/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-lg-4 col-sm-12 col-12">
                            <ProfilList />
                        </div>
                        <div className="col-md-8 col-lg-8 col-sm-12 col-12">
                            {transaksiDetail}
                        </div>
                    </div>
                </div>
                
            </React.Fragment>

        )
    }
}
export default connect('', actions)(withRouter(Riwayat));
