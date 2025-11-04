"use client";

import { motion } from "motion/react";
import {
  IconMail,
  IconMapPin,
  IconPhone,
  IconSend2,
  IconMessageChatbot,
  IconBrandWhatsapp,
  IconMessageCircle2,
} from "@tabler/icons-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-5 overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-white dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950"
    >
      {/* Decorative background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.15),transparent_70%)] blur-2xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* ================= LEFT SIDE ================= */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Let’s Start Something Great Together 🚀
          </h2>
          <p className="text-base md:text-[17px] text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal mb-8">
            Whether you’re a startup taking your first steps or an established
            brand aiming higher —{" "}
            <span className="font-semibold text-blue-600">
              Fusion Marketing Agency
            </span>{" "}
            is here to craft your next success story. Drop us a quick message,
            and our team will get back to you within 24 hours.
          </p>

          <div className="space-y-4 text-neutral-700 dark:text-neutral-300 font-light">
            <div className="flex items-center gap-3">
              <IconMail className="text-blue-500 h-5 w-5" />
              <span>hello@fusionmarketing.agency</span>
            </div>
            <div className="flex items-center gap-3">
              <IconPhone className="text-blue-500 h-5 w-5" />
              <span>+91 86059 57962</span>
            </div>
            <div className="flex items-center gap-3">
              <IconMapPin className="text-blue-500 h-5 w-5" />
              <span>Navi Mumbai, Maharashtra, India</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-12 bg-blue-600 text-white rounded-2xl p-6 shadow-lg"
          >
            <div className="flex items-start gap-4">
              <IconMessageChatbot className="h-8 w-8 text-white" />
              <div>
                <h4 className="text-lg font-semibold mb-1">
                  Let’s Chat, Not Just Email.
                </h4>
                <p className="text-blue-100 text-sm font-light leading-relaxed">
                  Prefer real conversations? We’re always up for brainstorming
                  sessions over a quick call or coffee ☕.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT SIDE (FORM) ================= */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          onSubmit={(e) => e.preventDefault()}
          className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-md rounded-3xl p-8 space-y-6 mt-6"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              required
              placeholder="Your name"
              className="w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-4 py-3 text-sm text-neutral-800 dark:text-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-4 py-3 text-sm text-neutral-800 dark:text-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
            <div>
              <label
                htmlFor="mobile"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
              >
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobile"
                required
                placeholder="+91 86059 57962"
                className="w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-4 py-3 text-sm text-neutral-800 dark:text-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Tell us about your project or goals..."
              className="w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-4 py-3 text-sm text-neutral-800 dark:text-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full flex justify-center items-center gap-2 bg-blue-600 text-white font-medium py-3 rounded-xl hover:bg-blue-700 transition-colors"
          >
            <IconSend2 className="h-5 w-5" />
            Send Message
          </motion.button>

          {/* ====== Quick Contact Icons Below ====== */}
          <div className="flex justify-center items-center gap-5 pt-4">
            <motion.a
              href="tel:+918605957962"
              whileHover={{ scale: 1.1 }}
              className="p-3 bg-blue-100 dark:bg-blue-500/10 rounded-full hover:bg-blue-200 dark:hover:bg-blue-500/20 transition-all"
            >
              <IconPhone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </motion.a>
            <motion.a
              href="mailto:hello@fusionmarketing.agency"
              whileHover={{ scale: 1.1 }}
              className="p-3 bg-blue-100 dark:bg-blue-500/10 rounded-full hover:bg-blue-200 dark:hover:bg-blue-500/20 transition-all"
            >
              <IconMail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </motion.a>
            <motion.a
              href="sms:+918605957962"
              whileHover={{ scale: 1.1 }}
              className="p-3 bg-blue-100 dark:bg-blue-500/10 rounded-full hover:bg-blue-200 dark:hover:bg-blue-500/20 transition-all"
            >
              <IconMessageCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </motion.a>
            <motion.a
              href="https://wa.me/918605957962"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-3 bg-green-100 dark:bg-green-500/10 rounded-full hover:bg-green-200 dark:hover:bg-green-500/20 transition-all"
            >
              <IconBrandWhatsapp className="h-5 w-5 text-green-600 dark:text-green-400" />
            </motion.a>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
