import React from 'react';
import GalleryItem from './GalleryItem/GalleryItem';
function GalleryList({gallery, getGallery}) {
    return (
        // using a fragment to wrap up following html elements.
        <div className='gallery-list'>
            <p>Gallery goes here</p>
            
            {gallery.map( item => (
                <GalleryItem
                    key={item.id}
                    item={item}
                    getGallery={getGallery}
                />
            ))}
            {/* <img src="images/goat_small.jpg"/> */}
            {/* <img src="images/fourth.jpeg"/>
            <img src='images/fractured.JPG'/>
            <img src="images/gig.jpg"/>
            <img src="images/longboard.jpeg"/>
            <img src="images/three_ponchos.jpeg"/>
            <img src="images/tres_flamingos.jpeg"/> */}        
        </div>
    );
}

export default GalleryList;