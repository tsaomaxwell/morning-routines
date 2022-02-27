import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, Image, View } from 'react-native';


const feedExample = [
  {
    profilepicture:'',
    username:'jennie_the_human',
    picture:'https://static.onecms.io/wp-content/uploads/sites/35/2019/04/16045733/benefits-yoga-fb.jpg',
    caption: 'Starting the morning strong with some meditation!',
  },
  {
    username:'Michaela123',
    picture:'https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    caption: '1..2..3.. big stretch :)',
  },
  {
    username:'ssssssteve',
    picture:'http://cdn.mos.cms.futurecdn.net/v44n2mBJgaRoCkkFGjDtRP.jpeg',
    caption: 'running away from my bad habits',
  },
  {
    username:'hippiehank22',
    picture:'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVhZGluZ3xlbnwwfHwwfHw%3D&w=1000&q=80',
    caption: 'No better way to start your day than with a nice book',
  },

]

const Post = ({username, picture, caption}) => {

  return (
    <View style = {styles.PostStyle}>
      <Text style = {styles.UsernameStyle1}>{username}</Text>
      <Image source ={{uri:picture}} style={styles.ImageStyle}/>
      <Text style = {styles.CaptionStyle}>{caption}</Text>
    </View>
  )
}

export default function Feed({ navigation }) {
  return (
    <View style = {styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {
            feedExample.map((post,i) => {
              return (
                <Post key={i} username = {post.username} picture = {post.picture } caption={post.caption}/>
              )
            
            })
          }
        </ScrollView>
    </View>
  );
}

<ScrollView>
  <Text>Hi there</Text>
</ScrollView>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  PostStyle:
  {
    padding: 10,
  },
  UsernameStyle1:
  {
    fontSize: 14,
    fontWeight: 'bold',
    paddingBottom: 10,
    alignSelf: 'flex-start'
  },
  ImageStyle:
  {
    width: '95%',
    height: undefined,
    aspectRatio: 1,
    alignSelf: 'center',
  },
  textInput:{
    paddingHorizontal: 34
  },

  CaptionStyle: 
  {
    display: 'flex',
    flexDirection: 'row',
    fontSize: 14,
    width: 250,
    paddingTop: 10,
  },
});
