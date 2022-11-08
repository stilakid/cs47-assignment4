import { WebView } from 'react-native-webview';
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { Themes } from "../../assets/Themes"

export default function SongScreen({navigation, route}) {
    
    const { preview_url } = route.params;
    return(
        <SafeAreaView style={styles.container}>
            <WebView source={{ uri: preview_url }}/>
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