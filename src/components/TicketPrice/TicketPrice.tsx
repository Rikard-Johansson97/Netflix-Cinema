import React, { FC } from "react";

interface TicketPriceProps {
  movieId: string;
}

const TicketPrice: FC<TicketPriceProps> = ({}) => {
  return (
    <div className='flex flex-col justify-between bg-lightBackground text-paragraph p-4 m-4 gap-2 lg:max-w-sm rounded-lg shadow-xl flex-1 mx-auto w-full'>
      <div>
        <h3 className='text-headline text-xl font-bold'>Your Selected Seats</h3>
        <p className='text-sm mt-2'>
          <span className='text-greenText font-bold '>3</span> Seats
        </p>
        <div className='flex flex-wrap gap-2 mt-4'>
          <div className='w-8 h-8 bg-lightBackground flex items-center justify-center border border-greenText rounded-t-xl'>
            <span className='text-greenText'>22</span>
          </div>
          <div className='w-8 h-8 bg-lightBackground flex items-center justify-center border border-greenText rounded-t-xl'>
            <span className='text-greenText'>23</span>
          </div>
          <div className='w-8 h-8 bg-lightBackground flex items-center justify-center border border-greenText rounded-t-xl'>
            <span className='text-greenText'>24</span>
          </div>
        </div>
      </div>
      <div>
        <div className='flex text-headline mt-2 '>
          <p className='flex-1'>Seat</p>
          <p className='flex-1 text-center'>Quantity</p>
          <p className='flex-1 text-right'>Price</p>
        </div>
        <div className='flex justify-between text-sm py-2'>
          <p className='flex-1'>Normal</p>
          <p className='flex-1 text-center'>3</p>
          <p className='flex-1 text-right'>100 kr</p>
        </div>
        <div className='flex justify-between text-base border-t-2 font-bold border-greenText py-4'>
          <p className='flex-1 text-headline'>Total</p>
          <p className='flex-1 text-center'>3</p>
          <p className='flex-1 text-right'>100 kr</p>
        </div>

        <div className='flex space-x-2 justify-center'>
          <button
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
