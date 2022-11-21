import logo from './logo.svg';
import './App.css';
import { DataStore } from '@aws-amplify/datastore';
import { TestModel } from './models';

async function Test(){
  await DataStore.save(
    new TestModel({
		"Username": "Lorem ipsum dolor sit amet",
		"Password": "Lorem ipsum dolor sit amet"
    
	})
);

}
function App() {
  Test();

  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
