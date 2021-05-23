import { REQUEST_STATE } from '../constants';

export const initialState = {
  // 初期状態
  fetchState: REQUEST_STATE.INITIAL,
  // レストランリスト
  restaurantsList: [],
};

// フェッチング
// フェッチングサクセス
export const restaurantsActionTyps = {
  FETCHING: 'FETCHING',
  FETCH_SUCCESS: 'FETCH_SUCCESS'
}

export const restaurantsReducer = (state, action) => {
  switch (action.type) {
    case restaurantsActionTyps.FETCHING:
      return {
        // スプレッシュ構文
        ...state,
        fetchState: REQUEST_STATE.LOADING,
      };
    case restaurantsActionTyps.FETCH_SUCCESS:
      return {
        fetchState: REQUEST_STATE.OK,
        restaurantsList: action.payload.restaurants,
      };
    default:
      throw new Error();
  }
}
