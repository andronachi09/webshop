import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import "./authnetication.style.scss";

const Authentication = () => {
  return (
    <div>
      <h1>Sign in page!</h1>
      <div className="forms-container">
        <SignInForm />
        <SignUpForm />
      </div>
    </div>
  );
};

export default Authentication;
