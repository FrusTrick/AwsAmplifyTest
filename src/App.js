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
        <h1>Hello from V2</h1>
      </header>
    </div>
  );
}

export default App;
