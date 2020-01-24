import React from 'react'; 
import Header from '../components/header';
import ProfilList from '../components/profilList';
import ProfilInfo from '../components/profilInfo';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";
import axios from "axios"


class Profil extends React.Component {

    componentDidMount = async () => { 

        let profil = {
            method:"get",
            url: "http://0.0.0.0:5000/profil",
            headers: {
                "Content-Type": "application/json",
                'Authorization':'Bearer ' + localStorage.getItem("token")
            }
        };

        await axios(profil)
            .then(function(response){
                store.setState({ 
                    profilData : response.data, 
                    nama : response.data.nama,
                    alamat : response.data.alamat,
                    telepon : response.data.no_hp,
                    email : response.data.email,
                    tanggalLahir : response.data.tanggal_lahir,
                })
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
                <div className="container-fluid">
                    <div className="row mt-5 ml-3 mr-3">
                        <div className="col-md-3 col-lg-3 col-sm-12 col-12">
                            <ProfilList />
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-7 col-lg-7 col-sm-12 col-12">
                            <ProfilInfo />
                        </div>
                    </div>
                </div>
                
            </React.Fragment>

        )
    }
}
export default connect('profilData', actions)(withRouter(Profil));
