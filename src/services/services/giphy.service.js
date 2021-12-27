
import axios from 'axios';

export const giphyService = {
  search,


}

function search(search) {
 
  return axios.get(`https://localhost:44325/api/giphy/${search}`)

}

