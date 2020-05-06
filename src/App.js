import React from 'react';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { animated, useTransition } from 'react-spring';

import store from './redux/store'

import useRouter from './hooks';
import NotFoundPage from './containers/404';
import Header from './containers/Header/Header';
import HomePage from './containers/HomePage';
import CartPage from './containers/CartPage';
import ProductsPage from './containers/ProductsPage';

import './App.scss';

const Main = () => {
  const { location } = useRouter();

  const transitions = useTransition(location, location => location.key, {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    }
  });

  return transitions.map(({ item, props: transition, key }) => (
      <animated.div key={key} style={transition} className="contaier">
        <Switch location={item}>
          <Route path='/hw-5/' exact>
            <HomePage />
          </Route>
          <Route path='/hw-5/products' exact>
            <ProductsPage />
          </Route>
          <Route path='/hw-5/cart' exact>
            <CartPage />
          </Route>
          <Route path='*'>
            <NotFoundPage />
          </Route>
        </Switch>
      </animated.div>
  ))
};


export default function App() {
  return (
      <Provider store={store}>
          <div className='main'>
              <Router>
                  <Header />
                  <Main />
              </Router>
          </div>
      </Provider>

  )
}
