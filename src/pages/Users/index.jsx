import React, { useState, useEffect } from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import { api } from "../../API/index";
import Card from "../../components/Card/Card";

const index = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    api.getPosts().then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div>
      <ul className="users__list list-unstyled my-2 w-100">
        <li className="users__link text-center">
          <NavLink
            className="px-3 py-2 bg-primary text-light rounded-pill fs-5"
            to="/users/user"
          >
            USER
          </NavLink>
        </li>
      </ul>
      <ul className="users list-unstyled mt-5">
        {users.map((user) => {
          return <Link to={`/users/user/${user.id}`}>
            <Card key={user.id} title={user.title} />
          </Link> ;
        })}
      </ul>
    </div>
  );
};

export default index;
