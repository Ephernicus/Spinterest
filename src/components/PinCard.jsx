import React from 'react';
import '../Pin.css';

function pinCard({ image, save }) {
    return (
        <div className="pin-card">
            <img src={image}
                className="pin-image"
            />
            <button
                className="save-pin"
                onClick={() => save(image)}
            >
                Save
            </button>
        </div>
    );
}

export default pinCard;