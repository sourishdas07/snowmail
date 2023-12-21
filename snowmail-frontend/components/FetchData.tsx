import React from 'react';

interface User {
    id: number;
    name: string;
}

const FetchData = async () => {
  const res = await fetch('http://localhost:8000/data');
  const users: User[] = await res.json();
  return (
    <>
    <h1>Users</h1>
    <ul>
        {users.map(user => <li>{user.name}</li>)}
    </ul>
    </>
  );
};

export default FetchData;