'use server';

import { redirect } from "next/navigation";

export const getDoctorsData = async() => {
    const res = await fetch(`http://localhost:5000/doctors`);
    const data = await res.json();
    return data;
}

export const getDoctorsDataById = async(id) => {
    const res = await fetch(`http://localhost:5000/doctors/${id}`);
    if (!res.ok) {
      console.error(`Backend returned status: ${res.status}`);
      return null;
    }
    const data = await res.json();
    return data;
}

export const bookNewApointment = async(formData) => {
    const newApointment = Object.fromEntries(formData.entries());
    const res = await fetch("http://localhost:5000/apointments",{
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newApointment)
    });
    const data = await res.json();
    if(data.insertedId){
        redirect('/apointments')
    }
    return data;
}