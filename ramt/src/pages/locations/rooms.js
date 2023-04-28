import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getRooms, getRoomByID } from '../../utils/RoomService';

export const displayRooms = () => {
    return (
        <div>
            <div>
                <p>This is where a room would go</p>
            </div>
            <div>
                <p>This is where another room would go</p>
            </div>
        </div>
    )
}

export const Room = (room) => {
    //const [rooms, setRooms] = useState([])
    //useEffect(() => { getRooms().then(setRooms) }, [])
    //const room = rooms;

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{room.name}</Card.Title>
                <Card.Text>
                    <p>
                    {room.name}
                    <br />
                    {room.description}
                    </p>
                </Card.Text>
                <Button variant="primary" href={"/rooms/" + room.id}>View Room</Button>
            </Card.Body>
        </Card>
    )
}

//export const Room = (room) => {
//}

/*export const Rooms = (rooms) => {
    //const [rooms, setRooms] = useState([])
    //useEffect(() => { getRooms().then(setRooms) }, [])

    return (
        <div>
            <h2>This is a list of all rooms.</h2>
            <h2>There are {rooms.length} rooms.</h2>
            {rooms.map((room) => {
                <div key={room.id}>
                    <p>
                        test
                    </p>
                </div>
            })}
        </div>
    );
}*/
//{rooms.map((room) => (<Room room/>))}