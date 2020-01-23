import createStore from 'unistore';
import axios from 'axios';

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
  auth: false,
  apiUrl: 'http://0.0.0.0:5000/',
  corsHandle: 'https://cors-anywhere.herokuapp.com/'
};

export const store = createStore(initialState);

export const actions = store => ({
  setInput: (state, event) => {
    console.log(event.target.name, event.target.value);
    store.setState({ [event.target.name]: event.target.value });
  },
  setChange: (state, key, value) => {
    store.setState({ [key]: value });
  },
  afterLogOut : state => {
    localStorage.removeItem("token")
    localStorage.setItem("auth", "false")
  },
  doSearch : state => {
    
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
          console.warn('respon data', response.data);
          
            const produks = response.data.filter(item => {
                if (item.kategori === category) {
                    return item;
                }
                return false;
                })
            await store.setState({ produkList : produks})
        })
        .catch((error) => {
            alert("error");
        });
    }
});
