import {inventory} from './constants/inventory.js';
import Products from './Products.jsx';
import logOutcome from './constants/practice.js';

function ArrayMethods() {
    return (
      <>
          <ul>
              {inventory.map((tv) => {
                  return <li key={tv.brand+tv.name+tv.type}>{tv.brand}</li>;
              })}
          </ul>

          {inventory.map((tv) => {
              return (
                  <>
                      <Products key={tv.brand+tv.name+tv.type} television={tv} className="" productType="tv"/>
                      <ul>
                          {tv.options.map((option) => {
                              return <li key={option.name+option.applicable}>{option.name}</li>
                          })}
                      </ul>
                  </>
              )
          })}

      </>
    );
}

export default ArrayMethods;