import { useState, useEffect } from 'react';

import { getRooms, getRoomByID } from '../../utils/RoomService'

const Room = (room) => {
    return (
        <div key={room.name}>
            <h1>{room.name}</h1>
        </div>
    )
}

const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    useEffect(() => { getRooms().then(setRooms)}, []);
    //const active = LocationID('rooms', rooms, 'id');

    const path = window.location.pathname.split("/").filter(entry => entry !== "");
    const roomid = path[path.length - 1];

    const activeroom = getRoomByID(roomid);

    return (
        <div>
            <h1>View rooms</h1>
            <h2>the room you're looking for is {roomid}</h2>
            <h3>the active room is {activeroom.map((room) => Room(room))}</h3>
        </div>
    )
}

export default Rooms