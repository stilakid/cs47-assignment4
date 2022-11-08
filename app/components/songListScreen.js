
import { StyleSheet, Text } from "react-native";
import TrackList from "./trackList";
import {Themes} from "../../assets/Themes"
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';



export default function SongScreen({navigation, data}) {
    return(
        <TrackList data={data} navigation={navigation}></TrackList>
    );
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