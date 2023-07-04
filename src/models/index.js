// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Message, Channel } = initSchema(schema);

export {
  Message,
  Channel
};