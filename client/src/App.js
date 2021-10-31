import Main from "./components/Main/Main";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/login" component={Login} />
    </Switch>
  );
}

export default App;
