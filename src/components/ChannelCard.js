import { API } from 'aws-amplify';
import Card from 'react-bootstrap/Card';
import { graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';
import React, { useEffect, useState } from 'react';

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

}

export default function ChannelCard({channel, messages}) {
   
    return (
        <div className='m-5' key={channel.id}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`https://picsum.photos/seed/${channel.id}/200/100`} />
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
                                                onClick={(e) => { messageClick(channel.id, message.index)}}
                                            >
                                               <span className='fs-2'>{emojis[message.message].icon}</span><span className='mx-4 fs-2'>{messages.value}</span>
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