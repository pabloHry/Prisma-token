import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/Petou/login"

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Route exact path="/login" component={Login} />
    </div>
  </BrowserRouter>
);

export default App;
