import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import MissionVision from "@/components/MissionVision";
import CurrentInitiative from "@/components/CurrentInitiative";
import Faculty from "@/components/Faculty";
import Activities from "@/components/Activities";
import WhyChooseUs from "@/components/WhyChooseUs";
import CareerOpportunities from "@/components/CareerOpportunities";
import Footer from "@/components/Footer";

const page= () => {
  return (
    <div>
      <main>
      <section id="AboutUs" >
        <Header/>
      </section>

      <section id="courses"  >
        <h2 className="text-3xl font-bold"><Hero/></h2>
      </section>

      <section id="faculty"  >
        <h2 className="text-3xl font-bold"><AboutUs/></h2>
      </section>

      <section id="activities"  >
        <h2 className="text-3xl font-bold"><MissionVision/></h2>
      </section>
      <section id="activities"  >
        <h2 className="text-3xl font-bold"><CurrentInitiative/></h2>
      </section>
      <section id="contact"  >
        <h2 className="text-3xl font-bold"><Faculty/></h2>
      </section>
      <section id="contact"  >
        <h2 className="text-3xl font-bold"><Activities/></h2>
      </section>
      <section id="contact"  >
        <h2 className="text-3xl font-bold"><WhyChooseUs/></h2>
      </section>
      <section id="contact"  >
        <h2 className="text-3xl font-bold"><CareerOpportunities/></h2>
      </section>
      <Footer />
    </main>
    </div>
  );
};

export default page;
