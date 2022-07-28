import React, { useState } from 'react';
import CollectionCard from './CollectionCard';
import './Watsonlist.css'

const WatsonList = ({ watsonListData }) => {

  return (

    <div className='Watsonlist'>
      {watsonListData.map(watson => (

        <div onClick={() => { console.log(watson.token_id) }}>

          <CollectionCard
            key={watson.token_id}
            id={watson.token_id}
            name={watson.name}
            traits={watson.traits}
            image={watson.image_original_url}
          />
        </div>
      ))}
    </div>
  )
}

export default WatsonList; 