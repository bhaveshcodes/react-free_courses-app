import React, { useState, useEffect } from "react";
import axios from "axios"
import EachCard from './EachCard';

const Cards = (props) => {

    console.log(props.searchQuery + "<<<<yayy");
    const [data, setData] = useState([])
    // const [query, setQuery] = useState('')

    useEffect(() => {
        fetchData();
        async function fetchData() {
            // const fetchData = async () => {
            // const result1 = await axios(`https://courses-project-api.vercel.app/api?c=${props.searchQuery}`)
            const result = await axios(`https://course-mongo-db-api.vercel.app/api?s=${props.searchQuery}`)
            
            // console.log(query);
            console.log(result.data);
            setData(result.data)
        }
    }, [props.searchQuery])


    return (

        // <h1>Loading...</h1>
        data.map(card => <EachCard key={card._id} title={card.name} description={card.description} thumbnail={card.thumbnail} author={card.author} views={card.views}  btn_txt={"Learn Now"} />)

    )
}
export default Cards




