import React from "react";
import axios from "axios";

function GalleryItem ({item, getGallery}) {
    const updateLikes = (itemId) => {
        axios.put(`/gallery/like/${itemId}`)
        .then(() => {
            getGallery();
        })
        .catch(err => {
            console.log('Erroring in updating likes', err);
        });
    }
}

export default GalleryItem;