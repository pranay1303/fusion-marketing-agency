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
      className="relative z-10 py-20 mt-[10px] bg-gradient-to-b from-white via-blue-50/40 to-white dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 dark:text-white mb-4">
          Our <span className="text-blue-600">Digital Marketing</span> Services
        </h2>
        <p className="text-center text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-12">
          Empowering brands to grow, engage, and thrive in the digital world with
          strategies that deliver measurable success.
        </p>

        {/* Service Cards */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-start justify-start rounded-2xl border border-blue-100 dark:border-blue-900 bg-white dark:bg-neutral-900 p-6 shadow-sm hover:shadow-lg hover:shadow-blue-100/40 dark:hover:shadow-blue-500/10 hover:-translate-y-1.5 transition-all duration-300 group scale-[0.95] hover:scale-[0.97]"
      )}
    >
      <div className="mb-3 p-2.5 bg-blue-50 dark:bg-blue-500/10 rounded-lg text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      <h3 className="text-base font-semibold text-neutral-800 dark:text-neutral-100 mb-1 group-hover:text-blue-600 transition-colors duration-200">
        {title}
      </h3>

      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
        {description}
      </p>

      <div className="h-[2px] w-0 bg-blue-600 mt-3 group-hover:w-14 transition-all duration-300 rounded-full" />
    </div>
  );
};
