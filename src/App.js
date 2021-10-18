import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Header/Navbar/Navbar';
import firebaseInit from './Firebase/Firebase.init';

firebaseInit();
function App() {
    return (
        <div className="App">
            <Navbar />
        </div>
    );
}

export default App;
