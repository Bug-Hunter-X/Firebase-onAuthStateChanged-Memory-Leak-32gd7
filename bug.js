const unsubscribe = onAuthStateChanged(auth, (user) => { if (user) { // User is signed in, see docs for a list of available properties https://firebase.google.com/docs/reference/js/firebase.User // ... } else { // User is signed out // ... } });
// unsubscribe is not called anywhere, leading to a potential memory leak
// unsubscribe(); should be called when the component unmounts