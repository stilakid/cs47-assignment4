import { WebView } from 'react-native-webview';
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { Themes } from "../../assets/Themes"



export default function SongScreen({navigation, route}) {
    const { external_url } = route.params;
    return(
        <SafeAreaView style={styles.container}>
            <WebView source={{ uri: external_url }}/>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: Themes.colors.background,
        flex: 1,
      },
      header: {
      },
});