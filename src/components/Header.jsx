import React from "react";

const Header = () => {
  console.log(Date.now());

  return (
    <div className="flex justify-between items-center p-4  ">
      <div className="flex flex-col justify-start text-start items-start font-semibold">
        <p className="text-xl text-gray-500">
          {new Date(Date.now()).toUTCString().slice(0, 16)}
        </p>
        <h1 className="text-2xl">Flavoro Food</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border border-gray-300 rounded"
        />
      </div>
    </div>
  );
};

export default Header;
