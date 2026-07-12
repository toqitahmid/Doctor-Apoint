import HomeDoctors from "@/components/HomeDoctors";
import HeroBanner from "../ui/Hero";
import Tips from "@/components/Tips";

const HomePage = () => {
    return (
        <div>
            <HeroBanner></HeroBanner>
            <HomeDoctors></HomeDoctors>
            <Tips></Tips>
        </div>
    );
};

export default HomePage;