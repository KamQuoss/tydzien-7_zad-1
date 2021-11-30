import React from "react";
import styled from "styled-components";

const UserContainer = styled.div`
  text-align: center;
  background: rgba(255, 250, 250, 0.3);
  border: 1px solid #fff;
  border-bottom-width: 4px;
  border-right-width: 6px;
  margin: 10px;
  min-width: 300px;
  max-width: 400px;
  position: relative;
`;

const Hero = styled.div`
  position: absolute;
  clip-path: circle(50% at 36% 35%);
`;

export default function User({
  firstName,
  lastName,
  address,
  email,
  date,
  picture
}) {
  return (
    <UserContainer>
      <Hero>
        <img alt="imie i nazwisko usera" src={picture} />
      </Hero>
      <p>Imię: {firstName} </p>
      <p>Nazwisko: {lastName}</p>
      <p>Adres: {address}</p>
      <p>e-mail: {email} </p>
      <p>Data: {date} </p>
    </UserContainer>
  );
}
