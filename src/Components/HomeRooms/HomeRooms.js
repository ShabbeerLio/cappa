import React from 'react'
import "./HomeRooms.css"
import RoomCard from './RoomCard'

const HomeRooms = () => {
  return (
    <div className='HomeRooms'>
      <h4>THE CAPPA LUXURY HOTEL</h4>
      <h2>Rooms & Suites</h2>
      <div className="HomeRooms-boxes">
        <RoomCard/>
        <RoomCard/>
        <RoomCard/>
        <RoomCard/>
        <RoomCard/>
      </div>
    </div>
  )
}

export default HomeRooms
