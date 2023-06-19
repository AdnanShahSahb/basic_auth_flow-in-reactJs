import { useContext, useRef, useState } from "react";
import classess from "./signInUp.module.css";
import ContextData from "./contexting";

const SigningUp = (props) => {
  const cntxtUp = useContext(ContextData);

  const userN = useRef();

  const userP = useRef();

  const reUserP = useRef();

  const [err, setErr] = useState(false);

  const handleSubmitting = (event) => {
    event.preventDefault();

    const enteredUserName = userN.current.value;
    const enteredUserPassword = userP.current.value;
    const reEnteredPassword = reUserP.current.value;

    const storedData = cntxtUp.arraying;

    var alreadyCreated = false;

    for (let i = 0; i < storedData.length; i++) {
      if (storedData[i].userName.includes(enteredUserName)) {
        alreadyCreated = true;
        break;
      } else alreadyCreated = false;
    }

    if (alreadyCreated) {
      alert("UserName already exists");
    } else {
      console.log("yesAllowed");
      if (enteredUserPassword !== reEnteredPassword) {
        console.log("passwordNot Matched");
        setErr(true);
      } else {
        setErr(false);
        cntxtUp.updatingArraying(enteredUserName, enteredUserPassword);
        alert("acc created");
        props.func();
      }
    }
  };

  // const handleAlready=()=>{
  //   props.func();
  // }

  const shaking = () => {
    setErr(false);
  };

  return (
    <form className={classess.form} onSubmit={handleSubmitting}>
      <div className={classess.alreadyD}>
        <label className={classess.alreadyL}>
          Already having an account? <i onClick={props.func}>Click here to Sign In</i>
        </label>
      </div>

      <div className={classess.container}>
        <label>UserName</label>
        <input
          type="text"
          placeholder="Username"
          className={classess.unm}
          ref={userN}
          required
        />
        <br />
        <br />

        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          className={err ? classess.pswdAnim : classess.pswd}
          ref={userP}
          required
        />
        <br />
        <br />

        <label>Re Enter Password</label>
        <input
          type="password"
          placeholder="Password"
          className={err ? classess.pswdAnim : classess.pswd}
          ref={reUserP}
          required
        />
        <span className={classess.erroring}>
          {err === true ? "Password Not Matched" : " "}
        </span>
        <br />
        

        <button className={classess.btn} onClick={shaking}>
          SignUp
        </button>
      </div>
    </form>
  );
};

export default SigningUp;
