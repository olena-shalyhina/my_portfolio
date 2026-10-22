import { RouteComponent } from './routes/RouteComponent';
import { Header } from './components/Header';
import { Copyright } from './components/Copyright';
import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Loader } from './components/Loader';

function App() {
  const [initialLoading, setInitialLoading] = useState(
    () => sessionStorage.getItem('portfolio-loader-shown') !== 'true',
  );

  useEffect(() => {
    if (!initialLoading) return;

    const timer = setTimeout(() => {
      sessionStorage.setItem('portfolio-loader-shown', 'true');
      setInitialLoading(false);
    }, 900);
    return () => clearTimeout(timer);
  }, [initialLoading]);

  if (initialLoading) return <Loader />;
  return (
    <Container className='main_container d-flex flex-column align-items-stretch'>
      <Header />
      <div className='route_content'>
        <RouteComponent />
      </div>
      <Copyright />
    </Container>
  );
}

export default App;
