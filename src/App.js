import logo from './bootcamp-icon.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { API } from 'aws-amplify';
import * as queries from './graphql/queries';
import React, { useEffect, useState } from 'react';
import ChannelCard from './components/ChannelCard';

function App() {
  const [channels, setChannels] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
      fetchMessages()
    }, [])

  useEffect(() => {
    fetchChannels()
  }, [])

  async function fetchMessages() {
      try {
          const messageData = await API.graphql({query: queries.listMessages})
          const messages = messageData.data.listMessages.items;
          console.log(messages);
          setMessages(messages)
      } catch(err) {
          console.log(err)
      }
  } 

  async function fetchChannels() {
    // Load all channel data using Amplify Data Store
    try {
      const channelData = await API.graphql({query: queries.listChannels})
      const channels = channelData.data.listChannels.items;

      setChannels(channels)
    } catch (err) {
      console.log(err);
    }
  }

  // const channels = await getChannels();
  return (
    <div className="App">
      <header className="App-header pb-3">
        <img src={logo} className="App-logo" alt="logo" />
        Technical Bootcamp 2023 - Amplify Demo <br/>
        How am I feeling Today?
      </header>
      <div className="container d-flex ms-auto flex-wrap">
        <div className="mx-auto d-flex flex-wrap">
        {
          channels.map((channel, index) => (
            <ChannelCard key={`${channel.id}-card`} className="mx-auto"
              channel={channel}
              messages={messages}
            />
          ))
        } 
        </div>
      </div>
    </div>
  );
}

export default App;
