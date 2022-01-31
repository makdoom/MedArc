import Main from "./components/Main/Main";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
// import Register from "./components/Register/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/login" component={Login} />
      {/* <ProtectedRoute path="/dashboard" component={<Dashboard />} auth={true} /> */}
      <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
  );
}

export default App;
