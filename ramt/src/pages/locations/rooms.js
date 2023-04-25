import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getRooms } from '../../utils/RoomService';

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

const Room = (room) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>room.name</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export const Rooms = (building) => {
    const [rooms, setRooms] = useState([])
    useEffect(() => { getRooms().then(setRooms) }, [])

    return (
        <div>
            {rooms.map((room) => (<Room room/>))}
        </div>
    );
}