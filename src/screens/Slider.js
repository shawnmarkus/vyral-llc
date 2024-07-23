import React, {useRef, useState} from 'react';
import {
  Text,
  Dimensions,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import OptionComp from '../components/OptionComp';
import Bottom from '../components/Bottom';
import {useDispatch} from 'react-redux';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const Slider = ({itemList, lastStagefn}) => {
  const scrollViewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = index => {
    scrollViewRef.current?.scrollTo({
      x: index * SCREEN_WIDTH,
      animated: true,
    });
  };
  const setTheCurrentIndexForSlider = () => {
    setCurrentIndex(prev => {
      if (prev + 1 < itemList.length) {
        return prev + 1;
      }
      return prev;
    });
  };

  const dispatch = useDispatch();

  React.useEffect(() => {
    scrollToIndex(currentIndex);
  }, [currentIndex]);

  return (
    <ScrollView
      ref={scrollViewRef}
      horizontal
      pagingEnabled
      scrollEnabled={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContainer}>
      {itemList.map((item, index) => (
        <View key={index} style={styles.itemContainer}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={[styles.centerTheContainer, styles.innerContainer]}>
            <ScrollView
              style={{
                width: '100%',
              }}>
              <Text style={styles.questionNo}>
                QUESTION {item?.questionNo} of {item?.totalQuestion}
              </Text>

              <Text style={styles.title}>{item.title}</Text>

              <View
                style={{
                  marginVertical: 45,
                }}>
                {item.type === 'input' && (
                  <TextInput
                    placeholder="Write your answer here"
                    placeholderTextColor={'#C7C1FF'}
                    onChangeText={text => dispatch(item.onChange(text))}
                    style={{
                      padding: 20,
                      fontSize: 24,
                      fontWeight: '800',
                      color: '#000',
                    }}
                  />
                )}
                {item.type === 'single/seletive' &&
                  item.options.map((i, _) => (
                    <OptionComp
                      valueObj={i}
                      key={_}
                      onPress={text => {
                        dispatch(item.onChange(text));
                        setTheCurrentIndexForSlider();
                      }}
                      type={'single/seletive'}
                    />
                  ))}
                {item.type === 'multi/seletive' &&
                  item.options.map((i, _) => (
                    <OptionComp
                      valueObj={i}
                      key={_}
                      onPress={text => {
                        dispatch(item.onChange(text));
                      }}
                      type={'multi/seletive'}
                      isChecked={item?.state.includes(i.value)}
                    />
                  ))}
              </View>
            </ScrollView>
            {item.type === 'input' || item.questionNo === item.totalQuestion ? (
              <Bottom
                onPress={() => {
                  if (item.questionNo === item.totalQuestion) {
                    lastStagefn();
                  } else setTheCurrentIndexForSlider();
                }}
                name={
                  item.questionNo === item.totalQuestion
                    ? 'Claim ticket'
                    : 'Next Question'
                }
              />
            ) : null}
          </KeyboardAvoidingView>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  optionLabel: {
    color: '#8D86FE',
    fontSize: 20,
    fontWeight: '600',
  },
  title: {
    color: '#2F2E41',
    fontSize: 26,
    fontWeight: '600',
    paddingBottom: 5,
    flexWrap: 'wrap',
  },
  questionNo: {
    fontWeight: '600',
    fontSize: 16,
    color: '#6C63FF',
    paddingBottom: 5,
  },
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    alignItems: 'center',
  },

  innerContainer: {
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_HEIGHT * 0.85,
    justifyContent: 'space-between',
  },

  centerTheContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    height: SCREEN_HEIGHT,
  },
  item: {
    color: 'black',
    textAlign: 'center',
  },
});

export default Slider;
