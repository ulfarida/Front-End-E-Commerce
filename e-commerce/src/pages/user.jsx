import React from 'react'; 
import Header from '../components/header';
import AdminList from '../components/adminList';
import { Link, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store/store";
import axios from "axios"
import deleted from '../images/delete.svg'
import Swal from "sweetalert2"


class User extends React.Component {

    state = {
        userList : []
    }

    componentDidMount = async () => {
        this.getUserList()
    }

    getUserList = async () => {
        let user = {
            method:"get",
            url: "http://0.0.0.0:5000/admin/user",
            headers: {
                "Content-Type": "application/json",
                'Authorization':'Bearer ' + localStorage.getItem("token")
            }
        };

        await axios(user)
            .then((response) => {
                this.setState({userList : response.data})
            })
            .catch(function(error) {
                console.log(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!'
                })
            })
    }

    deleteUser = async id => {      
        let userData = {
            method:"delete",
            url: "http://0.0.0.0:5000/admin/user/"+id,
            headers: {
                "Content-Type": "application/json",
                'Authorization':'Bearer ' + localStorage.getItem("token")
            }
        };

        await axios(userData)
            .then((response) => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'User berhasil dihapus',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(function(error) {
                console.log(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!'
                })
            })

        this.getUserList()
    }

    render () {

        const userData = this.state.userList
        const userDetail = userData.map((item) => {
            return (
                <tr className='bg-white text-center'>
                    <td>{item.id}</td>
                    <td><Link style={{color:'black'}}>{item.username}</Link></td>
                    <td>{item.email}</td>
                    <td><Link onClick={ () => this.deleteUser(item.id)}><img src={deleted} alt="" style={{width:'25px'}}/></Link></td>
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
                                <thead className='text-center'>
                                    <tr className='bg-warning'>
                                    <th scope="col">ID</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Hapus User</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userDetail}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                
            </React.Fragment>

        )
    }
}
export default connect('profilData', actions)(withRouter(User));
