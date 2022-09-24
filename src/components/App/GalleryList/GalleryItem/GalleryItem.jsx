import React, {useState} from "react";
import axios from "axios";
import './GalleryItem.css';

function GalleryItem ({item, getGallery}) {
    const [togglePic, setToggle] = useState(false);
    const [didLike, setDidLike] = useState(false);

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

    // handle button click.
    const handleClick = (itemId) => {
        // call PUT request.
        updateLikes(itemId);
        // set didLike to true.
        setDidLike(true);
    }

    return (
        <div className="gallery-item">
            <div className="display" onClick={() => {setToggle(!togglePic)}}>
                {togglePic ? 
                <p>{item.description}</p> :
                <img src={item.path} alt="gallery item"/>}
            </div>
            <div className="display-banner">
                {didLike ? 
                <p>Liked</p> :
                <button onClick={() => handleClick(item.id)}>Like</button>}
                <p>{item.likes === 0 ? 'No people like' : item.likes===1 ? `${item.likes} person likes` : `${item.likes} people like`} this!</p>
            </div>
        </div>
    );
}

export default GalleryItem;