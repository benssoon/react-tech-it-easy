import './App.css';
import Stock from './Stock.jsx';
import ProductCard from './ProductCard.jsx';
import Sort from './Sort.jsx';
import Products from './Products.jsx';



function App() {
  return (
      <div className="main">
          <div className="inner">
              <header>
                  <h1>Tech It Easy Dashboard</h1>
              </header>
              <Stock/>
              <Products className="best-seller" productType="tv"/>
              <Sort/>
          </div>
      </div>
  );
}

export default App;