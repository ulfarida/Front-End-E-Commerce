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
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-lg-4 col-sm-12 col-12">
                            <ProfilList />
                        </div>
                        <div className="col-md-8 col-lg-8 col-sm-12 col-12">
                            <ProfilInfo />
                        </div>
                    </div>
                </div>
                
            </React.Fragment>

        )
    }
}
export default connect('profilData', actions)(withRouter(Profil));
