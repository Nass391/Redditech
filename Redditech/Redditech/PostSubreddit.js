// import React, { useEffect, useState } from 'react';
// import { ScrollView, Text, SafeAreaView, StyleSheet, TextInput} from 'react-native';
// import axios from 'axios';
// import { Searchbar } from 'react-native-paper';


// export default function PostSubreddit(){

//   const styles = StyleSheet.create({
//     input: {
//       height: 30,
//       margin: 10,
//       borderWidth: 1,
//       padding: 10,
//     },
//   });

//   const[posts, setPosts] = useState([])

//    async function fetchData(text){

//     const options = {
//         method: 'GET',
//         url: `http://www.reddit.com/search.json?q=${text}`
//     };
//    await axios.request(options).then( (res) => {
//     const comments = []
//     res.data.data.children.map((post,i) => 
//     comments.push(post.data)
//     )
//     console.log(comments)
//     setPosts(comments)
//     // console.log(posts)
//      }


//   ).catch(function (error) {
//         console.error(error);
//     });

//      }

//   useEffect(()=>{ 
//     fetchData()
//   }, [])
//   return(


//     <ScrollView>
//       <Searchbar
          
//             onChangeText={(text) => { fetchData(text) }}
//             style={{height:40, width:300, margin:60}} />
//       {
//         posts.map((post, i) => (
//           <Text key={i}> {post.title}</Text>,
//           <Text key={i}> {post.title}</Text>


          
//         ))
//       }
//     </ScrollView>
//   ) 

// }
import React, { useEffect, useState } from 'react';

import { ScrollView, Text, View, Image, Dimensions,  SafeAreaView, StyleSheet, TextInput} from 'react-native';

import axios from 'axios';

// import Card from "./SubredditCard.js"

import { Searchbar } from 'react-native-paper';



export default function PostSubreddit(){

  const deviceWidth = Math.round(Dimensions.get('window').width)

  const radius= 20  

  const styles = StyleSheet.create({

    input: {

      height: 30,

      margin: 10,

      borderWidth: 1,

      padding: 10,

    },
    cardContainer: {

      flex: 1,

      width: deviceWidth - 25,

      backgroundColor: '#000',

      // height: 200,

      borderRadius: radius,

      marginTop: 10,

      marginHorizontal: 10,

  },

  titleStyle: {

      fontSize: 10,

      fontWeight: '800',

      color: '#f0f8ff',

  },

  nameStyle: {

    fontSize: 10,

    fontWeight: '800',

    color: '#f0f8ff',

},

authorStyle: {

  fontSize: 10,

  fontWeight: '800',

  color: '#f0f8ff',

},

   imageStyle: {

     height: 130,

     width: deviceWidth - 25,

     borderTopLeftRadius: radius,

     borderTopRightRadius: radius,

     opacity: 0.9,

  },

  infoStyle: {

     marginHorizontal: 10,

     marginVertical: 5,

     fontSize: 10,

    fontWeight: '800',

    color: '#f0f8ff',

  }

});
  // const [searchSubreddit, setSearchReddit] = useState('nike');

  const[posts, setPosts] = useState([])



async function fetchData(text){



    const options = {

        method: 'GET',

        url: `http://www.reddit.com/search.json?q=${text}`

    };

   await axios.request(options).then( (res) => {

    const comments = []

    res.data.data.children.map((post,i) =>

    comments.push(post.data)

   

    )

    console.log(comments)

    setPosts(comments)

    console.log(posts)

     }




  ).catch(function (error) {

        console.error(error);

    });



     }

   useEffect(()=>{

    fetchData()

  }, [])
  return(
  <ScrollView>

  <Searchbar

       

        onChangeText={(text) => { fetchData(text) }}

        style={{ height: 40, width:300, margin:60 }} />

  {

    posts.map((post, i) => (

      <View key={i} style= {styles.cardContainer}>

           

             <Image style={styles.imageStyle}

                    // style= {{width: '50%', height: '50%'}}

                    source={{uri: post.thumbnail }} />

             <View style={styles.infoStyle}>
             <Text style={styles.nameStyle}>{post.subreddit_name_prefixed}</Text>

<Text style= {styles.authorStyle}>Posted by: {post.author}</Text>

<Text style= {styles.titleStyle}>{post.title}</Text>

<Text>{post.description}</Text>



</View>

</View>
 ))

}

</ScrollView>



)



}
