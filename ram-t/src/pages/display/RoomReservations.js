import { useEffect, useState } from 'react'
import { RoomCard, ReservationTimes } from './style'

const reservation = (reservation, active) => {
    return (
        <div style={RoomCard}>
            {active === true ? ReservationBody(reservation) : null}
        </div>
    )
}

const ReservationBody = (reservation) => {
    return (
        <>
            <div style={ReservationTimes}>
                {reservation.starttime}
                {reservation.endtime}
            </div>

            <div style={ReservationUserIcon}>
                {reservation.usericon}
            </div>
            
            <div style={ReservationInfo}>
                {reservation.title}
            </div>
        </>
    )
}

const Reservations = () => {
    const [reservations, setReservations] = useState([])
    useEffect(() => { getReservations().then(setReservations) }, [])
    const active = LocationID('reservations', reservations, 'name')

    return (
        <div style={ReservationsList}>
            <ClickList active={active} list={reservations} item={reservation} path='/reservations' id='name' />
        </div>
    )
}

export default Reservations