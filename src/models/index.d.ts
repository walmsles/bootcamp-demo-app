import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly message?: number | null;
  readonly value?: number | null;
  readonly channelID: string;
  readonly Channel?: Channel | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly message?: number | null;
  readonly value?: number | null;
  readonly channelID: string;
  readonly Channel: AsyncItem<Channel | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Message = LazyLoading extends LazyLoadingDisabled ? EagerMessage : LazyMessage

export declare const Message: (new (init: ModelInit<Message>) => Message) & {
  copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}

type EagerChannel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Channel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly Messages?: (Message | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyChannel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Channel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly Messages: AsyncCollection<Message>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Channel = LazyLoading extends LazyLoadingDisabled ? EagerChannel : LazyChannel

export declare const Channel: (new (init: ModelInit<Channel>) => Channel) & {
  copyOf(source: Channel, mutator: (draft: MutableModel<Channel>) => MutableModel<Channel> | void): Channel;
}