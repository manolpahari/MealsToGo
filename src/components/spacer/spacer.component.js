import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 2,
};

const positionVariant = {
  top: "margin-top",
  left: "margin-left",
  bottom: "margin-bottom",
  right: "margin-right",
};

const getVarient = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];
  return `${property}:${value}`;
};

export const Spacer = styled.View`
  ${({ position, size, theme }) => {
    return getVarient(position, size, theme);
  }}
`;
Spacer.defaultProps = {
  position: "top",
  size: "small",
};
