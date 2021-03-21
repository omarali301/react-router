import React, { useEffect, useState } from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Team from '../Team/Team';

const Home = () => {

       const [teams,setTeams] = useState([])
      

       useEffect(() =>{
        const url =`https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`
        fetch(url)
        .then(res => res.json())
        .then(data =>{

            const all_leagues = data.leagues;
            const leagues20 = all_leagues.slice(0,20);
            setTeams(leagues20);
        })

       },[])
  
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 banner1">
                  <h1 className="banner-text">International Sports Team</h1>

                </div>
            </div>

            <div className="row">
                

            {
                teams.map(team =><Team allTeam={team}> </Team>)
            }

            </div>

         </div>
                );
            };

export default Home;