import AppointmentCard from '@/components/AppointmentCard';
import React from 'react';
import { getAllAppointments } from '../lib/actions';

const page = async() => {
    const appointments = await getAllAppointments();
    console.log(appointments);
    return (
      <div className="lg:w-9/12 md:w-10/12 w-11/12 mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-3 my-3">
          {appointments.map((appointment) => (
            <AppointmentCard
              key={appointment._id}
              appointment={appointment}
            ></AppointmentCard>
          ))}
        </div>
      </div>
    );
};

export default page;