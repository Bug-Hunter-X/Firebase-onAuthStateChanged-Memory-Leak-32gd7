# Firebase onAuthStateChanged Memory Leak
This repository demonstrates a common error when using Firebase's `onAuthStateChanged` method: forgetting to unsubscribe.  This can lead to memory leaks, especially in React components.
The `bug.js` file shows the faulty code, while `bugSolution.js` provides the corrected version.
This is a crucial point for developers to avoid when using Firebase authentication.