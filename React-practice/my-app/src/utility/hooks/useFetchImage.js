import React, { useEffect, useState } from 'react';
import Axios from 'axios';

// const url = process.env.REACT_APP_UNSPLASH_URL;
const secret = process.env.REACT_APP_UNSPLASH_KEY;
// const url = process.env.REACT_APP_UNSPLASH_API;
const api = process.env.REACT_APP_UNSPLASH_API;


export default function useFetchImage(page, searchTerm) {
    const [images, setImages] = useState([]);
    const [errors, setErrors] = useState([]);
    const url = searchTerm == null ? "photos" : "search/photos"
    useEffect(() => {
        // Axios.get(`${url}?client_id=${secret}&page=${page}`)
        Axios.get(`${api}/photos?client_id=${secret}&page=${page}`)
            .then(res => {
                // console.log(res);
                // setImages([...images, ...res.data]);               
                // setImages([...res.data.results]); // for serching images by term
                setImages([...images, ...res.data]); // for serching images by term                
            }).catch(e => {
                // console.log(e.response.data.errors);
                setErrors(e.response.data.errors);
            });
    }, [page])
    useEffect(() => {
        if (searchTerm == null) return;
        // Axios.get(`${url}?client_id=${secret}&page=${page}`)
        Axios.get(`${api}/search/photos?client_id=${secret}&page=${page}&query=${searchTerm}`)
            .then(res => {
                // console.log(res);
                // setImages([...images, ...res.data]);               
                setImages([...res.data.results]); // for serching images by term

            }).catch(e => {
                // console.log(e.response.data.errors);
                setErrors(e.response.data.errors);

            });
    }, [searchTerm])
    return [images, setImages, errors];
}
