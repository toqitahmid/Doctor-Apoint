import { getAllAppointments } from '@/app/lib/actions';
import AppointmentList from './AppointmentList';

const ApointmentTab = async() => {
    const initialAppointments = await getAllAppointments();
    return (
      <div className="lg:w-9/12 md:w-10/12 w-11/12 mx-auto">
        <div>
         
            <AppointmentList
              initialAppointments={initialAppointments}
            ></AppointmentList>
        </div>
      </div>
    );
};

export default ApointmentTab;