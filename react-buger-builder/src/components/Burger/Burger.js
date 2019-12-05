import React from "react";
import BurgerIngredient from "../Burger/BurgerIngredient/BurgerIngredient";

const burger = props => {
  let transformIngredients = Object.keys(props.ingredients).map(ingKey =>
    [...Array(props.ingredients[ingKey])].map((_, i) => (
      <BurgerIngredient key={ingKey + i} type={ingKey} />
    ))
  ).reduce((arr, el) => arr.concat(el), []);

  if(transformIngredients.length === 0) {
      transformIngredients = <p>Please start adding ingredients!</p>
  }
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {transformIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
