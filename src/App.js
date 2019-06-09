import React from 'react';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import logo from './assets/Left.svg';
import software from './assets/software.png';
import Button from '@material-ui/core/Button';
import { Container, Row, Col } from 'react-grid-system';
import UniversityList from './components/UniversityList';
import StudentList from './components/StudentList';

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
      <li><NavLink exact activeClassName="current" to='/universities'>Üniversiteler</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/students'>Öğrenciler</NavLink></li>
    </ul>
  </nav>
);

const Anasayfa = () => (
  <div className='mainpage'>
    <div><b>Güvenliğinizi</b> Yeniden Tanımlayın!</div>

    <p>Kodia’nın geliştirdiğini yeni nesil siber güvenlik ürünleriyle kurumsal güvenliğinizi artırın. Güvenlik araçlarınızı tek bir merkezden yöneterek proaktif güvenlik sağlayın.</p>

    <p><Button variant="raised" style={{ backgroundColor: 'rgba(26, 60, 126, 1)' }} href="/universities" className="button">Üniversite Listesi</Button></p>

    <img src={software} alt="software"/>

  </div>
);

const Universiteler = () => (
  <div className='universities'>
    
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
    
    <UniversityList />

  </div>
);

const Ogrenciler = () => (
  <div className='students'>

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
    
    <StudentList />

  </div>
);

const Main = () => (
  <Switch>
    <Route exact path='/' component={Anasayfa}></Route>
    <Route exact path='/universities' component={Universiteler}></Route>
    <Route exact path='/students' component={Ogrenciler}></Route>
  </Switch>
);

export default App;
