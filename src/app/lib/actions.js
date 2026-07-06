'use server';

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