import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions, store } from '../store/store';

const Kategori = (props) => {
    return (
        <React.Fragment>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-5 text-center pr-0 pl-0">
                <div className="img-box ">
                    <img src={props.image} alt="" width="100%" />
                    <div className="title-popup ">
                        <Link to={'/'+props.path} onClick={() => store.setState({ kategori: props.kategori1 })}>
                            <h4>{props.kategori1}</h4>
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default connect('', actions)(withRouter(Kategori));
