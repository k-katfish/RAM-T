import { useEffect, useState } from "react"
import { getLocations } from '../../utils/LocationService'
import Accordion from 'react-bootstrap/Accordion'
//import { displayRooms } from './rooms'
//import { getRooms } from "../../utils/RoomService"
import { Room, Rooms } from './rooms'
//import axios from 'axios';

/*const building = (building, active) => {
    return (
        <div style={BuildingStyle}>
            <div>{building.name}</div>
            {active === false ? null : BuildingBody(building)}
        </div>
    )
}*/

/*const location = (location, active) => {
    return (
        <div>
            {active === false ? null : LocationBody(location)}
        </div>
    )
}*/

const LocationBody = (location) => {
    return (      
        <div style={{margin: "10px"}}>          
        <Accordion alwaysOpen key={location.name}>
            <Accordion.Item>
                <Accordion.Header>{location.name}</Accordion.Header>
                <Accordion.Body >
                    {location.rooms.map((room) => (<div style={{ display:'inline-block', margin: '10px' }} key={room.id}>{Room(room)}</div>))}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        </div>
    )
}

export const Locations = () => {
    const [locations, setLocations] = useState([]);
    useEffect(() => { getLocations().then(setLocations) }, [])
    /*useEffect(() => {
        axios
            .get('http://localhost:45567/api/' + 'location/findall').then((response) => {
                setLocations(response)
            });
    }, []);*/
    //const active = LocationID('buildings', buildings, 'name')

    return (
        <div style={{margin: "10px"}}>
            {locations.map((location) => (
                LocationBody(location)
            ))}
        </div>
    )
}
//                {locations.map((l) => (<LocationBody l/>))}

/*{locations.map((location) => (
    <Accordion alwaysOpen>
        <Accordion.Item>
            <Accordion.Header>{location.locationName}</Accordion.Header>
            <Accordion.Body>
                <p>{location.LocationAddress}</p>
                {Rooms(location.rooms)}
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
    ))}*/