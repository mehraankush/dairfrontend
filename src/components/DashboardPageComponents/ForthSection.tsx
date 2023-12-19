import React from 'react'
import { TopUsers } from './Common/TopUsers'
import { TopCountry } from './Common/TopCountry'
import { MapMainSection } from './map/MapMainSection'

export const ForthSection = () => {
  return (
    <div className='flex mt-4 pb-7 justify-content-between bg-white mt-7'>
        <TopUsers/>
         <MapMainSection/>
        <TopCountry/>
    </div>
  )
}
