import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import GalleryList from './GalleryList/GalleryList';

function App() {
  // create a state for getting the gallery list.
  const [gallery, setGallery] = useState([]);

  // GET route for getting the list of gallery objects.
  const getGallery = () => {
    console.log('In axios GET /gallery');
    axios.get('/gallery')
    .then(response => {
      // set the gallery variable to the array of gallery objects.
      setGallery(response.data);
    })
    .catch(err => {
      console.log('Error in getting gallery', err);
    });
  }

  // call getGallery once per refesh of page.
  useEffect(() => {
    getGallery();
  }, []);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList gallery={gallery} getGallery={getGallery} />
      </div>
    );
}

export default App;
