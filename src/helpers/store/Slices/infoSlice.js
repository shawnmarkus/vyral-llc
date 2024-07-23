import {createSlice} from '@reduxjs/toolkit';

const initialInfoState = {
  1: '',
  2: '',
  3: '',
  4: [],
};

const createInfoReducer = {
  updateQuestion1: (state, action) => {
    state[1] = action.payload;
  },

  updateQuestion2: (state, action) => {
    state[2] = action.payload;
  },

  updateQuestion3: (state, action) => {
    state[3] = action.payload;
  },

  updateQuestion4: (state, action) => {
    if (state[4].includes(action.payload)) {
      const indx = state[4].indexOf(action.payload);
      state[4].splice(indx, 1);
    } else {
      state[4].push(action.payload);
    }
  },

  resetMyInfoState: () => {
    return initialInfoState;
  },
};
const createInfoSlice = createSlice({
  name: 'Info',
  initialState: initialInfoState,
  reducers: createInfoReducer,
});

export default createInfoSlice.reducer;

export const {
  updateQuestion1,
  updateQuestion2,
  updateQuestion3,
  updateQuestion4,
  resetMyInfoState,
} = createInfoSlice.actions;
