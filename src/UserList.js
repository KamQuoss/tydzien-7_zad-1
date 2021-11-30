import React, { useEffect, useState } from "react";
import User from "./User";
import styled from "styled-components";

const UserListContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
  flex-wrap: wrap;
`;

// https://randomuser.me/documentation#intro

export default function UserList() {
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let baseURL = "https://randomuser.me/api/",
      numberOfReasults = "results=10",
      includedFields = "inc=name,location,email,dob,picture",
      additionalInfo = "noinfo";

    fetch(`${baseURL}?${numberOfReasults}&${includedFields}&${additionalInfo}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(true);
        setIsLoading(false);
      });
  }, []);

  return (
    <UserListContainer>
      {isLoading && <p>Ładuję dane...</p>}
      {error && <p>Coś poszło nie tak, odśwież stronę</p>}
      {!isLoading &&
        users.length > 0 &&
        users.map((user, id) => (
          <User
            key={id}
            firstName={user.name.first || "Nie podane"}
            lastName={user.name.last || "Nie podane"}
            address={user.location.city}
            email={user.email}
            date={user.dob.date}
            picture={user.picture.medium}
          />
        ))}
    </UserListContainer>
  );
}
