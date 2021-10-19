import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Doctors from './components/pages/Doctors/Doctors';
import Home from './components/pages/Home/Home';
import Services from './components/pages/Services/Services';
import SingleDoctorDetail from './components/pages/SingleDoctorDetail/SingleDoctorDetail';
import SingleServiceDetails from './components/pages/SingleServiceDetails/SingleServiceDetails';
import SingleTestDetail from './components/pages/SingleTestDetail/SingleTestDetail';
import Test from './components/pages/Test/Test';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './contexts/AuthProvider';

function App() {
    return (
        <div>
            <AuthProvider>
                <Router>
                    <Header></Header>
                    <Switch>
                        <Route exact path="/">
                            <Home></Home>
                        </Route>
                        <Route exact path="/services">
                            <Services></Services>
                        </Route>
                        <Route exact path="/doctors">
                            <Doctors></Doctors>
                        </Route>
                        <Route exact path="/tests">
                            <Test></Test>
                        </Route>
                        <Route exact path="/doctors/:id">
                            <SingleDoctorDetail></SingleDoctorDetail>
                        </Route>
                        <Route exact path="/services/:id">
                            <SingleServiceDetails></SingleServiceDetails>
                        </Route>
                        <Route exact path="/tests/:id">
                            <SingleTestDetail></SingleTestDetail>
                        </Route>
                        <Route exact path="/login">
                            <Login></Login>
                        </Route>
                        <Route exact path="/sign-up">
                            <SignUp></SignUp>
                        </Route>
                    </Switch>
                    <Footer></Footer>
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
