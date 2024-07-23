/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useRef} from 'react';
import BottomSheet, {
  BottomSheetFlatList,
  BottomSheetScrollView,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {useSharedValue} from 'react-native-reanimated';
import {StyleSheet, Text} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';

const BottomSheetWithDetail = ({children}) => {
  const snapIndex = useSharedValue(0);
  const bottomSheetRef = useRef(null);

  const handleSheetChanges = indx => {
    snapIndex.modify = indx;
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      snapPoints={['70%', '85%']}
      // style={{
      //   backgroundColor: 'red',
      // }}
      backgroundStyle={{
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
      }}
      handleStyle={styles.handleStyle}
      handleIndicatorStyle={styles.handleIndicatorStyle}>
      <BottomSheetScrollView>{children}</BottomSheetScrollView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  handleStyle: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  handleIndicatorStyle: {
    backgroundColor: '#E0E0E0',
    width: '20%',
    padding: 3,
    marginVertical: 10,
  },
});

export default BottomSheetWithDetail;
