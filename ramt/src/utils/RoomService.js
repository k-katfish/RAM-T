import axios from 'axios';

//???
const SERVER_ADDRESS = 'http://localhost:8080/';

export function getRooms() {
    return axios.get(SERVER_ADDRESS + 'room').then((res) => JSON.parse(res.request.response))
}

export function getRoom(id) {
    return axios.get(SERVER_ADDRESS + 'rooms/' + id).then((res) => JSON.parse(res.request.response));
}

export function getRoomByID(id) {
    if (id === "rooms") {
        return getRooms();
    } else {
        return axios.get(SERVER_ADDRESS + 'rooms/findById' + id).then((res) => JSON.parse(res.request.response));
    }
}

export function createRoom(name, location) {
    return axios.post(SERVER_ADDRESS + 'rooms/' + name, { name: name, location: location })
}