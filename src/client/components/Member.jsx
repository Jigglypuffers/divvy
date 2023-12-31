import React from 'react';
import SubDash from './SubDash';
import { useDispatch, useSelector } from 'react-redux';
import { toggleHasPaid } from '../state/userSlice';

const Member = ({
  subscriptionId,
  subscriberId,
  handleSwitch,
  subscriber,
  hasPaid,
}) => {
  //still need to fetch the data frmo the databse to check if member has paid is true or false later
  //functionality sort of written still need to access frmo inital state off of fetch

  const userPay = useSelector((state) => state.userSlice.user);

  const border = hasPaid ? 'rgba(59, 179, 203, 0.758)' : 'rgba(156, 28, 83, 0.758)';
  // "Banner" that shows member's name. Goes in SubDash.jsx
  //find the member if the member has_paid is true render green, if not render red
  return (
    <div
      className="member-cards"
      style={{
        border: `1px solid ${border}`,
        boxShadow: `0 0 5px 1px ${border}`,
      }}
    >
      <div id="name">{subscriber}</div>
      <button
        id="paid"
        onClick={() => handleSwitch(subscriptionId, subscriberId)}
        style={{ border: `2px solid ${border}` }}
      ></button>
    </div>
  );
};

export default Member;
