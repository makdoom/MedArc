import Main from "./components/Main/Main";
import { Route, Switch } from "react-router-dom";
// import Login from "./components/Login/Login";
// import Register from "./components/Register/Register";
// import ProtectedRoute from "./components/ProtectedRoute";
// import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import Dashboard from "./components/Dashboard/Dashboard";
import Register from "./components/pages/Register/Register";
import Login from "./components/pages/Login/Login";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />

      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      {/* <Route path="/login" component={Login} />
      <Route path="/forgot-password" component={ForgotPassword} /> */}
      <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
  );
}

export default App;
