import { createStore } from 'redux'
import { ShopReducer } from './ShopReducer'

export const CFCommerceDataStore = createStore(ShopReducer);