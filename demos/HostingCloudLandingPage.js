import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithPrimaryBackground.js";
import Features from "components/features/ThreeColWithSideImageWithPrimaryBackground.js";
import MainFeature from "components/features/TwoColWithButton.js";
import Pricing from "components/pricing/ThreePlansWithHalfPrimaryBackground.js";
import Testimonial from "components/testimonials/SimplePrimaryBackground.js";
import FAQ from "components/faqs/TwoColumnPrimaryBackground.js";
import Footer from "components/footers/FiveColumnDark.js";
import serverRedundancyIllustrationImageSrc from "../public/images/server-redundancy-illustration.svg"
import serverSecureIllustrationImageSrc from "../public/images/server-secure-illustration.svg"


const HostingCloudLandingPage = () => {
  return (
    <AnimationRevealPage>
      <Hero />
      <Features />
      <Pricing />
      <MainFeature 
        subheading="Reliable"
        heading="Highly Redundant Servers With Backup"
        imageSrc={serverRedundancyIllustrationImageSrc}
        buttonRounded={false}
      />
      <MainFeature 
        subheading="Secure"
        heading="State of the Art Computer Security"
        imageSrc={serverSecureIllustrationImageSrc}
        buttonRounded={false}
        textOnLeft={false}
      />
      <Testimonial />
      <FAQ />
      <Footer />
    </AnimationRevealPage>
  );
};


export default HostingCloudLandingPage;
