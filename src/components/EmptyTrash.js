import React from "react";
import { EmptyTrashStyle } from "./styles/EmptyTrash.style";

const EmptyTrash = ({ topHeight }) => {
 return (
  <EmptyTrashStyle topHeight={topHeight}>
   <h1>Nothing to show here</h1>
  </EmptyTrashStyle>
 );
};

export default EmptyTrash;
