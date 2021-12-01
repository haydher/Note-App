import { db, googleProvider } from "./Firebase";
import { auth } from "./Firebase";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

export const useRealTime = () => {
 const isMounted = useRef(true);
 const { userState } = useSelector((state) => state.userState);
 const [tempData, setTempData] = useState();

 const ref = userState && db.collection("users").doc(userState).collection("notes");
 const readData = () => {
  ref.orderBy("date", "desc").onSnapshot((querySnapshot) => {
   const data = [];
   querySnapshot.forEach((doc) => {
    data.push(doc.data());
   });
   isMounted.current && setTempData(data);
  });
 };

 useEffect(() => {
  readData();

  return () => (isMounted.current = false);
 }, []);

 return tempData;
};

export const addNoteToDb = (uid, noteData, uuid) => {
 //
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
   console.error("Error getting document:", error);
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

export const deleteData = (uid, event, noteData, type) => {
 event.stopPropagation();

 const docRef = db.collection("users").doc(uid).collection("notes").doc(noteData.id);

 docRef
  .set({ ...noteData, trash: type === "delete" ? true : false })
  .then(() => {
   console.log("Edited doc, trashed");
  })
  .catch((error) => {
   console.error("Error editing document: ", error);
  });
};

export const emptyTrash = (uid) => {
 const docRef = db.collection("users").doc(uid).collection("notes");
 const query = docRef.where("trash", "==", true);
 query
  .get()
  .then((querySnapshot) => {
   querySnapshot.forEach((doc) => {
    docRef.doc(doc.id).set(
     {
      permDelete: true,
     },
     { merge: true }
    );
   });
  })
  .catch((error) => {
   console.log("Error deleting documents: ", error);
  });
};

export const starData = (uid, event, noteData) => {
 event.stopPropagation();

 const docRef = db.collection("users").doc(uid).collection("notes").doc(noteData.id);
 docRef
  .set({ ...noteData, stared: noteData.stared === true ? false : true })
  .then(() => {})
  .catch((error) => {
   console.error("Error editing document: ", error);
  });
};

// Authentication

export const register = (firstName, lastName, email, password, setRes) => {
 console.log("firstName", firstName);
 console.log("lastName", lastName);
 console.log("email", email);
 console.log("password", password);

 auth
  .createUserWithEmailAndPassword(email, password)
  .then((res) => {
   updateUserData(firstName, lastName, res.user);
  })
  .catch((err) => {
   setRes({
    status: 400,
    message:
     err.code === "auth/wrong-password" || err.code === "auth/user-not-found"
      ? "Email or password didn't match"
      : err.code === "auth/email-already-in-use"
      ? "Email already in use"
      : "Unknown error, please try again later",
   });
  });
};

export const login = (email, password, setRes) => {
 console.log("email", email);
 console.log("password", password);

 auth
  .signInWithEmailAndPassword(email, password)
  .then((res) => {
   updateUserData(false, false, res.user);
  })
  .catch((err) => {
   setRes({
    status: 400,
    message:
     err.code === "auth/wrong-password" || err.code === "auth/user-not-found"
      ? "Email or password didn't match"
      : "Unknown error, please try again later",
   });
  });
};

export const loginWithGoogle = () => {
 googleProvider.setCustomParameters({
  prompt: "select_account",
 });

 auth
  .signInWithPopup(googleProvider)
  .then((result) => {
   const credential = result.credential;
   // This gives you a Google Access Token. You can use it to access the Google API.
   const token = credential.accessToken;
   // The signed-in user info.
   const user = result.user;

   updateUserData(false, false, user);
  })
  .catch((error) => {
   // Handle Errors here.
   const errorCode = error.code;
   const errorMessage = error.message;
   // The email of the user's account used.
   const email = error.email;
   // The firebase.auth.AuthCredential type that was used.
   const credential = error.credential;
  });
};

export const logout = () => {
 auth.signOut();
};

const updateUserData = (firstName, lastName, user) => {
 db
  .collection("users")
  .doc(user.uid)
  .set({
   userId: `${user.uid}`,
   email: `${user.email}`,
   displayName: user.displayName ? user.displayName : null,
   firstName: firstName && firstName,
   lastName: lastName && lastName,
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
   console.error("Error writing  document");
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
