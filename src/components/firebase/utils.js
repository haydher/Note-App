import { db } from "./Firebase";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateFireStoreData } from "../../redux/fireStoreDataReducer";

export const useRealTime = () => {
 const [tempData, setTempData] = useState();

 const ref = db.collection("notes");

 // console.log("db.Timestamp", db.serverTimestamp());

 const readData = () => {
  ref.orderBy("date", "desc").onSnapshot((querySnapshot) => {
   const data = [];
   querySnapshot.forEach((doc) => {
    data.push(doc.data());
   });
   setTempData(data);
  });
 };

 useEffect(() => {
  readData();
 }, []);

 return tempData;
};

export const addNoteToDb = (noteData, uuid) => {
 const docRef = db.collection("notes").doc(uuid);
 docRef
  .get()
  .then((doc) => {
   if (doc.exists) {
    console.log("Document data:", doc.data());
    writeData(noteData, uuid);
   } else {
    console.log("No such document!");
    writeData(noteData, uuid);
   }
  })
  .catch((error) => {
   console.log("Error getting document:", error);
  });
};

export const writeData = (noteData, uuid) => {
 db
  .collection("notes")
  .doc(uuid)
  .set(noteData)
  .then(() => {
   console.log("Added doc");
  })
  .catch((error) => {
   console.error("Error writing document: ", error);
  });
};

export const deleteData = (event, noteData) => {
 console.log(noteData.title, noteData.id);
 event.stopPropagation();
 db
  .collection("notes")
  .doc(noteData.id)
  .set({ ...noteData, trash: true })
  .then(() => {
   console.log("Edited doc, trashed");
  })
  .catch((error) => {
   console.error("Error editing document: ", error);
  });
};
export const starData = (event, noteData) => {
 event.stopPropagation();
 db
  .collection("notes")
  .doc(noteData.id)
  .set({ ...noteData, stared: noteData.stared === true ? false : true })
  .then(() => {
   console.log("Stared doc, trashed");
  })
  .catch((error) => {
   console.error("Error editing document: ", error);
  });
};
// export const useReadDatabase = () => {
//  const [tempData, setTempData] = useState();
//  const dispatch = useDispatch();

//  const readData = () => {
//   const data = [];
//   db
//    .collection("notes")
//    .get()
//    .then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//      data.push(doc.data());
//     });
//     setTempData(data);
//    });
//  };

//  useEffect(() => {
//   readData();
//  }, []);

//  useEffect(() => {
//   console.log(tempData);
//   dispatch(updateFireStoreData(tempData));
//  }, [tempData]);
// };
