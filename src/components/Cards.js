import React, { useState, useEffect } from "react";
import axios from "axios"
import EachCard from './EachCard';
//import Loader from "./Loader"

const Cards = (props) => {

    console.log(props.searchQuery + "<<<<yayy");
    const [data, setData] = useState([])
    // const [query, setQuery] = useState('')
 //   const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        fetchData();
        async function fetchData() {
            //setIsLoading(true)
            // const fetchData = async () => {
            // const result1 = await axios(`https://courses-project-api.vercel.app/api?c=${props.searchQuery}`)
//             const result = await axios(`https://course-mongo-db-api.vercel.app/api?s=${props.searchQuery}`)
             const result = await axios(`https://course-mongo-db-api.vercel.app/api?s=${props.searchQuery}&d= `)
            
            // console.log(query);
            console.log(result.data);
            setData(result.data)
            //setIsLoading(false)
        }
    }, [props.searchQuery])


    return (

        // const loading=var;
        //isLoading ?(<Loader />) :(data.map(card => <EachCard key={card._id} title={card.name} description={card.description} thumbnail={card.thumbnail} ytLink={card.youtube_link} author={card.author} views={card.views}  btn_txt={"Learn Now"} />))
        // <h1>Loading...</h1>
        data.map(card => <EachCard key={card._id} title={card.name} description={card.description} thumbnail={card.thumbnail} ytLink={card.youtube_link} author={card.author} views={card.views}  btn_txt={"Learn Now"} />)
    )
}
export default Cards




