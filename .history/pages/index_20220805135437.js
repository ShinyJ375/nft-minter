import AuthPage from "../components/AuthPage";
import UploadForm from "../components/UploadForm";

export default function Home() {
  const {
    isAuthenticated
    authenticate
  } = useMoralis()

  const metamaskAuth = async () => {
    try {}
  }



  if(!isAuthenticated) {
    return(
      <AuthPage />      
    )
  }
  return (
    <div>
      <UploadForm />
    </div>
  )
}
