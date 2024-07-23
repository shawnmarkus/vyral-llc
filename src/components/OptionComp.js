import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CheckedSVG from '../assets/DYN_SVG/CheckedSVG';

const OptionComp = ({valueObj, onPress, type, isChecked}) => {
  return (
    <LinearGradient
      useAngle={true}
      angle={135}
      angleCenter={{x: 0.5, y: 0.5}}
      colors={['#EFEAFF88', '#F3EFFF']}
      style={styles.linearGradient}>
      <Pressable style={styles.btn} onPress={() => onPress(valueObj.value)}>
        <Text style={styles.optionLabel}>{valueObj.label}</Text>
      </Pressable>

      {type === 'multi/seletive' && isChecked && (
        <View
          style={{
            position: 'absolute',
            top: 25,
            right: 25,
          }}>
          <CheckedSVG />
        </View>
      )}
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  optionLabel: {
    color: '#8D86FE',
    fontSize: 20,
    fontWeight: '600',
  },
  btn: {
    backgroundColor: '#fff5',
    backfaceVisibility: 'visible',
    paddingVertical: 20,
    alignItems: 'center',
  },
  linearGradient: {
    flexGrow: 1,
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 20,
    position: 'relative',
  },
});

export default OptionComp;
