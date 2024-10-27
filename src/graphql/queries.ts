/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSavedAccommodation = /* GraphQL */ `
  query GetSavedAccommodation($id: ID!) {
    getSavedAccommodation(id: $id) {
      id
      Accommodations {
        items {
          id
          savedAccommodationId
          accommodationId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      User {
        id
        name
        status
        Accommodations {
          nextToken
          __typename
        }
        ChatRooms {
          nextToken
          __typename
        }
        Messages {
          nextToken
          __typename
        }
        SavedAccommodation {
          id
          createdAt
          updatedAt
          savedAccommodationUserId
          __typename
        }
        createdAt
        updatedAt
        userSavedAccommodationId
        __typename
      }
      createdAt
      updatedAt
      savedAccommodationUserId
      __typename
    }
  }
`;
export const listSavedAccommodations = /* GraphQL */ `
  query ListSavedAccommodations(
    $filter: ModelSavedAccommodationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSavedAccommodations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        Accommodations {
          nextToken
          __typename
        }
        User {
          id
          name
          status
          createdAt
          updatedAt
          userSavedAccommodationId
          __typename
        }
        createdAt
        updatedAt
        savedAccommodationUserId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
      id
      Users {
        items {
          id
          chatRoomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Messages {
        items {
          id
          createdAt
          text
          chatRoomId
          userId
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      LastMessage {
        id
        createdAt
        text
        chatRoomId
        userId
        updatedAt
        __typename
      }
      Accommodation {
        id
        availableDate
        description
        images
        price
        propertyType
        rented
        createdAt
        title
        address
        userId
        unitFeature
        latitude
        longitude
        savedaccommodations {
          nextToken
          __typename
        }
        User {
          id
          name
          status
          createdAt
          updatedAt
          userSavedAccommodationId
          __typename
        }
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      chatRoomLastMessageId
      chatRoomAccommodationId
      __typename
    }
  }
`;
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Users {
          nextToken
          __typename
        }
        Messages {
          nextToken
          __typename
        }
        LastMessage {
          id
          createdAt
          text
          chatRoomId
          userId
          updatedAt
          __typename
        }
        Accommodation {
          id
          availableDate
          description
          images
          price
          propertyType
          rented
          createdAt
          title
          address
          userId
          unitFeature
          latitude
          longitude
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        chatRoomLastMessageId
        chatRoomAccommodationId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      createdAt
      text
      chatRoomId
      userId
      updatedAt
      __typename
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        text
        chatRoomId
        userId
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const messagesByChatRoomId = /* GraphQL */ `
  query MessagesByChatRoomId(
    $chatRoomId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByChatRoomId(
      chatRoomId: $chatRoomId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        text
        chatRoomId
        userId
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const messagesByUserId = /* GraphQL */ `
  query MessagesByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        text
        chatRoomId
        userId
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAccommodation = /* GraphQL */ `
  query GetAccommodation($id: ID!) {
    getAccommodation(id: $id) {
      id
      availableDate
      description
      images
      price
      propertyType
      rented
      createdAt
      title
      address
      userId
      unitFeature
      latitude
      longitude
      savedaccommodations {
        items {
          id
          savedAccommodationId
          accommodationId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      User {
        id
        name
        status
        Accommodations {
          nextToken
          __typename
        }
        ChatRooms {
          nextToken
          __typename
        }
        Messages {
          nextToken
          __typename
        }
        SavedAccommodation {
          id
          createdAt
          updatedAt
          savedAccommodationUserId
          __typename
        }
        createdAt
        updatedAt
        userSavedAccommodationId
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const listAccommodations = /* GraphQL */ `
  query ListAccommodations(
    $filter: ModelAccommodationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccommodations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        availableDate
        description
        images
        price
        propertyType
        rented
        createdAt
        title
        address
        userId
        unitFeature
        latitude
        longitude
        savedaccommodations {
          nextToken
          __typename
        }
        User {
          id
          name
          status
          createdAt
          updatedAt
          userSavedAccommodationId
          __typename
        }
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const accommodationsByUserId = /* GraphQL */ `
  query AccommodationsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAccommodationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    accommodationsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        availableDate
        description
        images
        price
        propertyType
        rented
        createdAt
        title
        address
        userId
        unitFeature
        latitude
        longitude
        savedaccommodations {
          nextToken
          __typename
        }
        User {
          id
          name
          status
          createdAt
          updatedAt
          userSavedAccommodationId
          __typename
        }
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      status
      Accommodations {
        items {
          id
          availableDate
          description
          images
          price
          propertyType
          rented
          createdAt
          title
          address
          userId
          unitFeature
          latitude
          longitude
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      ChatRooms {
        items {
          id
          chatRoomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Messages {
        items {
          id
          createdAt
          text
          chatRoomId
          userId
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      SavedAccommodation {
        id
        Accommodations {
          nextToken
          __typename
        }
        User {
          id
          name
          status
          createdAt
          updatedAt
          userSavedAccommodationId
          __typename
        }
        createdAt
        updatedAt
        savedAccommodationUserId
        __typename
      }
      createdAt
      updatedAt
      userSavedAccommodationId
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        status
        Accommodations {
          nextToken
          __typename
        }
        ChatRooms {
          nextToken
          __typename
        }
        Messages {
          nextToken
          __typename
        }
        SavedAccommodation {
          id
          createdAt
          updatedAt
          savedAccommodationUserId
          __typename
        }
        createdAt
        updatedAt
        userSavedAccommodationId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSavedAccommodationAccommodation = /* GraphQL */ `
  query GetSavedAccommodationAccommodation($id: ID!) {
    getSavedAccommodationAccommodation(id: $id) {
      id
      savedAccommodationId
      accommodationId
      savedAccommodation {
        id
        Accommodations {
          nextToken
          __typename
        }
        User {
          id
          name
          status
          createdAt
          updatedAt
          userSavedAccommodationId
          __typename
        }
        createdAt
        updatedAt
        savedAccommodationUserId
        __typename
      }
      accommodation {
        id
        availableDate
        description
        images
        price
        propertyType
        rented
        createdAt
        title
        address
        userId
        unitFeature
        latitude
        longitude
        savedaccommodations {
          nextToken
          __typename
        }
        User {
          id
          name
          status
          createdAt
          updatedAt
          userSavedAccommodationId
          __typename
        }
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSavedAccommodationAccommodations = /* GraphQL */ `
  query ListSavedAccommodationAccommodations(
    $filter: ModelSavedAccommodationAccommodationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSavedAccommodationAccommodations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        savedAccommodationId
        accommodationId
        savedAccommodation {
          id
          createdAt
          updatedAt
          savedAccommodationUserId
          __typename
        }
        accommodation {
          id
          availableDate
          description
          images
          price
          propertyType
          rented
          createdAt
          title
          address
          userId
          unitFeature
          latitude
          longitude
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const savedAccommodationAccommodationsBySavedAccommodationId = /* GraphQL */ `
  query SavedAccommodationAccommodationsBySavedAccommodationId(
    $savedAccommodationId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSavedAccommodationAccommodationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    savedAccommodationAccommodationsBySavedAccommodationId(
      savedAccommodationId: $savedAccommodationId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        savedAccommodationId
        accommodationId
        savedAccommodation {
          id
          createdAt
          updatedAt
          savedAccommodationUserId
          __typename
        }
        accommodation {
          id
          availableDate
          description
          images
          price
          propertyType
          rented
          createdAt
          title
          address
          userId
          unitFeature
          latitude
          longitude
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const savedAccommodationAccommodationsByAccommodationId = /* GraphQL */ `
  query SavedAccommodationAccommodationsByAccommodationId(
    $accommodationId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSavedAccommodationAccommodationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    savedAccommodationAccommodationsByAccommodationId(
      accommodationId: $accommodationId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        savedAccommodationId
        accommodationId
        savedAccommodation {
          id
          createdAt
          updatedAt
          savedAccommodationUserId
          __typename
        }
        accommodation {
          id
          availableDate
          description
          images
          price
          propertyType
          rented
          createdAt
          title
          address
          userId
          unitFeature
          latitude
          longitude
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUserChatRoom = /* GraphQL */ `
  query GetUserChatRoom($id: ID!) {
    getUserChatRoom(id: $id) {
      id
      chatRoomId
      userId
      chatRoom {
        id
        Users {
          nextToken
          __typename
        }
        Messages {
          nextToken
          __typename
        }
        LastMessage {
          id
          createdAt
          text
          chatRoomId
          userId
          updatedAt
          __typename
        }
        Accommodation {
          id
          availableDate
          description
          images
          price
          propertyType
          rented
          createdAt
          title
          address
          userId
          unitFeature
          latitude
          longitude
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        chatRoomLastMessageId
        chatRoomAccommodationId
        __typename
      }
      user {
        id
        name
        status
        Accommodations {
          nextToken
          __typename
        }
        ChatRooms {
          nextToken
          __typename
        }
        Messages {
          nextToken
          __typename
        }
        SavedAccommodation {
          id
          createdAt
          updatedAt
          savedAccommodationUserId
          __typename
        }
        createdAt
        updatedAt
        userSavedAccommodationId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUserChatRooms = /* GraphQL */ `
  query ListUserChatRooms(
    $filter: ModelUserChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        chatRoomId
        userId
        chatRoom {
          id
          createdAt
          updatedAt
          chatRoomLastMessageId
          chatRoomAccommodationId
          __typename
        }
        user {
          id
          name
          status
          createdAt
          updatedAt
          userSavedAccommodationId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const userChatRoomsByChatRoomId = /* GraphQL */ `
  query UserChatRoomsByChatRoomId(
    $chatRoomId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userChatRoomsByChatRoomId(
      chatRoomId: $chatRoomId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        chatRoomId
        userId
        chatRoom {
          id
          createdAt
          updatedAt
          chatRoomLastMessageId
          chatRoomAccommodationId
          __typename
        }
        user {
          id
          name
          status
          createdAt
          updatedAt
          userSavedAccommodationId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const userChatRoomsByUserId = /* GraphQL */ `
  query UserChatRoomsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userChatRoomsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        chatRoomId
        userId
        chatRoom {
          id
          createdAt
          updatedAt
          chatRoomLastMessageId
          chatRoomAccommodationId
          __typename
        }
        user {
          id
          name
          status
          createdAt
          updatedAt
          userSavedAccommodationId
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
