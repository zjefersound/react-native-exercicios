// v5 code : 
// homeStack.js
// -------------------------------------------
// import React from 'react'
// import { createStackNavigator } from '@react-navigation/stack'
// import Home from "../screens/home";
// import ReviewDetails from "../screens/reviewDetails";


// const Stack = createStackNavigator()

// export default function homeNavigator() {
//   return (
//     <Stack.Navigator initialRouteName='Home'
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: '#999',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//           fontWeight: 'bold',
//         },
//       }}
//       >
//         <Stack.Screen 
//             name='Home' 
//             component={Home} 
//             options={{ 
//               title: 'GameZone',
//             }}
//         />
//         <Stack.Screen 
//             name='ReviewDetails' 
//             component={ReviewDetails} 
//             options={{ 
//               title: 'Review Details'
//             }}
//         />
//       </Stack.Navigator>
//   );
// }
// aboutStack.js
// ----------------------------------------------------
// import React from 'react'
// import { createStackNavigator } from '@react-navigation/stack'
// import About from "../screens/about";

// const Stack = createStackNavigator()

// export default function aboutNavigator() {
//   return (
//     <Stack.Navigator initialRouteName='About'
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: '#999',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     }}
//     >
//       <Stack.Screen 
//           name='About' 
//           component={About} 
//           options={{ 
//             title: 'About',
//           }}
//       />
//     </Stack.Navigator>
//   );
// }
// drawer.js
// -----------------------------------------

// import React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';

// import aboutNavigator from './aboutStack';
// import homeNavigator from './homeStack';

// const Drawer = createDrawerNavigator();

// export default function drawerNavigator() {
//     return (
//         <NavigationContainer>
//             <Drawer.Navigator initialRouteName="Home">
//                 <Drawer.Screen name="Home" component={homeNavigator} />
//                 <Drawer.Screen name="About" component={aboutNavigator} />
//             </Drawer.Navigator>
//         </NavigationContainer>
//     )
// }
// App.js
// ----------------------------------
// import React, { useState } from 'react';
// import * as Font from 'expo-font';
// import{ AppLoading } from 'expo';
// import drawerNavigator from './routes/drawer';


// const getFonts = () => Font.loadAsync({
//     'roboto-regular' : require('./assets/fonts/Roboto-Regular.ttf'),
//     'roboto-bold' : require('./assets/fonts/Roboto-Bold.ttf')
//   })


// export default function App() {
//   const [fontLoaded, setFontLoaded] = useState(false);
//   if(fontLoaded){
//   return (
//     drawerNavigator()
//   );
//   } else {
//     return(
//       <AppLoading
//       startAsync={getFonts}
//       onFinish={()=> setFontLoaded(true)}
//     />
//     )
//   }
// }