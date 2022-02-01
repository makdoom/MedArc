import Main from "./components/Main/Main";
import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Register from "./components/pages/Register/Register";
import Login from "./components/pages/Login/Login";
import ForgotPassword from "./components/pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./components/pages/ResetPassword/ResetPassword";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />

      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      {/* <Route path="/login" component={Login} />*/}
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/reset-password/:resetToken" component={ResetPassword} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}

export default App;
