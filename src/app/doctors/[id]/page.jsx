import Image from "next/image";
import Link from "next/link";
import { Button, Card, Chip, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { bookNewApointment, getDoctorsDataById } from "@/app/lib/actions";
import BookApoinmentForm from "@/components/BookApoinmentForm";

const DoctorDetailsPage = async ({ params }) => {
  const { id } = await params;
  const doctor = await getDoctorsDataById(id);

  if (!doctor) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
        <p className="text-zinc-500 font-medium text-lg">
          Doctor profile not found.
        </p>
        <Button as={Link} href="/doctors" color="primary" variant="flat">
          Back to Directory
        </Button>
      </div>
    );
  }

  return (
    <main className="w-full min-h-screen bg-zinc-50/50 dark:bg-zinc-950 py-10 px-4 md:px-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <Link
          href="/doctors"
          className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-primary transition-colors gap-2 mb-2"
        >
          ← Back to All Doctors
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <Card
            className="md:col-span-4 overflow-hidden border-zinc-200/60 dark:border-zinc-800"
            shadow="sm"
          >
            <Card.Content className="p-0 relative aspect-square md:aspect-[3/4]">
              <Image
                src={
                  doctor.image ||
                  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
                }
                alt={doctor.name}
                fill
                priority
                className="object-cover"
                sizes="(max-w-768px) 100vw, 33vw"
              />
            </Card.Content>
          </Card>

          <Card
            className="md:col-span-8 p-4 md:p-6 border-zinc-200/60 dark:border-zinc-800"
            shadow="sm"
          >
            <Card.Content className="gap-6 p-0">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                    {doctor.name}
                  </h1>
                  <Chip
                    color="success"
                    variant="flat"
                    size="sm"
                    className="font-medium"
                  >
                    {doctor.experience} Exp
                  </Chip>
                </div>
                <p className="text-lg font-semibold text-primary">
                  {doctor.specialty}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-y border-zinc-100 dark:border-zinc-800/80 py-4">
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Affiliated Hospital
                  </span>
                  <p className="text-zinc-700 dark:text-zinc-300 font-medium text-sm md:text-base">
                    🏢 {doctor.hospital}
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Practice Location
                  </span>
                  <p className="text-zinc-700 dark:text-zinc-300 font-medium text-sm md:text-base">
                    📍 {doctor.location}
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Consultation Fee
                  </span>
                  <p className="text-zinc-900 dark:text-zinc-50 font-bold text-lg">
                    ৳ {doctor.fee}
                  </p>
                </div>
              </div>

              {/* Biography Section */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
                  About Practitioner
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm md:text-base">
                  {doctor.description}
                </p>
              </div>

              {/* Consultation Availability Shifts */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
                  Available Time Slots
                </h3>
                <div className="flex flex-wrap gap-2">
                  {doctor.availability?.map((slot, index) => (
                    <Chip
                      key={index}
                      variant="dot"
                      color="primary"
                      className="border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 px-3 py-1 font-medium text-zinc-700 dark:text-zinc-300"
                    >
                      📅 {slot}
                    </Chip>
                  ))}
                </div>
              </div>

              {/* Booking Trigger Action Button */}
              <div className="pt-2">
                <Modal>
                  <Button className='min-w-full' variant="secondary">Book Apointment</Button>
                  <Modal.Backdrop>
                    <Modal.Container placement="auto">
                      <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Body className="p-6">
                          <Surface variant="default">
                            <BookApoinmentForm 
                            doctor={doctor}
                            bookNewApointmentAction={bookNewApointment}
                            ></BookApoinmentForm>
                          </Surface>
                        </Modal.Body>
                        
                      </Modal.Dialog>
                    </Modal.Container>
                  </Modal.Backdrop>
                </Modal>
              </div>
            </Card.Content>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default DoctorDetailsPage;
