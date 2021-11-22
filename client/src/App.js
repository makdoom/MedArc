import Main from "./components/Main/Main";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </Switch>
  );
}

export default App;
