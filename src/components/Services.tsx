"use client";

import { cn } from "@/lib/utils";
import {
  IconBrandGoogle,
  IconDeviceLaptop,
  IconChartBar,
  IconUserHeart,
  IconAdjustmentsBolt,
  IconSocial,
  IconPalette,
  IconTarget,
} from "@tabler/icons-react";

export default function Services() {
  const features = [
    {
      title: "Search Engine Optimization (SEO)",
      description:
        "Boost your online visibility and rank higher on Google with data-driven SEO strategies that attract organic traffic.",
      icon: <IconBrandGoogle />,
    },
    {
      title: "Social Media Marketing",
      description:
        "Build your brand presence across platforms like Instagram, LinkedIn, and Facebook with engaging, share-worthy content.",
      icon: <IconSocial />,
    },
    {
      title: "Pay-Per-Click Advertising (PPC)",
      description:
        "Maximize ROI with targeted ad campaigns that convert clicks into customers on Google and social platforms.",
      icon: <IconTarget />,
    },
    {
      title: "Web Design & Development",
      description:
        "Create stunning, responsive websites that deliver seamless user experiences and drive conversions.",
      icon: <IconDeviceLaptop />,
    },
    {
      title: "Content Creation & Branding",
      description:
        "Craft powerful brand stories, visuals, and digital assets that connect emotionally and communicate your identity.",
      icon: <IconPalette />,
    },
    {
      title: "Email Marketing Automation",
      description:
        "Deliver personalized campaigns that nurture leads and retain customers through automated, data-backed workflows.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Analytics & Performance Tracking",
      description:
        "Leverage real-time analytics to measure campaign effectiveness and make smarter marketing decisions.",
      icon: <IconChartBar />,
    },
    {
      title: "Customer Experience & Engagement",
      description:
        "Build meaningful connections with your audience and turn customers into loyal brand advocates.",
      icon: <IconUserHeart />,
    },
  ];

  return (
    <section
      id="services"
      className="relative z-10 py-20 bg-gradient-to-b from-white via-blue-50/40 to-white dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Our Services
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
            Empowering brands to grow, engage, and thrive in the digital world
            with strategies that deliver measurable success.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index?: number;
}) => {
  const gradientColors =
    index && index % 2 === 0
      ? "hover:shadow-blue-200/40 dark:hover:shadow-blue-600/10"
      : "hover:shadow-indigo-200/40 dark:hover:shadow-indigo-600/10";

  return (
    <div
      className={cn(
        "relative flex flex-col items-start justify-start rounded-2xl border border-blue-100/40 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm transition-all duration-300 group transform hover:-translate-y-2 hover:scale-[1.02]",
        gradientColors
      )}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl bg-gradient-to-br from-blue-50/30 to-indigo-50/20 dark:from-blue-500/10 dark:to-purple-500/10 blur-xl" />

      <div className="mb-4 relative z-10 p-3 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-500/20 dark:to-indigo-500/20 rounded-xl text-blue-700 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      <h3 className="relative z-10 text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
        {title}
      </h3>

      <p className="relative z-10 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
        {description}
      </p>

      <div className="relative z-10 mt-4 h-[2px] w-0 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-16 transition-all duration-300 rounded-full" />
    </div>
  );
};
