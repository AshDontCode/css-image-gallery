import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Card from './Components/Card';
import ImageSearch from './Components/ImageSearch';
function App() {
  //This will have an array of images
    const [images, setImages]  = useState([]);

    //Api loading data or not
    const [isLoading, setIsLoading] = useState(true);

    //This is for search Term
    const [term, setTerm] = useState('');



  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=13187383-6ee4e69dde04b8b8a27211422&q=${term}&image_type=photo&pretty=true#`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits);
      setIsLoading(false);
    })
    .catch(err => console.log(err));
  }, [term])

  return (
  //  <h1>Hi there!</h1>
  <div className='container mx-auto'>
    <ImageSearch searchText = {(text) => setTerm(text)}/>
    {isLoading? <h1 className='text-6xl text-center mx-auto'>Loading......</h1> : <div className='grid grid-cols-3 gap-4'>
      {images.map(image => (
        <Card key={image.id} image={image}/>
      ))}
    </div>}
  </div>

  );
}

export default App;
