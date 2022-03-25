

import {
  Container,
  EditInput,
  Frame,
  Sign,
  SignInButton,
} from "../styles/index";

import { CreateAccount } from "../styles/signup";

export default function signUp() {

  
  return (
    <Container>
      <Sign>
        <h1>The first step to apply</h1>
        <span>Create your account</span>
        <CreateAccount>
          <div>
            <label>Name *</label>
            <EditInput type="text" placeholder="First name" />
          </div>
          <div>
            <label>Lastname *</label>
            <EditInput type="text" placeholder="Lastname" />
          </div>
          <div>
            <label>E-mail *</label>
            <EditInput type="email" placeholder="email@email.com" />
            <p>
              Tip: Register your best e-mail. We will send you a confirmation
              link.
            </p>
          </div>
          <div>
            <label>Confirm your e-mail address *</label>
            <EditInput type="email" placeholder="email@email.com" />
          </div>
          <div>
            <label>Password *</label>
            <EditInput type="password" placeholder="Password" />
          </div>
          <SignInButton>Sign Up</SignInButton>    
        </CreateAccount>
      </Sign>
      <Frame />
    </Container>
  );
}

