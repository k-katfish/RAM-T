import axios from 'axios';

//???
const SERVER_ADDRESS = 'http://localhost:45567/api/';

export function getReservations(roomname) {
    return axios.get(SERVER_ADDRESS + 'reservations/' + roomname).then((res) => JSON.parse(res.request.response).sort((a, b) => a.title.localeCompare(b.title)))
}

export function createReservation(title, roomname, starttime, endtime, user) {
    return axios.post(SERVER_ADDRESS + 'reservations/' + roomname + title, { title: title, starttime: starttime, endtime: endtime, user: user })
}