import Layout from '../Layout/Layout'
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import "./UrbanElegance.css"
import DateSelector from '../DateSelector/DateSelector'

const UrbanElegance = () =>{

    // State to store the fetched data
    const [listingData, setListingData] = useState([]);


    // Function to fetch data from the API
    const fetchData = () => {
        axios.get('http://localhost:8080/rooms/urban-elegance')
            .then(response => {
                if (response.status !== 200) {
                    throw new Error('Network response was not ok: ' + response.data);
                }
                return response.data;
            })
            .then(data => {
                console.log(data);
                setListingData(data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    };

    // Fetch data when the component mounts
    useEffect(() => {
        fetchData();
    }, []); // Empty dependency array ensures useEffect runs only once on mount

    return (
        <div>
            <Layout/>

            <div className='listing-name'>
                {listingData.name}
            </div>

            <div className='listing-desc'>
                {listingData.description}
            </div>

            <div className='listing-img'>
                <img className='listing-img' src={listingData.imageURL}></img>
            </div>

            <DateSelector parameter='Urban Elegance'  />
        </div>
    );

}

export default UrbanElegance