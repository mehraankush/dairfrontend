import LeftSection from './LeftSection';
import LoginForm from './LoginForm';
import "@/Styles/LoginPage.scss"

const LoginMain = () => {

  return (
    <div className="h-screen flex">
      <div className='loginbackground flex align-items-center justify-content-center'>
        <LeftSection/>
      </div>

       <div>
          <LoginForm />
      </div>

    </div>
  );
};

export default LoginMain;
