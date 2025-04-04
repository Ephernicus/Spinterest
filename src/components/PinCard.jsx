export default function PinGallery({ pins }) {
    return (
        <div className="pin-gallery">
            {pins.map((pin, index) => (
                <div className="pin-container" key={index}>
                    <img src={pin.imageUrl} alt={pin.title} />
                    <div className="overlay">
                        <button>Save</button>
                    </div>
                    <PinCard key={pin.id} pin={pin} />
                </div>
            ))}
        </div>
    );
}