import { createAppContainer, createStackNavigator } from "react-navigation";
import HomeScreen from "../views/screens/HomeScreen";

const AppNavigator = createStackNavigator(
    {
      HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
          header: null
        }
      },
    },
    {
      initialRouteName: "HomeScreen"
    }
  );

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;