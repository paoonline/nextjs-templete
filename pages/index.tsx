import type { NextPage } from 'next'

import Link from 'next/link'
import { useRouter } from 'next/router'
import { selectAuthState, setAuthState } from "../store/authSlice";
import { useDispatch, useSelector } from "react-redux";

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  return {
    props: {
      test: 'test'
    }
  }
}

const Home: NextPage = ({test}) => {
  const authState = useSelector(selectAuthState);
  const dispatch = useDispatch();
  const router = useRouter()
  return (
    <>
    <Link href={`/about`}>
      <a>about</a>
    </Link>
    <button type="button" onClick={() => router.push('/about')}>
      {test.toString()}
    </button>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <div>{authState ? "Logged in" : "Not Logged In"}</div>
    <button
        onClick={() =>
          authState
            ? dispatch(setAuthState(false))
            : dispatch(setAuthState(true))
        }
      >
        {authState ? "Logout" : "LogIn"}
      </button>
    </>
  )
}

export default Home
