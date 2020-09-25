import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebAPI from 'spotify-web-api-js';
import Player from './Player';
import { useStateValue } from './StateProvider';
const spotify = new SpotifyWebAPI();

function App() {
  const [{ user, token }, dispatch] = useStateValue();

  useEffect(() => {
    // Set token
    const hash = getTokenFromUrl();
    window.location.hash = '';
    let _token = hash.access_token;

    if (_token) {
      spotify.setAccessToken(_token);

      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });

      spotify.getPlaylist('6dCvdNaCR7qj7f2rkkwQDj').then((response) =>
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        })
      );

      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: 'SET_TOP_ARTISTS',
          top_artists: response,
        })
      );

      dispatch({
        type: 'SET_SPOTIFY',
        spotify: spotify,
      });

      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists,
        });
      });
    }
  }, [token, dispatch]);
  return (
    <div className='app'>
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
