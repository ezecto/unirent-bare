import { createStackNavigator } from "@react-navigation/stack";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { useEffect } from "react";

import HomeTab from "./HomeTab";
import { createUser } from "../graphql/mutations";
import { getUser } from "../graphql/queries";

const Stack = createStackNavigator();

export default function HomeStack() {
  const syncUser = async () => {
    const authUser = await Auth.currentAuthenticatedUser({
      bypassCache: true,
    });

    console.log("authUser");
    console.log(JSON.stringify(authUser,null,2));

    const userData = await API.graphql(
      graphqlOperation(getUser, { id: authUser.attributes.sub }),
    );

    if (userData.data.getUser) {
      console.log("User already exists");
      return;
    }

    console.log("Creating new User");
    const newUser = {
      id: authUser.attributes.sub,
      name: authUser.username,
    };
    await API.graphql(graphqlOperation(createUser, { input: newUser }));
  };

  useEffect(() => {
    syncUser();
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeTab"
        component={HomeTab}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
