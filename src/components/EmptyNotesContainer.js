import React from "react";
import { EmptyNotesContainerStyle } from "./styles/EmptyNotesContainer.style";

const EmptyNotesContainer = () => {
 return (
  <EmptyNotesContainerStyle>
   <h1>You don't have any notes yet</h1>
   <button>Click here to make your first note</button>
  </EmptyNotesContainerStyle>
 );
};

export default EmptyNotesContainer;
