import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID StdtuWE1_2Mu675p-za9MkNAeIqwB9nfDEBkeVwrPQI'
  }
})