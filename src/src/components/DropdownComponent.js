import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';

import React from "react";



const DropdownComponent = (props) => {
    return (
        <Dropdown>
            <Dropdown.Toggle id="dropdown-button-dark-example1" className='btn--searchbar' variant="">
                {props.title}
            </Dropdown.Toggle>
            <Dropdown.Menu variant="dark">
                <Dropdown.Item href="#/action-1">Dropdown 1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Dropdown 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Dropdown 3</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}
export default DropdownComponent


