import {createSlice} from '@reduxjs/toolkit';

const initialTicketState = {
  status: '', // status -> enum("initalState","loading","completed")
  myTicket: {},
};

const createTicketReducer = {
  updateMyStatus: (state, action) => {
    state.status = action.payload;
  },

  updateMyTicket: (state, action) => {
    state.status = action.payload;
  },

  resetMyTicketState: () => {
    return initialTicketState;
  },
};
const createTicketSlice = createSlice({
  name: 'Ticket',
  initialState: initialTicketState,
  reducers: createTicketReducer,
});

export default createTicketSlice.reducer;

export const {updateMyStatus, updateMyTicket, resetMyTicketState} =
  createTicketSlice.actions;
