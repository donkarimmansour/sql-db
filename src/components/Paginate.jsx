import { useQuery } from "@tanstack/react-query";
import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { getCount } from "../services/crudHelper";
import SearchContext from '../contexts/search';
import { useContext } from "react";


// This <Component /> call from 🟨 index.js 🟨
export default function Paginate({pageCurrent , setpageCurrent}) {
  const [pageCount, setpageCount] = useState(0);
  const [Ltotal, setLtotal] = useState(0);
  const search = useContext(SearchContext)
  const {limit} = search;

   const {data: total = 0 , refetch} = useQuery(['count'],  () =>  getCount(search));


  useEffect(() => {

    if( total && typeof total === "number"){
      setpageCount(Math.ceil(total / limit));
      setLtotal(total)
    }else{
       setpageCount(0);
       setLtotal(0) 
    } 
      
  }, [total]);

  console.log(total);

  useEffect(() => {
    refetch()
   }, [search]);
  

  const handlePageClick = async (data) => {
      setpageCurrent(data.selected + 1)
  };



  return (

    // <!-- This example requires Tailwind CSS v2.0+ --> 
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-10 py-5">
      
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing
            <span className="font-medium px-1">{pageCurrent === 1 ? 1 : (pageCurrent - 1) * limit }</span>
            to
            <span className="font-medium px-1">{pageCurrent * limit}</span>
            of
            <span className="font-medium px-1">{Ltotal}</span>
            results
          </p>
        </div>
        <div>

            <ReactPaginate
              previousLabel={"previous"}
              nextLabel={"next"}
              breakLabel={"..."}
              pageCount={pageCount}
              marginPagesDisplayed={3}
              pageRangeDisplayed={2}
              onPageChange={handlePageClick}
              containerClassName={"isolate inline-flex -space-x-px rounded-md shadow-sm"}
               pageLinkClassName={"relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex"}
               previousLinkClassName={"relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"}
               nextLinkClassName={"relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"}
               breakLinkClassName={"relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700"}
               activeLinkClassName={"border-blue-300 text-blue-500 hover:bg-blue-50"}
            />

          
 

 
        </div>
      </div>
    </div>
  )
}