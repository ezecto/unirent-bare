/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSavedAccommodation = /* GraphQL */ `
  subscription OnCreateSavedAccommodation(
    $filter: ModelSubscriptionSavedAccommodationFilterInput
  ) {
    onCreateSavedAccommodation(filter: $filter) {
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
export const onUpdateSavedAccommodation = /* GraphQL */ `
  subscription OnUpdateSavedAccommodation(
    $filter: ModelSubscriptionSavedAccommodationFilterInput
  ) {
    onUpdateSavedAccommodation(filter: $filter) {
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
export const onDeleteSavedAccommodation = /* GraphQL */ `
  subscription OnDeleteSavedAccommodation(
    $filter: ModelSubscriptionSavedAccommodationFilterInput
  ) {
    onDeleteSavedAccommodation(filter: $filter) {
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
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onCreateChatRoom(filter: $filter) {
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
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onUpdateChatRoom(filter: $filter) {
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
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onDeleteChatRoom(filter: $filter) {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
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
export const onCreateAccommodation = /* GraphQL */ `
  subscription OnCreateAccommodation(
    $filter: ModelSubscriptionAccommodationFilterInput
  ) {
    onCreateAccommodation(filter: $filter) {
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
export const onUpdateAccommodation = /* GraphQL */ `
  subscription OnUpdateAccommodation(
    $filter: ModelSubscriptionAccommodationFilterInput
  ) {
    onUpdateAccommodation(filter: $filter) {
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
export const onDeleteAccommodation = /* GraphQL */ `
  subscription OnDeleteAccommodation(
    $filter: ModelSubscriptionAccommodationFilterInput
  ) {
    onDeleteAccommodation(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateSavedAccommodationAccommodation = /* GraphQL */ `
  subscription OnCreateSavedAccommodationAccommodation(
    $filter: ModelSubscriptionSavedAccommodationAccommodationFilterInput
  ) {
    onCreateSavedAccommodationAccommodation(filter: $filter) {
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
export const onUpdateSavedAccommodationAccommodation = /* GraphQL */ `
  subscription OnUpdateSavedAccommodationAccommodation(
    $filter: ModelSubscriptionSavedAccommodationAccommodationFilterInput
  ) {
    onUpdateSavedAccommodationAccommodation(filter: $filter) {
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
export const onDeleteSavedAccommodationAccommodation = /* GraphQL */ `
  subscription OnDeleteSavedAccommodationAccommodation(
    $filter: ModelSubscriptionSavedAccommodationAccommodationFilterInput
  ) {
    onDeleteSavedAccommodationAccommodation(filter: $filter) {
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
export const onCreateUserChatRoom = /* GraphQL */ `
  subscription OnCreateUserChatRoom(
    $filter: ModelSubscriptionUserChatRoomFilterInput
  ) {
    onCreateUserChatRoom(filter: $filter) {
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
export const onUpdateUserChatRoom = /* GraphQL */ `
  subscription OnUpdateUserChatRoom(
    $filter: ModelSubscriptionUserChatRoomFilterInput
  ) {
    onUpdateUserChatRoom(filter: $filter) {
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
export const onDeleteUserChatRoom = /* GraphQL */ `
  subscription OnDeleteUserChatRoom(
    $filter: ModelSubscriptionUserChatRoomFilterInput
  ) {
    onDeleteUserChatRoom(filter: $filter) {
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
