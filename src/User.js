import React from "react";
import styled from "styled-components";
import moment from "moment";

const UserContainer = styled.div`
  text-align: center;
  background: rgba(255, 250, 250, 0.3);
  border: 1px solid #fff;
  border-bottom-width: 4px;
  border-right-width: 6px;
  margin: 10px;
  width: 400px;
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

const Hero = styled.img`
  outline: 1px solid #fff;
  object-fit: cover;
`;
const Info = styled.div`
  padding: 80px 10px 10px 10px;
  text-align: left;
  line-height: 1.6;
`;
const Name = styled.p`
  margin: 6px 0px;
  padding-bottom: 3px;
  font-size: 135%;
  border-bottom: 1px solid white;
`;
const Address = styled.p`
  font-size: 80%;
  margin: 0px;
`;
const Mail = styled.p`
  margin: 0px;
  margin-bottom: 6px;
`;
const Date = styled.p`
  margin: 0;
  font-size: 70%;
  text-align: right;
`;

export default function User({
  firstName,
  lastName,
  street,
  city,
  state,
  country,
  postcode,
  email,
  date,
  picture
}) {
  moment.locale();
  return (
    <UserContainer>
      <Hero alt="imie i nazwisko usera" src={picture} />
      <Info>
        <Name>
          {firstName} {lastName}
        </Name>
        <Mail>{email} </Mail>
        <Address>
          {street.name} {street.number}
          <br />
          {postcode} {city} {state}
          <br />
          {country}
        </Address>
        <Date>{moment(date).format("LL")} </Date>
      </Info>
    </UserContainer>
  );
}
