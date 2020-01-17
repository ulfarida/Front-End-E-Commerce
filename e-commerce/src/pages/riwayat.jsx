import React from 'react'; 
import Header from '../components/header';
import ProfilList from '../components/profilList';
import ProfilInfo from '../components/profilInfo';
import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";
import RiwayatPesanan from '../components/riwayatPesanan';

class Riwayat extends React.Component {

    render () {
    
        return (
            <React.Fragment>
                <Header/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-lg-4 col-sm-12 col-12">
                            <ProfilList />
                        </div>
                        <div className="col-md-8 col-lg-8 col-sm-12 col-12">
                            <RiwayatPesanan />
                        </div>
                    </div>
                </div>
                
            </React.Fragment>

        )
    }
}
export default withRouter(Riwayat);
