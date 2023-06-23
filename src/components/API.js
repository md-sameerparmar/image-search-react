import React,{useState, useEffect} from 'react'
import axios from 'axios'

function LoadImages() {
    const [state, setState] = useState([]);
    const count = 1;

    useEffect(() => {
        axios
        .get("https://api.unsplash.com/photos?per_page=50&client_id=N1bU6WzgniFkg1gauHk-zvct6lpltUBZwz2Kit5I6dQ")
        .then((data) =>{
            setState(data.data)
        }
        )
    }, [count])
        
    return state;
}

function SearchImages(query) {
    const [state, setState] = useState([]);
    const count = 1;

    useEffect(() => {
        axios
        .get("https://api.unsplash.com/search/photos?query="+query+"&per_page=50&client_id=N1bU6WzgniFkg1gauHk-zvct6lpltUBZwz2Kit5I6dQ")
        .then((data) =>{
            setState(data.data.results)
        }
        )
    }, [query])
        
    return state;
}

export {LoadImages, SearchImages}