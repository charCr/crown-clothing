import React from 'react';
import './App.css';
import { HomePage } from './components/pages/home-page.component';
import { ShopPage } from './components/pages/shop/shop-page.component';
import { Switch, Route } from 'react-router-dom';
import { Header } from './components/header/header.component';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
};

export default App;
