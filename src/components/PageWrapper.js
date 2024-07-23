import React from 'react';
import {View} from 'react-native';

const PageWrapper = ({children, style}) => {
  return (
    <View
      style={[
        {
          flexGrow: 1,
        },
        style,
      ]}>
      {children}
    </View>
  );
};

export default PageWrapper;
