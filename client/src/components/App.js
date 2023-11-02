import Nav from './Nav'
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Branch from './Branch';
import Footer from './Footer';
import Electronics from './Electronics';

function App() {
  return (
    <div className="">
      <Nav />
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/about' Component={About} />
          <Route exact path='/branch' Component={Branch} />
          <Route exact path='/electronics' Component={Electronics} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
