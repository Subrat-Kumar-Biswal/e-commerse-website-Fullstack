import React from 'react'
import './NewCollection.css'
import new_colletions from '../Assets/new_collections'
import Item from '../Items/Item'
export const NewCollection = () => {
  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="colletions">
            {new_colletions.map((item, i) => {
                 return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default NewCollection