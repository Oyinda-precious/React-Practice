import axios from "axios";
import { useEffect, useState } from "react";
// import {React }from 'react'

const MusicApi = () => {
  const [music, setmusic] = useState([]);
  useEffect(() => {
    axios("https://robo-music-api.onrender.com/music/my-api")
      .then((response) => {
        console.log(response);

        console.log(response.data);

        setmusic(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>This is Music Api</h1>
      {music.length === 0 ? (
        <div class="spinner-grow" role="status">
          <span class="sr-only"></span>
        </div>
      ) : (
        <div>
          {music.map((songs, index) => (
            <div className="musicdiv" key={index}>
              <div className="thebody">
                <h1>AlbumName:{songs.albumName}</h1>
                <h1>Releasedate:{songs.releaseDate}</h1>
                <h1>songTitle:{songs.songTitle}</h1>
                <img
                  style={{ height: "200px", width: "200px" }}
                  src={songs.songImage}
                  alt=""
                />
                <a href="" className="songsurl">
                  songURL:{songs.songUrl}
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MusicApi;
