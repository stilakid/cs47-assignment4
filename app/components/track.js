import { StyleSheet, View, Text, Image, Pressable, Platform } from "react-native";
import { Themes, Images } from "../../assets/Themes";
import { Ionicons } from '@expo/vector-icons';

export default function Track({num, name, image, duration, artist, album, navigation, external_url, preview_url}) {
  const icon_size = () => {
    return Platform.isPad ? 30 : 20;
  }  
  
  return (
        <Pressable style={styles.container} onPress={() => {
          navigation.navigate("Song Details", {external_url: external_url});
        }}>
            
            {/* <Text style={ [styles.text1, styles.column, styles.num] }>{num}</Text> */}
            <Pressable style={[styles.column, styles.play]} onPress={() => {
              navigation.navigate("Song Preview", {preview_url: preview_url});
            }}>
                <Ionicons name="play-circle" size={icon_size()} color="green"/>
            </Pressable>
            <Image
                style={styles.image}
                resizeMode = {'contain'}
                source={
                    {uri: image}
                }
            />
            <View style={[styles.column, styles.songInfo]}>
                <Text style={[styles.text2, styles.song]} numberOfLines={1}>{name}</Text>
                <Text style={[styles.text1, styles.artist]} numberOfLines={1}>{artist}</Text>
            </View>
            <Text style={[styles.text2, styles.column, styles.album]} numberOfLines={1}>{album}</Text>
            <Text style={[styles.text2, styles.column, styles.duration]}>{duration}</Text>
        </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start",

    padding: 5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2
  },
  text1: {
    color: Themes.colors.gray
  },
  text2: {
    color: Themes.colors.white
  },
  image: {
    width: 65,
    height: 65,
    flex: 2
  },
  play: {
    flex: 1/2,
    alignItems: 'center'
  },
  songInfo: {
    flex: 4,
    flexDirection: "column"
  },
  song: {
  },
  artist: {
  },
  album: {
    flex: 3
  },
  duration: {
    flex: 1
  },
  column: {
    padding: 3
  }
});