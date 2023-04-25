import axios from 'axios';

//???
const SERVER_ADDRESS = 'http://localhost:45567/api/';

export function getRooms() {
    return axios.get(SERVER_ADDRESS + 'rooms').then((res) => JSON.parse(res.request.response).sort((a, b) => a.name.localeCompare(b.name)))
}

export function getRoom(name) {
    return axios.get(SERVER_ADDRESS + 'rooms/' + name).then((res) => JSON.parse(res.request.response));
}

export function createRoom(name, location) {
    return axios.post(SERVER_ADDRESS + 'rooms/' + name, { name: name, location: location })
}