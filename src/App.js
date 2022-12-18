import React, { useState } from 'react';
import './App.css';
import Header from './components/Header'
import Body from './components/Body'
import SearchComponent from './components/SearchComponent'
// import Cards from './components/Cards'

function App() {

  const [search, setSearchq] = useState('')
  return (
    <div className="App">
      <Header />
      <div className="main--Body">
        <SearchComponent getQuery={(q) => setSearchq(q)} />
        <Body searchQuery={search} />
      </div>

    </div>
  );
}

export default App;
