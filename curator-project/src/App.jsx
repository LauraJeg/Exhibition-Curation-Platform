
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './Components/Header';
import Home from './Components/Home';
import Exhibition from './Components/Exhibition';
import About from './Components/About';

const App = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/exhibition" component={Exhibition} />
                <Route path="/about" component={About} />
            </Switch>
        </Router>
    );
};

export default App
