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
  corsHandle: 'https://cors-anywhere.herokuapp.com/'
};

export const store = createStore(initialState);


export const actions = store => ({

  /**
   * change the global state by event on change
   *
   * @param {object} state global state
   * @param {object} event event onchange
   */
  setInput: async (state, event) => {
    await store.setState({ [event.target.name]: event.target.value });
  },

  /**
   * change the global state
   *
   * @param {object} state global state
   * @param {string} key key of global state
   * @param {string} value value that will changed
   */
  setChange: (state, key, value) => {
    store.setState({ [key]: value });
  },

  /**
   * Remove token and set the auth to false at local storage after user logout
   *
   * @param {object} state global state
   */
  afterLogOut : state => {
    localStorage.removeItem("token")
    localStorage.setItem("auth", "false")
  },

  /**
   * Search product
   *
   * @param {object} state global state
   */
  doSearch : async state => {
    let produk = {
      method:"get",
      url: "https://babybun.my.id/produk",
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

  /**
   * Get list of products by category
   *
   * @param {object} state global state
   * @param {string} category Category of products
   */
  changeCategory : async (state, category) =>{
    store.setState({kategori:category})
    let produk = {
        method:"get",
        url: "https://babybun.my.id/produk",
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
