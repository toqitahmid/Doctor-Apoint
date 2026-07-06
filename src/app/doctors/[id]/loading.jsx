import React from "react";
import { Spinner } from "@heroui/react";

export default function Loading() {
  return (
    <div className="w-full min-h-[80vh] flex justify-center items-center">
      <Spinner size="md" color="success" label="Loading doctors..." />
    </div>
  );
}
