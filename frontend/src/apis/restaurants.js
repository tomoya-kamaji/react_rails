import axios from 'axios';
import { restaurantsIndex } from '../urls/index'

// restaurantsIndex = http://localhost:3000/api/v1/restaurants
// then以降は実際の処理を記載するようにする
export const fetchRestaurants =() => {
  return axios.get(restaurantsIndex)
  .then(res => {
    return res.data
  })
  .catch((e) => console.error(e))
}
