import React from 'react';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import logo from './assets/Left.svg';
import software from './assets/software.png';
import Button from '@material-ui/core/Button';
import { Container, Row, Col } from 'react-grid-system';
import UniversiteList from './components/UniversiteList';
import OgrenciList from './components/OgrenciList';

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

    <p>Kodia’nın geliştirdiğini yeni nesil siber güvenlik ürünleriyle kurumsal güvenliğinizi artırın. Güvenlik araçlarınızı tek bir merkezden yöneterek proaktif güvenlik sağlayın.</p>

    <p><Button variant="raised" style={{ backgroundColor: 'rgba(26, 60, 126, 1)' }} href="/universiteler" className="button">Üniversite Listesi</Button></p>

    <img src={software} alt="software"/>

  </div>
);

const Universiteler = () => (
  <div className='universiteler'>
    
    <Container className='table'>
      <Row debug  className='row'>
        <Col debug sm={1}>
          ID
        </Col>
        <Col debug sm={5}>
          ÜNİVERSİTE ADI
        </Col>
        <Col debug sm={5}>
          DETAY
        </Col>
      </Row>
    </Container>
    
    <UniversiteList />

  </div>
);

const Ogrenciler = () => (
  <div className='ogrenciler'>

    <Container className='table'>
      <Row debug className='row'>
        <Col debug sm={1}>
          ID
        </Col>
        <Col debug sm={5}>
          ÖĞRENCİ ADI
        </Col>
        <Col debug sm={5}>
          ÜNİVERSİTE
        </Col>
      </Row>
    </Container>
    
    <OgrenciList />

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
