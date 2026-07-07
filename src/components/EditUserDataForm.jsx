"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, TextField } from "@heroui/react";
import { useState } from "react";

const EditUserDataForm = () => {
  const { data: session } = authClient.useSession();
  const [name, setName] = useState(session?.user?.name);
  const [email, setEmail] = useState(session?.user?.email);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (name !== session?.user?.name) {
      const { error } = await authClient.updateUser({ name });
      if (error) {
        console.log(error);
      } else {
      }
    }
    if (email !== session?.user?.email) {
      const { error } = await authClient.changeEmail({
        newEmail: email,
        callbackURL: "/dashboard",
      });
      if (error) {
        console.log(error);
      } else {
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleOnSubmit} className="flex flex-col gap-4">
        <TextField className="w-full" name="name" type="text">
          <Label>Name</Label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required="ture"
            placeholder="Enter your name"
          />
        </TextField>
        <TextField className="w-full" name="email" type="email">
          <Label>Email</Label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required="ture"
            placeholder="Enter your email"
          />
        </TextField>
        <Modal.Footer>
          <Button slot="close" variant="secondary">
            Cancel
          </Button>
          <Button type="submit">Done</Button>
        </Modal.Footer>
      </form>
    </div>
  );
};

export default EditUserDataForm;
