 import React from 'react'
 import {FaTwitterSquare} from 'react-icons/fa'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import { footerData } from '../mock-data/configData'

function Footer() {

const list2F = footerData.map(item => (
    <span className="flex justify-center p-2" key={item.id} >
        {item.labelText}
    </span>
 
    ))
  return (
    <div>
      <div className='w-full mt-12 bg-slate-600'>
        <div className='pt-20 flex justify-center'> <AiFillLinkedin className='w-8 h-8'/> <AiFillFacebook className='w-8 h-8'/> <FaTwitterSquare className='w-8 h-8'/>
        </div>
        <div className="pt-6 flex justify-center flex-col md:flex-row md:h-28 ">{list2F}</div>
    </div> 
    <div className="flex justify-center mt-4">© 2020 CharPixel Technologies LLP</div>
    </div>
  )
}

export default Footer