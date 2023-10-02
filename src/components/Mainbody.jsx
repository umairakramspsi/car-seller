// import React, { useState } from "react";
// import { Component, SyntheticEvent } from "react";
// import { CarList } from "../CarItems";
// import uiduPagination from "@uidu/pagination";

const Mainbody = ({carList}) => {
  // const [currentPage,setCurrentPage]=useState(1)
  // const cardsPerPage=6;
  // const npages=Math.ceil(CarList.length/cardsPerPage)
  // const lastIndex = currentPage * cardsPerPage
  // const firstIndex=lastIndex - cardsPerPage
  // const records = CarList.slice(firstIndex,lastIndex)
  
  // const numbers=[...Array(npages + 1).keys()].slice(1)

  // function nextPage(){
  //    if(currentPage !== lastIndex){
  //     setCurrentPage(currentPage+1)
  //    }
  // }
  // function prePage(){
  //   if (currentPage !== firstIndex){
  //     setCurrentPage(currentPage-1)
  //   }
  // }
  // function changeCpage(id){
  //    setCurrentPage(id)
  // }



  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {carList.map((car, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-4">
          <img
            src={car.carImage}
            alt={car.carTitle}
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h2 className="text-xl font-semibold">{car.carTitle}</h2>
          <p className="text-gray-600">{car.carName}</p>
        </div>
      ))}

      {/* <div>
        <a href="#" onClick={prePage}>prev</a>
        {numbers.map((n, i)=>(
          <div key={i}>
            <a href="#1" onClick={()=>changeCpage(n)}>{n}</a>
          </div>
        ))}
        <a href="#" onClick={nextPage}>next</a>
      </div> */}
    </div>
  );
};

export default Mainbody;
