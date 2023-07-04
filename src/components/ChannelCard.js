import { API } from 'aws-amplify';
import Card from 'react-bootstrap/Card';
import * as mutations from '../graphql/mutations';
import React from 'react';


const emojis = [
    { 
        icon:false,
        value: 0,
    },
    { 
        icon:'😎',
        text: 'We Got This!',
        value: 0,
    },
    { 
        icon:'🤯',
        text: 'Brain ... hurts',
        value: 0,
    },
    { 
        icon:'😍',
        text: 'Loving it!',
        value: 0,
    },
    { 
        icon:'🙁',
        text: 'Its hard',
        value: 0,
    },
    { 
        icon:'🙈',
        text: 'Can\'t Look!',
        value: 0,
    },  
];

async function messageClick(id, index) {
    // need an endpoint to increment the valie of the emoji message in DDB
    console.log('messageClick: ', id, index)
    const messageDetails = {
        id: id,
        value: 1
      };

    console.log('trying update/')
    const updated = await API.graphql({
        query: mutations.updateMessage,
        variables: { input: messageDetails }
    })
    console.log('updated: ', updated)
    // need to update the state of the emoji
}

export default function ChannelCard({channel, messages}) {
   
    return (
        <div className='m-5' key={channel.id}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`/${channel.name.toLowerCase()}.jpeg`} />
                <Card.Body>
                    <Card.Title>{channel.name}</Card.Title>
                    <Card.Text>{channel.description}</Card.Text>
                    <ul className="list-group list-group-flush">  
                        {
                            messages.map((message, index) => (
                                message.channelID === channel.id && <li key={`${channel.id}-${index}`} className="list-group-item">
                                    {
                                        emojis[message.message].icon &&                                  
                                            <button
                                                className='btn btn-light'
                                                onClick={(e) => { messageClick(message.id, index)}}
                                            >
                                               <span className='fs-2'>{emojis[message.message].icon}</span><span className='mx-4 fs-2'>{message._version}</span>
                                               <br/><span>{emojis[message.message].text}</span>
                                            </button>
                                    }
                                </li>
                            ))
                        } 
                 
                    </ul>
                </Card.Body>
            </Card>
        </div>
    );
}