import React from "react";
import Link from "next/link";

const Tips = () => {
  // Pure JavaScript array of objects for our health data
  const pillars = [
    {
      title: "Fuel & Hydration",
      description:
        "Prioritize lean proteins, whole grains, and healthy fats over processed foods. Aim for at least 3 liters of water daily to support metabolic function and energy levels.",
      tip: "Tip: Limit added sugars & heavy sodium.",
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
      tipColor: "text-amber-700",
      borderColor: "hover:border-amber-200",
      svgIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v20" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
    {
      title: "Sleep Architecture",
      description:
        "Protect your 7 to 8 hours of sleep. Quality sleep regulates testosterone production, accelerates muscle recovery, clears cognitive fatigue, and reduces heart disease risks.",
      tip: "Tip: Turn off screens 45 mins before bed.",
      iconBg: "bg-indigo-50",
      iconColor: "text-indigo-600",
      tipColor: "text-indigo-700",
      borderColor: "hover:border-indigo-200",
      svgIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      ),
    },
    {
      title: "Move with Purpose",
      description:
        "Combine at least 150 minutes of moderate aerobic exercise per week with 2 days of strength training. Muscle mass acts as a protective metabolic shield as you age.",
      tip: "Tip: Consistency beats workout intensity.",
      iconBg: "bg-rose-50",
      iconColor: "text-rose-600",
      tipColor: "text-rose-700",
      borderColor: "hover:border-rose-200",
      svgIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
    },
    {
      title: "Routine Checkups",
      description:
        "Preventive care saves lives. Keep strict track of your blood pressure, cholesterol profile, blood sugar, and age-appropriate screenings (like prostate or colon health).",
      tip: "Tip: Don't wait until you are feeling sick.",
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
      tipColor: "text-emerald-700",
      borderColor: "hover:border-emerald-200",
      svgIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
            Wellness Resource
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight">
            The Blueprint for Man’s Peak Health
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Staying at your physical and mental best is not about drastic
            changes. It is about consistent, foundational habits. Protect your
            future self with these vital daily guidelines.
          </p>
        </div>

        {/* Dynamic Responsive Grid mapping over JavaScript Array */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between transition-colors duration-200 ${pillar.borderColor}`}
            >
              <div>
                <div
                  className={`w-10 h-10 ${pillar.iconBg} ${pillar.iconColor} rounded-xl flex items-center justify-center mb-5`}
                >
                  {pillar.svgIcon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
              <div
                className={`mt-4 pt-3 border-t border-slate-50 text-xs font-semibold ${pillar.tipColor}`}
              >
                {pillar.tip}
              </div>
            </div>
          ))}
        </div>

        {/* Next.js Friendly CTA Banner */}
        <div className="mt-16 bg-white rounded-2xl border border-slate-200 p-8 flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-full hidden sm:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900">
                When was your last physical?
              </h4>
              <p className="text-sm text-slate-500 mt-1 max-w-xl">
                Early detection is the most powerful tool in medicine. Schedule
                an annual wellness exam or talk to a specialist near you today.
              </p>
            </div>
          </div>
          <Link
            href="/appointments"
            className="whitespace-nowrap w-full md:w-auto text-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-xl shadow-sm transition-colors duration-150"
          >
            Find a Specialist
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Tips;
