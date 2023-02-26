import React, { useEffect, useState } from "react";

function ShoppingCategoriesSelectors({ currentCategory, setCurrentCategory }) {
  const [categories, setCategories] = useState([]);

  async function getCategories() {
    const categories = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const categoriesJson = await categories.json();
    setCategories(categoriesJson);
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="flex justify-center items-center font-shan text-xl">
      <div className="flex space-x-2">
        <div
          className={
            currentCategory === "all"
              ? `border-b-4 border-red-700 text-red-700 p-2 cursor-pointer`
              : `border-b-4 border-white p-2 cursor-pointer`
          }
          onClick={() => setCurrentCategory("all")}
        >
          All
        </div>
        {categories.map((category, index) => {
          return (
            <div
              key={index}
              className={
                currentCategory === category
                  ? `border-b-4 border-red-700 text-red-700 p-2 cursor-pointer`
                  : `border-b-4 border-white p-2 cursor-pointer`
              }
              onClick={() => setCurrentCategory(category)}
            >
              {category}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShoppingCategoriesSelectors;
