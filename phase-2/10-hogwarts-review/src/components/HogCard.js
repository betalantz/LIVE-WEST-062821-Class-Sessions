import React, {useState} from 'react'
import HogDetails from './HogDetails'

export default function HogCard({ hog }) {
    
    const [showDetails, setShowDetails] = useState(false)
    const [isHidden, setIsHidden] = useState(false)


    const { name, specialty, image } = hog

    // hide the hog
    if (isHidden) return null;


    return (
        <div className="ui card eight wide column pigTile">
            <div className="image">
                <img src={image} alt="a cute hog" />
            </div>
            <div className="content">
                <h3 className="header">
                    {name}
                </h3>
                <div className="description">{specialty}</div>
            </div>
            <div className="extra content">
                {showDetails ? <HogDetails hog={hog} /> : null}
                <button className="ui button" onClick={() => setShowDetails((prevShowDetails) => !prevShowDetails)}>
                    {showDetails ? "Less Info" : "More Info"}
                </button>
                <button className="ui button" onClick={() => setIsHidden(true)}>
                    Hide Me
                    {" "}
                    <span role="img" aria-label="snout">
                        🐽
                    </span>
                </button>
            </div>
        </div>
    )
}
