import logo from './logo.svg';
import './App.css';
import Introduction from './Component/Introduction';
import Body from './Component/Body';
import Number from './Component/Number';
import OurImpacts from './Component/OurImpacts';
import Uses from './Component/Uses';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
      <Introduction/>
      <Body/>
      <Number/>
      <OurImpacts/>
      <Uses/>
      <Footer/>
    </div>
  );
}

export default App;
