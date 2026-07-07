"use client";

import {Check} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";

import logo from '../../../public/assets/doclogo.png'
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { Icon } from "@iconify/react";
import Link from "next/link";

const RegisterPage = () => {
  const onSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const {data, error} = await authClient.signUp.email({
        name: user.name,
        image: user.image,
        email: user.email,
        password: user.password,
    })
    if(data){
        redirect('/');
    }
    else if(err){
        
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-[70vh]">
        <div className="flex items-center gap-3 my-10">
            <Image
            src={logo}
            alt='logo'
            w='20'
            className="w-10"
            ></Image>
            <h1 className="text-2xl font-semibold">Login</h1>
        </div>
    <Form
      className="flex w-96 flex-col gap-4"
      render={(props) => <form {...props} data-custom="foo" />}
      onSubmit={onSubmit}
    >

      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }

          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="john@example.com" />
        <FieldError />
      </TextField>

      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }

          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>
          Must be at least 8 characters with 1 uppercase and 1 number
        </Description>
        <FieldError />
      </TextField>

      <div className="flex gap-2 justify-center">
        <Button className='w-full' type="submit">
          <Check />
          Log in
        </Button>
        <Button className='w-full' type="reset" variant="secondary">
          Reset
        </Button>
      </div>
      <Button
                className="w-full"
                variant="tertiary"
                onClick={async () => {
                  const data = await authClient.signIn.social({
                    provider: "google",
                  });
                }}
              >
                <Icon  icon="devicon:google" />
                Sign In with Google
              </Button>
              <p className="text-center">
                {`or haven't account`}{" "}
                <span className="text-cyan-500 cursor-pointer">
                  <Link href="/register">Register</Link>
                </span>
              </p>
    </Form>
    </div>
  );
}

export default RegisterPage;