import React from 'react';
import GalleryItem from './GalleryItem/GalleryItem';
function GalleryList({gallery, getGallery}) {
    return (
        <div className='gallery-list'>            
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