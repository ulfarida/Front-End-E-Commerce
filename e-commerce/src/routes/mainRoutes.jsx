import React from 'react';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Home from '../pages/home'
import Produk from '../pages/listProduk'
import DetailProduk from '../pages/detailProduk'
import ListProduk from '../pages/listProduk'
import Login from '../pages/login'
import Register from '../pages/register'
import Profil from '../pages/profil'
import UbahPassword from '../pages/ubahPassword';
import UbahProfil from '../pages/ubahProfil';
import Keranjang from '../pages/keranjang';
import Checkout from '../pages/checkout';
import CheckoutSukses from '../pages/checkoutSukses';
import KategoriProduk from '../pages/kategoriProduk';
import Riwayat from '../pages/riwayat';
import TambahProduk from '../pages/tambahProduk';
import Transaksi from '../pages/transaksi';
import ProdukAdmin from '../pages/produk';
import User from '../pages/user';
import EditProduk from '../pages/editProduk';
import Wishlist from '../pages/wishlist';
import { Provider } from 'unistore/react';
import { store } from '../store/store';


const Mainroute = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/produk" component={Produk}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/profil" component={Profil}/>
                    <Route path="/ubahpassword" component={UbahPassword}/>
                    <Route path="/keranjang" component={Keranjang}/>
                    <Route path="/listProduk" component={ListProduk}/>
                    <Route path="/ubahprofil" component={UbahProfil}/>
                    <Route path="/checkout" component={Checkout}/>
                    <Route path="/checkout-berhasil" component={CheckoutSukses}/>
                    <Route path="/riwayat-pesanan" component={Riwayat}/>
                    <Route path="/tambah-produk" component={TambahProduk}/>
                    <Route path="/admin/transaksi" component={Transaksi}/>
                    <Route path="/admin/produk" component={ProdukAdmin}/>
                    <Route path="/admin/user" component={User}/>
                    <Route path="/edit-produk" component={EditProduk}/>
                    <Route path="/wishlist" component={Wishlist}/>
                    <Route path="/produk/:index" component={DetailProduk}/>
                    <Route path="/:kategori" component={KategoriProduk}/>
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

export default Mainroute;