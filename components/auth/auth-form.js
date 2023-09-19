"use client";
import { useState, useRef } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import Header from "../headerSection/Header";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
async function createUser(email, password) {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email: email, password: password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  } else {
    console.log("createuser was called successfully!");
  }
  return data;
}

function AuthForm() {
  const [email, setEmail] = useState(""); // State for email input
  const [password, setPassword] = useState(""); // State for password input
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();

  async function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
    // Reset the input fields when switching auth mode
    setEmail("");
    setPassword("");
  }
  async function submitHandler(event) {
    event.preventDefault();
    const enteredEmail = email;
    const enteredPassword = password;
    //optional: Add validation
    if (isLogin) {
      //isLogin is true means that we are now in the 'logging in' phase. Implement the log in logic here!
      const result = await signIn("credentials", {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      });
      // console.log(result);
      // Navigate away if we already have the user login session

      if (!result.error) {
        router.replace("/menu");
      }
    } else {
      // isLogin is false means that we need to create a user. Implemen the Sign up logic!
      try {
        const result = await createUser(enteredEmail, enteredPassword);
        console.log(result);
      } catch (error) {
        console.log("The error found during login is: " + error.message);
        if (error.message === "User exists already!") {
          toast.success("You already have a Sushier Account. Let's log in!");
          console.log("You already have a Sushier Account. Let's log in!");
          switchAuthModeHandler();
        }
      }
      // After Create user, automatically log created user in
      const result = await signIn("credentials", {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      });
      // console.log(result);
      // Navigate away if we already have the user login session
      if (!result.error) {
        router.replace("/menu");
      }
    }
  }

  return (
    <div className=" flex flex-row justify-center items-center">
      <section className="items-start bg-[#F7F7F7] flex flex-col font-notoJP tracking-wide py-20 px-32 mt-10 rounded-lg">
        <div className="flex flex-row w-full justify-between items-center">
          <div className="flex flex-col">
            <div className="text-lg tracking-wide text-lighterOrange font-semibold">
              Welcome to
            </div>
            <div className="text-4xl text-lightOrange font-bold -ml-0.5">
              Sushier App
            </div>
            <div className="mt-2 tracking-wider text-lighterOrange text-base">
              {isLogin ? "Let's log in! 🎉" : "Let's sign up! 😎"}
            </div>
          </div>
          <div className="w-16 h-16">
            <Image
              src="/logo/favicon.png"
              alt="Sushier Favicon"
              width={200}
              height={200}
            />
          </div>
        </div>

        <form
          onSubmit={submitHandler}
          className="flex flex-col items-start mt-6"
        >
          <div className="py-2 text-lighterOrange">
            <label htmlFor="email" className="text-lg">
              Email
            </label>
          </div>
          <div className="bg-stone-100 border py-1 px-1 rounded-lg">
            <input
              type="email"
              id="email"
              required
              value={email} // Use the email state variable
              onChange={(e) => setEmail(e.target.value)}
              className="w-96 py-2"
            />
          </div>

          <div className="py-2 text-lighterOrange">
            <label htmlFor="password" className="text-lg">
              Password
            </label>
          </div>
          <div className="bg-stone-100 border py-1 px-1 rounded-lg">
            <input
              type="password"
              id="password"
              required
              value={password} // Use the password state variable
              onChange={(e) => setPassword(e.target.value)}
              className="w-96 py-2"
            />
          </div>

          <button className="mt-6 w-full bg-lightOrange text-white py-3 rounded-2xl tracking-wider font-semibold">
            {isLogin ? "LOGIN" : "CREATE ACCOUNT"}
          </button>
          <div className="w-full flex justify-center">
            <button
              type="button"
              onClick={switchAuthModeHandler}
              className="text-lightOrange w-full py-3 rounded-2xl"
            >
              {isLogin ? (
                <div>
                  Don't have an account?{" "}
                  <span className=" underline underline-offset-2">
                    Create an account
                  </span>
                </div>
              ) : (
                <div>
                  Have an account?{" "}
                  <span className=" underline underline-offset-2">
                    Login with existing account
                  </span>
                </div>
              )}
            </button>
          </div>
        </form>
        <div className="w-full border-b-2 border-b-orange-400"></div>
        {/* <button onClick={() => signIn("google")}>Sign in with Google</button> */}
        <button
          className="mt-6 w-full border border-lightOrange text-lighterOrange py-3 rounded-2xl tracking-wider font-semibold flex flex-row items-center justify-center gap-4"
          onClick={() => signIn("google")}
        >
          <FcGoogle size={25} />
          <div className="tracking-wide text-lg">Sign in with Google</div>
        </button>
      </section>
    </div>
  );
}

export default AuthForm;
