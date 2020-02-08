import React from 'react';
import Room from './Room';

function RoomList({rooms}) {
    if(rooms.length===0){
        return(
            <div className="empty-search">
                  <h3>
                    unfortunately no rooms match your search parameter
              
                </h3>
            </div>
        )
    }
    return (
        <section className="roomslist-center">
            {
                rooms.map(item=>{
                    return <Room key={item.id} room={item}/>
                })
            }
        </section>
    )
}

export default RoomList;
