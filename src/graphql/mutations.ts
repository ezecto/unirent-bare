/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSavedAccommodation = /* GraphQL */ `
  mutation CreateSavedAccommodation(
    $input: CreateSavedAccommodationInput!
    $condition: ModelSavedAccommodationConditionInput
  ) {
    createSavedAccommodation(input: $input, condition: $condition) {
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
export const updateSavedAccommodation = /* GraphQL */ `
  mutation UpdateSavedAccommodation(
    $input: UpdateSavedAccommodationInput!
    $condition: ModelSavedAccommodationConditionInput
  ) {
    updateSavedAccommodation(input: $input, condition: $condition) {
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
export const deleteSavedAccommodation = /* GraphQL */ `
  mutation DeleteSavedAccommodation(
    $input: DeleteSavedAccommodationInput!
    $condition: ModelSavedAccommodationConditionInput
  ) {
    deleteSavedAccommodation(input: $input, condition: $condition) {
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
export const createChatRoom = /* GraphQL */ `
  mutation CreateChatRoom(
    $input: CreateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    createChatRoom(input: $input, condition: $condition) {
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
export const updateChatRoom = /* GraphQL */ `
  mutation UpdateChatRoom(
    $input: UpdateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    updateChatRoom(input: $input, condition: $condition) {
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
export const deleteChatRoom = /* GraphQL */ `
  mutation DeleteChatRoom(
    $input: DeleteChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    deleteChatRoom(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
export const createAccommodation = /* GraphQL */ `
  mutation CreateAccommodation(
    $input: CreateAccommodationInput!
    $condition: ModelAccommodationConditionInput
  ) {
    createAccommodation(input: $input, condition: $condition) {
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
export const updateAccommodation = /* GraphQL */ `
  mutation UpdateAccommodation(
    $input: UpdateAccommodationInput!
    $condition: ModelAccommodationConditionInput
  ) {
    updateAccommodation(input: $input, condition: $condition) {
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
export const deleteAccommodation = /* GraphQL */ `
  mutation DeleteAccommodation(
    $input: DeleteAccommodationInput!
    $condition: ModelAccommodationConditionInput
  ) {
    deleteAccommodation(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createSavedAccommodationAccommodation = /* GraphQL */ `
  mutation CreateSavedAccommodationAccommodation(
    $input: CreateSavedAccommodationAccommodationInput!
    $condition: ModelSavedAccommodationAccommodationConditionInput
  ) {
    createSavedAccommodationAccommodation(
      input: $input
      condition: $condition
    ) {
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
export const updateSavedAccommodationAccommodation = /* GraphQL */ `
  mutation UpdateSavedAccommodationAccommodation(
    $input: UpdateSavedAccommodationAccommodationInput!
    $condition: ModelSavedAccommodationAccommodationConditionInput
  ) {
    updateSavedAccommodationAccommodation(
      input: $input
      condition: $condition
    ) {
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
export const deleteSavedAccommodationAccommodation = /* GraphQL */ `
  mutation DeleteSavedAccommodationAccommodation(
    $input: DeleteSavedAccommodationAccommodationInput!
    $condition: ModelSavedAccommodationAccommodationConditionInput
  ) {
    deleteSavedAccommodationAccommodation(
      input: $input
      condition: $condition
    ) {
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
export const createUserChatRoom = /* GraphQL */ `
  mutation CreateUserChatRoom(
    $input: CreateUserChatRoomInput!
    $condition: ModelUserChatRoomConditionInput
  ) {
    createUserChatRoom(input: $input, condition: $condition) {
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
export const updateUserChatRoom = /* GraphQL */ `
  mutation UpdateUserChatRoom(
    $input: UpdateUserChatRoomInput!
    $condition: ModelUserChatRoomConditionInput
  ) {
    updateUserChatRoom(input: $input, condition: $condition) {
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
export const deleteUserChatRoom = /* GraphQL */ `
  mutation DeleteUserChatRoom(
    $input: DeleteUserChatRoomInput!
    $condition: ModelUserChatRoomConditionInput
  ) {
    deleteUserChatRoom(input: $input, condition: $condition) {
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
