import { Container } from 'react-bootstrap';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import './App.scss';

function App() {
  return (
    <Container className="main_container d-flex flex-column justify-content-between">
      <Header />
      <HomePage />
    </Container>
  );
}

export default App;
