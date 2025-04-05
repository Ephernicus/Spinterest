import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import PinCard from "../components/PinCard";
import InfiniteScroll from "react-infinite-scroll-component";
import "../App.css";

function Explore() {
    const [pins, setPins] = useState([]);
    const [page, setPage] = useState(1);

    // loads images for the current page then appends them to the existing images
    const loadImages = () => {
        fetch(`http://localhost:3001/api/photos?page=${page}`)
            .then((response) => response.json())
            .then((data) => {
                // appends new images to exisiting array, and filter out duplicates
                setPins((prevPins) => {
                    const newPins = data.filter((pin) => !prevPins.some((p) => p.id === pin.id));
                    return [...prevPins, ...newPins];
                });
                // increments page number for next fetch
                setPage((prevPage) => prevPage + 1);
            })
            .catch((error) => {
                console.error("Error fetching photos:", error);
            });
    };

    // triggers the intial image load 
    useEffect(() => {
        loadImages();
    }, []);

    // TODO : handles saving a pin, only console log for now
    const handleSave = (pin) => {
        console.log("Saved pin:", pin);
    };

    return (
        <div>
            <NavBar />
            <InfiniteScroll
                dataLength={pins.length} // current total of images
                next={loadImages} // method to load next batch of images
                hasMore={true} // always true for infinite scroll
                loader={<h4>Loading...</h4>}
            >
                <div className="pin-container">
                    {pins.map((pin) => (
                        <PinCard
                            key={pin.id}
                            image={pin.urls.small}
                            save={handleSave}
                        />
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    );
}

export default Explore;