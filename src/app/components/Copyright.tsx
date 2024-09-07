import React, { FC } from 'react';

interface CopyRightProps {
  textcolor: any;
}

const CopyRight: FC<CopyRightProps> = ({textcolor }) => {
  return (
    <div>
        <p className='text-center '>© Copyright 2024 ItBringsArt / Info@Itbringsart.com</p>
    </div>
  );
};

export default CopyRight;