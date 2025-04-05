import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import PinCard from "../components/PinCard";
import InfiniteScroll from "react-infinite-scroll-component";
import "../App.css";

function Explore() {
    // image array
    const [pins, setPins] = useState([]);
    // page number array 
    const [page, setPage] = useState(1);
    // search term in search bar
    const [searchTerm, setSearchTerm] = useState("");

    // loads images for the current page then appends them to the existing images
    const loadImages = () => {
        // fetches images from backend server based on whether a search term is present
        const url = searchTerm
            ? `http://localhost:3001/api/photos?page=${page}&query=${searchTerm}`
            : `http://localhost:3001/api/photos?page=${page}`;

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Network error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                // check if the API returned an error
                if (data.error) {
                    console.error("API Error:", data.error);
                    return;
                }

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
                // stop loading more images on error
                setHasMore(false);
            });
    };

    // triggers the intial image load 
    useEffect(() => {
        loadImages();
    }, []);

    // handles search 
    const handleSearch = (event) => {
        event.preventDefault();
        setPins([]); // clear existing pins
        setPage(1); // reset page number
        loadImages(); // load new images based on search term
    }

    // TODO : handles saving a pin, only console log for now
    const handleSave = (pin) => {
        console.log("Saved pin:", pin);
    };

    return (
        <div>
            <NavBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                onSearch={handleSearch}
            />
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