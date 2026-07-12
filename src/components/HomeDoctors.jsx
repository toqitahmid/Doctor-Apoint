import { Card, Chip } from "@heroui/react";
import DoctorCard from "./DoctorsCard";
import { MapPinned } from "lucide-react";
import Image from "next/image";

const findDoctors = async() => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/doctors/cheap`,
    );
    const data = await res.json()
    return data;
}

const HomeDoctors = async() => {
    const doctors = await findDoctors();
    console.log(doctors);
    return (
      <>
        <div className="lg:w-8/12 md:w-10/12 w-11/12 mx-auto mt-20 mb-10">
          <h2 className="text-4xl font-semibold text-center">Our Experienced Doctors</h2>
        </div>
        <div className="lg:w-8/12 md:w-10/12 w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-3 mb-20">
          {doctors.map((doctor) => (
            <div key={doctor._id} doctor={doctor}>
              <Card
                className="max-w-[360px] p-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md rounded-xl"
                variant="default"
              >
                {/* Wrapper layout container configured for Next.js Fill Image optimization */}
                <div className="relative w-full h-[220px] overflow-hidden rounded-lg">
                  <Image
                    alt={doctor.name}
                    src={doctor.image}
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
                      {doctor.name}
                    </Card.Title>
                    <Card.Description className="text-small font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                      {doctor.specialty}
                    </Card.Description>
                  </div>
                  <Chip
                    color="success"
                    size="sm"
                    className="shrink-0 text-xs font-medium"
                  >
                    {doctor.experience} Exp
                  </Chip>
                </Card.Header>

                {/* HeroUI v3 Compound Body Content */}
                <Card.Content className="px-3 py-2 flex flex-col gap-3">
                  <p className="text-small text-zinc-500 dark:text-zinc-400 line-clamp-2">
                    {doctor.description}
                  </p>

                  <div className="w-full space-y-1.5 text-small text-zinc-600 dark:text-zinc-300">
                    <div className="flex items-center gap-2">
                      <span className="text-base">🏢</span>
                      <span className="font-medium line-clamp-1">
                        {doctor.hospital}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400">
                      <span className="text-base">
                        <MapPinned></MapPinned>
                      </span>
                      <span>{doctor.location}</span>
                    </div>
                  </div>
                </Card.Content>
              </Card>
            </div>
          ))}
        </div>
      </>
    );
};

export default HomeDoctors;