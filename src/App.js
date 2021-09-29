import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Frieds from './components/Friends/Frieds';
import About from './components/About/About';
import NotFOund from './components/NotFOund/NotFOund';
import { BrowserRouter as Router,Switch,Route, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Culture from './components/Culture/Culture';

function App() {
  return (
    <div className="App">
   <Router>
  <Header></Header>
   <Switch>
   <Route path='/friends'>
   <Frieds></Frieds>
   </Route>
   <Route path='/friend/:friendId'>
   <FriendDetails></FriendDetails>
   </Route>
   <Route path='/home'>
   <Home></Home>
   </Route>
   <Route path='/about'>
   <About></About>
   </Route>
   <Route exact path='/about/culture'>
   <Culture></Culture>
   </Route>
   <Route path='*'>
   <NotFOund></NotFOund>
   </Route>
   <Route exact path='/'>
   <Home></Home>
   </Route>
   </Switch>
   </Router>
     </div>
  );
}

export default App;
