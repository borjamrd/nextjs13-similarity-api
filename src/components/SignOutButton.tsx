"use client";
import { signIn, signOut } from "next-auth/react";
import { FC, useState } from "react";
import Button from "./ui/Button";
import { toast } from "./ui/Toast";

interface SignInOutButtonProps {}

const SignInOutButton: FC<SignInOutButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signUserOut = async () => {
    setIsLoading(true);
    try {
      await signOut();
    } catch (error) {
      toast({
        title: "Error signing in",
        message: "Please trye again later",
        type: "error",
      });
    }
  };

  return (
    <Button onClick={signUserOut} isLoading={isLoading}>
      Sign out
    </Button>
  );
};

export default SignInOutButton;
