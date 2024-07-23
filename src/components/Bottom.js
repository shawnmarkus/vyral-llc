import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
// import {View} from 'react-native-reanimated/lib/typescript/Animated';

const Bottom = ({
  name,
  backgroundColor = '#6C63FF',
  onPress,
  svg,
  style,
  textColor,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.btnWrapper,
        {
          backgroundColor,
        },
        style ? style : {},
      ]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
        }}>
        {svg ? svg : null}
        <Text
          style={[
            styles.nameStyle,
            {
              color: textColor ? textColor : '#FFFFFF',
            },
          ]}>
          {name}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btnWrapper: {
    width: '100%',
    borderRadius: 15,
    paddingVertical: 15,
    justifyContent: 'center',
  },
  nameStyle: {
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default Bottom;
