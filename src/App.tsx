import Logo from './assets/logo2.jpg';

import './App.css';

function App() {
  return (
    <>
      <div>
        <h1>OLENA SHALYHINA</h1>
        <h3>FRONT-END DEVELOPER</h3>
        <a href="https://react.dev" target="_blank">
          <img src={Logo} className="my_logo" alt="My logo" />
        </a>
      </div>
    </>
  );
}

export default App;
