import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../src/layout/components/Navbar";
import Landing from "../src/layout/components/Landing";
import Register from "../src/layout/components/Register";
import Login from "../src/layout/components/Login";
//import listUser from '../src/layout/admin/page/UserList';
import PrivateRoute from "./layout/components/PrivateRoute";
import "./App.css";
import edituser from "../src/layout/components/Edituser";
import { useDispatch } from "react-redux";
import Useredit from "./layout/components/useredit";
import UserList from "../src/layout/admin/page/UserList";
import adduser from "./layout/components/Adduser";
//import addemande from "./layout/components/Addemande";
import { getAllRoles } from "./layout/actions/roles";
import { getAllUsers } from "./layout/actions/users";
//import { getAllDemande } from "./layout/actions/demande";
import { getAllDemande } from "./layout/actions/demande";
import Addemande from "./layout/components/Addemande";
import ListDemande from "./layout/components/ListDemande";
import Userprofile from "./layout/user/Userprofile";
import AddDemandeUser from "./layout/components/AdddemandeUser";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRoles());
    dispatch(getAllUsers());
    //dispatch(getAllDemande());
  }, []);
  return (
    <Router>
      <Fragment>
        <Navbar />

        <section className="countainer">
          <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute path="/admin" component={UserList} />
            <Route path="/register" component={Register} />
            <Route path="/adduser" component={adduser} />
            <Route path="/edituser/:id" component={edituser} />
            <Route path="/addemande" component={Addemande} />
            <Route path="/editprofile" component={Useredit} />
            <Route path="/adddemandesalarier" component={AddDemandeUser} />
            <Route path="/listDemande" component={ListDemande} />
            <Route path="/userprofile" component={Userprofile} />
            <Route path="/" component={Landing} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  );
}

export default App;
