import Nav from './Nav'
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Branch from './Branch';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="">
      <Nav />
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/about' Component={About} />
          <Route exact path='/branch' Component={Branch} />
          <Route exact path='/contact' Component={Contact} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
