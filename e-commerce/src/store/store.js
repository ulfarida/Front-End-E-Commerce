import createStore from 'unistore';
import axios from 'axios';
import Swal from "sweetalert2"

const initialState = {
  nama: '',
  username: '',
  password: '',
  confirm_password: '',
  password_lama: '',
  password_baru: '',
  email: '',
  alamat: '',
  telepon: '',
  tanggalLahir: '',
  fotoProfil: '',
  profilData: '',
  token: '',
  kategori: '',
  produkList: [],
  produkData: {},
  kuantitas: '',
  keranjang: {},
  keranjangData: [],
  namaProduk: '',
  harga: '',
  fotoProduk: '',
  deskripsiProduk: '',
  stok: '',
  kategoriProduk: '',
  transaksiList : '',
  lokasi: '',
  produkId : '',
  transaksiId : '',
  search : '',
  wishlist : {},
  wishlistData : [],
  auth: false,
  apiUrl: 'http://0.0.0.0:5000/',
  corsHandle: 'https://cors-anywhere.herokuapp.com/'
};

export const store = createStore(initialState);

export const actions = store => ({
  setInput: async (state, event) => {
    await store.setState({ [event.target.name]: event.target.value });
  },
  setChange: (state, key, value) => {
    store.setState({ [key]: value });
  },
  afterLogOut : state => {
    localStorage.removeItem("token")
    localStorage.setItem("auth", "false")
  },
  doSearch : async state => {
    let produk = {
      method:"get",
      url: "http://0.0.0.0:5000/produk",
      headers: {
          "Content-Type": "application/json"
      }
    };

    await axios(produk)
        .then(async (response) => {
          console.warn('respon data', response.data);
          
          const produks = response.data.filter(item =>
              item.nama_produk.toLowerCase().indexOf(state.search) > -1 
              )
            
          await store.setState({ produkList : produks})
        })
        .catch((error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
        })
        });
  },

  changeCategory : async (state, category) =>{
    store.setState({kategori:category})
    let produk = {
        method:"get",
        url: "http://0.0.0.0:5000/produk",
        headers: {
            "Content-Type": "application/json"
        }
    };

    await axios(produk)
        .then(async (response) => {
            const produks = response.data.filter(item => {
                if (item.kategori === category) {
                    return item;
                }
                return false;
                })
            await store.setState({ produkList : produks})
        })
        .catch((error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
        })
        });
    }
});
