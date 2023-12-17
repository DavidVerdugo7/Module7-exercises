import { useState } from "react";
import Profile from "./Profile";

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "John" },
];

export default function NetFlux() {
  const [currentUser, setCurrentUser] = useState({ name: "Alice", id: 1 });

  return (
    <div
      className="borderBox"
      style={{ backgroundColor: " #ffffba" }}
    >
      <p> Welcome to NETFLUX</p>

      <span>Current connected user: </span>
      <select
        value={currentUser.name}
        onChange={(e) => {
          const value = e.target.value;
          const user = users.filter((user) => user.name === value)[0];
          const index = user.id;
          setCurrentUser({ name: e.target.value, id: index });
        }}
      >
        {users.map((user) => (
          <option key={user.id}>{user.name}</option>
        ))}
      </select>

      <Profile currentUser={currentUser} />
    </div>
  );
}
