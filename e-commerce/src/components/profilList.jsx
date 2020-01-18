import React from 'react';
import profile from '../images/profile.svg'
import { Link, withRouter } from 'react-router-dom';

class ProfilList extends React.Component{

    afterLogOut = async () => {
        localStorage.removeItem("token")
        localStorage.setItem("auth", "false")
        await this.props.history.push('/')
    }

    render(){

        return(
            <React.Fragment>
                <div className="container bg-white mt-3 rounded pt-2">
                    <div className="col-lg-12 mt-5 mb-3 text-center mb-3">
                        <img src={profile} style={{height:'150px'}} alt=""/>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-5 pl-5">
                            <Link to="/profil"><h6>Profil</h6><br/></Link>
                            <Link to="/riwayat-pesanan"><h6>Riwayat Pesanan</h6><br/></Link>
                            <Link><h6>Wishlist</h6><br/></Link>
                            <Link to='/ubahpassword'><h6>Ubah Password</h6><br/></Link>
                            <Link onClick={() => this.afterLogOut()}><h6>Log Out</h6><br/></Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


export default withRouter(ProfilList)
