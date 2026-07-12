'use client'

import { useState } from "react";
import AppointmentCard from "./AppointmentCard";

const AppointmentList = ({ initialAppointments }) => {


  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-3 my-3">
      {initialAppointments.map((appointment) => (
        <AppointmentCard
          key={appointment._id}
          appointment={appointment}
        />
      ))}
    </div>
  );
};

export default AppointmentList;