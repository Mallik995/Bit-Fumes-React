// import React from 'react'

// // Component inside another component

// export default function Images2() {
//     const Images = ["https://images.news18.com/ibnlive/uploads/2018/04/modi-basavanna.jpg"

//         , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX0JYGzTTMjYK1RgtTSR1klLyv_2RY5t2KeQ&usqp=CAU"

//         , "https://i.pinimg.com/originals/fe/aa/e9/feaae94d050598e482b808a6e9478ec7.jpg"

//         , "https://c0.wallpaperflare.com/preview/805/50/477/architecture-temple-building-worship.jpg"
//         , "https://i1.wp.com/www.opindia.com/wp-content/uploads/2020/01/PM-Modi-in-Tumkur-Karnataka.jpg?resize=685%2C448&ssl=1"];

//     function ShowImages() {
//         return Images.map((img) => {
//             return (
//                 <div className="mx-auto border border-warning">
//                     <img src={img} width="550" height="450" />
//                 </div>
//             );
//         });
//     }

//     return (
//         <section>
//             {/* <img src={Images[0]} width="200" height="200"
//             /> */}
//             <div className="d-flex justify-content-center flex-wrap">
//                 <ShowImages />

//             </div>
//         </section>
//     )
// }


/************************* Adding New single image into existing list of images */

// import React, { useState } from 'react'
// export default function Images2() {
//     const [images, setImages] = useState([
//         "https://images.news18.com/ibnlive/uploads/2018/04/modi-basavanna.jpg"

//         , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX0JYGzTTMjYK1RgtTSR1klLyv_2RY5t2KeQ&usqp=CAU"

//         , "https://i.pinimg.com/originals/fe/aa/e9/feaae94d050598e482b808a6e9478ec7.jpg"

//         , "https://c0.wallpaperflare.com/preview/805/50/477/architecture-temple-building-worship.jpg"
//         , "https://i1.wp.com/www.opindia.com/wp-content/uploads/2020/01/PM-Modi-in-Tumkur-Karnataka.jpg?resize=685%2C448&ssl=1"

//     ])

//     const [updateImages, setUpdateImages] = useState("");

//     function handleClick() {
//         console.log("clicked on Img");
//     }

//     function ShowImages() {
//         return images.map((img) => {
//             return (
//                 <div className="mx-auto border border-warning my-1">
//                     <img src={img} alt="image" width="250" height="250" onClick={handleClick} />
//                 </div>
//             );
//         });
//     }

//     function handleAddNew() {
//         // setImages([...images, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-XjWX7Wh_JzU8gesOpGVc7iXx1JqXEdOfvA&usqp=CAU"])
//         if (updateImages !== "") {
//             setImages([...images, updateImages]);
//             // console.log(updateImages);
//             setUpdateImages("");
//         } else {
//             alert("Invalid!!! input handle add new");
//         }
//     }

//     function handleChange(event) {
//         if (event.target.value !== "") {
//             setUpdateImages(event.target.value);
//         }
//         return;
//     }

//     return (
//         <section>
//             <div className="d-flex flex-column p-0 my-3">
//                 <div className="d-flex justify-content-center flex-wrap">
//                     <ShowImages />
//                 </div>
//                 <div className="d-flex justify-content-between  m-5 p-0" >
//                     <input className="form-control" type="text" placeholder="Enter new Image URL" value={updateImages} onChange={handleChange} />
//                     {/* <button className="m-3 btn btn-danger" onClick={handleAddNew}>Add New Image</button> */}
//                     <button disabled={updateImages == ""} className={`m-3 ${updateImages != "" ? "btn btn-success" : "btn btn-secondary"}`} onClick={handleAddNew}>Add New Image</button>
//                 </div>
//             </div>
//         </section>
//     )
// }


/************************* Removing an image from existing list of images */

// import React, { useRef, useState, useEffect } from 'react'
// export default function Images2() {
//     const [images, setImages] = useState([
//         "https://images.news18.com/ibnlive/uploads/2018/04/modi-basavanna.jpg"

//         , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX0JYGzTTMjYK1RgtTSR1klLyv_2RY5t2KeQ&usqp=CAU"

//         , "https://i.pinimg.com/originals/fe/aa/e9/feaae94d050598e482b808a6e9478ec7.jpg"

//         , "https://c0.wallpaperflare.com/preview/805/50/477/architecture-temple-building-worship.jpg"
//         , "https://i1.wp.com/www.opindia.com/wp-content/uploads/2020/01/PM-Modi-in-Tumkur-Karnataka.jpg?resize=685%2C448&ssl=1"

//     ])

//     const [isHovering, setIsHovering] = useState(-1);



//     // to make auto-focus on input feild once the page is loaded
//     const inputRef = useRef(null);
//     useEffect(() => {
//         inputRef.current.focus();
//     }, [])

//     //to display count of images on DOM on delete of image // Not working
//     const varRef = useRef(images.length);
//     useEffect(() => {
//         varRef.current = varRef.current + 1;
//     })



//     function handleClick(index) {
//         // console.log("clicked on Img");
//         // console.log(images.filter((image, i) => i !== index));
//         // setImages(images.filter((i) => i !== index)); // won't work
//         // setImages(images.filter((img, i) => i !== index)); 
//         setImages([...images.slice(0, index), ...images.slice(index + 1, images.length)]);
//     }

//     function ShowImages() {
//         return images.map((img, index) => {
//             return (
//                 <div>
//                     <div className="d-flex mx-auto border border-warning my-1" key={index}>
//                         <div className="position-relative">
//                             <i className={`fas fa-times cursor-pointer pe-auto position-absolute top-0 end-0 opacity-0.25 hover:opacity-0.1 ${isHovering == index ? " " : "hidden"} `} onClick={() => handleClick(index)}></i>
//                             <img src={img} alt="image" width="250" height="250" onMouseEnter={() => setIsHovering(index)} onMouseLeave={() => setIsHovering(-1)} />
//                         </div>
//                     </div>
//                 </div>
//             );
//         });
//     }


//     return (
//         <section>
//             <h1>Component updated - {varRef.current} </h1>
//             <div className="d-flex flex-column p-0 my-3">
//                 <div className="d-flex justify-content-center flex-wrap">
//                     <ShowImages />
//                 </div>
//                 <div className="d-flex justify-content-center p-0 my-3" >
//                     <input className="form-control" type="text" placeholder="Enter new Image URL"
//                         id="inputBox" ref={inputRef}
//                     />
//                     <button className={`m-3`}>Add New Image</button>
//                 </div>

//             </div>
//         </section>
//     )
// }



/** ********************  API call - Images from Unplash -Api call       **********  */


// import React, { useRef, useState, useEffect } from 'react';
// import Axios from 'axios'
// import useScroll from '../utility/hooks/useScroll';

// export default function Images2() {
//     const [images, setImages] = useState([]);
//     const scrollPosition = useScroll(); // custom hooks

//     const [isHovering, setIsHovering] = useState(0);

//     // to make auto-focus on input feild once the page is loaded
//     const inputRef = useRef(null);
//     useEffect(() => {
//         inputRef.current.focus();
//         Axios.get(`${process.env.REACT_APP_UNSPLASH_URL}?client_id=${process.env.REACT_APP_UNSPLASH_KEY}`)
//             .then(res => {
//                 console.log(res);
//                 setImages(res.data);
//             })
//     }, [])

//     function handleClick(index) {
//         setImages([...images.slice(0, index), ...images.slice(index + 1, images.length)]);
//     }

//     function ShowImages() {
//         return images.map((img, index) => {
//             return (
//                 <div>
//                     <div className="d-flex mx-auto border border-warning my-1" key={index}>
//                         <div className="position-relative">
//                             <i className={`fas fa-times cursor-pointer pe-auto position-absolute top-0 end-0 opacity-0.25 hover:opacity-0.1 ${isHovering == index ? " " : "hidden"} `} onClick={() => handleClick(index)}></i>
//                             <img src={img.urls.small} alt="image" width="250" height="250" onMouseEnter={() => setIsHovering(index)} onMouseLeave={() => setIsHovering(-1)} />
//                         </div>
//                     </div>
//                 </div>
//             );
//         });
//     }


//     return (
//         <section>
//             <div className="d-flex flex-column p-0 my-3">
//                 <div className="d-flex justify-content-center flex-wrap">
//                     <ShowImages />
//                 </div>
//                 <div className="d-flex justify-content-center p-0 my-3" >
//                     <input className="form-control" type="text" placeholder="Enter new Image URL"
//                         id="inputBox" ref={inputRef}
//                     />
//                     <button className={`m-3`}>Add New Image</button>
//                 </div>

//             </div>
//         </section>
//     )
// }

/*****************************Custom hook to fetch Image ************/

// import React, { useRef, useState, useEffect } from 'react';
// import Axios from 'axios'
// import useScroll from '../utility/hooks/useScroll';
// import useFetchImage from '../utility/hooks/useFetchImage';

// export default function Images2() {
//     // const [images, setImages] = useState([]);
//     const [page, setPage] = useState(1);
//     const [images, setImages, errors] = useFetchImage(page); // custome hook to fetch image
//     const scrollPosition = useScroll(); // custom hooks to scroll the window
//     const inputRef = useRef(null);
//     const [isHovering, setIsHovering] = useState(0);

//     useEffect(() => {
//         inputRef.current.focus();
//     }, [])

//     function handleClick(index) {
//         setImages([...images.slice(0, index), ...images.slice(index + 1, images.length)]);
//     }
//     function ShowImages() {
//         return images.map((img, index) => {
//             return (
//                 <div >
//                     <div className="d-flex justify-content-center flex-wrap m-1 p-1" key={index}>
//                         <div className="position-relative border border-warning">
//                             <i className={`fas fa-times cursor-pointer pe-auto position-absolute top-0 end-0 opacity-0.25 hover:opacity-0.1 ${isHovering == index ? " " : "hidden"} `} onClick={() => handleClick(index)}></i>
//                             <img src={img.urls.small} className="rounded mx-auto d-block" alt="image" width="250" height="150" onMouseEnter={() => setIsHovering(index)} onMouseLeave={() => setIsHovering(-1)} />
//                         </div>
//                     </div>
//                 </div>
//             );
//         });
//     }
//     return (
//         <section>
//             {errors.length > 0 && (<div className="d-flex h-screen">
//                 <h1 className="d-flex m-auto">{errors}</h1>
//             </div>)
//             }
//             <div>
//                 <div className="d-flex justify-content-center flex-wrap " >
//                     <ShowImages />
//                 </div>
//                 {(errors.length === 0) && (
//                     <div>
//                         <div className="d-flex justify-content-center">
//                             <button onClick={() => setPage(page + 1)} className="btn btn-primary">Load more</button>
//                         </div>
//                         <div className="d-flex p-1 m-2" >
//                             <input className="form-control" type="text" placeholder="Enter new Image URL"
//                                 id="inputBox" ref={inputRef}
//                             />
//                             <button className={`m-3`}>Add New Image</button>
//                         </div>
//                     </div>

//                 )}

//             </div>

//         </section>
//     )
// }
/***************************** manual - infinite Scroll ************/

// import React, { useRef, useState, useEffect } from 'react';
// import Axios from 'axios'
// import useScroll from '../utility/hooks/useScroll';
// import useFetchImage from '../utility/hooks/useFetchImage';

// export default function Images2() {
//     // const [images, setImages] = useState([]);
//     const [page, setPage] = useState(1);
//     const [images, setImages, errors] = useFetchImage(page); // custome hook to fetch image
//     const scrollPosition = useScroll(); // custom hooks to scroll the window
//     const inputRef = useRef(null);
//     const [isHovering, setIsHovering] = useState(0);

//     useEffect(() => {
//         inputRef.current.focus();
//     }, [])

//     useEffect(() => {
//         // console.log(scrollPosition, window.innerHeight, document.body.offsetHeight);
//         if (scrollPosition >= document.body.offsetHeight - window.innerHeight) {

//             setPage(page + 1);
//         }
//         // console.log((document.body.offsetHeight - window.innerHeight));
//     }, [scrollPosition])



//     function handleClick(index) {
//         setImages([...images.slice(0, index), ...images.slice(index + 1, images.length)]);
//     }
//     function ShowImages() {
//         return images.map((img, index) => {
//             return (
//                 <div >
//                     <div className="d-flex justify-content-center flex-wrap m-1 p-1" key={index}>
//                         <div className="position-relative border border-warning">
//                             <i className={`fas fa-times cursor-pointer pe-auto position-absolute top-0 end-0 opacity-0.25 hover:opacity-0.1 ${isHovering == index ? " " : "hidden"} `} onClick={() => handleClick(index)}></i>
//                             <img src={img.urls.small} className="rounded mx-auto d-block" alt="image" width="250" height="150" onMouseEnter={() => setIsHovering(index)} onMouseLeave={() => setIsHovering(-1)} />
//                         </div>
//                     </div>
//                 </div>
//             );
//         });
//     }
//     return (
//         <section>
//             {errors.length > 0 && (<div className="d-flex h-screen">
//                 <h1 className="d-flex m-auto">{errors}</h1>
//             </div>)
//             }
//             <div>
//                 <div className="d-flex justify-content-center flex-wrap " >
//                     <ShowImages />
//                 </div>
//                 {(errors.length === 0) && (
//                     <div>
//                         <div className="d-flex justify-content-center">
//                             <button onClick={() => setPage(page + 1)} className="btn btn-primary">Load more</button>
//                         </div>
//                         <div className="d-flex p-1 m-2" >
//                             <input className="form-control" type="text" placeholder="Enter new Image URL"
//                                 id="inputBox" ref={inputRef}
//                             />
//                             <button className={`m-3`}>Add New Image</button>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </section>
//     )
// }


/***************************** Library - infinite Scroll ************/

// import React, { useRef, useState, useEffect } from 'react';
// import useFetchImage from '../utility/hooks/useFetchImage';
// import InfiniteScroll from 'react-infinite-scroll-component';

// export default function Images2() {
//     // const [images, setImages] = useState([]);
//     const [page, setPage] = useState(1);
//     const [images, setImages, errors] = useFetchImage(page); // custome hook to fetch image

//     const inputRef = useRef(null);
//     const [isHovering, setIsHovering] = useState(0);

//     useEffect(() => {
//         inputRef.current.focus();
//     }, [])

//     function handleClick(index) {
//         setImages([...images.slice(0, index), ...images.slice(index + 1, images.length)]);
//     }
//     function ShowImages() {
//         return (
//             <InfiniteScroll
//                 dataLength={images.length}
//                 next={() => setPage(page + 1)}
//                 hasMore={true}
//                 className="d-flex justify-content-center flex-wrap">
//                 {images.map((images, index) => {
//                     return (
//                         <div >
//                             <div className="d-flex justify-content-center flex-wrap m-1 p-1" key={index}>
//                                 <div className="position-relative border border-warning">
//                                     <i className={`fas fa-times cursor-pointer pe-auto position-absolute top-0 end-0 opacity-0.25 hover:opacity-0.1 ${isHovering == index ? " " : "hidden"} `} onClick={() => handleClick(index)}></i>
//                                     <img src={images.urls.small} className="rounded mx-auto d-block" alt="image" width="350" height="100%" onMouseEnter={() => setIsHovering(index)} onMouseLeave={() => setIsHovering(-1)} />
//                                 </div>
//                             </div>
//                         </div>
//                     );
//                 })
//                 }
//             </InfiniteScroll>
//         );
//     }
//     return (
//         <section>
//             {errors.length > 0 && (<div className="d-flex h-screen">
//                 <h1 className="d-flex m-auto">{errors}</h1>
//             </div>
//             )}
//             <div>
//                 {/* <div className="d-flex justify-content-center flex-wrap " >
//                     <ShowImages />
//                 </div> */}
//                 <ShowImages />
//                 {(errors.length === 0) && (
//                     <div>
//                         <div className="d-flex justify-content-center">
//                             <button onClick={() => setPage(page + 1)} className="btn btn-primary">Load more</button>
//                         </div>
//                         <div className="d-flex p-1 m-2" >
//                             <input className="form-control" type="text" placeholder="Enter new Image URL"
//                                 id="inputBox" ref={inputRef}
//                             />
//                             <button className={`m-3`}>Add New Image</button>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </section>
//     )
// }


/***************************** Search -Image by term ************/

// import React, { useRef, useState, useEffect } from 'react';
// import useFetchImage from '../utility/hooks/useFetchImage';
// import InfiniteScroll from 'react-infinite-scroll-component';

// export default function Images2() {
//     // const [images, setImages] = useState([]);
//     const [page, setPage] = useState(1);
//     const [searchTerm, setSearchTerm] = useState(null);
//     const [images, setImages, errors] = useFetchImage(page, searchTerm); // custome hook to fetch image

//     const inputRef = useRef(null);
//     const [isHovering, setIsHovering] = useState(0);

//     useEffect(() => {
//         inputRef.current.focus();
//     }, [])

//     function handleClick(index) {
//         setImages([...images.slice(0, index), ...images.slice(index + 1, images.length)]);
//     }
//     function ShowImages() {
//         return (
//             <InfiniteScroll
//                 dataLength={images.length}
//                 next={() => setPage(page + 1)}
//                 hasMore={true}
//                 className="d-flex justify-content-center flex-wrap">
//                 {images.map((images, index) => {
//                     return (
//                         <div >
//                             <div className="d-flex justify-content-center flex-wrap m-1 p-1" key={index}>
//                                 <div className="position-relative border border-warning">
//                                     <i className={`fas fa-times cursor-pointer pe-auto position-absolute top-0 end-0 opacity-0.25 hover:opacity-0.1 ${isHovering == index ? " " : "hidden"} `} onClick={() => handleClick(index)}></i>
//                                     <img src={images.urls.small} className="rounded mx-auto d-block" alt="image" width="350" height="100%" onMouseEnter={() => setIsHovering(index)} onMouseLeave={() => setIsHovering(-1)} />
//                                 </div>
//                             </div>
//                         </div>
//                     );
//                 })
//                 }
//             </InfiniteScroll>
//         );
//     }

//     function handleInput(e) {
//         setSearchTerm(e.target.value);
//     }
//     return (
//         <section>
//             {errors.length > 0 && (<div className="d-flex h-screen">
//                 <h1 className="d-flex m-auto">{errors}</h1>
//             </div>
//             )}
//             <div className="m-5">
//                 <input className="form-control p-2 border border-warning" type="text" placeholder="Enter to search images"
//                     id="inputBox" ref={inputRef} onChange={handleInput}
//                 />
//             </div>
//             <div>
//                 <ShowImages />
//                 {(errors.length === 0) && (
//                     <div>

//                         <div className="d-flex justify-content-center">
//                             <button onClick={() => setPage(page + 1)} className="btn btn-primary">Load more</button>
//                         </div>
//                         <div className="d-flex p-1 m-2" >

//                             <button className={`m-3`}>Add New Image</button>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </section>
//     )
// }
/***************************** Search -Image by term & useDebouce custom hook ************/

import React, { useRef, useState, useEffect } from 'react';
import useFetchImage from '../utility/hooks/useFetchImage';
import InfiniteScroll from 'react-infinite-scroll-component';
import useDebounce from '../utility/hooks/useDebounce';

export default function Images2() {
    // const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState(null);
    const [images, setImages, errors] = useFetchImage(page, searchTerm); // custome hook to fetch image

    const inputRef = useRef(null);
    const [isHovering, setIsHovering] = useState(0);

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    function handleClick(index) {
        setImages([...images.slice(0, index), ...images.slice(index + 1, images.length)]);
    }
    function ShowImages() {
        return (
            <InfiniteScroll
                dataLength={images.length}
                next={() => setPage(page + 1)}
                hasMore={true}
                className="d-flex justify-content-center flex-wrap">
                {images.map((images, index) => {
                    return (
                        <div >
                            <div className="d-flex justify-content-center flex-wrap m-1 p-1" key={index}>
                                <div className="position-relative border border-warning">
                                    <i className={`fas fa-times cursor-pointer pe-auto position-absolute top-0 end-0 opacity-0.25 hover:opacity-0.1 ${isHovering == index ? " " : "hidden"} `} onClick={() => handleClick(index)}></i>
                                    <img src={images.urls.small} className="rounded mx-auto d-block" alt="image" width="350" height="100%" onMouseEnter={() => setIsHovering(index)} onMouseLeave={() => setIsHovering(-1)} />
                                </div>
                            </div>
                        </div>
                    );
                })
                }
            </InfiniteScroll>
        );
    }

    // *********** DeBounce-Effect ****************

    const debounce = useDebounce();
    function handleInput(e) {
        const text = e.target.value;
        debounce(() => setSearchTerm(text));
    }
    // *********** DeBounce-Effect ****************
    return (
        <section>
            {errors.length > 0 && (<div className="d-flex h-screen">
                <h1 className="d-flex m-auto">{errors}</h1>
            </div>
            )}
            <div className="m-5">
                <input className="form-control p-2 border border-warning" type="text" placeholder="Enter to search images"
                    id="inputBox" ref={inputRef} onChange={handleInput}
                />
            </div>
            <div>
                <ShowImages />
                {(errors.length === 0) && (
                    <div>

                        <div className="d-flex justify-content-center">
                            <button onClick={() => setPage(page + 1)} className="btn btn-primary">Load more</button>
                        </div>
                        <div className="d-flex p-1 m-2" >

                            <button className={`m-3`}>Add New Image</button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}