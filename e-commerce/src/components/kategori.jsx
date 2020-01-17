import React from 'react';
import milk from '../images/milk.svg'
import { Link, withRouter } from 'react-router-dom';
import { connect } from "unistore/react";
import { actions, store } from "../store/store";
import best from '../images/best.svg'

class Kategori extends React.Component{

    getCategory = () => {
        const self = this
        store.setState({kategori : self.props.kategori1})
        self.props.history.push('/'+self.props.path)      
    }

    render(){

        return(
            <React.Fragment>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-5 text-center pr-0 pl-0">
                    <div className="img-box ">
                        <img src={this.props.image} alt="" width="100%" />
                        <div className="title-popup ">
                            <Link onClick={() => this.getCategory()}>
                                <h4>{this.props.kategori1}</h4>
                            </Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


export default connect('kategori', actions)(withRouter(Kategori))
