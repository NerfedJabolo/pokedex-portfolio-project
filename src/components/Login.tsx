import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { addDoc, getDocs, query, where } from 'firebase/firestore';
import { FcGoogle } from 'react-icons/fc';
import { useAppDispatch } from '../app/hooks';
import { setUserStatus } from '../app/slices/AppSlice';
import { firebaseAuth, usersRef } from '../utils/FirebaseConfig';

function Login() {
  const dispatch = useAppDispatch();
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const {
      user: { email, uid },
    } = await signInWithPopup(firebaseAuth, provider);
    if (email) {
      const firestoreQuery = query(usersRef, where('uid', '==', uid));
      const fetchedUser = await getDocs(firestoreQuery);
      if (fetchedUser.docs.length === 0) {
        await addDoc(usersRef, { uid, email });
      }
      dispatch(setUserStatus({ email }));
    }
  };
  return (
    <div className="login">
      <button className="login-btn" onClick={handleLogin}>
        <FcGoogle />
        Login with Google
      </button>
    </div>
  );
}

export default Login;
