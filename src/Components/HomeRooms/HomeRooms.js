import React from 'react'
import "./HomeRooms.css"
import RoomCard from './RoomCard'
import HomeRoomsData from '../Data/HomeRoomsData'

const HomeRooms = () => {

  return (
    <div className='HomeRooms'>
      <h4>THE CAPPA LUXURY HOTEL</h4>
      <h2>Rooms & Suites</h2>
      <div className="HomeRooms-boxes">
        {HomeRoomsData.map((item) => (
          <RoomCard id={item.id} title={item.title} price={item.price} cover={item.cover}/>
        ))}
      </div>
    </div>
  )
}

export default HomeRooms
