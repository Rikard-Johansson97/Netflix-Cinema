import { SeatType } from "@/types/types";
import React, { FC, useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { useDispatch, useSelector } from "react-redux";
import { buyTicket } from "@/store/reducers";
import { RootState } from "@/store/store";

interface TicketPriceProps {
  movieId: string | string[] | undefined;
}

const TicketPrice: FC<TicketPriceProps> = ({ movieId }) => {
  const dispatch = useDispatch();
  const tickets = useSelector((state: RootState) => state.ticket);

  const [seats, setSeats] = useLocalStorage<JSX.Element[] | SeatType>(
    `seats-${movieId}`,
    []
  );
  const [selectedSeats, setSelectedSeats] = useState<SeatType[] | null>(null);

  useEffect(() => {
    setSelectedSeats(seats.filter((s: any) => s.selected === true));
  }, [seats]);

  const bookTicket = () => {
    const newSeats = seats.map((seat: SeatType) => {
      if (seat.selected === true) {
        return { ...seat, booked: true, selected: false };
      }
      return seat;
    });
    setSeats(newSeats);
    dispatch(buyTicket({ ticket: newSeats } as any));
  };

  console.log(seats);

  return (
    <div className='flex flex-col justify-between bg-lightBackground text-paragraph p-4 m-4 gap-2 lg:max-w-sm rounded-lg shadow-xl flex-1 mx-auto w-full max-w-2xl'>
      <div>
        <h3 className='text-headline text-xl font-bold'>Your Selected Seats</h3>
        <p className='text-sm mt-2'>
          <span className='text-greenText font-bold '>
            {selectedSeats?.length}
          </span>{" "}
          Seats
        </p>

        <div className='flex flex-wrap gap-2 mt-4'>
          {selectedSeats?.map((seat: SeatType) => (
            <div
              key={seat.id}
              className='w-8 h-8 bg-lightBackground flex items-center justify-center border border-greenText rounded-t-xl'>
              <span className='text-greenText'>{seat.seat}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className='flex text-headline mt-2 '>
          <p className='flex-1'>Seat</p>
          <p className='flex-1 text-center'>Quantity</p>
          <p className='flex-1 text-right'>Price</p>
        </div>
        {selectedSeats?.length ? (
          <div className='flex justify-between text-sm py-2'>
            <p className='flex-1'>Normal</p>
            <p className='flex-1 text-center'>{selectedSeats?.length}</p>
            <p className='flex-1 text-right'>
              {selectedSeats?.[0]?.price} KR st
            </p>
          </div>
        ) : (
          ""
        )}

        <div className='flex justify-between text-base border-t-2 font-bold border-greenText py-4'>
          <p className='flex-1 text-headline'>Total</p>
          <p className='flex-1 text-center'>{selectedSeats?.length}</p>
          <p className='flex-1 text-right text-headline font-bold'>
            {selectedSeats?.length
              ? selectedSeats[0]?.price * selectedSeats.length
              : "0"}
            kr
          </p>
        </div>

        <div className='flex space-x-2 justify-center'>
          <button
            onClick={() => {
              bookTicket();
            }}
            type='button'
            data-mdb-ripple='true'
            data-mdb-ripple-color='light'
            className='w-full inline-block px-6 py-2.5 bg-greenText text-headline font-bold text-sm leading-tight uppercase rounded shadow-md hover:bg-highlight hover:shadow-lg focus:bg-highlight focus:shadow-lg focus:outline-none focus:ring-0 active:bg-highlight active:shadow-lg transition duration-150 ease-in-out'>
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketPrice;
