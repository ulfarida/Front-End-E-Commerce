import React from 'react';
import view from '../images/view.svg'
import { Link, withRouter } from 'react-router-dom';

const Produk = (props) => {
        return(
            <React.Fragment>
                <div className="mix col-lg-4 col-md-6 col-6 best">
                    <div className="product-item">
                        <figure>
                            <img src={props.foto_produk} alt=""/>
                            <div className="pi-meta">
                                <Link to={'/produk/'+props.number}>
                                    <div className="pi-m-right text-center">
                                        <img src={view} alt="" style={{width:'30px'}}/>
                                        <p>Lihat Produk</p>
                                    </div>
                                </Link>
                            </div>
                        </figure>
                        <div className="product-info">
                            <Link to={'/produk/'+props.number}><h6>{props.nama_produk}</h6></Link>
                            <p>Rp. {props.harga}</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
}


export default withRouter(Produk)


