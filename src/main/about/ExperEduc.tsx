import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

type ExperEducPropsType = {
  // title: string
  // img: string
  year: string;
  workPlace: string;
  text: string;
};

export const ExperEduc: FC<ExperEducPropsType> = (props) => {
  return (
    <Container>
      <div>
        <FontAwesomeIcon icon={faCalendarAlt} />
        {props.year}
      </div>
      <div>{props.workPlace}</div>
      <div>{props.text}</div>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 20px;
`;
