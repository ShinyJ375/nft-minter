import AuthPage from "../components/AuthPage";
import UploadForm from "../components/UploadForm";

export default function Home() {
  const {
    isAuthenticated
  } = useMoralis()



  if(!isAuthenticated)
  return (
    <div>
      {/* <AuthPage /> */}
      <UploadForm />
    </div>
  )
}
