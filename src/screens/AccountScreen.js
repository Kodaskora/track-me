import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView
      style={{ flex: 1 }}
      edges={['top', 'bottom', 'left', 'right']}
    >
      <Spacer>
        <Button title='Sign Out' onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = {
  title: 'My Account',
  tabBarIcon: <FontAwesome name='gear' size={24} color='black' />,
};

const styles = StyleSheet.create({});

export default AccountScreen;
