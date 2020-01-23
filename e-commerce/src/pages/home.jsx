import React from 'react'; 
import Header from '../components/header';
import Promo from '../components/promo';
import Kategori from '../components/kategori';
import { withRouter } from "react-router-dom";
import best from '../images/best.svg'
import all from '../images/all.svg'
import milk from '../images/milk.svg'
import spoon from '../images/spoon.svg'
import bath from '../images/bath.svg'
import clothes from '../images/clothes.svg'
import diaper from '../images/diaper.svg'
import toys from '../images/toys.svg'
import { actions, store } from '../store/store';
import { connect } from 'unistore/react';
class Home extends React.Component {

    state = {
        kategori : [{kategori : 'Semua Produk', path: 'produk', image: all}, {kategori : 'Best Seller', path: 'produk', image: best}, {kategori : 'Makanan dan Susu', path: 'makanan-susu', image: milk}, {kategori : 'Alat Makan', path: 'alat-makan', image: spoon}, {kategori : 'Perlengkapan Mandi', path: 'perlengkapan-mandi', image: bath}, {kategori : 'Mainan', path: 'mainan', image: toys},{kategori : 'Pakaian', path: 'pakaian', image: clothes}, {kategori : 'Popok', path: 'popok', image: diaper}]
    }

    render () {

        const kategoriList = this.state.kategori.map ((value) => {
            return <Kategori kategori1={value.kategori} path={value.path} image={value.image}/>
        })
    
        return (
            <React.Fragment>
                <Header/>
                <Promo />
                <div className="container mt-3">
                    <p class="script"><span>Kategori</span></p>
                </div>
                <div className="row search-result">
                    {kategoriList}
                </div>
            </React.Fragment>

        )
    }
}
export default connect('kategori', actions)(withRouter(Home));
