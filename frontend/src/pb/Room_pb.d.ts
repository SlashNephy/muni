import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class ListRoomsResponse extends jspb.Message {
  getRoomList(): Array<Room>;
  setRoomList(value: Array<Room>): ListRoomsResponse;
  clearRoomList(): ListRoomsResponse;
  addRoom(value?: Room, index?: number): Room;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRoomsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRoomsResponse): ListRoomsResponse.AsObject;
  static serializeBinaryToWriter(message: ListRoomsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRoomsResponse;
  static deserializeBinaryFromReader(message: ListRoomsResponse, reader: jspb.BinaryReader): ListRoomsResponse;
}

export namespace ListRoomsResponse {
  export type AsObject = {
    roomList: Array<Room.AsObject>,
  }
}

export class Room extends jspb.Message {
  getId(): string;
  setId(value: string): Room;

  getName(): string;
  setName(value: string): Room;

  getAuthentication(): AuthenticationMode;
  setAuthentication(value: AuthenticationMode): Room;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Room.AsObject;
  static toObject(includeInstance: boolean, msg: Room): Room.AsObject;
  static serializeBinaryToWriter(message: Room, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Room;
  static deserializeBinaryFromReader(message: Room, reader: jspb.BinaryReader): Room;
}

export namespace Room {
  export type AsObject = {
    id: string,
    name: string,
    authentication: AuthenticationMode,
  }
}

export enum AuthenticationMode { 
  NONE = 0,
  PASSWORD = 1,
}
