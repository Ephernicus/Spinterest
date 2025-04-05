import React from 'react';
import '../Pin.css';

function pinCard({ image, save }) {
    return (
        <div className="pin-card">
            <img src={image} className="pin-image" />
            <div className="pin-overlay">
                <button id="save-button" className="pin-button" onClick={() => save(image)}>Save</button>
                <button id="download-button" className="pin-button" onClick={() => download(image)}>
                    <img src="/icons/download.png" />
                </button>
            </div>
        </div>
    );
}

export default pinCard;