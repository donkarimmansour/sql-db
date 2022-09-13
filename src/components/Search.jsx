import React, { useState } from "react";

export default function Search( {setSearch} ) {

  const [showOptions, setShowOptions] = useState({key :false ,  by :false , limit : false});
  const [localSearch, setLocalSearch] = useState({query : "..." , key : "FBID" ,  by : "one" , limit : 50});



  const handleChange = (e, key , val) => { 
    e.preventDefault();

    setLocalSearch({ ...localSearch, [key] : val });
     if(key === "limit"){
      setShowOptions({...showOptions , limit : false})
    }else  if(key === "by"){
      setShowOptions({...showOptions , by : false})
    }else  if(key === "key"){
      setShowOptions({...showOptions , key : false})
    }
  };

  const handleClick = (e) => {
    e.preventDefault();

    if(e.target.name === "limit"){
      setShowOptions({...showOptions , limit : true})
    }else  if(e.target.name === "by"){
      setShowOptions({...showOptions , by : true})
    }else  if(e.target.name === "key"){
      setShowOptions({...showOptions , key : true})
    }
  };

  const handleSearchChange = (e) => {
    setLocalSearch({...localSearch , query : e.target.value})
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(localSearch)
  };


  const options = ["FBID" , "First_NAME","Last_NAME","GENDER","LOCATION","HomeTown","BIRTHDAY","EMAIL","MOBILE"]
  const filterBy = ["one", "group"]
  const limits = [ 50, 20 , 30 , 100 , 200 , 500 , 1000]

  return (
    <form onSubmit={handleSearch}>
      <div className="flex">

        <button style={{zIndex : 100}} onClick={handleClick} name="limit" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 dark:border-gray-700 dark:text-white rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" type="button"> {localSearch?.limit || "..."} <svg aria-hidden="true" className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        
          {showOptions && showOptions.limit &&
          <div data-placement="bottom" id="dropdown" className={`z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 ${showOptions.limit
            ? " outline-none ring-1 ring-indigo-500 border-indigo-500 sm:text-sm"
            : "sm:text-sm"}`}>

            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
              {limits.map((t, i) => (
                <li  key={i} onClick={(e) => { handleChange(e, "limit" , t) }}>
                  <a href="javascript:void(0);" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{t}</a>
                </li>
              ))}
            </ul>
          </div>}
        

        </button>
       
       
        <button style={{zIndex : 99}} onClick={handleClick} name="by" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 dark:border-gray-700 dark:text-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" type="button"> {localSearch?.by || "..."} <svg aria-hidden="true" className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        
        {showOptions && showOptions.by &&
          <div data-placement="bottom" id="dropdown" className={`z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 ${showOptions.by
            ? " outline-none ring-1 ring-indigo-500 border-indigo-500 sm:text-sm"
            : "sm:text-sm"}`}>

            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
              {filterBy.map((t, i) => (
                <li  key={i} onClick={(e) => { handleChange(e, "by" , t) }}>
                  <a href="javascript:void(0);" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{t}</a>
                </li>
              ))}
            </ul>
          </div>}
        
        </button>


        <button style={{zIndex : 98}} onClick={handleClick} name="key" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 dark:border-gray-700 dark:text-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" type="button"> {localSearch?.key || "..."} <svg aria-hidden="true" className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        {showOptions && showOptions.key &&
          <div data-placement="bottom" id="dropdown" className={`z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 ${showOptions.key
            ? " outline-none ring-1 ring-indigo-500 border-indigo-500 sm:text-sm"
            : "sm:text-sm"}`}>

            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
              {options.map((t, i) => (
                <li  key={i} onClick={(e) => { handleChange(e, "key" , t) }}>
                  <a href="javascript:void(0);" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{t}</a>
                </li>
              ))}
            </ul>
          </div>}

        </button>


   
        


         
        <div className="relative w-full">
          <input onChange={handleSearchChange} type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search" />
          <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
        </div>


      </div>
    </form>

  )
}