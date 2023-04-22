import React from 'react'
import './sidebarData/sidebar.css'
import tab from './sidebarData/tabs'
import {FaBars} from 'react-icons/fa'

export default function sidebar() {

    return (
        <div className='sbar'>
            <div className='sbarcontent'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGzmRGJF8UP4FiZ1yZWzoff-4ZO6zJ1BP0cA&usqp=CAU" alt="" />
            {tab.map(a => <a href='/' className='sbartags'><span>{a.logo}&nbsp;&nbsp;{a.tagName}</span></a>)}
            </div>
            <div>
                <a href='/' className='sbartags more'><span>{<FaBars/>}&nbsp;&nbsp;More</span></a>
            </div>
        </div>
    )
}
