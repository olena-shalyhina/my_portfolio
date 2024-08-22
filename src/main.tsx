import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="/">
    {/* <BrowserRouter basename={import.meta.env.BASE_URL}> */}
    <App />
  </BrowserRouter>,
);
