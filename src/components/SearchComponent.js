import React, { useState } from "react";
import DropdownComponent from './DropdownComponent'

const SearchComponent = ({getQuery}) => {

    const [text, setText] = useState('')
    const onChange = (q) => {
        setText(q)
        getQuery(q)
        // console.log(q);
    }

    return (
        <section className="input-group search--Body">

            {/* <div className=" ">
                <form>
                <div className="form-outline search-bar">
                    <form>
                        <input type="search" id="form1" className="form-control search--container" placeholder="Search..." />
                        <button type="submit button" className="btn btn-dark btn--searchbar btn--search">₹
                        </button>
                    </form>
                </div>
                </form>

            </div> */}

            <form>
                <div className="input-group mb-3  ">
                    <input
                        type="text"
                        className="form-control search--container"
                        placeholder="Search..."
                        value={text}
                        onChange={(e) => onChange(e.target.value)}
                        autoFocus
                    />
                    <div className="input-group-append">
                        <button className="input-group-text btn btn-dark btn--searchbar btn--search">Go</button>
                    </div>
                </div>
            </form>


            <DropdownComponent title={"Duration"} />
            <DropdownComponent title={"Date Posted"} />
            // <DropdownComponent title={"Ratings"} />






        </section >
    )
}
export default SearchComponent
