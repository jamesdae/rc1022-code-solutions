import React from 'react';

function User(props) {
  const emailHref = `mailto:${props.user.email}`;
  return (
    <li>
      <h3>{ props.user.name }</h3>
      <h4>{ props.user.company.name }</h4>
      <p>
        Contact:
        { ' ' }
        <a target="_blank" rel="noopener noreferrer" href={emailHref}>
          { props.user.email }
        </a>
      </p>
    </li>
  );
}

function UserList(props) {
  return (
    <ul>
      {
        props.users.map(user => {
          return <User key={user.id} user={user} />;
        })
      }
    </ul>
  );
}

export default UserList;
