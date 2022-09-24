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
        </div>
    );
}

export default GalleryList;