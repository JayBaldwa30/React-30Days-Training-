import logo from './logo.svg';
import './App.css';
import Product from './components/Product';


function App() {
  return (
    <div className="App">

      <Product name='Samsung Galaxy S23 Ultra'
        price={100000}
        description='This is the latest smartphone by samsung with a large screen, best camera and high performance.' />

      <Product name='Kawasaki Ninja H2R'
        price={7500000}
        description='The Kawasaki Ninja H2R is powered by 998cc BS6 engine which develops a power of 305.75 bhp and a torque of 165 Nm. This bike is a BEAST' />
        
    </div>
  );
}

export default App;
