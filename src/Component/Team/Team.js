import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap'
import './Team.css';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee , faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons'


const Team = (props) => {

    const {strLeague,strSport,idLeague} =props.allTeam;


        const history = useHistory();
      
        const handleClick = (teamId) =>{
            const url = `/details/${teamId}`
            history.push(url);
      
        }

    return (
        
     

            <div className="Col-md-3 card-Style">
               
            <Card style={{ width: '18rem', background:'gray',color:'white' }}>
                <Card.Img variant="top" src="" />
                     <Card.Body>
                        
                    <Card.Title>League Name : {strLeague}</Card.Title>
                    <Card.Text> Type of sports :{strSport}
                        </Card.Text>
             
                   <button className="btn btn-danger" onClick={() =>handleClick(idLeague)}>Click for details <FontAwesomeIcon icon={faLongArrowAltRight} /></button>
                 
                </Card.Body>
            </Card>

            </div>


       
    );
};

export default Team;