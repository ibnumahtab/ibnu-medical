import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import AboutUs from './components/pages/AboutUs/AboutUs';
import Contact from './components/pages/Contact/Contact';
import Doctors from './components/pages/Doctors/Doctors';
import Home from './components/pages/Home/Home';
import Services from './components/pages/Services/Services';
import SingleDoctorDetail from './components/pages/SingleDoctorDetail/SingleDoctorDetail';
import SingleServiceDetails from './components/pages/SingleServiceDetails/SingleServiceDetails';
import PrivateRoute from './components/routes/PrivateRoute';
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
                        <Route exact path="/about-us">
                            <AboutUs></AboutUs>
                        </Route>
                        <Route exact path="/services">
                            <Services></Services>
                        </Route>
                        <Route exact path="/doctors">
                            <Doctors></Doctors>
                        </Route>
                        <Route exact path="/contact">
                            <Contact></Contact>
                        </Route>
                        <PrivateRoute exact path="/doctors/:id">
                            <SingleDoctorDetail></SingleDoctorDetail>
                        </PrivateRoute>
                        <PrivateRoute exact path="/services/:id">
                            <SingleServiceDetails></SingleServiceDetails>
                        </PrivateRoute>
                        <Route exact path="/login">
                            <Login></Login>
                        </Route>
                        <Route exact path="/sign-up">
                            <SignUp></SignUp>
                        </Route>
                        <Route path="*">
                            <NotFound></NotFound>
                        </Route>
                    </Switch>
                    <Footer></Footer>
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
