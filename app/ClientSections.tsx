"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const SectionLoader = () => (
  <div className="min-h-50 flex items-center justify-center">
    <div className="animate-pulse bg-gray-200 rounded-lg w-full h-60"></div>
  </div>
);

const WhatWeDo = dynamic(
  () => import("../src/components/WhatWeDo").then((mod) => mod.WhatWeDo),
  {
    ssr: false,
    loading: () => <SectionLoader />,
  },
);

const OurWork = dynamic(
  () => import("../src/components/OurWork").then((mod) => mod.OurWork),
  {
    ssr: false,
    loading: () => <SectionLoader />,
  },
);

const Products = dynamic(
  () => import("../src/components/Products").then((mod) => mod.Products),
  {
    ssr: false,
    loading: () => <SectionLoader />,
  },
);

const Testimonials = dynamic(
  () =>
    import("../src/components/Testimonials").then((mod) => mod.Testimonials),
  {
    ssr: false,
    loading: () => <SectionLoader />,
  },
);

const FAQs = dynamic(
  () => import("../src/components/FAQ").then((mod) => mod.FAQ),
  {
    ssr: false,
    loading: () => <SectionLoader />,
  },
);

const CTA = dynamic(
  () => import("../src/components/CTA").then((mod) => mod.CTA),
  {
    ssr: false,
    loading: () => <SectionLoader />,
  },
);

const Footer = dynamic(
  () => import("../src/components/Footer").then((mod) => mod.Footer),
  {
    ssr: false,
    loading: () => <SectionLoader />,
  },
);

const ClientSections = () => {
  return (
    <Suspense fallback={<SectionLoader />}>
      <WhatWeDo />
      <OurWork />
      <Products />
      <Testimonials />
      <CTA />
      <FAQs />
      <Footer />
    </Suspense>
  );
};

export default ClientSections;
