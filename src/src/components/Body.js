import React from "react";
// import SearchComponent from './SearchComponent'
import Cards from './Cards'

  

const Body = (props) => {
    return (
        <div className=" ">
            {/* <SearchComponent /> */}
            <div className="h-divider" />
            <div className="cards--container">
                <Cards searchQuery={props.searchQuery} />
            </div>

        </div>
    )
}
export default Body