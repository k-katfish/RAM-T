import axios from 'axios';

//???
const SERVER_ADDRESS = 'http://localhost:8080/';

export function getLocations() {
    return axios.get(SERVER_ADDRESS + 'location').then((res) => JSON.parse(res.request.response));
}

export function getLocation(name) {
    return axios.get(SERVER_ADDRESS + 'locations/findbyName' + name).then((res) => JSON.parse(res.request.response));
}

//export function createBuilding(name, location) {
//    return axios.post(SERVER_ADDRESS + 'rooms/' + name, { name: name, location: location })
//}