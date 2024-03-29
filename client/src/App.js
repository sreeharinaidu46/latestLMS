
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter, Route } from "react-router-dom";


import AdminLogin from "./screens/AdminLogin"
import Home from "./screens/Home"

import Dashboard from "./screens/Dashboard"
import SignInForm from "./components/Form/Register"

function App() {
  return (
    <div>
      <BrowserRouter>

        <Route path="/" exact component={Home} />
        <Route path="/register" exact component={SignInForm} />
        <Route path="/adminLogin" exact component={AdminLogin} />
        {/* <Route path="/addBook" exact component={AddBook} />
        <Route path="/allBook" exact component={AllBook} />
        <Route path="/manageStudent" exact component={AllStudent} />
        <Route path="/stuReqIssue" exact component={Messages} /> */}
        <Route path="/dashboard"  component={Dashboard} />

      </BrowserRouter>
    </div>
  );
}

export default App;
