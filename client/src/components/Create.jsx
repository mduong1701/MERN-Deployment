import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import pirateStyle from './Main.module.css';

const Create = () => {

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [image, setImage] = useState("");
    const [phrase, setPhrase] = useState("");
    const [treasure, setTreasure] = useState(null);
    const [leg, setLeg] = useState(true);
    const [eye, setEye] = useState(true);
    const [hand, setHand] = useState(true);
    const [errors, setErrors] = useState([]);

    const [nameError, setNameError] = useState("");
    const acceptName = (event) => {
        setName(event.target.value);
        if (event.target.value.length < 5) {
            setNameError("Name must be at least 5 letters! (From React)");
        } else {
            setNameError("");
        }
    }

    const [phraseError, setPhraseError] = useState("");
    const acceptPhrase = (event) => {
        setPhrase(event.target.value);
        if (event.target.value.length < 5) {
            setPhraseError("Phrase must be at least 5 letters! (From React)");
        } else {
            setPhraseError("");
        }
    }

    const handleBackHome = () => {
        navigate("/pirates");
    }

    const createPirate = (event) => {
        event.preventDefault();

        axios.post("http://localhost:8000/api/pirates", {
            name,
            treasure,
            position,
            leg,
            eye,
            hand,
            image,
            phrase
        })
            .then(res => {
                console.log("SUCCESS SUCCESS");
                console.log(res.data);
                navigate("/pirates");
            })
            .catch(err => {
                console.log(err.response.data)
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }
    

    return (
    <div>
        <div className={pirateStyle.topBox}>

            <h2 className={pirateStyle.name}>Add Pirate</h2>
            <button
                className={pirateStyle.buttonBlue}
                onClick={handleBackHome}>
                Crew Board
            </button>
        </div>
        {
                nameError
                    ? <p style={{ color: 'red' }}>{nameError}</p>
                    : ""
            }

{
                phraseError
                    ? <p style={{ color: 'red' }}>{phraseError}</p>
                    : ""
            }
        
        {errors.map((err, index) => <p style={{ color: "red" }} key={index}>{err}</p>)}

        <form onSubmit={createPirate}>
            <div className={pirateStyle.flexDisplay}>

            <div>

                <div>
                <div>Name:</div>
                <input
                    onChange={acceptName}
                    value={name}
                    />
                </div>
                {/* ========================================================== */}
                <div>
                <div>Image Url:</div> 
                <input
                    onChange={event => setImage(event.target.value)}
                    value={image}
                    />
                </div>
                {/* ========================================================== */}
                <div>
                <div># of Treasure Chests: </div> 
                <input
                onChange={event => setTreasure(event.target.value)}
                type="Number"
                // onChange={acceptName}
                // onChange={event => setName(event.target.value)}
                // value={name}
                />
                </div>
                {/* ========================================================== */}
                <div>
                <div>Pirate Catch Phrases:</div>  
                <input
                    onChange={acceptPhrase}
                    value={phrase}
                    />
                </div>
                </div>

                {/* ========================================================== */}
                <div>

                <div>
                <div>Crew Position: </div> 
                <select
                    value = {position}
                    onChange={(event) => {
                        setPosition(event.target.value)
                    }}>
                    <option value="" disabled>Select one</option>
                    <option value="Captain">Captain</option>
                    <option value="First Mate">First Mate</option>
                    <option value="Quarter Master">Quarter Master</option>
                    <option value="Boatswain">Boatswain</option>
                    <option value="Powder Monkey">Powder Monkey</option>
                </select>

                </div>
                {/* ========================================================== */}
                <div><input
                    type="checkbox"
                    onChange={event => setLeg(event.target.checked)}
                    checked={leg}
                    /> Peg Leg</div>
                {/* ========================================================== */}
                <div><input
                    type="checkbox"
                    onChange={event => setEye(event.target.checked)}
                    checked={eye}
                    /> Eye Patch</div>
                {/* ========================================================== */}
                <div><input
                    type="checkbox"
                    onChange={event => setHand(event.target.checked)}
                    checked={hand}
                    /> Hook Hand</div>



               
                <button className={pirateStyle.buttonBlue}>Add Pirate</button>
                    </div>

                    </div>
            </form>
    </div>
  )
}

export default Create