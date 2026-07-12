import ApointmentTab from "@/components/ApointmentTab";
import UserProfileCard from "@/components/ProfileTab";
import { Tabs } from "@heroui/react";


const page = () => {
  return (
    <div className="lg:w-8/12 md:w-10/12 w-11/12 mx-auto my-10">
      <Tabs className="">
        <Tabs.ListContainer>
          <Tabs.List aria-label="Options">
            <Tabs.Tab id="profile">
              Profile
              <Tabs.Indicator />
            </Tabs.Tab>
            <Tabs.Tab id="apointments">
              Apointments
              <Tabs.Indicator />
            </Tabs.Tab>
          </Tabs.List>
        </Tabs.ListContainer>
        <Tabs.Panel className="pt-4" id="profile">
            <UserProfileCard></UserProfileCard>
        </Tabs.Panel>
        <Tabs.Panel className="pt-4" id="apointments">
        <ApointmentTab></ApointmentTab>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default page;
