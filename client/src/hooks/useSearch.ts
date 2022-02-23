import React from 'react'

import { SearchContext } from '../context/search'

function Search() {
  const context = React.useContext(SearchContext)

  if (!context) {
    throw new Error('useSearch use in SearchContext.Provider')
  }

  return context
}

export default Search
