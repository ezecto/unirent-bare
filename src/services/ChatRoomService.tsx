import { API, graphqlOperation, Auth } from "aws-amplify";

export const getCommonChatRoomWithUser = async (userID) => {
  const authUser = await Auth.currentAuthenticatedUser();

  // get all chatrooms of auth user
  const response = await API.graphql(
    graphqlOperation(listChatRooms, { id: authUser.attributes.sub }),
  );

  const chatRooms = response.data?.getUser?.ChatRooms?.items || [];

  const chatRoom = chatRooms.find((chatRoomItem) => {
    return (
      chatRoomItem.chatRoom.Users.items.length === 2 &&
      chatRoomItem.chatRoom.Users.items.some(
        (userItem) => userItem.userId === userID,
      )
    );
  });

  return chatRoom;
};

export const listChatRooms = /* GraphQL */ `
  query MyQuery($id: ID!) {
    getUser(id: $id) {
      ChatRooms {
        items {
          chatRoom {
            id
            Users {
              items {
                userId
              }
            }
          }
        }
      }
    }
  }
`;

export const getInbox = /* GraphQL */ `
  query MyQuery($id: ID!) {
    getUser(id: $id) {
      ChatRooms {
        items {
          chatRoom {
            id
            updatedAt
            Users(filter: { userId: { ne: $id } }) {
              items {
                user {
                  id
                  name
                }
              }
            }
            LastMessage {
              id
              text
              createdAt
            }
            Accommodation {
              title
              price
            }
          }
        }
      }
    }
  }
`;
