"use client";
import AuthForm from "@/components/auth/auth-form";
import React from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";
import { getSession } from "next-auth/react";

const SignUpPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace("/");
      } else {
        setIsLoading(false);
      }
    });
  }, []);
  // if (isLoading) {
  //   return <p className="flex justify-center items-center">Loading...</p>;
  // }
  return (
    <div>
      <AuthForm />
    </div>
  );
};

export default SignUpPage;
