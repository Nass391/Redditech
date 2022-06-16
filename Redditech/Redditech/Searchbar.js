// import * as React from 'react';
// import { Searchbar } from 'react-native-paper';

// const MyComponent = () => {
//   const [searchQuery, setSearchQuery] = React.useState('');
//   const onChangeSearch = query => setSearchQuery(query);

//   return (
//     <Searchbar
//     style={{height:40, width:300, margin:60}}
    
//       placeholder="Search"
//       onChangeText={onChangeSearch}
//       value={searchQuery}
//     />
//   );
// };

// export default MyComponent;


import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { View, StyleSheet, Text } from 'react-native';
import PostSubreddit from './PostSubreddit.js';


const MyComponent = () => {
    
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <>
    
     
        <PostSubreddit />
      
    </>
  );
  
}; 
export default MyComponent;
