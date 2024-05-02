import React, { useState, useEffect } from "react";

const Fetch = () => {
  //   useEffect(function () {
  //     fetch("https://api.github.com/users")
  //     .then((response) =>
  //     //   console.log(response)
  //       response.json()
  //     );
  //   });
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      //   .then((json_data) => console.log(json_data))
      .then((json_data) => setUsers(json_data))
      .catch((error) => console.log(error));
  });
  return (
    <div>
      <h1>User List using Fetch</h1>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <a href={user.html_url}>{user.login}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Fetch;
