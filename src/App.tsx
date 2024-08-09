import { Container } from 'react-bootstrap';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import './App.scss';
import { Copyright } from './components/Copyright';

function App() {
  return (
    <Container className="main_container d-flex flex-column justify-content-between">
      <Header />
      <HomePage />
      <Copyright />
    </Container>
  );
}

export default App;
