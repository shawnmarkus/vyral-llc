import {combineReducers, configureStore} from '@reduxjs/toolkit';
import ApiSlice from '../apis/api';
import InfoReducer from './Slices/infoSlice';
import TicketReducer from './Slices/ticketSlice';
const rootReducer = combineReducers({
  [ApiSlice.reducerPath]: ApiSlice.reducer,
  myTicket: TicketReducer,
  info: InfoReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(ApiSlice.middleware);
  },
});

export default store;
