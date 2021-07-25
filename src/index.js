import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ProductProvider } from './context/ProductContext';
import { SearchProvider } from './context/SearchContext';

ReactDOM.render(
  <React.StrictMode>
      <ProductProvider>
          <SearchProvider>
                <App />
        </SearchProvider>
      </ProductProvider>    
  </React.StrictMode>,
  document.getElementById('root')
);