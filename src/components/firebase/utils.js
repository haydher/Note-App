import { db } from "./Firebase";
import { auth } from "./Firebase";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateFireStoreData } from "../../redux/fireStoreDataReducer";

export const useRealTime = () => {
 //  const [userInfo, setUserInfo] = useState();

 //  useEffect(() => {
 //   auth.onAuthStateChanged((user) => {
 //    console.log("user", user);
 //    console.log("userInfo", userInfo);
 //    setUserInfo(user);
 //   });
 //  }, []);

 const { userState } = useSelector((state) => state.userState);
 console.log("userState", userState);
 const [tempData, setTempData] = useState();

 //  const ref = db.collection("notes");
 //  const ref = db.collection(uid);

 const ref = userState && db.collection("users").doc(userState).collection("notes");
 console.log("ref", ref);
 const readData = () => {
  ref.orderBy("date", "desc").onSnapshot((querySnapshot) => {
   const data = [];
   querySnapshot.forEach((doc) => {
    data.push(doc.data());
    console.log("doc.data()", doc.data());
   });
   console.log("data", data);
   setTempData(data);
  });
 };

 useEffect(() => {
  readData();
 }, []);

 return tempData;
 //  return undefined;
};

export const addNoteToDb = (uid, noteData, uuid) => {
 //
 //

 // const docRef = db.collection("notes").doc(uuid);
 const docRef = db.collection("users").doc(uid).collection("notes").doc(uuid);
 docRef
  .get()
  .then((doc) => {
   if (doc.exists) {
    console.log("Document data:", doc.data());
    writeData(docRef, noteData);
   } else {
    console.log("No such document!");
    writeData(docRef, noteData);
   }
  })
  .catch((error) => {
   console.log("Error getting document:", error);
  });
};

export const writeData = (db, noteData) => {
 db
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
   console.log("Edited doc, trashed");
  })
  .catch((error) => {
   console.error("Error editing document: ", error);
  });
};

// Authentication

export const register = (email, password) => {
 console.log("email", email.current.value);
 console.log("password", password.current.value);
 auth.createUserWithEmailAndPassword(email.current.value, password.current.value).then((res) => {
  console.log("User created", res);
  updateUserData(res.user);
 });
};

export const login = (email, password) => {
 auth
  .signInWithEmailAndPassword(email.current.value, password.current.value)
  .then((res) => {
   console.log("user logged in", res);
   updateUserData(res.user);
  })
  .catch((err) => {
   console.error("error logging in user", err);
  });
};

export const logout = () => {
 auth.signOut();
 console.log("user signed out");
};

const updateUserData = (user) => {
 db
  .collection("users")
  .doc(user.uid)
  .set({
   userId: `${user.uid}`,
   email: `${user.email}`,
   displayName: user.displayName ? user.displayName : null,
   emailVerified: user.emailVerified ? user.emailVerified : null,
   lastSignInTime: user.metadata.lastSignInTime,
   creationTime: user.metadata.creationTime,
   phoneNumber: user.phoneNumber ? user.phoneNumber : null,
   photoURL: user.photoURL ? user.photoURL : null,
  })
  .then((res) => {
   console.log("Added user doc", res);
  })
  .catch((error) => {
   console.error("Error writing user document: ", error);
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
