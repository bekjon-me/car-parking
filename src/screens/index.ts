import React from 'react';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import Parkings from './Parkings/Parkings';

interface ScreenType {
  name: string;
  component: any;
  icon: string;
  headerShown: boolean;
}

const screens: ScreenType[] = [
  {name: 'Home', component: Home, icon: 'home', headerShown: false},
  {name: 'My parking', component: Parkings, icon: 'parking', headerShown: false},
  {name: 'Profile', component: Profile, icon: 'user-circle', headerShown: false},
  {
    name: 'More',
    component: Profile,
    icon: 'bars',
    headerShown: false,
  },
];

export default screens;
