import React, { createContext } from 'react'

const SearchContext = createContext({quert : "..." , key : "FBID" , by : "one" , limit : 50})
export const SearchProvider= SearchContext.Provider
export default SearchContext