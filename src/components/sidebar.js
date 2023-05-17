import React from 'react'
import "../assets/components/sidebar.css"
import SidebarButton from './sidebarbutton'
import {BiCategoryAlt, BiTrendingUp, BiLibrary} from 'react-icons/bi'
import {TbPlayerPlay} from 'react-icons/tb'
import {MdFavoriteBorder} from 'react-icons/md'
import {GoSignOut} from 'react-icons/go'

export default function SideBar() {
  return (
    <div className='sidebar-container'>
        <img src="https://kaigaianzen.jp/wp-content/uploads/2021/06/avatar-placeholder.png" className='profile-img' alt='profile' />
        <div>
            <SidebarButton title="Feed" to="/feed" icon={<BiCategoryAlt/>} />
            <SidebarButton title="Trending" to="/trending" icon={<BiTrendingUp/>} />
            <SidebarButton title="Player" to="/player" icon={<TbPlayerPlay/>} />
            <SidebarButton title="Favorites" to="/favorites" icon={<MdFavoriteBorder />} />
            <SidebarButton title="Library" to="/" icon={<BiLibrary/>} />
        </div>
        <SidebarButton title="SignOut" to="" icon={<GoSignOut />} />
    </div>
  )
}
