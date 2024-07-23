import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BottomSheetWithDetail from '../components/BottomSheetWithDetail';
import PageWrapper from '../components/PageWrapper';
import LinearGradient from 'react-native-linear-gradient';
import BackArrowSVG from '../assets/DYN_SVG/BackArrowSVG';
import DotsSVG from '../assets/DYN_SVG/DotsSVG';
import Bottom from '../components/Bottom';
import CalenderSVG from '../assets/DYN_SVG/CalenderSVG';
import LocationSVG from '../assets/DYN_SVG/LocationSVG';
import UnBookedTicketSVG from '../assets/DYN_SVG/UnBookedTicketSVG';
import {AnimatedToast} from '../components/Toast';
import ModalComponent from '../components/ModalComponent';
import QuestionScreen from './QuestionScreen';
import ShareSVG from '../assets/DYN_SVG/ShareSVG';

const HomeScreen = ({navigation}) => {
  const [toastState, setToastState] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [state, setState] = useState('initial');
  const claimTicket = () => {
    setTimeout(() => {
      setState('loading');
    }, 1000);
  };

  useEffect(() => {
    if (state === 'loading') {
      setTimeout(() => {
        setState(() => 'completed');
      }, 1000);
    }

    if (state === 'completed') {
      setToastState(true);
    }
  }, [state]);
  return (
    <PageWrapper>
      <View
        style={{
          flexGrow: 1,
        }}>
        <ImageBackground
          source={require('../assets/Images/Poster.png')}
          style={styles.imageBackgroundStyle}>
          <LinearGradient
            colors={['#0009', '#0005']}
            style={styles.linearGradientstyle}>
            <View style={styles.topBar}>
              <TouchableOpacity>
                <BackArrowSVG />
              </TouchableOpacity>
              <Text style={styles.headingText}>Event</Text>
              <TouchableOpacity>
                <DotsSVG />
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
      <BottomSheetWithDetail>
        <View
          style={{
            flexGrow: 1,
            position: 'relative',
            paddingVertical: 20,
            paddingHorizontal: 30,
          }}>
          {/* heading */}
          <View
            style={{
              marginBottom: 30,
            }}>
            <Text
              style={{
                color: 'black',
                fontWeight: '600',
                fontSize: 28,
              }}>
              Art show 🎨
            </Text>

            <Text
              style={{
                color: 'black',
                fontSize: 14,
              }}>
              by Olivia Adams
            </Text>
          </View>

          {/* fields */}

          <View style={styles.detailContainerWrapper}>
            <View style={styles.detailBlock}>
              <CalenderSVG />
              <View style={styles.textGap}>
                <Text style={[styles.detailMainText]}>Monday, Nov 13 2023</Text>
                <Text style={[styles.detailSubtext]}>6:00 PM - 10:00 PM</Text>
              </View>
            </View>

            <View style={styles.detailBlock}>
              <LocationSVG />
              <View style={styles.textGap}>
                <Text style={[styles.detailMainText]}>Lower Manhattan</Text>
                <TouchableOpacity>
                  <Text
                    style={[
                      styles.detailSubtext,
                      {
                        color: '#6C63FF',
                        paddingTop: 5,
                      },
                    ]}>
                    Join to see full address
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.detailBlock}>
              <UnBookedTicketSVG />
              <View style={styles.textGap}>
                <Text style={[styles.detailMainText]}>78/100 tickets left</Text>
                <Text style={[styles.detailSubtext]}>100+ invited</Text>
              </View>
            </View>
            <View style={styles.detailBlock}>
              <CalenderSVG />
              <View style={styles.textGap}>
                <Text style={[styles.detailMainText]}>$10.00 - $50.00</Text>
              </View>
            </View>
          </View>

          {/* description */}

          <View
            style={{
              paddingTop: 30,
            }}>
            <View
              style={{
                gap: 8,
              }}>
              <Text
                style={[
                  styles.textColor,
                  styles.detailMainText,
                  {
                    fontSize: 18,
                  },
                ]}>
                About this event
              </Text>
              <Text style={styles.descriptionText}>
                Come join me in celebrating my 25th birthday! I can't wait to
                celebrate with all of you, so let's make it a night to remember.
                See you at the party!
              </Text>
            </View>
          </View>
        </View>
      </BottomSheetWithDetail>
      <View style={styles.btnWrapper} onPress={() => alert(true)}>
        {state === 'initial' && (
          <Bottom
            name={'Buy Ticket'}
            onPress={() => {
              //  navigation.navigate('QuestionPage')
              setIsVisible(() => true);
            }}
          />
        )}

        {state === 'loading' && (
          <Bottom
            name={'Waiting for approval'}
            backgroundColor={'#F5AC40'}
            onPress={() => {
              //  navigation.navigate('QuestionPage')
              setIsVisible(() => true);
            }}
          />
        )}

        {state === 'completed' && (
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
            }}>
            <View
              style={{
                width: '50%',
              }}>
              <Bottom
                svg={<UnBookedTicketSVG innerFill="#fff" />}
                name={'My ticket'}
                backgroundColor={'#6C63FF'}
                onPress={() => {
                  navigation.navigate('MyTicket');
                }}
              />
            </View>
            <View
              style={{
                width: '50%',
              }}>
              <Bottom
                name={'Share event'}
                backgroundColor={'#fff'}
                textColor={'#6C63FF'}
                svg={<ShareSVG />}
                onPress={() => {
                  //  navigation.navigate('QuestionPage')
                  setIsVisible(() => true);
                }}
                style={{
                  flexGrow: 1,
                  borderWidth: 1,
                  borderColor: '#6C63FF',
                }}
              />
            </View>
          </View>
        )}
      </View>

      <ModalComponent isVisible={isVisible}>
        <QuestionScreen setIsVisible={setIsVisible} claimTicket={claimTicket} />
      </ModalComponent>

      <AnimatedToast
        state={toastState}
        setToastState={setToastState}
        type={'SUCCESS'}
        text={'Ticket confirmed'}
        subText={
          ' Now we need to wait for the host to approve you. Once you’reapproved you’ll have access to your ticket.'
        }
      />
    </PageWrapper>
  );
};

const styles = StyleSheet.create({
  btnWrapper: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 20,
    elevation: 10,
    shadowColor: 'black',
  },

  textGap: {
    gap: 8,
  },

  descriptionText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#2F2E41',
    lineHeight: 24,
  },

  detailContainerWrapper: {
    gap: 20,
  },

  detailBlock: {
    gap: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailMainText: {
    fontWeight: 500,
    fontSize: 16,
    color: 'black',
  },
  detailSubtext: {
    color: '#A5A5A5',
    fontSize: 12,
    fontWeight: 500,
  },

  textColor: {
    color: 'black',
  },

  flatListContentContainer: {
    flexGrow: 1,
    paddingBottom: 50,
  },
  headingText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  topBar: {
    paddingBottom: 20,
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },

  linearGradientstyle: {
    flexGrow: 1,
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 20,
    position: 'relative',
  },
  imageBackgroundStyle: {
    paddingVertical: 0,
    borderRadius: 10,
    aspectRatio: 1.02,
    width: '100%',
  },
});

export default HomeScreen;
