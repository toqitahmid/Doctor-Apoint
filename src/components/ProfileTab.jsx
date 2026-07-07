'use client'
import { CalendarDays } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { Button, Modal, Surface } from "@heroui/react";
import EditUserDataForm from "./EditUserDataForm";

export default function UserProfileCard() {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const userData = {
    name: session?.user?.name,
    email: session?.user?.email,
    image: session?.user?.image,
    createdAt: session?.user?.createdAt,
  };

  const joinDate = new Date(userData.createdAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <>
      <div className="max-w-[340px] mx-auto overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-xl">
        {/* Decorative Top Banner */}
        <div className="h-24 bg-gradient-to-r from-cyan-300 to-indigo-200" />

        {/* Profile Content Body */}
        <div className="px-6 pb-6 pt-0 flex flex-col items-center text-center">
          {/* Overlapping Avatar */}
          <div className="relative -mt-12 mb-3">
            <img
              src={userData.image}
              alt={userData.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-white dark:border-zinc-900 shadow-md ring-2 ring-blue-500"
            />
          </div>

          {/* User Info */}
          <div className="flex flex-col gap-0.5">
            <h2 className="text-xl font-bold tracking-wide text-zinc-950 dark:text-zinc-50">
              {userData.name}
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {userData.email}
            </p>
          </div>

          {/* Divider */}
          <hr className="w-full my-4 border-zinc-200 dark:border-zinc-800" />

          {/* Meta Timeline Footer */}
          <div className="flex items-center gap-2 text-xs text-zinc-400 dark:text-zinc-500">
            <CalendarDays size={14} />
            <span>Joined {joinDate}</span>
          </div>
        </div>
        <div className="flex justify-center items-center m-2">
          <Modal>
            <Button className="min-w-full" variant="secondary">
              Edit Profile
            </Button>
            <Modal.Backdrop>
              <Modal.Container placement="auto">
                <Modal.Dialog className="sm:max-w-md">
                  <Modal.CloseTrigger />
                  <Modal.Body className="p-6">
                    <Surface variant="default">
                     <EditUserDataForm></EditUserDataForm>
                    </Surface>
                  </Modal.Body>
                </Modal.Dialog>
              </Modal.Container>
            </Modal.Backdrop>
          </Modal>
        </div>
      </div>
    </>
  );
}
