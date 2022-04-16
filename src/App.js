import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Wordle from './pages/Wordle';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ Wordle } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
