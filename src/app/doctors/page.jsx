import DoctorCard from "@/components/DoctorsCard";
import { getDoctorsData } from "../lib/actions";

const DoctorsPage = async() => {

    const doctors = await getDoctorsData();
    console.log(doctors);
    return (
        <>  
        <div className="lg:w-9/12 md:w-10/12 w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 my-5">
            {
            doctors.map(doctor => (

                <DoctorCard key={doctor._id} doctor={doctor}></DoctorCard>
            ))
            }
        </div>
        </>
    );
};

export default DoctorsPage;