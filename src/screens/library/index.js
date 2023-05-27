import React, { useEffect, useState } from "react";
import apiClient from "../../spotify";
import playlistsData from "../../assets/data/playlist.json";
import { IconContext } from "react-icons";
import {AiFillPlayCircle} from "react-icons/ai"
import { useNavigate } from "react-router-dom";

export default function Library() {
  const [playlists, setPlaylists] = useState(null);
  async function fetchData() {
    try {
      const response1 = await apiClient
        .get("me/playlists")
        .then(function (response) {
          setPlaylists(response.data.items);
          console.log(response.data.items);
        });
      return response1;
    } catch (e) {
      console.log(e.toString());
    }
  }
  useEffect(() => {
    fetchData();
    // setPlaylists(playlistsData.items);
  }, []);

  const navigate = useNavigate();

  const playPlaylist = (id) => {
    navigate('/player', {state: {id: id}});
  }

  return (
    <div className="screen-container">
      <div className="library-body">
        {playlists?.map((playlist) => (
          <div className="playlist-card" key={playlist.id} onClick={() => playPlaylist(playlist.id)}>
            <img
              src={playlist.images[0].url}
              className="playlist-image"
              alt="Playlist-Art"
            />
            <p className="playlist-title">{playlist.name}</p>
            <p className="playlist-subtitle">{playlist.tracks.total} Songs</p>
            <div className="playlist-fade">
              <IconContext.Provider value={{ size: "50px", color:"#bfdcf4"}}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
