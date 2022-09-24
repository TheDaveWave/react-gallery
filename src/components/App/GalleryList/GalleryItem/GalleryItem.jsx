import React from "react";
import axios from "axios";

function GalleryItem ({item, getGallery}) {

    const updateLikes = (itemId) => {
        console.log(`In axios PUT route /gallery/like/${itemId}`)
        axios.put(`/gallery/like/${itemId}`)
        .then(() => {
            // refesh the gallery items.
            getGallery();
        })
        .catch(err => {
            console.log('Erroring in updating likes', err);
        });
    }

    return (
        <div className="gallery-item">
            <img src={item.path}/>
            <div>
                <button onClick={() => updateLikes(item.id)}>Like</button>
                <p>{item.likes} people like this!</p>
            </div>
        </div>
    );
}

export default GalleryItem;