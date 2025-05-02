import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/style.css'

import './assets/css/form.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import App from './App.jsx'
import { Provider } from 'react-redux';
import configureStore from './tools/store/configureStore.js';
import supabase from './utils/supabase'
import { getProduct } from './tools/actions/productAction.js';
import { WishlistProvider } from 'react-use-wishlist';
import { ModeProvider } from './context/ModeContext.jsx';
import { CartProvider } from 'react-use-cart';
const store = configureStore();

const { data } = await supabase.from('cyfonii-product').select()
store.dispatch(getProduct(data));

createRoot(document.getElementById('root')).render(

  <ModeProvider>
    <StrictMode>
      <CartProvider>
        <WishlistProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </WishlistProvider>
      </CartProvider>
    </StrictMode>
  </ModeProvider>
)
