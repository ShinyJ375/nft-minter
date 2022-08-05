import AuthPage from "../components/AuthPage";
import UploadForm from "../components/UploadForm";

export default function Home() {
  const {
    isAuthenticated
    authenticate
  } = useMoralis()

  const metamaskAuth = async () => {
    try {
      await authenticate(
        signingMessage:"Auth to start lazy minting your NFTs"
      )
    } catch (error) {
      console.log(error)
    }
  }



  if(!isAuthenticated) {
    return(
      <AuthPage metamaskAuth={metamaskAuth} />      
    )
  }
  return (
    <div>
      <UploadForm />
    </div>
  )
}
