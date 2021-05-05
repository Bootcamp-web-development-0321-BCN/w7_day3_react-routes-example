import logo from './logo.svg';
import './App.css';
import { Redirect, Route, Switch } from 'react-router';
import Home from './components/Home/Home';
import About from './components/About/About';
import MoviesList from './components/MoviesList/MoviesList';
import { Link, NavLink } from 'react-router-dom';
import MovieDetails from './components/MovieDetails/MovieDetails';

function App() {
  let loggedInUser = null;
  return (
    <>
      <nav>
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link> */}
        <NavLink activeStyle={{ color: 'red', fontStyle: 'bold' }} exact to="/">Home</NavLink>
        <NavLink activeStyle={{ color: 'red', fontStyle: 'bold' }} exact to="/about">About</NavLink>
        <NavLink activeStyle={{ color: 'red', fontStyle: 'bold' }} exact to="/movies">Movies</NavLink>
        {loggedInUser && <NavLink activeStyle={{ color: 'red', fontStyle: 'bold' }} exact to="/profile">Profile</NavLink>}
        {!loggedInUser && <NavLink activeStyle={{ color: 'red', fontStyle: 'bold' }} exact to="/login">Login</NavLink>}     
      </nav>
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/movies" component={MoviesList} />
        <Route exact path="/movies/search" component={MoviesList} />
        <Route path="/movies/:id" component={MovieDetails} />
        <Route path="/profile" render={() => loggedInUser ? <div>Bienvenido</div> : <Redirect to="/"/>} />
        <Route path="*" render={() => <div>404 NOT FOUND</div>} />
      </Switch>
    </>
  );
}

export default App;
