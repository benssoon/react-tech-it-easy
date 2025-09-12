import './App.css';
import Stock from './Stock.jsx';
import Sort from './Sort.jsx';
import Products from './Products.jsx';
import logOutcome from './constants/practice.js';
import ArrayMethods from './ArrayMethods.jsx';
import {bestSellingTv} from './constants/inventory.js';
import Inventory from './Inventory.jsx';


function App() {
    {/*logOutcome();*/}
    return (
        <div className="main">
            <div className="inner">
                <header>
                    <h1>Tech It Easy Dashboard</h1>
                </header>
                <Stock/>
                <Products television={bestSellingTv} className="best-seller" productType="tv"/>
                <Inventory/>
                {/*<ArrayMethods/>
                <logOutcome/>*/}
                <Sort/>
            </div>
        </div>
    );
}

export default App;