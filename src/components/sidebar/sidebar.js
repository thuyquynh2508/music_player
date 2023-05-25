import React, { useEffect, useState } from 'react'
import SidebarButton from './sidebarbutton'
import {BiCategoryAlt, BiTrendingUp, BiLibrary} from 'react-icons/bi'
import {TbPlayerPlay} from 'react-icons/tb'
import {MdFavoriteBorder} from 'react-icons/md'
import {GoSignOut} from 'react-icons/go'
import apiClient from '../../spotify'

export default function SideBar() {
  const [image, setImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLAY3C19kL0nV2bI_plU3_YFCtra0dpsYkg&usqp=CAU"
  );
  useEffect(() => {
    apiClient.get("me").then((response) => {
      setImage(response.data.images[0].url);
    });
  }, []);
  return (
    <div className='sidebar-container'>
        <img src={image} className='profile-img' alt='profile' />
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
