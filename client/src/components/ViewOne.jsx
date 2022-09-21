import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import pirateStyle from './Main.module.css';
import NavBar from './NavBar';

const ViewOne = () => {

    const { id } = useParams();

    const [thisPirate, setThisPirate] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/fruits/${id}`)
            .then(res => {
                console.log(res.data);
                setThisPirate(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <div className={pirateStyle.topBox}>
                <NavBar />
            </div>
            {
                thisPirate
                    ? <div>
                        <div className={pirateStyle.flexDisplayViewOne}>
                            <div className={pirateStyle.shiver}>

                                <div ><img className={pirateStyle.pictureViewOne} src={thisPirate.image} /></div>

                            </div>
                            <div className={pirateStyle.details}>
                                <h2 className={pirateStyle.center}>{thisPirate.name}</h2>
                                <p><strong>Price (per lb): </strong>${thisPirate.price}</p>
                                <p><strong>Description: </strong>{thisPirate.description}</p>
                            </div>
                        </div>
                    </div>
                    : "Loading ..."
            }
        </div>
    )
}

export default ViewOne