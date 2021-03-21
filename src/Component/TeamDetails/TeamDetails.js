import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Male from '../../Photo/male.png';
import Female from '../../Photo/female.png';
import './TeamDetails.css';
import './TeamDetails.css';
import twitter from '../../Icon/Twitter.png'
import facebook from '../../Icon/Facebook.png'
import youTube from '../../Icon/YouTube.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee, faTwitter } from '@fortawesome/free-solid-svg-icons';
// import {  faYouTube } from '@fortawesome/free-solid-svg-icons';

function TeamDetails() {

    const { teamId } = useParams();
    const [details, setDetails] = useState([]);
    const { strLeague, strCountry, intFormedYear, strSport, strGender, strLogo, strDescriptionEN,strFacebook,strTwitter,strYoutube } = details;

    useEffect(() => {

        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${teamId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data.leagues[0]));

    }, []);

    let showImage;

    if (strGender === 'Male') {

        showImage = <img style={{ width: '18rem' }} src={Male} alt="" />;
    }
    else {

        showImage = <img style={{ width: '18rem' }} src={Female} alt="" />;
    }


    return (

        <div className="container">

            <div className="row banner-container">
                <div className="col-md-12 banner">
                    <img style={{ width: '25rem', height: '10rem', marginTop: '10rem' }} src={strLogo} alt="" />

                </div>
            </div>

            <div className="row bg-primary">
                <div className="col-md-6">
                    <h3>{strLeague}</h3>
                    <p>Founded: {intFormedYear}</p>
                    <p>Country: {strCountry}</p>
                    <p>sport Type: {strSport}</p>
                    <p>Gender: {strGender}</p>

                </div>

                <div className="col-md-6">


                    {showImage}
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 bg-color">
                    <p>Gender: {strDescriptionEN}</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 icon">
                    {/* <FontAwesomeIcon icon={faYouTube} /> */}
                    {/* <FontAwesomeIcon icon={faCoffee} /> */}

                   <a href={strTwitter}><img src={twitter} alt=""/></a>
                   <a href={strFacebook} ><img src={facebook} alt=""/></a>
                   <a href={strYoutube} ><img src={youTube} alt=""/></a>
               

                </div>
            </div>

        </div>


    );
}

export default TeamDetails;