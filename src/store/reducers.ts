import { SeatType } from '@/types/types'
import { combineReducers, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'

// Define a type for the slice state
interface TicketState {
    tickets: SeatType[]
}

// Define the initial state using that type
const initialState: TicketState = {
  tickets: []
}

export const ticketsSlice = createSlice({
  name: 'tickets',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    buyTicket: (
        state,
        action: PayloadAction<{ ticket: SeatType[], movieId: string}>
      ) => {
        const { ticket } = action.payload;
        state.tickets.push( ...ticket ) ;
    },
    RemoveTicket: (
        state,
        action: PayloadAction<{ ticket: SeatType}>
      ) => {
      
    },
  }
})

export const { buyTicket, RemoveTicket } = ticketsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectTickets = (state: RootState) => state.ticket.tickets

export default combineReducers({
    ticket: ticketsSlice.reducer,
  });
  