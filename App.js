import 'react-native-gesture-handler';
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import ConnectWithSpotify from "./app/components/connectWithSpotify";
import TrackList from "./app/components/trackList";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SongListScreen from "./app/components/songListScreen";
import SongScreen from "./app/components/songScreen";
import PlaybackScreen from "./app/components/playbackScreen";


export default function App() {
    // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
    const { token, tracks, getSpotifyAuth } = useSpotifyAuth();
    const Stack = createStackNavigator();

    const SongListScreenWrapper = ({navigation}) => {
        return (
            <SongListScreen navigation={navigation} data={tracks}/>
        );
    }

    if (token) {
        return(
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="My Songs" component={SongListScreenWrapper} options={{headerShown: false}}/>
                    <Stack.Screen name="Song Details" component={SongScreen} />
                    <Stack.Screen name="Song Preview" component={PlaybackScreen} />
                </Stack.Navigator>
            </NavigationContainer> 
        );
    } else {
        return(
            <SafeAreaView style={styles.container}>
                <ConnectWithSpotify myFunc={getSpotifyAuth}>
                </ConnectWithSpotify>
            </SafeAreaView>
        ); 
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: '100%'
  }
});
