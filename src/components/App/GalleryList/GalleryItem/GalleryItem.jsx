import React, {useState} from "react";
import axios from "axios";

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
            <div onClick={() => {setToggle(!togglePic)}}>
                {togglePic ? 
                item.description :
                <img src={item.path}/>}
            </div>
            <div>
                {didLike ? 
                <p>Liked</p> :
                <button onClick={() => handleClick(item.id)}>Like</button>}
                <p>{item.likes} people like this!</p>
            </div>
        </div>
    );
}

export default GalleryItem;