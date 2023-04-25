import axios from 'axios';

//???
const SERVER_ADDRESS = 'http://localhost:45567/api/';

export function getBuildings() {
    return axios.get(SERVER_ADDRESS + 'buildings').then((res) => JSON.parse(res.request.response).sort((a, b) => a.name.localeCompare(b.name)))
}

export function getBuilding(name) {
    return axios.get(SERVER_ADDRESS + 'buildings/' + name).then((res) => JSON.parse(res.request.response));
}

//export function createBuilding(name, location) {
//    return axios.post(SERVER_ADDRESS + 'rooms/' + name, { name: name, location: location })
//}