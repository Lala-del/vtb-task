import React from 'react';
import './styles/App.scss'
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router";
import Header from './components/Navbar/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact'
import Signup from './components/Signup'
import Basket from './components/Basket'
import Posts from './components/Posts';
import PostDetail from './components/PostDetail';

function App() {
  return (
     <>
      <BrowserRouter>
            <Header/>
            <Navbar/>
      <Switch>
            <Route path="/" component={Home} exact>
              <Home/>
            </Route>
            <Route path="/about" component={About} >
              <About/>
            </Route>
            <Route path="/blog" component={Blog} >
              <Blog/>
            </Route>
            <Route path="/contact" component={Contact}>
              <Contact/>
            </Route>
            <Route path="/signup" component={Signup}>
              <Signup/>
            </Route>
            <Route path="/basket" component={Basket}>
              <Basket/>
            </Route>
            <Route path="/posts" component={Posts} exact>
               <Posts/>
            </Route>
            <Route path = "/posts/:id" component={PostDetail}/>
          </Switch>
      </BrowserRouter>
      <Footer/>
      
    </>
  );
}

export default App;
