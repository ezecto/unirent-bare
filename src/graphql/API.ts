/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSavedAccommodationInput = {
  id?: string | null,
  savedAccommodationUserId?: string | null,
};

export type ModelSavedAccommodationConditionInput = {
  and?: Array< ModelSavedAccommodationConditionInput | null > | null,
  or?: Array< ModelSavedAccommodationConditionInput | null > | null,
  not?: ModelSavedAccommodationConditionInput | null,
  savedAccommodationUserId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type SavedAccommodation = {
  __typename: "SavedAccommodation",
  id: string,
  Accommodations?: ModelSavedAccommodationAccommodationConnection | null,
  User?: User | null,
  createdAt: string,
  updatedAt: string,
  savedAccommodationUserId?: string | null,
};

export type ModelSavedAccommodationAccommodationConnection = {
  __typename: "ModelSavedAccommodationAccommodationConnection",
  items:  Array<SavedAccommodationAccommodation | null >,
  nextToken?: string | null,
};

export type SavedAccommodationAccommodation = {
  __typename: "SavedAccommodationAccommodation",
  id: string,
  savedAccommodationId: string,
  accommodationId: string,
  savedAccommodation: SavedAccommodation,
  accommodation: Accommodation,
  createdAt: string,
  updatedAt: string,
};

export type Accommodation = {
  __typename: "Accommodation",
  id: string,
  availableDate?: string | null,
  description: string,
  images: Array< string | null >,
  price: number,
  propertyType: PropertyEnum,
  rented?: boolean | null,
  createdAt: string,
  title: string,
  address: string,
  userId: string,
  User?: User | null,
  savedaccommodations?: ModelSavedAccommodationAccommodationConnection | null,
  unitFeature?: Array< string | null > | null,
  latitude?: number | null,
  longitude?: number | null,
  updatedAt: string,
};

export enum PropertyEnum {
  HDB = "HDB",
  CONDO = "CONDO",
  LANDED = "LANDED",
}


export type User = {
  __typename: "User",
  id: string,
  name: string,
  status?: string | null,
  ChatRooms?: ModelUserChatRoomConnection | null,
  Messages?: ModelMessageConnection | null,
  Accommodations?: ModelAccommodationConnection | null,
  SavedAccommodation?: SavedAccommodation | null,
  createdAt: string,
  updatedAt: string,
  userSavedAccommodationId?: string | null,
};

export type ModelUserChatRoomConnection = {
  __typename: "ModelUserChatRoomConnection",
  items:  Array<UserChatRoom | null >,
  nextToken?: string | null,
};

export type UserChatRoom = {
  __typename: "UserChatRoom",
  id: string,
  userId: string,
  chatRoomId: string,
  user: User,
  chatRoom: ChatRoom,
  createdAt: string,
  updatedAt: string,
};

export type ChatRoom = {
  __typename: "ChatRoom",
  id: string,
  Users?: ModelUserChatRoomConnection | null,
  Messages?: ModelMessageConnection | null,
  LastMessage?: Message | null,
  Accommodation?: Accommodation | null,
  createdAt: string,
  updatedAt: string,
  chatRoomLastMessageId?: string | null,
  chatRoomAccommodationId?: string | null,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
};

export type Message = {
  __typename: "Message",
  id: string,
  createdAt: string,
  text: string,
  chatRoomId: string,
  userId: string,
  updatedAt: string,
};

export type ModelAccommodationConnection = {
  __typename: "ModelAccommodationConnection",
  items:  Array<Accommodation | null >,
  nextToken?: string | null,
};

export type UpdateSavedAccommodationInput = {
  id: string,
  savedAccommodationUserId?: string | null,
};

export type DeleteSavedAccommodationInput = {
  id: string,
};

export type CreateAccommodationInput = {
  id?: string | null,
  availableDate?: string | null,
  description: string,
  images: Array< string | null >,
  price: number,
  propertyType: PropertyEnum,
  rented?: boolean | null,
  createdAt?: string | null,
  title: string,
  address: string,
  userId: string,
  unitFeature?: Array< string | null > | null,
  latitude?: number | null,
  longitude?: number | null,
};

export type ModelAccommodationConditionInput = {
  availableDate?: ModelStringInput | null,
  description?: ModelStringInput | null,
  images?: ModelStringInput | null,
  price?: ModelIntInput | null,
  propertyType?: ModelPropertyEnumInput | null,
  rented?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  title?: ModelStringInput | null,
  address?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  unitFeature?: ModelStringInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  and?: Array< ModelAccommodationConditionInput | null > | null,
  or?: Array< ModelAccommodationConditionInput | null > | null,
  not?: ModelAccommodationConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelPropertyEnumInput = {
  eq?: PropertyEnum | null,
  ne?: PropertyEnum | null,
  in?: [PropertyEnum] | null
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateAccommodationInput = {
  id: string,
  availableDate?: string | null,
  description?: string | null,
  images?: Array< string | null > | null,
  price?: number | null,
  propertyType?: PropertyEnum | null,
  rented?: boolean | null,
  createdAt?: string | null,
  title?: string | null,
  address?: string | null,
  userId?: string | null,
  unitFeature?: Array< string | null > | null,
  latitude?: number | null,
  longitude?: number | null,
};

export type DeleteAccommodationInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  name: string,
  status?: string | null,
  userSavedAccommodationId?: string | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  userSavedAccommodationId?: ModelIDInput | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  status?: string | null,
  userSavedAccommodationId?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateMessageInput = {
  id?: string | null,
  createdAt?: string | null,
  text: string,
  chatRoomId: string,
  userId: string,
};

export type ModelMessageConditionInput = {
  createdAt?: ModelStringInput | null,
  text?: ModelStringInput | null,
  chatRoomId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
};

export type UpdateMessageInput = {
  id: string,
  createdAt?: string | null,
  text?: string | null,
  chatRoomId?: string | null,
  userId?: string | null,
};

export type DeleteMessageInput = {
  id: string,
};

export type CreateChatRoomInput = {
  id?: string | null,
  chatRoomLastMessageId?: string | null,
  chatRoomAccommodationId?: string | null,
};

export type ModelChatRoomConditionInput = {
  and?: Array< ModelChatRoomConditionInput | null > | null,
  or?: Array< ModelChatRoomConditionInput | null > | null,
  not?: ModelChatRoomConditionInput | null,
  chatRoomLastMessageId?: ModelIDInput | null,
  chatRoomAccommodationId?: ModelIDInput | null,
};

export type UpdateChatRoomInput = {
  id: string,
  chatRoomLastMessageId?: string | null,
  chatRoomAccommodationId?: string | null,
};

export type DeleteChatRoomInput = {
  id: string,
};

export type CreateSavedAccommodationAccommodationInput = {
  id?: string | null,
  savedAccommodationId: string,
  accommodationId: string,
};

export type ModelSavedAccommodationAccommodationConditionInput = {
  savedAccommodationId?: ModelIDInput | null,
  accommodationId?: ModelIDInput | null,
  and?: Array< ModelSavedAccommodationAccommodationConditionInput | null > | null,
  or?: Array< ModelSavedAccommodationAccommodationConditionInput | null > | null,
  not?: ModelSavedAccommodationAccommodationConditionInput | null,
};

export type UpdateSavedAccommodationAccommodationInput = {
  id: string,
  savedAccommodationId?: string | null,
  accommodationId?: string | null,
};

export type DeleteSavedAccommodationAccommodationInput = {
  id: string,
};

export type CreateUserChatRoomInput = {
  id?: string | null,
  userId: string,
  chatRoomId: string,
};

export type ModelUserChatRoomConditionInput = {
  userId?: ModelIDInput | null,
  chatRoomId?: ModelIDInput | null,
  and?: Array< ModelUserChatRoomConditionInput | null > | null,
  or?: Array< ModelUserChatRoomConditionInput | null > | null,
  not?: ModelUserChatRoomConditionInput | null,
};

export type UpdateUserChatRoomInput = {
  id: string,
  userId?: string | null,
  chatRoomId?: string | null,
};

export type DeleteUserChatRoomInput = {
  id: string,
};

export type ModelSavedAccommodationFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelSavedAccommodationFilterInput | null > | null,
  or?: Array< ModelSavedAccommodationFilterInput | null > | null,
  not?: ModelSavedAccommodationFilterInput | null,
  savedAccommodationUserId?: ModelIDInput | null,
};

export type ModelSavedAccommodationConnection = {
  __typename: "ModelSavedAccommodationConnection",
  items:  Array<SavedAccommodation | null >,
  nextToken?: string | null,
};

export type ModelAccommodationFilterInput = {
  id?: ModelIDInput | null,
  availableDate?: ModelStringInput | null,
  description?: ModelStringInput | null,
  images?: ModelStringInput | null,
  price?: ModelIntInput | null,
  propertyType?: ModelPropertyEnumInput | null,
  rented?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  title?: ModelStringInput | null,
  address?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  unitFeature?: ModelStringInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  and?: Array< ModelAccommodationFilterInput | null > | null,
  or?: Array< ModelAccommodationFilterInput | null > | null,
  not?: ModelAccommodationFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  userSavedAccommodationId?: ModelIDInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  text?: ModelStringInput | null,
  chatRoomId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelChatRoomFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelChatRoomFilterInput | null > | null,
  or?: Array< ModelChatRoomFilterInput | null > | null,
  not?: ModelChatRoomFilterInput | null,
  chatRoomLastMessageId?: ModelIDInput | null,
  chatRoomAccommodationId?: ModelIDInput | null,
};

export type ModelChatRoomConnection = {
  __typename: "ModelChatRoomConnection",
  items:  Array<ChatRoom | null >,
  nextToken?: string | null,
};

export type ModelSavedAccommodationAccommodationFilterInput = {
  id?: ModelIDInput | null,
  savedAccommodationId?: ModelIDInput | null,
  accommodationId?: ModelIDInput | null,
  and?: Array< ModelSavedAccommodationAccommodationFilterInput | null > | null,
  or?: Array< ModelSavedAccommodationAccommodationFilterInput | null > | null,
  not?: ModelSavedAccommodationAccommodationFilterInput | null,
};

export type ModelUserChatRoomFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  chatRoomId?: ModelIDInput | null,
  and?: Array< ModelUserChatRoomFilterInput | null > | null,
  or?: Array< ModelUserChatRoomFilterInput | null > | null,
  not?: ModelUserChatRoomFilterInput | null,
};

export type ModelSubscriptionSavedAccommodationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionSavedAccommodationFilterInput | null > | null,
  or?: Array< ModelSubscriptionSavedAccommodationFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionAccommodationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  availableDate?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  images?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionIntInput | null,
  propertyType?: ModelSubscriptionStringInput | null,
  rented?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
  unitFeature?: ModelSubscriptionStringInput | null,
  latitude?: ModelSubscriptionFloatInput | null,
  longitude?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionAccommodationFilterInput | null > | null,
  or?: Array< ModelSubscriptionAccommodationFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionMessageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  text?: ModelSubscriptionStringInput | null,
  chatRoomId?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  or?: Array< ModelSubscriptionMessageFilterInput | null > | null,
};

export type ModelSubscriptionChatRoomFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionChatRoomFilterInput | null > | null,
  or?: Array< ModelSubscriptionChatRoomFilterInput | null > | null,
};

export type ModelSubscriptionSavedAccommodationAccommodationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  savedAccommodationId?: ModelSubscriptionIDInput | null,
  accommodationId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionSavedAccommodationAccommodationFilterInput | null > | null,
  or?: Array< ModelSubscriptionSavedAccommodationAccommodationFilterInput | null > | null,
};

export type ModelSubscriptionUserChatRoomFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  chatRoomId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionUserChatRoomFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserChatRoomFilterInput | null > | null,
};

export type CreateSavedAccommodationMutationVariables = {
  input: CreateSavedAccommodationInput,
  condition?: ModelSavedAccommodationConditionInput | null,
};

export type CreateSavedAccommodationMutation = {
  createSavedAccommodation?:  {
    __typename: "SavedAccommodation",
    id: string,
    Accommodations?:  {
      __typename: "ModelSavedAccommodationAccommodationConnection",
      items:  Array< {
        __typename: "SavedAccommodationAccommodation",
        id: string,
        savedAccommodationId: string,
        accommodationId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      status?: string | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      Accommodations?:  {
        __typename: "ModelAccommodationConnection",
        nextToken?: string | null,
      } | null,
      SavedAccommodation?:  {
        __typename: "SavedAccommodation",
        id: string,
        createdAt: string,
        updatedAt: string,
        savedAccommodationUserId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userSavedAccommodationId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    savedAccommodationUserId?: string | null,
  } | null,
};

export type UpdateSavedAccommodationMutationVariables = {
  input: UpdateSavedAccommodationInput,
  condition?: ModelSavedAccommodationConditionInput | null,
};

export type UpdateSavedAccommodationMutation = {
  updateSavedAccommodation?:  {
    __typename: "SavedAccommodation",
    id: string,
    Accommodations?:  {
      __typename: "ModelSavedAccommodationAccommodationConnection",
      items:  Array< {
        __typename: "SavedAccommodationAccommodation",
        id: string,
        savedAccommodationId: string,
        accommodationId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      status?: string | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      Accommodations?:  {
        __typename: "ModelAccommodationConnection",
        nextToken?: string | null,
      } | null,
      SavedAccommodation?:  {
        __typename: "SavedAccommodation",
        id: string,
        createdAt: string,
        updatedAt: string,
        savedAccommodationUserId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userSavedAccommodationId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    savedAccommodationUserId?: string | null,
  } | null,
};

export type DeleteSavedAccommodationMutationVariables = {
  input: DeleteSavedAccommodationInput,
  condition?: ModelSavedAccommodationConditionInput | null,
};

export type DeleteSavedAccommodationMutation = {
  deleteSavedAccommodation?:  {
    __typename: "SavedAccommodation",
    id: string,
    Accommodations?:  {
      __typename: "ModelSavedAccommodationAccommodationConnection",
      items:  Array< {
        __typename: "SavedAccommodationAccommodation",
        id: string,
        savedAccommodationId: string,
        accommodationId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      status?: string | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      Accommodations?:  {
        __typename: "ModelAccommodationConnection",
        nextToken?: string | null,
      } | null,
      SavedAccommodation?:  {
        __typename: "SavedAccommodation",
        id: string,
        createdAt: string,
        updatedAt: string,
        savedAccommodationUserId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userSavedAccommodationId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    savedAccommodationUserId?: string | null,
  } | null,
};

export type CreateAccommodationMutationVariables = {
  input: CreateAccommodationInput,
  condition?: ModelAccommodationConditionInput | null,
};

export type CreateAccommodationMutation = {
  createAccommodation?:  {
    __typename: "Accommodation",
    id: string,
    availableDate?: string | null,
    description: string,
    images: Array< string | null >,
    price: number,
    propertyType: PropertyEnum,
    rented?: boolean | null,
    createdAt: string,
    title: string,
    address: string,
    userId: string,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      status?: string | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      Accommodations?:  {
        __typename: "ModelAccommodationConnection",
        nextToken?: string | null,
      } | null,
      SavedAccommodation?:  {
        __typename: "SavedAccommodation",
        id: string,
        createdAt: string,
        updatedAt: string,
        savedAccommodationUserId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userSavedAccommodationId?: string | null,
    } | null,
    savedaccommodations?:  {
      __typename: "ModelSavedAccommodationAccommodationConnection",
      items:  Array< {
        __typename: "SavedAccommodationAccommodation",
        id: string,
        savedAccommodationId: string,
        accommodationId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    unitFeature?: Array< string | null > | null,
    latitude?: number | null,
    longitude?: number | null,
    updatedAt: string,
  } | null,
};

export type UpdateAccommodationMutationVariables = {
  input: UpdateAccommodationInput,
  condition?: ModelAccommodationConditionInput | null,
};

export type UpdateAccommodationMutation = {
  updateAccommodation?:  {
    __typename: "Accommodation",
    id: string,
    availableDate?: string | null,
    description: string,
    images: Array< string | null >,
    price: number,
    propertyType: PropertyEnum,
    rented?: boolean | null,
    createdAt: string,
    title: string,
    address: string,
    userId: string,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      status?: string | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      Accommodations?:  {
        __typename: "ModelAccommodationConnection",
        nextToken?: string | null,
      } | null,
      SavedAccommodation?:  {
        __typename: "SavedAccommodation",
        id: string,
        createdAt: string,
        updatedAt: string,
        savedAccommodationUserId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userSavedAccommodationId?: string | null,
    } | null,
    savedaccommodations?:  {
      __typename: "ModelSavedAccommodationAccommodationConnection",
      items:  Array< {
        __typename: "SavedAccommodationAccommodation",
        id: string,
        savedAccommodationId: string,
        accommodationId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    unitFeature?: Array< string | null > | null,
    latitude?: number | null,
    longitude?: number | null,
    updatedAt: string,
  } | null,
};

export type DeleteAccommodationMutationVariables = {
  input: DeleteAccommodationInput,
  condition?: ModelAccommodationConditionInput | null,
};

export type DeleteAccommodationMutation = {
  deleteAccommodation?:  {
    __typename: "Accommodation",
    id: string,
    availableDate?: string | null,
    description: string,
    images: Array< string | null >,
    price: number,
    propertyType: PropertyEnum,
    rented?: boolean | null,
    createdAt: string,
    title: string,
    address: string,
    userId: string,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      status?: string | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      Accommodations?:  {
        __typename: "ModelAccommodationConnection",
        nextToken?: string | null,
      } | null,
      SavedAccommodation?:  {
        __typename: "SavedAccommodation",
        id: string,
        createdAt: string,
        updatedAt: string,
        savedAccommodationUserId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userSavedAccommodationId?: string | null,
    } | null,
    savedaccommodations?:  {
      __typename: "ModelSavedAccommodationAccommodationConnection",
      items:  Array< {
        __typename: "SavedAccommodationAccommodation",
        id: string,
        savedAccommodationId: string,
        accommodationId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    unitFeature?: Array< string | null > | null,
    latitude?: number | null,
    longitude?: number | null,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    status?: string | null,
    ChatRooms?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        userId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        text: string,
        chatRoomId: string,
        userId: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Accommodations?:  {
      __typename: "ModelAccommodationConnection",
      items:  Array< {
        __typename: "Accommodation",
        id: string,
        availableDate?: string | null,
        description: string,
        images: Array< string | null >,
        price: number,
        propertyType: PropertyEnum,
        rented?: boolean | null,
        createdAt: string,
        title: string,
        address: string,
        userId: string,
        unitFeature?: Array< string | null > | null,
        latitude?: number | null,
        longitude?: number | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    SavedAccommodation?:  {
      __typename: "SavedAccommodation",
      id: string,
      Accommodations?:  {
        __typename: "ModelSavedAccommodationAccommodationConnection",
        nextToken?: string | null,
      } | null,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        userSavedAccommodationId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      savedAccommodationUserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userSavedAccommodationId?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    status?: string | null,
    ChatRooms?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        userId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        text: string,
        chatRoomId: string,
        userId: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Accommodations?:  {
      __typename: "ModelAccommodationConnection",
      items:  Array< {
        __typename: "Accommodation",
        id: string,
        availableDate?: string | null,
        description: string,
        images: Array< string | null >,
        price: number,
        propertyType: PropertyEnum,
        rented?: boolean | null,
        createdAt: string,
        title: string,
        address: string,
        userId: string,
        unitFeature?: Array< string | null > | null,
        latitude?: number | null,
        longitude?: number | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    SavedAccommodation?:  {
      __typename: "SavedAccommodation",
      id: string,
      Accommodations?:  {
        __typename: "ModelSavedAccommodationAccommodationConnection",
        nextToken?: string | null,
      } | null,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        userSavedAccommodationId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      savedAccommodationUserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userSavedAccommodationId?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    status?: string | null,
    ChatRooms?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        userId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        text: string,
        chatRoomId: string,
        userId: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Accommodations?:  {
      __typename: "ModelAccommodationConnection",
      items:  Array< {
        __typename: "Accommodation",
        id: string,
        availableDate?: string | null,
        description: string,
        images: Array< string | null >,
        price: number,
        propertyType: PropertyEnum,
        rented?: boolean | null,
        createdAt: string,
        title: string,
        address: string,
        userId: string,
        unitFeature?: Array< string | null > | null,
        latitude?: number | null,
        longitude?: number | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    SavedAccommodation?:  {
      __typename: "SavedAccommodation",
      id: string,
      Accommodations?:  {
        __typename: "ModelSavedAccommodationAccommodationConnection",
        nextToken?: string | null,
      } | null,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        userSavedAccommodationId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      savedAccommodationUserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userSavedAccommodationId?: string | null,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    text: string,
    chatRoomId: string,
    userId: string,
    updatedAt: string,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    text: string,
    chatRoomId: string,
    userId: string,
    updatedAt: string,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    text: string,
    chatRoomId: string,
    userId: string,
    updatedAt: string,
  } | null,
};

export type CreateChatRoomMutationVariables = {
  input: CreateChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type CreateChatRoomMutation = {
  createChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    Users?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        userId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        text: string,
        chatRoomId: string,
        userId: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    LastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      text: string,
      chatRoomId: string,
      userId: string,
      updatedAt: string,
    } | null,
    Accommodation?:  {
      __typename: "Accommodation",
      id: string,
      availableDate?: string | null,
      description: string,
      images: Array< string | null >,
      price: number,
      propertyType: PropertyEnum,
      rented?: boolean | null,
      createdAt: string,
      title: string,
      address: string,
      userId: string,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        userSavedAccommodationId?: string | null,
      } | null,
      savedaccommodations?:  {
        __typename: "ModelSavedAccommodationAccommodationConnection",
        nextToken?: string | null,
      } | null,
      unitFeature?: Array< string | null > | null,
      latitude?: number | null,
      longitude?: number | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    chatRoomLastMessageId?: string | null,
    chatRoomAccommodationId?: string | null,
  } | null,
};

export type UpdateChatRoomMutationVariables = {
  input: UpdateChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type UpdateChatRoomMutation = {
  updateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    Users?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        userId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        text: string,
        chatRoomId: string,
        userId: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    LastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      text: string,
      chatRoomId: string,
      userId: string,
      updatedAt: string,
    } | null,
    Accommodation?:  {
      __typename: "Accommodation",
      id: string,
      availableDate?: string | null,
      description: string,
      images: Array< string | null >,
      price: number,
      propertyType: PropertyEnum,
      rented?: boolean | null,
      createdAt: string,
      title: string,
      address: string,
      userId: string,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        userSavedAccommodationId?: string | null,
      } | null,
      savedaccommodations?:  {
        __typename: "ModelSavedAccommodationAccommodationConnection",
        nextToken?: string | null,
      } | null,
      unitFeature?: Array< string | null > | null,
      latitude?: number | null,
      longitude?: number | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    chatRoomLastMessageId?: string | null,
    chatRoomAccommodationId?: string | null,
  } | null,
};

export type DeleteChatRoomMutationVariables = {
  input: DeleteChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type DeleteChatRoomMutation = {
  deleteChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    Users?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        userId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        text: string,
        chatRoomId: string,
        userId: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    LastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      text: string,
      chatRoomId: string,
      userId: string,
      updatedAt: string,
    } | null,
    Accommodation?:  {
      __typename: "Accommodation",
      id: string,
      availableDate?: string | null,
      description: string,
      images: Array< string | null >,
      price: number,
      propertyType: PropertyEnum,
      rented?: boolean | null,
      createdAt: string,
      title: string,
      address: string,
      userId: string,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        userSavedAccommodationId?: string | null,
      } | null,
      savedaccommodations?:  {
        __typename: "ModelSavedAccommodationAccommodationConnection",
        nextToken?: string | null,
      } | null,
      unitFeature?: Array< string | null > | null,
      latitude?: number | null,
      longitude?: number | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    chatRoomLastMessageId?: string | null,
    chatRoomAccommodationId?: string | null,
  } | null,
};

export type CreateSavedAccommodationAccommodationMutationVariables = {
  input: CreateSavedAccommodationAccommodationInput,
  condition?: ModelSavedAccommodationAccommodationConditionInput | null,
};

export type CreateSavedAccommodationAccommodationMutation = {
  createSavedAccommodationAccommodation?:  {
    __typename: "SavedAccommodationAccommodation",
    id: string,
    savedAccommodationId: string,
    accommodationId: string,
    savedAccommodation:  {
      __typename: "SavedAccommodation",
      id: string,
      Accommodations?:  {
        __typename: "ModelSavedAccommodationAccommodationConnection",
        nextToken?: string | null,
      } | null,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        userSavedAccommodationId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      savedAccommodationUserId?: string | null,
    },
    accommodation:  {
      __typename: "Accommodation",
      id: string,
      availableDate?: string | null,
      description: string,
      images: Array< string | null >,
      price: number,
      propertyType: PropertyEnum,
      rented?: boolean | null,
      createdAt: string,
      title: string,
      address: string,
      userId: string,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        userSavedAccommodationId?: string | null,
      } | null,
      savedaccommodations?:  {
        __typename: "ModelSavedAccommodationAccommodationConnection",
        nextToken?: string | null,
      } | null,
      unitFeature?: Array< string | null > | null,
      latitude?: number | null,
      longitude?: number | null,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSavedAccommodationAccommodationMutationVariables = {
  input: UpdateSavedAccommodationAccommodationInput,
  condition?: ModelSavedAccommodationAccommodationConditionInput | null,
};

export type UpdateSavedAccommodationAccommodationMutation = {
  updateSavedAccommodationAccommodation?:  {
    __typename: "SavedAccommodationAccommodation",
    id: string,
    savedAccommodationId: string,
    accommodationId: string,
    savedAccommodation:  {
      __typename: "SavedAccommodation",
      id: string,
      Accommodations?:  {
        __typename: "ModelSavedAccommodationAccommodationConnection",
        nextToken?: string | null,
      } | null,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        userSavedAccommodationId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      savedAccommodationUserId?: string | null,
    },
    accommodation:  {
      __typename: "Accommodation",
      id: string,
      availableDate?: string | null,
      description: string,
      images: Array< string | null >,
      price: number,
      propertyType: PropertyEnum,
      rented?: boolean | null,
      createdAt: string,
      title: string,
      address: string,
      userId: string,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        userSavedAccommodationId?: string | null,
      } | null,
      savedaccommodations?:  {
        __typename: "ModelSavedAccommodationAccommodationConnection",
        nextToken?: string | null,
      } | null,
      unitFeature?: Array< string | null > | null,
      latitude?: number | null,
      longitude?: number | null,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSavedAccommodationAccommodationMutationVariables = {
  input: DeleteSavedAccommodationAccommodationInput,
  condition?: ModelSavedAccommodationAccommodationConditionInput | null,
};

export type DeleteSavedAccommodationAccommodationMutation = {
  deleteSavedAccommodationAccommodation?:  {
    __typename: "SavedAccommodationAccommodation",
    id: string,
    savedAccommodationId: string,
    accommodationId: string,
    savedAccommodation:  {
      __typename: "SavedAccommodation",
      id: string,
      Accommodations?:  {
        __typename: "ModelSavedAccommodationAccommodationConnection",
        nextToken?: string | null,
      } | null,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        userSavedAccommodationId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      savedAccommodationUserId?: string | null,
    },
    accommodation:  {
      __typename: "Accommodation",
      id: string,
      availableDate?: string | null,
      description: string,
      images: Array< string | null >,
      price: number,
      propertyType: PropertyEnum,
      rented?: boolean | null,
      createdAt: string,
      title: string,
      address: string,
      userId: string,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        userSavedAccommodationId?: string | null,
      } | null,
      savedaccommodations?:  {
        __typename: "ModelSavedAccommodationAccommodationConnection",
        nextToken?: string | null,
      } | null,
      unitFeature?: Array< string | null > | null,
      latitude?: number | null,
      longitude?: number | null,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserChatRoomMutationVariables = {
  input: CreateUserChatRoomInput,
  condition?: ModelUserChatRoomConditionInput | null,
};

export type CreateUserChatRoomMutation = {
  createUserChatRoom?:  {
    __typename: "UserChatRoom",
    id: string,
    userId: string,
    chatRoomId: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      status?: string | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      Accommodations?:  {
        __typename: "ModelAccommodationConnection",
        nextToken?: string | null,
      } | null,
      SavedAccommodation?:  {
        __typename: "SavedAccommodation",
        id: string,
        createdAt: string,
        updatedAt: string,
        savedAccommodationUserId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userSavedAccommodationId?: string | null,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      Users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        text: string,
        chatRoomId: string,
        userId: string,
        updatedAt: string,
      } | null,
      Accommodation?:  {
        __typename: "Accommodation",
        id: string,
        availableDate?: string | null,
        description: string,
        images: Array< string | null >,
        price: number,
        propertyType: PropertyEnum,
        rented?: boolean | null,
        createdAt: string,
        title: string,
        address: string,
        userId: string,
        unitFeature?: Array< string | null > | null,
        latitude?: number | null,
        longitude?: number | null,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      chatRoomLastMessageId?: string | null,
      chatRoomAccommodationId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserChatRoomMutationVariables = {
  input: UpdateUserChatRoomInput,
  condition?: ModelUserChatRoomConditionInput | null,
};

export type UpdateUserChatRoomMutation = {
  updateUserChatRoom?:  {
    __typename: "UserChatRoom",
    id: string,
    userId: string,
    chatRoomId: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      status?: string | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      Accommodations?:  {
        __typename: "ModelAccommodationConnection",
        nextToken?: string | null,
      } | null,
      SavedAccommodation?:  {
        __typename: "SavedAccommodation",
        id: string,
        createdAt: string,
        updatedAt: string,
        savedAccommodationUserId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userSavedAccommodationId?: string | null,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      Users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        text: string,
        chatRoomId: string,
        userId: string,
        updatedAt: string,
      } | null,
      Accommodation?:  {
        __typename: "Accommodation",
        id: string,
        availableDate?: string | null,
        description: string,
        images: Array< string | null >,
        price: number,
        propertyType: PropertyEnum,
        rented?: boolean | null,
        createdAt: string,
        title: string,
        address: string,
        userId: string,
        unitFeature?: Array< string | null > | null,
        latitude?: number | null,
        longitude?: number | null,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      chatRoomLastMessageId?: string | null,
      chatRoomAccommodationId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserChatRoomMutationVariables = {
  input: DeleteUserChatRoomInput,
  condition?: ModelUserChatRoomConditionInput | null,
};

export type DeleteUserChatRoomMutation = {
  deleteUserChatRoom?:  {
    __typename: "UserChatRoom",
    id: string,
    userId: string,
    chatRoomId: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      status?: string | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      Accommodations?:  {
        __typename: "ModelAccommodationConnection",
        nextToken?: string | null,
      } | null,
      SavedAccommodation?:  {
        __typename: "SavedAccommodation",
        id: string,
        createdAt: string,
        updatedAt: string,
        savedAccommodationUserId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userSavedAccommodationId?: string | null,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      Users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        text: string,
        chatRoomId: string,
        userId: string,
        updatedAt: string,
      } | null,
      Accommodation?:  {
        __typename: "Accommodation",
        id: string,
        availableDate?: string | null,
        description: string,
        images: Array< string | null >,
        price: number,
        propertyType: PropertyEnum,
        rented?: boolean | null,
        createdAt: string,
        title: string,
        address: string,
        userId: string,
        unitFeature?: Array< string | null > | null,
        latitude?: number | null,
        longitude?: number | null,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      chatRoomLastMessageId?: string | null,
      chatRoomAccommodationId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetSavedAccommodationQueryVariables = {
  id: string,
};

export type GetSavedAccommodationQuery = {
  getSavedAccommodation?:  {
    __typename: "SavedAccommodation",
    id: string,
    Accommodations?:  {
      __typename: "ModelSavedAccommodationAccommodationConnection",
      items:  Array< {
        __typename: "SavedAccommodationAccommodation",
        id: string,
        savedAccommodationId: string,
        accommodationId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      status?: string | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      Accommodations?:  {
        __typename: "ModelAccommodationConnection",
        nextToken?: string | null,
      } | null,
      SavedAccommodation?:  {
        __typename: "SavedAccommodation",
        id: string,
        createdAt: string,
        updatedAt: string,
        savedAccommodationUserId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userSavedAccommodationId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    savedAccommodationUserId?: string | null,
  } | null,
};

export type ListSavedAccommodationsQueryVariables = {
  filter?: ModelSavedAccommodationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSavedAccommodationsQuery = {
  listSavedAccommodations?:  {
    __typename: "ModelSavedAccommodationConnection",
    items:  Array< {
      __typename: "SavedAccommodation",
      id: string,
      Accommodations?:  {
        __typename: "ModelSavedAccommodationAccommodationConnection",
        nextToken?: string | null,
      } | null,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        userSavedAccommodationId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      savedAccommodationUserId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAccommodationQueryVariables = {
  id: string,
};

export type GetAccommodationQuery = {
  getAccommodation?:  {
    __typename: "Accommodation",
    id: string,
    availableDate?: string | null,
    description: string,
    images: Array< string | null >,
    price: number,
    propertyType: PropertyEnum,
    rented?: boolean | null,
    createdAt: string,
    title: string,
    address: string,
    userId: string,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      status?: string | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      Accommodations?:  {
        __typename: "ModelAccommodationConnection",
        nextToken?: string | null,
      } | null,
      SavedAccommodation?:  {
        __typename: "SavedAccommodation",
        id: string,
        createdAt: string,
        updatedAt: string,
        savedAccommodationUserId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userSavedAccommodationId?: string | null,
    } | null,
    savedaccommodations?:  {
      __typename: "ModelSavedAccommodationAccommodationConnection",
      items:  Array< {
        __typename: "SavedAccommodationAccommodation",
        id: string,
        savedAccommodationId: string,
        accommodationId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    unitFeature?: Array< string | null > | null,
    latitude?: number | null,
    longitude?: number | null,
    updatedAt: string,
  } | null,
};

export type ListAccommodationsQueryVariables = {
  filter?: ModelAccommodationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAccommodationsQuery = {
  listAccommodations?:  {
    __typename: "ModelAccommodationConnection",
    items:  Array< {
      __typename: "Accommodation",
      id: string,
      availableDate?: string | null,
      description: string,
      images: Array< string | null >,
      price: number,
      propertyType: PropertyEnum,
      rented?: boolean | null,
      createdAt: string,
      title: string,
      address: string,
      userId: string,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        userSavedAccommodationId?: string | null,
      } | null,
      savedaccommodations?:  {
        __typename: "ModelSavedAccommodationAccommodationConnection",
        nextToken?: string | null,
      } | null,
      unitFeature?: Array< string | null > | null,
      latitude?: number | null,
      longitude?: number | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AccommodationsByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAccommodationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AccommodationsByUserIdQuery = {
  accommodationsByUserId?:  {
    __typename: "ModelAccommodationConnection",
    items:  Array< {
      __typename: "Accommodation",
      id: string,
      availableDate?: string | null,
      description: string,
      images: Array< string | null >,
      price: number,
      propertyType: PropertyEnum,
      rented?: boolean | null,
      createdAt: string,
      title: string,
      address: string,
      userId: string,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        userSavedAccommodationId?: string | null,
      } | null,
      savedaccommodations?:  {
        __typename: "ModelSavedAccommodationAccommodationConnection",
        nextToken?: string | null,
      } | null,
      unitFeature?: Array< string | null > | null,
      latitude?: number | null,
      longitude?: number | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    status?: string | null,
    ChatRooms?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        userId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        text: string,
        chatRoomId: string,
        userId: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Accommodations?:  {
      __typename: "ModelAccommodationConnection",
      items:  Array< {
        __typename: "Accommodation",
        id: string,
        availableDate?: string | null,
        description: string,
        images: Array< string | null >,
        price: number,
        propertyType: PropertyEnum,
        rented?: boolean | null,
        createdAt: string,
        title: string,
        address: string,
        userId: string,
        unitFeature?: Array< string | null > | null,
        latitude?: number | null,
        longitude?: number | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    SavedAccommodation?:  {
      __typename: "SavedAccommodation",
      id: string,
      Accommodations?:  {
        __typename: "ModelSavedAccommodationAccommodationConnection",
        nextToken?: string | null,
      } | null,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        userSavedAccommodationId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      savedAccommodationUserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userSavedAccommodationId?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      status?: string | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      Accommodations?:  {
        __typename: "ModelAccommodationConnection",
        nextToken?: string | null,
      } | null,
      SavedAccommodation?:  {
        __typename: "SavedAccommodation",
        id: string,
        createdAt: string,
        updatedAt: string,
        savedAccommodationUserId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userSavedAccommodationId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    text: string,
    chatRoomId: string,
    userId: string,
    updatedAt: string,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      createdAt: string,
      text: string,
      chatRoomId: string,
      userId: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListMessagesByChatRoomQueryVariables = {
  chatRoomId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesByChatRoomQuery = {
  listMessagesByChatRoom?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      createdAt: string,
      text: string,
      chatRoomId: string,
      userId: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MessagesByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MessagesByUserIdQuery = {
  messagesByUserId?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      createdAt: string,
      text: string,
      chatRoomId: string,
      userId: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetChatRoomQueryVariables = {
  id: string,
};

export type GetChatRoomQuery = {
  getChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    Users?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        userId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        text: string,
        chatRoomId: string,
        userId: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    LastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      text: string,
      chatRoomId: string,
      userId: string,
      updatedAt: string,
    } | null,
    Accommodation?:  {
      __typename: "Accommodation",
      id: string,
      availableDate?: string | null,
      description: string,
      images: Array< string | null >,
      price: number,
      propertyType: PropertyEnum,
      rented?: boolean | null,
      createdAt: string,
      title: string,
      address: string,
      userId: string,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        userSavedAccommodationId?: string | null,
      } | null,
      savedaccommodations?:  {
        __typename: "ModelSavedAccommodationAccommodationConnection",
        nextToken?: string | null,
      } | null,
      unitFeature?: Array< string | null > | null,
      latitude?: number | null,
      longitude?: number | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    chatRoomLastMessageId?: string | null,
    chatRoomAccommodationId?: string | null,
  } | null,
};

export type ListChatRoomsQueryVariables = {
  filter?: ModelChatRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatRoomsQuery = {
  listChatRooms?:  {
    __typename: "ModelChatRoomConnection",
    items:  Array< {
      __typename: "ChatRoom",
      id: string,
      Users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        text: string,
        chatRoomId: string,
        userId: string,
        updatedAt: string,
      } | null,
      Accommodation?:  {
        __typename: "Accommodation",
        id: string,
        availableDate?: string | null,
        description: string,
        images: Array< string | null >,
        price: number,
        propertyType: PropertyEnum,
        rented?: boolean | null,
        createdAt: string,
        title: string,
        address: string,
        userId: string,
        unitFeature?: Array< string | null > | null,
        latitude?: number | null,
        longitude?: number | null,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      chatRoomLastMessageId?: string | null,
      chatRoomAccommodationId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSavedAccommodationAccommodationQueryVariables = {
  id: string,
};

export type GetSavedAccommodationAccommodationQuery = {
  getSavedAccommodationAccommodation?:  {
    __typename: "SavedAccommodationAccommodation",
    id: string,
    savedAccommodationId: string,
    accommodationId: string,
    savedAccommodation:  {
      __typename: "SavedAccommodation",
      id: string,
      Accommodations?:  {
        __typename: "ModelSavedAccommodationAccommodationConnection",
        nextToken?: string | null,
      } | null,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        userSavedAccommodationId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      savedAccommodationUserId?: string | null,
    },
    accommodation:  {
      __typename: "Accommodation",
      id: string,
      availableDate?: string | null,
      description: string,
      images: Array< string | null >,
      price: number,
      propertyType: PropertyEnum,
      rented?: boolean | null,
      createdAt: string,
      title: string,
      address: string,
      userId: string,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        userSavedAccommodationId?: string | null,
      } | null,
      savedaccommodations?:  {
        __typename: "ModelSavedAccommodationAccommodationConnection",
        nextToken?: string | null,
      } | null,
      unitFeature?: Array< string | null > | null,
      latitude?: number | null,
      longitude?: number | null,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSavedAccommodationAccommodationsQueryVariables = {
  filter?: ModelSavedAccommodationAccommodationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSavedAccommodationAccommodationsQuery = {
  listSavedAccommodationAccommodations?:  {
    __typename: "ModelSavedAccommodationAccommodationConnection",
    items:  Array< {
      __typename: "SavedAccommodationAccommodation",
      id: string,
      savedAccommodationId: string,
      accommodationId: string,
      savedAccommodation:  {
        __typename: "SavedAccommodation",
        id: string,
        createdAt: string,
        updatedAt: string,
        savedAccommodationUserId?: string | null,
      },
      accommodation:  {
        __typename: "Accommodation",
        id: string,
        availableDate?: string | null,
        description: string,
        images: Array< string | null >,
        price: number,
        propertyType: PropertyEnum,
        rented?: boolean | null,
        createdAt: string,
        title: string,
        address: string,
        userId: string,
        unitFeature?: Array< string | null > | null,
        latitude?: number | null,
        longitude?: number | null,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SavedAccommodationAccommodationsBySavedAccommodationIdQueryVariables = {
  savedAccommodationId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSavedAccommodationAccommodationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SavedAccommodationAccommodationsBySavedAccommodationIdQuery = {
  savedAccommodationAccommodationsBySavedAccommodationId?:  {
    __typename: "ModelSavedAccommodationAccommodationConnection",
    items:  Array< {
      __typename: "SavedAccommodationAccommodation",
      id: string,
      savedAccommodationId: string,
      accommodationId: string,
      savedAccommodation:  {
        __typename: "SavedAccommodation",
        id: string,
        createdAt: string,
        updatedAt: string,
        savedAccommodationUserId?: string | null,
      },
      accommodation:  {
        __typename: "Accommodation",
        id: string,
        availableDate?: string | null,
        description: string,
        images: Array< string | null >,
        price: number,
        propertyType: PropertyEnum,
        rented?: boolean | null,
        createdAt: string,
        title: string,
        address: string,
        userId: string,
        unitFeature?: Array< string | null > | null,
        latitude?: number | null,
        longitude?: number | null,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SavedAccommodationAccommodationsByAccommodationIdQueryVariables = {
  accommodationId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSavedAccommodationAccommodationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SavedAccommodationAccommodationsByAccommodationIdQuery = {
  savedAccommodationAccommodationsByAccommodationId?:  {
    __typename: "ModelSavedAccommodationAccommodationConnection",
    items:  Array< {
      __typename: "SavedAccommodationAccommodation",
      id: string,
      savedAccommodationId: string,
      accommodationId: string,
      savedAccommodation:  {
        __typename: "SavedAccommodation",
        id: string,
        createdAt: string,
        updatedAt: string,
        savedAccommodationUserId?: string | null,
      },
      accommodation:  {
        __typename: "Accommodation",
        id: string,
        availableDate?: string | null,
        description: string,
        images: Array< string | null >,
        price: number,
        propertyType: PropertyEnum,
        rented?: boolean | null,
        createdAt: string,
        title: string,
        address: string,
        userId: string,
        unitFeature?: Array< string | null > | null,
        latitude?: number | null,
        longitude?: number | null,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserChatRoomQueryVariables = {
  id: string,
};

export type GetUserChatRoomQuery = {
  getUserChatRoom?:  {
    __typename: "UserChatRoom",
    id: string,
    userId: string,
    chatRoomId: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      status?: string | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      Accommodations?:  {
        __typename: "ModelAccommodationConnection",
        nextToken?: string | null,
      } | null,
      SavedAccommodation?:  {
        __typename: "SavedAccommodation",
        id: string,
        createdAt: string,
        updatedAt: string,
        savedAccommodationUserId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userSavedAccommodationId?: string | null,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      Users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        text: string,
        chatRoomId: string,
        userId: string,
        updatedAt: string,
      } | null,
      Accommodation?:  {
        __typename: "Accommodation",
        id: string,
        availableDate?: string | null,
        description: string,
        images: Array< string | null >,
        price: number,
        propertyType: PropertyEnum,
        rented?: boolean | null,
        createdAt: string,
        title: string,
        address: string,
        userId: string,
        unitFeature?: Array< string | null > | null,
        latitude?: number | null,
        longitude?: number | null,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      chatRoomLastMessageId?: string | null,
      chatRoomAccommodationId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserChatRoomsQueryVariables = {
  filter?: ModelUserChatRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserChatRoomsQuery = {
  listUserChatRooms?:  {
    __typename: "ModelUserChatRoomConnection",
    items:  Array< {
      __typename: "UserChatRoom",
      id: string,
      userId: string,
      chatRoomId: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        userSavedAccommodationId?: string | null,
      },
      chatRoom:  {
        __typename: "ChatRoom",
        id: string,
        createdAt: string,
        updatedAt: string,
        chatRoomLastMessageId?: string | null,
        chatRoomAccommodationId?: string | null,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserChatRoomsByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserChatRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserChatRoomsByUserIdQuery = {
  userChatRoomsByUserId?:  {
    __typename: "ModelUserChatRoomConnection",
    items:  Array< {
      __typename: "UserChatRoom",
      id: string,
      userId: string,
      chatRoomId: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        userSavedAccommodationId?: string | null,
      },
      chatRoom:  {
        __typename: "ChatRoom",
        id: string,
        createdAt: string,
        updatedAt: string,
        chatRoomLastMessageId?: string | null,
        chatRoomAccommodationId?: string | null,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserChatRoomsByChatRoomIdQueryVariables = {
  chatRoomId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserChatRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserChatRoomsByChatRoomIdQuery = {
  userChatRoomsByChatRoomId?:  {
    __typename: "ModelUserChatRoomConnection",
    items:  Array< {
      __typename: "UserChatRoom",
      id: string,
      userId: string,
      chatRoomId: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        userSavedAccommodationId?: string | null,
      },
      chatRoom:  {
        __typename: "ChatRoom",
        id: string,
        createdAt: string,
        updatedAt: string,
        chatRoomLastMessageId?: string | null,
        chatRoomAccommodationId?: string | null,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateSavedAccommodationSubscriptionVariables = {
  filter?: ModelSubscriptionSavedAccommodationFilterInput | null,
};

export type OnCreateSavedAccommodationSubscription = {
  onCreateSavedAccommodation?:  {
    __typename: "SavedAccommodation",
    id: string,
    Accommodations?:  {
      __typename: "ModelSavedAccommodationAccommodationConnection",
      items:  Array< {
        __typename: "SavedAccommodationAccommodation",
        id: string,
        savedAccommodationId: string,
        accommodationId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      status?: string | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      Accommodations?:  {
        __typename: "ModelAccommodationConnection",
        nextToken?: string | null,
      } | null,
      SavedAccommodation?:  {
        __typename: "SavedAccommodation",
        id: string,
        createdAt: string,
        updatedAt: string,
        savedAccommodationUserId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userSavedAccommodationId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    savedAccommodationUserId?: string | null,
  } | null,
};

export type OnUpdateSavedAccommodationSubscriptionVariables = {
  filter?: ModelSubscriptionSavedAccommodationFilterInput | null,
};

export type OnUpdateSavedAccommodationSubscription = {
  onUpdateSavedAccommodation?:  {
    __typename: "SavedAccommodation",
    id: string,
    Accommodations?:  {
      __typename: "ModelSavedAccommodationAccommodationConnection",
      items:  Array< {
        __typename: "SavedAccommodationAccommodation",
        id: string,
        savedAccommodationId: string,
        accommodationId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      status?: string | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      Accommodations?:  {
        __typename: "ModelAccommodationConnection",
        nextToken?: string | null,
      } | null,
      SavedAccommodation?:  {
        __typename: "SavedAccommodation",
        id: string,
        createdAt: string,
        updatedAt: string,
        savedAccommodationUserId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userSavedAccommodationId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    savedAccommodationUserId?: string | null,
  } | null,
};

export type OnDeleteSavedAccommodationSubscriptionVariables = {
  filter?: ModelSubscriptionSavedAccommodationFilterInput | null,
};

export type OnDeleteSavedAccommodationSubscription = {
  onDeleteSavedAccommodation?:  {
    __typename: "SavedAccommodation",
    id: string,
    Accommodations?:  {
      __typename: "ModelSavedAccommodationAccommodationConnection",
      items:  Array< {
        __typename: "SavedAccommodationAccommodation",
        id: string,
        savedAccommodationId: string,
        accommodationId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      status?: string | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      Accommodations?:  {
        __typename: "ModelAccommodationConnection",
        nextToken?: string | null,
      } | null,
      SavedAccommodation?:  {
        __typename: "SavedAccommodation",
        id: string,
        createdAt: string,
        updatedAt: string,
        savedAccommodationUserId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userSavedAccommodationId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    savedAccommodationUserId?: string | null,
  } | null,
};

export type OnCreateAccommodationSubscriptionVariables = {
  filter?: ModelSubscriptionAccommodationFilterInput | null,
};

export type OnCreateAccommodationSubscription = {
  onCreateAccommodation?:  {
    __typename: "Accommodation",
    id: string,
    availableDate?: string | null,
    description: string,
    images: Array< string | null >,
    price: number,
    propertyType: PropertyEnum,
    rented?: boolean | null,
    createdAt: string,
    title: string,
    address: string,
    userId: string,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      status?: string | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      Accommodations?:  {
        __typename: "ModelAccommodationConnection",
        nextToken?: string | null,
      } | null,
      SavedAccommodation?:  {
        __typename: "SavedAccommodation",
        id: string,
        createdAt: string,
        updatedAt: string,
        savedAccommodationUserId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userSavedAccommodationId?: string | null,
    } | null,
    savedaccommodations?:  {
      __typename: "ModelSavedAccommodationAccommodationConnection",
      items:  Array< {
        __typename: "SavedAccommodationAccommodation",
        id: string,
        savedAccommodationId: string,
        accommodationId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    unitFeature?: Array< string | null > | null,
    latitude?: number | null,
    longitude?: number | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateAccommodationSubscriptionVariables = {
  filter?: ModelSubscriptionAccommodationFilterInput | null,
};

export type OnUpdateAccommodationSubscription = {
  onUpdateAccommodation?:  {
    __typename: "Accommodation",
    id: string,
    availableDate?: string | null,
    description: string,
    images: Array< string | null >,
    price: number,
    propertyType: PropertyEnum,
    rented?: boolean | null,
    createdAt: string,
    title: string,
    address: string,
    userId: string,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      status?: string | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      Accommodations?:  {
        __typename: "ModelAccommodationConnection",
        nextToken?: string | null,
      } | null,
      SavedAccommodation?:  {
        __typename: "SavedAccommodation",
        id: string,
        createdAt: string,
        updatedAt: string,
        savedAccommodationUserId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userSavedAccommodationId?: string | null,
    } | null,
    savedaccommodations?:  {
      __typename: "ModelSavedAccommodationAccommodationConnection",
      items:  Array< {
        __typename: "SavedAccommodationAccommodation",
        id: string,
        savedAccommodationId: string,
        accommodationId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    unitFeature?: Array< string | null > | null,
    latitude?: number | null,
    longitude?: number | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteAccommodationSubscriptionVariables = {
  filter?: ModelSubscriptionAccommodationFilterInput | null,
};

export type OnDeleteAccommodationSubscription = {
  onDeleteAccommodation?:  {
    __typename: "Accommodation",
    id: string,
    availableDate?: string | null,
    description: string,
    images: Array< string | null >,
    price: number,
    propertyType: PropertyEnum,
    rented?: boolean | null,
    createdAt: string,
    title: string,
    address: string,
    userId: string,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      status?: string | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      Accommodations?:  {
        __typename: "ModelAccommodationConnection",
        nextToken?: string | null,
      } | null,
      SavedAccommodation?:  {
        __typename: "SavedAccommodation",
        id: string,
        createdAt: string,
        updatedAt: string,
        savedAccommodationUserId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userSavedAccommodationId?: string | null,
    } | null,
    savedaccommodations?:  {
      __typename: "ModelSavedAccommodationAccommodationConnection",
      items:  Array< {
        __typename: "SavedAccommodationAccommodation",
        id: string,
        savedAccommodationId: string,
        accommodationId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    unitFeature?: Array< string | null > | null,
    latitude?: number | null,
    longitude?: number | null,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    status?: string | null,
    ChatRooms?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        userId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        text: string,
        chatRoomId: string,
        userId: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Accommodations?:  {
      __typename: "ModelAccommodationConnection",
      items:  Array< {
        __typename: "Accommodation",
        id: string,
        availableDate?: string | null,
        description: string,
        images: Array< string | null >,
        price: number,
        propertyType: PropertyEnum,
        rented?: boolean | null,
        createdAt: string,
        title: string,
        address: string,
        userId: string,
        unitFeature?: Array< string | null > | null,
        latitude?: number | null,
        longitude?: number | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    SavedAccommodation?:  {
      __typename: "SavedAccommodation",
      id: string,
      Accommodations?:  {
        __typename: "ModelSavedAccommodationAccommodationConnection",
        nextToken?: string | null,
      } | null,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        userSavedAccommodationId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      savedAccommodationUserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userSavedAccommodationId?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    status?: string | null,
    ChatRooms?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        userId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        text: string,
        chatRoomId: string,
        userId: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Accommodations?:  {
      __typename: "ModelAccommodationConnection",
      items:  Array< {
        __typename: "Accommodation",
        id: string,
        availableDate?: string | null,
        description: string,
        images: Array< string | null >,
        price: number,
        propertyType: PropertyEnum,
        rented?: boolean | null,
        createdAt: string,
        title: string,
        address: string,
        userId: string,
        unitFeature?: Array< string | null > | null,
        latitude?: number | null,
        longitude?: number | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    SavedAccommodation?:  {
      __typename: "SavedAccommodation",
      id: string,
      Accommodations?:  {
        __typename: "ModelSavedAccommodationAccommodationConnection",
        nextToken?: string | null,
      } | null,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        userSavedAccommodationId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      savedAccommodationUserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userSavedAccommodationId?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    status?: string | null,
    ChatRooms?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        userId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        text: string,
        chatRoomId: string,
        userId: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Accommodations?:  {
      __typename: "ModelAccommodationConnection",
      items:  Array< {
        __typename: "Accommodation",
        id: string,
        availableDate?: string | null,
        description: string,
        images: Array< string | null >,
        price: number,
        propertyType: PropertyEnum,
        rented?: boolean | null,
        createdAt: string,
        title: string,
        address: string,
        userId: string,
        unitFeature?: Array< string | null > | null,
        latitude?: number | null,
        longitude?: number | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    SavedAccommodation?:  {
      __typename: "SavedAccommodation",
      id: string,
      Accommodations?:  {
        __typename: "ModelSavedAccommodationAccommodationConnection",
        nextToken?: string | null,
      } | null,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        userSavedAccommodationId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      savedAccommodationUserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userSavedAccommodationId?: string | null,
  } | null,
};

export type OnCreateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    text: string,
    chatRoomId: string,
    userId: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    text: string,
    chatRoomId: string,
    userId: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    text: string,
    chatRoomId: string,
    userId: string,
    updatedAt: string,
  } | null,
};

export type OnCreateChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionChatRoomFilterInput | null,
};

export type OnCreateChatRoomSubscription = {
  onCreateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    Users?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        userId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        text: string,
        chatRoomId: string,
        userId: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    LastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      text: string,
      chatRoomId: string,
      userId: string,
      updatedAt: string,
    } | null,
    Accommodation?:  {
      __typename: "Accommodation",
      id: string,
      availableDate?: string | null,
      description: string,
      images: Array< string | null >,
      price: number,
      propertyType: PropertyEnum,
      rented?: boolean | null,
      createdAt: string,
      title: string,
      address: string,
      userId: string,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        userSavedAccommodationId?: string | null,
      } | null,
      savedaccommodations?:  {
        __typename: "ModelSavedAccommodationAccommodationConnection",
        nextToken?: string | null,
      } | null,
      unitFeature?: Array< string | null > | null,
      latitude?: number | null,
      longitude?: number | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    chatRoomLastMessageId?: string | null,
    chatRoomAccommodationId?: string | null,
  } | null,
};

export type OnUpdateChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionChatRoomFilterInput | null,
};

export type OnUpdateChatRoomSubscription = {
  onUpdateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    Users?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        userId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        text: string,
        chatRoomId: string,
        userId: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    LastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      text: string,
      chatRoomId: string,
      userId: string,
      updatedAt: string,
    } | null,
    Accommodation?:  {
      __typename: "Accommodation",
      id: string,
      availableDate?: string | null,
      description: string,
      images: Array< string | null >,
      price: number,
      propertyType: PropertyEnum,
      rented?: boolean | null,
      createdAt: string,
      title: string,
      address: string,
      userId: string,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        userSavedAccommodationId?: string | null,
      } | null,
      savedaccommodations?:  {
        __typename: "ModelSavedAccommodationAccommodationConnection",
        nextToken?: string | null,
      } | null,
      unitFeature?: Array< string | null > | null,
      latitude?: number | null,
      longitude?: number | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    chatRoomLastMessageId?: string | null,
    chatRoomAccommodationId?: string | null,
  } | null,
};

export type OnDeleteChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionChatRoomFilterInput | null,
};

export type OnDeleteChatRoomSubscription = {
  onDeleteChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    Users?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        userId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        text: string,
        chatRoomId: string,
        userId: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    LastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      text: string,
      chatRoomId: string,
      userId: string,
      updatedAt: string,
    } | null,
    Accommodation?:  {
      __typename: "Accommodation",
      id: string,
      availableDate?: string | null,
      description: string,
      images: Array< string | null >,
      price: number,
      propertyType: PropertyEnum,
      rented?: boolean | null,
      createdAt: string,
      title: string,
      address: string,
      userId: string,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        userSavedAccommodationId?: string | null,
      } | null,
      savedaccommodations?:  {
        __typename: "ModelSavedAccommodationAccommodationConnection",
        nextToken?: string | null,
      } | null,
      unitFeature?: Array< string | null > | null,
      latitude?: number | null,
      longitude?: number | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    chatRoomLastMessageId?: string | null,
    chatRoomAccommodationId?: string | null,
  } | null,
};

export type OnCreateSavedAccommodationAccommodationSubscriptionVariables = {
  filter?: ModelSubscriptionSavedAccommodationAccommodationFilterInput | null,
};

export type OnCreateSavedAccommodationAccommodationSubscription = {
  onCreateSavedAccommodationAccommodation?:  {
    __typename: "SavedAccommodationAccommodation",
    id: string,
    savedAccommodationId: string,
    accommodationId: string,
    savedAccommodation:  {
      __typename: "SavedAccommodation",
      id: string,
      Accommodations?:  {
        __typename: "ModelSavedAccommodationAccommodationConnection",
        nextToken?: string | null,
      } | null,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        userSavedAccommodationId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      savedAccommodationUserId?: string | null,
    },
    accommodation:  {
      __typename: "Accommodation",
      id: string,
      availableDate?: string | null,
      description: string,
      images: Array< string | null >,
      price: number,
      propertyType: PropertyEnum,
      rented?: boolean | null,
      createdAt: string,
      title: string,
      address: string,
      userId: string,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        userSavedAccommodationId?: string | null,
      } | null,
      savedaccommodations?:  {
        __typename: "ModelSavedAccommodationAccommodationConnection",
        nextToken?: string | null,
      } | null,
      unitFeature?: Array< string | null > | null,
      latitude?: number | null,
      longitude?: number | null,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSavedAccommodationAccommodationSubscriptionVariables = {
  filter?: ModelSubscriptionSavedAccommodationAccommodationFilterInput | null,
};

export type OnUpdateSavedAccommodationAccommodationSubscription = {
  onUpdateSavedAccommodationAccommodation?:  {
    __typename: "SavedAccommodationAccommodation",
    id: string,
    savedAccommodationId: string,
    accommodationId: string,
    savedAccommodation:  {
      __typename: "SavedAccommodation",
      id: string,
      Accommodations?:  {
        __typename: "ModelSavedAccommodationAccommodationConnection",
        nextToken?: string | null,
      } | null,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        userSavedAccommodationId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      savedAccommodationUserId?: string | null,
    },
    accommodation:  {
      __typename: "Accommodation",
      id: string,
      availableDate?: string | null,
      description: string,
      images: Array< string | null >,
      price: number,
      propertyType: PropertyEnum,
      rented?: boolean | null,
      createdAt: string,
      title: string,
      address: string,
      userId: string,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        userSavedAccommodationId?: string | null,
      } | null,
      savedaccommodations?:  {
        __typename: "ModelSavedAccommodationAccommodationConnection",
        nextToken?: string | null,
      } | null,
      unitFeature?: Array< string | null > | null,
      latitude?: number | null,
      longitude?: number | null,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSavedAccommodationAccommodationSubscriptionVariables = {
  filter?: ModelSubscriptionSavedAccommodationAccommodationFilterInput | null,
};

export type OnDeleteSavedAccommodationAccommodationSubscription = {
  onDeleteSavedAccommodationAccommodation?:  {
    __typename: "SavedAccommodationAccommodation",
    id: string,
    savedAccommodationId: string,
    accommodationId: string,
    savedAccommodation:  {
      __typename: "SavedAccommodation",
      id: string,
      Accommodations?:  {
        __typename: "ModelSavedAccommodationAccommodationConnection",
        nextToken?: string | null,
      } | null,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        userSavedAccommodationId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      savedAccommodationUserId?: string | null,
    },
    accommodation:  {
      __typename: "Accommodation",
      id: string,
      availableDate?: string | null,
      description: string,
      images: Array< string | null >,
      price: number,
      propertyType: PropertyEnum,
      rented?: boolean | null,
      createdAt: string,
      title: string,
      address: string,
      userId: string,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        userSavedAccommodationId?: string | null,
      } | null,
      savedaccommodations?:  {
        __typename: "ModelSavedAccommodationAccommodationConnection",
        nextToken?: string | null,
      } | null,
      unitFeature?: Array< string | null > | null,
      latitude?: number | null,
      longitude?: number | null,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionUserChatRoomFilterInput | null,
};

export type OnCreateUserChatRoomSubscription = {
  onCreateUserChatRoom?:  {
    __typename: "UserChatRoom",
    id: string,
    userId: string,
    chatRoomId: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      status?: string | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      Accommodations?:  {
        __typename: "ModelAccommodationConnection",
        nextToken?: string | null,
      } | null,
      SavedAccommodation?:  {
        __typename: "SavedAccommodation",
        id: string,
        createdAt: string,
        updatedAt: string,
        savedAccommodationUserId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userSavedAccommodationId?: string | null,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      Users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        text: string,
        chatRoomId: string,
        userId: string,
        updatedAt: string,
      } | null,
      Accommodation?:  {
        __typename: "Accommodation",
        id: string,
        availableDate?: string | null,
        description: string,
        images: Array< string | null >,
        price: number,
        propertyType: PropertyEnum,
        rented?: boolean | null,
        createdAt: string,
        title: string,
        address: string,
        userId: string,
        unitFeature?: Array< string | null > | null,
        latitude?: number | null,
        longitude?: number | null,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      chatRoomLastMessageId?: string | null,
      chatRoomAccommodationId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionUserChatRoomFilterInput | null,
};

export type OnUpdateUserChatRoomSubscription = {
  onUpdateUserChatRoom?:  {
    __typename: "UserChatRoom",
    id: string,
    userId: string,
    chatRoomId: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      status?: string | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      Accommodations?:  {
        __typename: "ModelAccommodationConnection",
        nextToken?: string | null,
      } | null,
      SavedAccommodation?:  {
        __typename: "SavedAccommodation",
        id: string,
        createdAt: string,
        updatedAt: string,
        savedAccommodationUserId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userSavedAccommodationId?: string | null,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      Users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        text: string,
        chatRoomId: string,
        userId: string,
        updatedAt: string,
      } | null,
      Accommodation?:  {
        __typename: "Accommodation",
        id: string,
        availableDate?: string | null,
        description: string,
        images: Array< string | null >,
        price: number,
        propertyType: PropertyEnum,
        rented?: boolean | null,
        createdAt: string,
        title: string,
        address: string,
        userId: string,
        unitFeature?: Array< string | null > | null,
        latitude?: number | null,
        longitude?: number | null,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      chatRoomLastMessageId?: string | null,
      chatRoomAccommodationId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionUserChatRoomFilterInput | null,
};

export type OnDeleteUserChatRoomSubscription = {
  onDeleteUserChatRoom?:  {
    __typename: "UserChatRoom",
    id: string,
    userId: string,
    chatRoomId: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      status?: string | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      Accommodations?:  {
        __typename: "ModelAccommodationConnection",
        nextToken?: string | null,
      } | null,
      SavedAccommodation?:  {
        __typename: "SavedAccommodation",
        id: string,
        createdAt: string,
        updatedAt: string,
        savedAccommodationUserId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userSavedAccommodationId?: string | null,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      Users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        text: string,
        chatRoomId: string,
        userId: string,
        updatedAt: string,
      } | null,
      Accommodation?:  {
        __typename: "Accommodation",
        id: string,
        availableDate?: string | null,
        description: string,
        images: Array< string | null >,
        price: number,
        propertyType: PropertyEnum,
        rented?: boolean | null,
        createdAt: string,
        title: string,
        address: string,
        userId: string,
        unitFeature?: Array< string | null > | null,
        latitude?: number | null,
        longitude?: number | null,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      chatRoomLastMessageId?: string | null,
      chatRoomAccommodationId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
