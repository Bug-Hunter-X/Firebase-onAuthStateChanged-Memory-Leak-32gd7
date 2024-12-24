import { onAuthStateChanged, auth } from './firebase'; // ... other imports

function MyComponent() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe(); // Unsubscribe when component unmounts
  }, []);

  // ... rest of the component
}