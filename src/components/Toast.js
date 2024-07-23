import React, {useEffect, useRef, useState} from 'react';
import {Animated, Dimensions, StyleSheet, Text, View} from 'react-native';
import BookedTicketSVG from '../assets/DYN_SVG/BookedTicketSVG';

export const AnimatedToast = ({
  state,
  text,
  svg,
  time = 2000,
  type,
  setToastState,
  subText,
}) => {
  const [animateInState, setAnimateInState] = useState();
  const animatedVal = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setAnimateInState(() => state);
  }, [state]);

  useEffect(() => {
    const animateIn = () => {
      Animated.spring(animatedVal, {
        toValue: 1,
        stiffness: 200,
        damping: 10,
        useNativeDriver: false,
      }).start(() => setTimeout(animateOut, time));
    };
    const animateOut = () => {
      Animated.spring(animatedVal, {
        toValue: 0,
        stiffness: 100,
        damping: 10,
        useNativeDriver: false,
      }).start(() => {
        setAnimateInState(false);
        setToastState(false);
      });
    };

    if (animateInState !== undefined && animateInState) {
      animateIn();
    }
  }, [state, animateInState, animatedVal, time, setToastState]);

  if (type === 'SUCCESS') {
    return (
      <Animated.View
        style={[
          styles.animatedViewSuccess,
          {
            transform: [
              {
                translateX: animatedVal.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-Dimensions.get('window').width, 0],
                }),
              },
            ],
          },
        ]}>
        <View
          style={{
            gap: 10,
            marginTop: 5,
            backgroundColor: 'white',
            padding: 20,
            flexGrow: 1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <BookedTicketSVG />
            <Text
              style={{
                marginHorizontal: 10,
                color: 'black',
                fontSize: 16,
                fontWeight: '600',
              }}>
              {text}
            </Text>
          </View>
          <Text
            style={{
              color: '#656565',
            }}>
            {subText}
          </Text>
        </View>
      </Animated.View>
    );
  }

  if (type === 'ERROR') {
    return (
      <Animated.View
        style={[
          styles.errorStyle,
          {
            transform: [
              {
                translateX: animatedVal.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-Dimensions.get('window').width, 0],
                }),
              },
            ],
          },
        ]}>
        <Text style={{marginHorizontal: 10, color: 'black', fontWeight: '600'}}>
          {text ? text : 'Successfully done'}
        </Text>
      </Animated.View>
    );
  }
};

const styles = StyleSheet.create({
  animatedViewSuccess: {
    marginBottom: 10,
    overflow: 'hidden',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#1EC34E',
    borderColor: '#9CCFAB',
    width: Dimensions.get('window').width - 40,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 40,
  },

  errorStyle: {
    marginBottom: 10,
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#F9EEED',
    borderColor: '#D48883',
    height: 60,
    width: Dimensions.get('window').width - 40,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 30,
  },
  textStyle: {marginHorizontal: 10, color: 'black', fontWeight: '600'},
});
