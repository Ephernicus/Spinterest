import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import PinCard from "../components/PinCard";
import "../App.css";

function Explore() {
    const [pins, setPins] = useState([]);

    // fetches array of photos from the backend
    useEffect(() => {
        fetch("http://localhost:3001/api/photos")
            .then((response) => response.json())
            .then((data) => {
                console.log("Fetched photos:", data);
                setPins(data);
            })
            .catch((error) => {
                console.error("Error fetching photos:", error);
            });
    }, []);

    // TODO : handles saving a pin, only console log for now
    const handleSave = (pin) => {
        console.log("Saved pin:", pin);
    };

    return (
        <div>
            <NavBar />
            <div className="pin-container">
                {pins.map((pin) => (
                    <PinCard
                        key={pin.id}
                        image={pin.urls.small}
                        save={handleSave}
                    />
                ))}
            </div>
        </div>
    );
}

export default Explore;