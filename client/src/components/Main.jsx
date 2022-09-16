import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import pirateStyle from './Main.module.css';

const Main = (props) => {

    const [pirates, setPirates] = useState([]);
    const navigate = useNavigate();
    const handleAdd = () => {
        navigate("/pirates/new");
    }

    const compareName = (a, b) => {

        // converting to uppercase to have case-insensitive comparison
        const name1 = a.name.toUpperCase();
        const name2 = b.name.toUpperCase();
    
        let comparison = 0;
    
        if (name1 > name2) {
            comparison = 1;
        } else if (name1 < name2) {
            comparison = -1;
        }
        return comparison;
    }


    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates")
            .then(res => {
                console.log(res.data);
                setPirates(res.data.sort(compareName));
            })
            .catch(err => console.log(err))
    }, [])

    const deletePirate = (deleteID) => {
        axios.delete(`http://localhost:8000/api/pirates/${deleteID}`)
            .then(res => {
                console.log(res.data);
                console.log("Delete successfully");
                // remove the note from the DOM after a successful deletion
                setPirates(pirates.filter((pirate) => pirate._id !== deleteID));
            })
            .catch(err => console.log(err))
    }

    const viewPirate = (viewID) => {
        navigate("/pirates/" + viewID);
    }

    return (
        <div >
            <div className={pirateStyle.topBox}>
                <h2 className={pirateStyle.name}>Pirate Crew</h2>
                <button
                    className={pirateStyle.buttonBlue}
                    onClick={handleAdd}>
                    Add Pirate
                </button>
            </div>
            <div className={pirateStyle.bigBox}>
                {pirates.map((onePirate) => {
                    return (
                            <div key={onePirate._id} className={pirateStyle.boxMain}>
                                <div ><img className={pirateStyle.pictureViewOne} src={onePirate.image}/></div>
                                <div>
                                    <h3>{onePirate.name}</h3>
                                    <button
                                        className={pirateStyle.buttonBlue}
                                        onClick={() => viewPirate(onePirate._id)}>
                                        View Pirate
                                    </button>

                                    <button
                                        className={pirateStyle.buttonRed}
                                        onClick={() => deletePirate(onePirate._id)}>
                                        Walk the Plank
                                    </button>
                                </div>

                            

                            </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Main