import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PageWrapper from '../components/PageWrapper';
import LinearGradient from 'react-native-linear-gradient';
import BackArrowSVG from '../assets/DYN_SVG/BackArrowSVG';
import DotsSVG from '../assets/DYN_SVG/DotsSVG';
import QRCode from 'react-native-qrcode-svg';

const MyTicket = ({navigation}) => {
  return (
    <PageWrapper>
      <LinearGradient
        useAngle={true}
        angle={135}
        angleCenter={{x: 0.5, y: 0.5}}
        colors={['#D5CFFF', '#F3EFFF']}
        style={styles.linearGradientStyle}>
        <View>
          <View style={styles.topBar}>
            <TouchableOpacity onPress={() => navigation.pop()}>
              <BackArrowSVG fill="#000" />
            </TouchableOpacity>
            <Text style={styles.headingText}>My Ticket</Text>
            <TouchableOpacity>
              <DotsSVG fill="#000" />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            height: '70%',
            paddingHorizontal: 40,
          }}>
          <View style={styles.ticketWrapper}>
            <View style={styles.topPart}>
              <View
                style={{
                  marginBottom: 20,
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '600',
                    fontSize: 20,
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
            </View>
            <View style={styles.middlePart}>
              <View>
                <Text style={styles.title}>Location</Text>
                <Text style={styles.valueText}>
                  280 Broome St | Apartment 9
                </Text>
              </View>
              <View style={styles.detailContainer}>
                <View>
                  <Text style={styles.title}>Name</Text>
                  <Text style={styles.valueText}>Ava Martinez</Text>
                </View>
                <View>
                  <Text style={styles.title}>Date</Text>
                  <Text style={styles.valueText}>13 Nov 2023</Text>
                </View>
              </View>
              <View style={styles.detailContainer}>
                <View>
                  <Text style={styles.title}>Time</Text>
                  <Text style={styles.valueText}>6:00 PM ▸ 10:00 PM</Text>
                </View>
                <View>
                  <Text style={styles.title}>Ticket type</Text>
                  <Text style={styles.valueText}>VIP ticket</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                margin: 30,
              }}>
              <QRCode value="http://awesome.link.qr" size={180} />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 40,
            }}></View>

          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 40,
            }}></View>
        </View>
      </LinearGradient>
    </PageWrapper>
  );
};

const styles = StyleSheet.create({
  detailContainer: {
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  ticketWrapper: {
    flexGrow: 1,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  topPart: {
    paddingTop: 30,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#A5A5A5',
  },
  middlePart: {
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#A5A5A5',
    paddingHorizontal: 20,
    paddingVertical: 30,
    gap: 10,
  },
  title: {
    color: '#2F2E41',
    fontSize: 12,
  },
  valueText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#2F2E41',
  },
  headingText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  topBar: {
    paddingBottom: 20,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  linearGradientStyle: {
    flexGrow: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 40,
  },
});

export default MyTicket;
