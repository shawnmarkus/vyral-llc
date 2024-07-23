import React, {useRef, useState} from 'react';
import PageWrapper from '../components/PageWrapper';
import LinearGradient from 'react-native-linear-gradient';
import Slider from './Slider';
import {AnimatedToast} from '../components/Toast';
import {useSelector} from 'react-redux';
import {
  updateQuestion1,
  updateQuestion2,
  updateQuestion3,
  updateQuestion4,
} from '../helpers/store/Slices/infoSlice';

const QuestionScreen = ({setIsVisible, claimTicket}) => {
  const questionState = useSelector(state => state.info);

  const data = [
    {
      questionNo: 1,
      title: 'Company/Organization:',
      type: 'input',
      totalQuestion: 4,
      onChange: updateQuestion1,
      state: questionState[1],
    },
    {
      questionNo: 2,
      title: 'Job Title:',
      type: 'input',
      totalQuestion: 4,
      onChange: updateQuestion2,
      state: questionState[2],
    },
    {
      questionNo: 3,
      title: 'Are you a current student?:',
      type: 'single/seletive',
      totalQuestion: 4,
      onChange: updateQuestion3,
      state: questionState[3],
      options: [
        {
          label: 'Yes',
          value: 'yes',
        },
        {
          label: 'No',
          value: 'no',
        },
      ],
    },
    {
      questionNo: 4,
      title: 'Where did you hear about this event?:',
      type: 'multi/seletive',
      totalQuestion: 4,
      onChange: updateQuestion4,
      state: questionState[4],
      options: [
        {
          label: 'LinkedIn',
          value: 'linkedIn',
        },

        {
          label: 'Instagram',
          value: 'instagram',
        },
        {
          label: 'Twitter',
          value: 'twitter',
        },
        {
          label: 'Facebook',
          value: 'facebook',
        },
      ],
    },
  ];

  return (
    <PageWrapper>
      <LinearGradient
        useAngle={true}
        angle={135}
        angleCenter={{x: 0.5, y: 0.5}}
        colors={['#D5CFFF', '#F3EFFF']}
        style={{
          flexGrow: 1,
        }}>
        <Slider
          itemList={data}
          lastStagefn={() => {
            setIsVisible(() => false);
            setTimeout(() => {
              claimTicket();
            }, 1000);
          }}
        />
      </LinearGradient>
    </PageWrapper>
  );
};

export default QuestionScreen;
