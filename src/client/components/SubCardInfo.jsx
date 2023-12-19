import React, { useState } from 'react';
import '../styles/SubCardInfo.scss';

const SubCardInfo = ({ subscriptionName, planPrice, dueDate, members }) => {
  const [memberList, setMemberList] = useState(members);
  const [showModal, setShowModal] = useState(false);
  const [newMemberName, setNewMemberName] = useState('');
  const [newMemberEmail, setNewMemberEmail] = useState('');

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setNewMemberName('');
    setNewMemberEmail('');
  };

  const handleAddMember = () => {
    if (newMemberName && newMemberEmail) {
      setMemberList([
        ...memberList,
        { name: newMemberName, email: newMemberEmail },
      ]);
      closeModal();
    }
  };

  return (
    <div className="center-wrapper">
      <div className="subcardinfo-container">
        <div className="subscription-name">{subscriptionName}</div>
        <div className="info-containers">
          <div className="plan-price">Price: {planPrice}</div>
          <div className="due-date">Due: {dueDate}</div>
        </div>
        <div className="members-list">
          {memberList.map((member, index) => (
            <div key={index} className="member-row">
              {member.name}
            </div>
          ))}
          <div className="add-member-row" onClick={openModal}>
            +
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <input
              type="text"
              value={newMemberName}
              onChange={(e) => setNewMemberName(e.target.value)}
              placeholder="Member's name"
            />
            <input
              type="email"
              value={newMemberEmail}
              onChange={(e) => setNewMemberEmail(e.target.value)}
              placeholder="Member's email"
            />
            <button onClick={handleAddMember}>Add Member</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubCardInfo;
