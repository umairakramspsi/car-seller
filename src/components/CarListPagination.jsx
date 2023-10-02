// CarListPagination.js
// import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// import { CarList } from "../CarItems"
import Mainbody from "./Mainbody";


const CarList=[
    
  {
  carTitle:"main-car",
  carName:"second-one",
  carImg:"some thing something"
},
{
  carTitle:"main-car",
  carName:"second-one",
  carImage:"some thing something"
},
{
  carTitle:"main-car",
  carName:"second-one",
  carImg:"some thing something"
},
{
  carTitle:"main-car",
  carName:"second-one",
  carImg:"some thing something"
,
},
{
  carTitle:"main-car",
  carName:"second-one",
  carImg:"some thing something"
},{
  carTitle:"main-car",
  carName:"second-one",
  carImg:"some thing something"
},{
  carTitle:"main-car",
  carName:"second-one",
  carImg:"some thing something"
},{
  carTitle:"main-car",
  carName:"second-one",
  carImg:"some thing something"
},{
  carTitle:"main-car",
  carName:"second-one",
  carImg:"some thing something"
},{
  carTitle:"main-car",
  carName:"second-one",
  carImg:"some thing something"
},{
  carTitle:"main-car",
  carName:"second-one",
  carImg:"some thing something"
},{
  carTitle:"main-car",
  carName:"second-one",
  carImg:"some thing something"
},{
  carTitle:"main-car",
  carName:"second-one",
  carImg:"some thing something"
},]


const CarListPagination = () => {
  // console.log("carList",CarList);

  const { page } = useParams();
  const itemsPerPage = 6; // 3 columns and 2 rows
  const totalPages = Math.ceil(CarList.length / itemsPerPage);
  const currentPage = parseInt(page, 10) || 1;

  // Calculate the range of cars to display for the current page
  const startIndex = page * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedCars = CarList.slice(startIndex, endIndex);
  console.log("totalPages",totalPages);
  return (
    <div>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {displayedCars.map((car, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <img src={car.carImage} alt={car.carTitle} className="w-full h-40 object-cover rounded-md mb-4"/>
            <h1 className="text-xl font-semibold">{car.carTitle}</h1>
            <p className="text-gray-600">{car.carName}</p>
          </div>
        ))}
      </div> 

      <Mainbody carList={displayedCars}/>

      <div className="mt-4 text-gray-600">
        {/* Pagination links */}
        {Array.from({ length: totalPages }, (_, i) => (
          <Link
            key={i + 1}
            to={`/page/${i + 1}`}
            
            className={`px-3 py-1 rounded-full mx-1 ${
              currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
            }`}
          >
           <h1>{i+1}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CarListPagination;
