import '../../App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../Header";
import Landing from "../Landing";
import Footer from "../Footer";
import Welcome from "../Welcom";
import Login from "../Login"
import Signup from  "../Signup"
import ErrorPage from  "../ErroPage"

function Index() {
  return (
    <Router>
        <Header/>

        <Switch>
            <Route exact path="/" component={Landing}/>
            <Route path="/welcom" component={Welcome}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route component={ErrorPage}/>
        </Switch>

        <Footer/>
    </Router>
  );
}

export default Index;
