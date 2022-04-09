import React from 'react';
import useSWR from 'swr';

const User = () => {
  const { data } = useSWR('https://randomuser.me/api/');
  /*  console.log(data.results[0]); */
  const { name, email } = data.results[0];
  console.log(name, email);

  return (
    <div>
      <p>{name.first}</p>
      <p>{email}</p>
    </div>
  );
};

export default User;
