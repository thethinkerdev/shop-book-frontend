import React from "react";
import AboutUsHeroHeader from "../ui/AboutUsHeroHeader";
import AboutUsMissionSection from "../ui/AboutUsMissionSection";
import AboutUsTimeLineSection from "../ui/AboutUsTimeLineSection";
import AboutUsTeamSection from "../ui/AboutUsTeamSection";
import AboutUsJobRequestSection from "../ui/AboutUsJobRequestSection";

const AboutUs = () => {
  return (
    <main className="flex flex-col items-center">
      {/* <!-- Hero Header --> */}
      <AboutUsHeroHeader />
      {/* <!-- Mission Section --> */}
      <AboutUsMissionSection />
      {/* <!-- Timeline Section --> */}
      <AboutUsTimeLineSection />
      {/* <!-- Team Section --> */}
      <AboutUsTeamSection />
      {/* JOB Request : */}
      <AboutUsJobRequestSection />
    </main>
  );
};

export default AboutUs;
