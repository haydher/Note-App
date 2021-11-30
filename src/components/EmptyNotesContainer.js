import React from "react";
import { useDispatch } from "react-redux";
import { newNote } from "../redux/newNoteBtnReducer";
import { EmptyNotesContainerStyle } from "./styles/EmptyNotesContainer.style";

const EmptyNotesContainer = ({ topHeight }) => {
 const dispatch = useDispatch();

 return (
  <EmptyNotesContainerStyle topHeight={topHeight}>
   <h1>You don't have any notes yet</h1>
   <button className="trash newNote" onClick={() => dispatch(newNote())}>
    Make new note
   </button>
  </EmptyNotesContainerStyle>
 );
};

export default EmptyNotesContainer;
