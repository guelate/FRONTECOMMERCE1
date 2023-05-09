import './App.css';
import SneakerProductCard from './components/SneakerProductCard';
// import Newsletter from './components/Newsletter';

function App() {
  return (
    <div className="App">
      <SneakerProductCard Model={"Model"} Price={"180"} Shopping_cart={"ajoutez au panier"}/>
    </div>
  );
}
// Model, Price, Shopping_cart

export default App;
