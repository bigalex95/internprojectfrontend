import React from 'react';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import logo from './assets/Left.svg';
import software from './assets/software.png';
import Button from '@material-ui/core/Button';

const App = () => (
  <div className='app'>
    <Navigation />
    <Main />
   </div>
);

const Navigation = () => (
  <nav>
    <ul>
      <img src={logo} alt="logo" />
      <li><NavLink exact activeClassName="current" to='/'>Anasayfa</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/universiteler'>Üniversiteler</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/ogrenciler'>Öğrenciler</NavLink></li>
    </ul>
  </nav>
);

const Anasayfa = () => (
  <div className='anasayfa'>
    <div><b>Güvenliğinizi</b> Yeniden Tanımlayın!</div>
    <p>Kodia’nın geliştirdiğini yeni nesil siber güvenlik ürünleriyle kurumsal güvenliğinizi artırın. Güvenlik araçlarınızı tek bir merkezden yöneterek proaktif güvenlik sağlayın.
      <Button href="/universiteler" className="button" >Üniversite Listesi</Button>
    </p>
    <img src={software} alt="software"/>
  </div>
);

const Universiteler = () => (
  <div className='universiteler'>
    
  </div>
);

const Ogrenciler = () => (
  <div className='ogrenciler'>
    
  </div>
);

const Main = () => (
  <Switch>
    <Route exact path='/' component={Anasayfa}></Route>
    <Route exact path='/universiteler' component={Universiteler}></Route>
    <Route exact path='/ogrenciler' component={Ogrenciler}></Route>
  </Switch>
);

export default App;
