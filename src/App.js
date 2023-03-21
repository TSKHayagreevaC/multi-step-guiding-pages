import logo from './logo.svg';
import './App.css';
import BasicTabs from './components/BasicTabs'
import SimpleContainer from './layouts/SimpleContainer';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>Author</h1>
        <h3>Srikanth Hayagreeva Carya Thirumala</h3>
      </header> */}
      <h1>Frontend Developer Road Map</h1>
      <SimpleContainer>
        <BasicTabs />
      </SimpleContainer>
      <p>TSKHayagreevaC @ 2023</p>
    </div>
  );
}

export default App;
