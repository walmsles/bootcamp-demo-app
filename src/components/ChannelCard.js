
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { v4 as uuidv4 } from 'uuid';
import { graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';

const emojis = [
    { 
        icon:false,
        value: 0,
    },
    { 
        icon:'😎',
        text: 'I\'m Cool!',
        value: 5,
    },
    { 
        icon:'🤯',
        text: 'Brain ... hurts',
        value: 2,
    },
    { 
        icon:'😍',
        text: 'Loving it!',
        value: 2,
    },
    { 
        icon:'🙁',
        text: 'Its hard',
        value: 2,
    },
    { 
        icon:'🙈',
        text: 'Can\'t Look!',
        value: 2,
    },  
];

async function messageClick(id, index) {
    const newMessage = {
        id: uuidv4(),
        message: index,
        timestamp: Date.now(),
        channelID: id,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        _version: 1,
        _deleted: false,
        _lastChangedAt: Date.now(),
        __typename: 'Message'
    }

    console.log(newMessage)
    // const newItem = await API.graphql(query: queries.newMessage 
    // console.log(newItem)
  
  }

export default function ChannelCard({channel}) {
    return (
        <div className='m-5' key={channel.id}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`https://picsum.photos/seed/${channel.id}/200/100`} />
                <Card.Body>
                    <Card.Title>{channel.name}</Card.Title>
                    <Card.Text>{channel.description}</Card.Text>
                    <ul className="list-group list-group-flush">  
                        {
                            emojis.map((emoji, index) => (
                                <li key={`${channel.id}-0`} className="list-group-item">
                                    { emoji.icon &&                                  
                                            <button
                                                className='btn btn-block border'
                                                onClick={(e) => { messageClick(channel.id, index)}}
                                            >
                                               <span className='fs-2'>{emoji.icon}</span><span className='mx-4 fs-2'>{emoji.value}</span>
                                               <br/><span>{emoji.text}</span>
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