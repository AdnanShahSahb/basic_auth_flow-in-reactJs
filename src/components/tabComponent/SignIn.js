import { useContext, useRef, useState } from "react";
import classess from "./signInUp.module.css";
import ContextData from "./contexting";
// import logo_img from "llama.jpg"
import { useNavigate,useLocation } from "react-router-dom";

const SigningIn = () => {

  const currLoc = useLocation()
  const goToFunc = () => {

    console.log(currLoc);
  }

  console.log(currLoc);

  const navigating = useNavigate();

  const cntxt = useContext(ContextData);

  const userN = useRef();

  const userP = useRef();

  var [errorMsgUserN, setErrorMsgUserN] = useState("");
  var [errorMsgUserP, setErrorMsgUserP] = useState("");

  // const toggling=()=>{
  //   setErrorMsg(true);
  // }

  let values = cntxt.arraying;
  console.log(values);

  const handleSubmitting = (event) => {
    event.preventDefault();

    console.log('2');

    const enteredUserN = userN.current.value;

    const enteredUserP = userP.current.value;

    for (let i = 0; i < values.length; i++) {
      // if userName is true, then userPass is checked for T nd F


      // console.log("including1"+"asdf".includes("asdf123"));
      // console.log("including2"+"asdf123".includes("asdf"));

      if (!enteredUserN.includes(values[i].userName)) {   // includes works like [asdf123].includes[asdf]-->true
        // [asdf].includes[asdf123]-->false
        setErrorMsgUserN(true);
      } else {
        setErrorMsgUserN(false);

        for (let j = 0; j < values.length; j++) {
          if (
            enteredUserN === values[j].userName &&
            enteredUserP === values[j].userPass
          ) {
            setErrorMsgUserP(false);
            alert("Welcome " + enteredUserN);

            navigating("/welcome",{state:enteredUserN})

            break; // for not checking whole array as we got what we wanted
          } else {
            setErrorMsgUserP(true);
          }
        }

        break; // for not checking whole array as we got what we wanted
      }
    }
    console.log('3');

  };

  return (
    <form className={classess.form} onSubmit={handleSubmitting}>
      <div className={classess.imgcontainer}>
        <img
          src="https://www.w3schools.com/howto/img_avatar2.png"
          alt="avatar"
          className={classess.avatar}
        />
      </div>

      <div className={classess.container}>
        <label>UserName</label>
        <input
          type="text"
          placeholder="Username"

          className={errorMsgUserN === true ? classess.unmAnim : classess.unm}
          ref={userN}
          required
        />
        <span className={classess.erroring}>
          {errorMsgUserN === true ? "UserName Invalid" : " "}
        </span>

        <br />

        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          className={errorMsgUserP === true ? classess.pswdAnim : classess.pswd}
          ref={userP}
          required
        />
        <span className={classess.erroring}>
          {errorMsgUserP === true ? "Password Invalid" : " "}
        </span>

        <br />

        <button className={classess.btn} onClick={goToFunc}>Login</button>
      </div>
    </form>
  );
};

export default SigningIn;
