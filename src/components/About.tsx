"use client";

import { motion } from "motion/react";
import {
  IconBuildingSkyscraper,
  IconUsers,
  IconWorld,
  IconTargetArrow,
  IconMapPin,
  IconSparkles,
  IconHeartHandshake,
} from "@tabler/icons-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950"
    >
      {/* Background accent gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_rgba(37,99,235,0.15),transparent_70%)] blur-2xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* GRID: About info (left) + Cards (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT: About text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              About{" "}
              <span className="text-blue-500">Fusion Marketing Agency</span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
              Fusion Marketing Agency is a Navi Mumbai-based full-service
              digital marketing company that blends creativity, data, and human
              insight to craft strategies that inspire trust and drive measurable
              growth. We empower brands to engage audiences meaningfully — not
              just to sell, but to connect and evolve.
            </p>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Since 2019, we’ve partnered with over 100 businesses across India
              and beyond, helping them go from local recognition to global
              impact through purpose-driven marketing.
            </p>
          </motion.div>

          {/* RIGHT: 4 stat cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {aboutStats.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="bg-white/80 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 backdrop-blur-md rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-center mb-3 text-blue-500">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-1 text-center">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* LOCATIONS SECTION */}
        <div className="mt-24 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold text-neutral-900 dark:text-white mb-6"
          >
            Our Presence
          </motion.h3>
          <div className="flex flex-wrap justify-center gap-6 text-neutral-700 dark:text-neutral-300">
            {["Navi Mumbai (HQ)", "Mumbai", "Pune", "Delhi", "Bengaluru"].map(
              (city, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-2 bg-white/70 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 px-5 py-2 rounded-full shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <IconMapPin className="h-4 w-4 text-blue-500" />
                  <span className="text-sm font-medium">{city}</span>
                </motion.div>
              )
            )}
          </div>
        </div>

        {/* WHY CHOOSE US SECTION */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
          {whyChooseUs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-8 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-blue-500 mb-4">{item.icon}</div>
              <h4 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-24 bg-gradient-to-r from-blue-600 to-blue-500 text-white py-12 px-10 rounded-3xl shadow-xl max-w-4xl mx-auto text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Let’s build your brand’s next big story together.
          </h3>
          <p className="text-blue-100 text-base mb-4">
            Join the hundreds of clients who’ve grown with Fusion’s creativity
            and data-driven strategy.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-blue-600 font-medium px-6 py-3 rounded-full shadow hover:shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}

const aboutStats = [
  {
    title: "Founded in 2019",
    description:
      "Born in Navi Mumbai, India — we’ve helped 100+ brands grow with strategy and creativity.",
    icon: <IconBuildingSkyscraper className="h-8 w-8" />,
  },
  {
    title: "Creative Team",
    description:
      "A blend of designers, storytellers, and data experts shaping meaningful marketing.",
    icon: <IconUsers className="h-8 w-8" />,
  },
  {
    title: "Global Reach",
    description:
      "Campaigns spanning 15+ countries — bridging audiences with authentic engagement.",
    icon: <IconWorld className="h-8 w-8" />,
  },
  {
    title: "Purpose-Driven",
    description:
      "Focused on connection and long-term brand trust — not just short-term clicks.",
    icon: <IconTargetArrow className="h-8 w-8" />,
  },
];

const whyChooseUs = [
  {
    title: "Creative Innovation",
    description:
      "We combine design, storytelling, and technology to make your brand unforgettable.",
    icon: <IconSparkles className="h-7 w-7" />,
  },
  {
    title: "Client-Centered Approach",
    description:
      "We treat every project as a partnership, aligning our goals with your brand’s vision.",
    icon: <IconHeartHandshake className="h-7 w-7" />,
  },
  {
    title: "Data with Emotion",
    description:
      "We balance logic and creativity — data guides our strategies, emotion drives results.",
    icon: <IconTargetArrow className="h-7 w-7" />,
  },
];
