import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import fbLogin from './services/fbLogin';
import googleLogin from './services/googleLogin';
import './App.css';

function App() {
  const responseFacebook = async (response) => {
    let fbResponse = await fbLogin(response.accessToken);
    console.log(fbResponse);
    console.log(response);
  };

  const responseGoogle = async (response) => {
    let googleResponse = await googleLogin(response.accessToken);
    console.log(googleResponse);
    console.log(response);
  };
  return (
    <div className="App">
      <h1>Login with Facebook & Google</h1>

      <FacebookLogin
        appId="YOUR_FACEBOOK_APP_ID"
        fields="name,email,picture"
        callback={responseFacebook}
      />
      <br />
      <br />

      <GoogleLogin
        clientId="YOUR_GOOGLE_CLIENT_ID"
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </div>
  );
}

export default App;
