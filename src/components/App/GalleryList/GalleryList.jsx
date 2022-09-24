import React from 'react';
function GalleryList({gallery, getGallery}) {
    return (
        // using a fragment to wrap up following html elements.
        <div className='gallery-list'>
            <p>Gallery goes here</p>
            
            
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