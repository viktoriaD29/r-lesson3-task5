import React from 'react';
import ReactDOM from 'react-dom'
import moment from 'moment'

const Profile = (props) => {
  const age = moment(props.user.birthDate).format('DD MMM YY');
  return (
    <div className="profile">
      <div className="profile__name">{`${props.user.firstName} ${props.user.lastName}`}</div>
      <div className="profile__birth">{`Was born ${age} in ${props.user.birthPlace}`}</div>
    </div>
  );
};

export default Profile;

/*
//вивести місяць строкой
const b = new Date('1991-01-17T11:11:11.819Z').toLocaleString('eng', {
  month: 'short',
});

console.log(b)*/