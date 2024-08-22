import { RouteComponent } from './routes/RouteComponent';
import { Header } from './components/Header';
import { Copyright } from './components/Copyright';
import { Container } from 'react-bootstrap';
import './App.scss';

function App() {
  return (
    <Container className="main_container d-flex flex-column justify-content-between align-items-center">
      <Header />
      <RouteComponent />
      <Copyright />
    </Container>
  );
}

export default App;
