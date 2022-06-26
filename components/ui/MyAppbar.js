import * as React from 'react';
import { Appbar } from 'react-native-paper';

const MyAppbar = () => {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header style={{backgroundColor: '#eafaf7'}}>
      <Appbar.Content  title="iSports" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="cart" onPress={_handleSearch} />
      <Appbar.Action icon="menu" onPress={_handleMore} />
    </Appbar.Header>
  );
};

export default MyAppbar;