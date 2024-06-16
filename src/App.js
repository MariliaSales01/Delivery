import './App.css';
import Deals from './components/Deals';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Header from './components/Header';
import Information from './components/Information';
import Menu from './components/Menu';

function App() {
  return (
    <div >
      <Header/>
      <Deals/>
      <Information/>
      <Feature/>
      <Footer/>
    </div>
  );
}

export default App;
