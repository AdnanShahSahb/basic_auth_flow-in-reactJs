import { useState } from "react";
import SigningIn from "./SignIn";
import SigningUp from "./SignUp";
import classes from "./Tab.module.css";

const Tabing = () => {
  const [tabState, setTabState] = useState("signingIn");
  const moveToSignIn_tabLink = () => {
    setTabState("signingIn");
  };

  const moveToSignOut_tabLink = () => {
    setTabState("signingOut");
  };

  let toggling;

  tabState === 'signingOut' ? toggling = false : toggling = true;

  console.log(toggling);

  return (

    <div className={classes.Tabs}>
      <div className={classes.tablinkInner}>
        <button onClick={moveToSignIn_tabLink} className={toggling ? classes.tablink : classes.active}>
          Sign In
        </button>
        <button onClick={moveToSignOut_tabLink} className={toggling ? classes.active : classes.tablink}>
          Sign Up
        </button>
      </div>

      <div>
        {tabState === "signingOut" ? <SigningUp func={moveToSignIn_tabLink} /> : <SigningIn />}
      </div>
    </div>
  );
};

export default Tabing;
