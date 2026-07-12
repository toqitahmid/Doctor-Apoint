"use client";

import React from "react";
import Image from "next/image"; // Next.js native Image component
import { Card, Button, Chip } from "@heroui/react"; // Removed 'Image' from here
import { MapPinned } from "lucide-react";
import Link from "next/link";

export default function DoctorCard({ doctor }) {
  const currentDoctor = doctor || {
    id: "d1",
    name: "Dr. Ayesha Rahman",
    specialty: "Cardiologist",
    image: "https://i.ibb.co/doctor-demo.jpg",
    experience: "10 years",
    description:
      "Highly experienced cardiologist specializing in heart diseases, preventive care, and patient-centered treatment.",
    hospital: "Labaid Cardiac Hospital",
    location: "Dhanmondi, Dhaka",
    fee: 800,
  };

  return (
    <Card
      className="max-w-[360px] p-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md rounded-xl"
      variant="default"
    >
      {/* Wrapper layout container configured for Next.js Fill Image optimization */}
      <div className="relative w-full h-[220px] overflow-hidden rounded-lg">
        <Image
          alt={currentDoctor.name}
          src={currentDoctor.image}
          fill
          sizes="(max-width: 360px) 100vw, 360px"
          priority={true}
          className="object-cover"
        />
      </div>

      {/* HeroUI v3 Compound Header Setup */}
      <Card.Header className="px-3 pt-4 pb-1 flex-row justify-between items-start w-full gap-2">
        <div className="flex flex-col">
          <Card.Title className="font-bold text-xl text-zinc-900 dark:text-zinc-50 leading-tight">
            {currentDoctor.name}
          </Card.Title>
          <Card.Description className="text-small font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
            {currentDoctor.specialty}
          </Card.Description>
        </div>
        <Chip
          color="success"
          size="sm"
          className="shrink-0 text-xs font-medium"
        >
          {currentDoctor.experience} Exp
        </Chip>
      </Card.Header>

      {/* HeroUI v3 Compound Body Content */}
      <Card.Content className="px-3 py-2 flex flex-col gap-3">
        {/* <p className="text-small text-zinc-500 dark:text-zinc-400 line-clamp-2">
          {currentDoctor.description}
        </p> */}

        <div className="w-full space-y-1.5 text-small text-zinc-600 dark:text-zinc-300">
          <div className="flex items-center gap-2">
            <span className="text-base">🏢</span>
            <span className="font-medium line-clamp-1">
              {currentDoctor.hospital}
            </span>
          </div>
          <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400">
            <span className="text-base"><MapPinned></MapPinned></span>
            <span>{currentDoctor.location}</span>
          </div>
          <div className="flex items-center gap-2 font-semibold pt-1 text-zinc-800 dark:text-zinc-100">
            <span className="text-base">💵</span>
            <span>Fee: ৳{currentDoctor.fee}</span>
          </div>
        </div>
      </Card.Content>

      {/* Card Action Button */}
      <Card.Footer className="p-2 pt-1">
        <Link
        href={`/doctors/${currentDoctor._id}`}
        >
        <Button
          variant="outline"
          className="w-full font-medium rounded-lg shadow-sm"
        >
          View Details
        </Button>
        </Link>
      </Card.Footer>
    </Card>
  );
}
