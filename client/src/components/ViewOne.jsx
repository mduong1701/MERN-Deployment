import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import pirateStyle from './Main.module.css';

const ViewOne = () => {

    const { id } = useParams();

    const [thisPirate, setThisPirate] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirates/${id}`)
            .then(res => {
                console.log(res.data);
                setThisPirate(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            {
                thisPirate
                    ? <div>
                        <div className={pirateStyle.topBox}>
                            <h2 className={pirateStyle.name}>{thisPirate.name}</h2>
                        </div>

                        <div className={pirateStyle.flexDisplayViewOne}>
                        <div className={pirateStyle.shiver}>

                        <div ><img className={pirateStyle.pictureViewOne} src={thisPirate.image}/></div>
                        <div>

                        <h2>{thisPirate.phrase}</h2>
                        </div>
                        </div>
                        <div className={pirateStyle.details}>
                            <h2 className={pirateStyle.center}>About</h2>
                            <p>Position: {thisPirate.position}</p>
                            <p>Treasures: {thisPirate.treasure}</p>
                            <p>Peg Leg: {thisPirate.leg ? "Yes" : "No"} </p>
                            <p>Eye Patch: {thisPirate.eye ? "Yes" : "No"}</p>
                            <p>Hook Hand: {thisPirate.hand ? "Yes" : "No"}</p>
                        </div>
                        </div>
                    </div>
                    : "Loading ..."
            }
        </div>
    )
}

export default ViewOne