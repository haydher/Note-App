import { useState, useEffect } from "react";

// get current date and time for new note
export const getCurrDate = () => {
 const months = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
 const date = new Date();

 // get time
 let hours = date.getHours();
 let minutes = date.getMinutes();
 const ampm = hours >= 12 ? "pm" : "am";
 hours = hours % 12;
 hours = hours ? hours : 12;
 minutes = minutes < 10 ? `0${minutes}` : minutes;
 const time = `${hours}:${minutes} ${ampm}`;

 return `${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()} -  ${time} `;
};

// get the top position of the main container to give fixed height
export const useGetElemHeight = (refContainer) => {
 const [height, setHeight] = useState("auto");

 // get height for the main container
 useEffect(() => {
  const ref = refContainer.current;
  if (ref === 0 || ref === undefined || ref === null) return;
  const topHeight = refContainer.current.getBoundingClientRect().top;
  const containerHeight = Math.floor(window.screen.height - topHeight - 130);
  // return containerHeight;
  setHeight(`${containerHeight}`);
 }, []);
 return height;
};

// detect if clicked outside the drop down menu, if so return true
export const useOutside = (ref) => {
 const [refState, setRefState] = useState(false);

 useEffect(() => {
  const handleClickOutside = (event) =>
   ref.current && !ref.current.contains(event.target) ? setRefState(false) : setRefState(true);

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
   document.removeEventListener("mousedown", handleClickOutside);
  };
 }, [ref, refState]);

 return refState;
};
