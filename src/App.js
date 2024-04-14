
import './App.css';
import Store from './compnents/Store/Store';
import Home from './compnents/Home';
import { Provider } from "react-redux"
import Header from './compnents/Header';

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Header />
        <Home />
      </div>
    </Provider>
  );
}

export default App;
