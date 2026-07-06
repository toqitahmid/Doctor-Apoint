import {
  Calendar,
  Clock,
  Person,
  Envelope,
  Smartphone,
  Comment,
} from "@gravity-ui/icons";

const AppointmentCard = ({ appointment }) => {
  const { name, email, phone, sex, apointmentDate, apointmentTime, message } =
    appointment;

  // Format date nicely (e.g., "July 08, 2026")
  const formattedDate = new Date(apointmentDate).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // Clean up time display (e.g., "11:11 AM")
  const [hours, minutes] = apointmentTime.split(":");
  const timeInt = parseInt(hours, 10);
  const ampm = timeInt >= 12 ? "PM" : "AM";
  const displayHours = timeInt % 12 || 12;
  const formattedTime = `${displayHours}:${minutes} ${ampm}`;

  return (
    <div className="max-w-md w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm overflow-hidden p-6 hover:shadow-md transition-shadow">
      {/* Header Profile Section */}
      <div className="flex items-start justify-between border-b border-zinc-100 dark:border-zinc-800 pb-4 mb-4">
        <div>
          <h3 className="text-xl font-semibold text-zinc-950 dark:text-zinc-50 capitalize">
            {name}
          </h3>
          <div className="flex items-center gap-1.5 mt-1 text-xs text-zinc-500 dark:text-zinc-400 capitalize">
            <Person className="w-3.5 h-3.5" />
            <span>{sex}</span>
          </div>
        </div>
        <span className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-950/50 px-2.5 py-1 text-xs font-medium text-blue-700 dark:text-blue-300 ring-1 ring-inset ring-blue-700/10">
          Confirmed
        </span>
      </div>

      {/* Date & Time Slot Grid */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        <div className="flex items-center gap-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl p-3">
          <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
          <div>
            <p className="text-[10px] font-medium uppercase tracking-wider text-zinc-400">
              Date
            </p>
            <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
              {formattedDate}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl p-3">
          <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
          <div>
            <p className="text-[10px] font-medium uppercase tracking-wider text-zinc-400">
              Time
            </p>
            <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
              {formattedTime}
            </p>
          </div>
        </div>
      </div>

      {/* Contact Details & Message */}
      <div className="space-y-2.5 text-sm border-t border-zinc-100 dark:border-zinc-800 pt-4">
        <div className="flex items-center gap-2.5 text-zinc-600 dark:text-zinc-300">
          <Envelope className="w-4 h-4 text-zinc-400" />
          <a
            href={`mailto:${email}`}
            className="hover:underline text-zinc-700 dark:text-zinc-300"
          >
            {email}
          </a>
        </div>
        <div className="flex items-center gap-2.5 text-zinc-600 dark:text-zinc-300">
          {/* Swapped component name to PhoneCall here */}
          <Smartphone className="w-4 h-4 text-zinc-400" />
          <a
            href={`tel:${phone}`}
            className="hover:underline text-zinc-700 dark:text-zinc-300"
          >
            {phone}
          </a>
        </div>
        {message && (
          <div className="flex items-start gap-2.5 mt-3 bg-amber-50/50 dark:bg-amber-950/10 border border-amber-100/80 dark:border-amber-900/30 rounded-xl p-3">
            <Comment className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
            <div>
              <p className="text-[10px] font-medium uppercase tracking-wider text-amber-600 dark:text-amber-400">
                Reason / Message
              </p>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 mt-0.5 font-medium">
                {message}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentCard;
