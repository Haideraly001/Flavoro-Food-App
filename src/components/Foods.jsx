import React, { useEffect, useState } from "react";
import FoodData from "../data/food";

const Foods = () => {
  const [categories, setCategories] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((item) => item.category)),
    ];
    setCategories(uniqueCategories);
    console.log(uniqueCategories);
  };

  useEffect(() => {
    filterUniqueCategories();
  }, []);

  return (
    // categories will be displayed here
    <>
      <h1 className="text-2xl font-bold mx-4">Find the best Food</h1>
      <div className="flex justify-start items-center p-4 gap-2">
        <button
          className={`px-4 py-2 font-semibold cursor-pointer rounded-md ${
            selectedCategory === "All" ? "bg-green-400" : "bg-gray-200"
          }`}
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>
        {categories &&
          categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 font-semibold text-[14px] cursor-pointer rounded-md ${
                selectedCategory === category ? "bg-green-400" : "bg-gray-200"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
      </div>
    </>
  );
};

export default Foods;
