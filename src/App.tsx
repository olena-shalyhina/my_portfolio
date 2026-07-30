import { RouteComponent } from './routes/RouteComponent';
import { Header } from './components/Header';
import { Copyright } from './components/Copyright';
import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Loader } from './components/Loader';

function App() {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setInitialLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  if (initialLoading) return <Loader />;
  return (
    <Container className='main_container d-flex flex-column justify-content-around align-items-stretch'>
      <Header />
      <RouteComponent />
      <Copyright />
    </Container>
  );
}

export default App;
