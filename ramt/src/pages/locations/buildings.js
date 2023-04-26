import { useEffect, useState } from "react"
import { getBuildings } from '../../utils/BuildingService'
import Accordion from 'react-bootstrap/Accordion'
//import { displayRooms } from './rooms'
//import { getRooms } from "../../utils/RoomService"
import { Rooms } from './rooms'

/*const building = (building, active) => {
    return (
        <div style={BuildingStyle}>
            <div>{building.name}</div>
            {active === false ? null : BuildingBody(building)}
        </div>
    )
}*/

const BuildingBody = (building) => {
    return (
        <Accordion.Item>
            <Accordion.Header>{building.name}</Accordion.Header>
            <Accordion.Body>
                <Rooms building/>
            </Accordion.Body>
        </Accordion.Item>
    )
}

export const Buildings = () => {
    const [buildings, setBuildings] = useState([])
    useEffect(() => { getBuildings().then(setBuildings) }, [])
    //const active = LocationID('buildings', buildings, 'name')

    return (
        <div>
            <h1>This page shows a list of all buildings</h1>
            <Accordion alwaysOpen>
                {buildings.map((building) => (<BuildingBody building/>))}
            </Accordion>
        </div>
    )
}

/*export const Buildings = () => {
    return (
        <div style={BuildingsListStyle}>
            <h1>This page shows a list of all buildings</h1>
            <Accordion alwaysOpen>

                <Accordion.Item eventKey="Building 1">
                    <Accordion.Header>Building 1</Accordion.Header>
                    <Accordion.Body>
                        {displayRooms(building)}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="wtf">
                    <Accordion.Header>Building 2</Accordion.Header>
                    <Accordion.Body>
                        {displayRooms(building)}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}*/
