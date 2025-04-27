"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconLeaf,
  IconFlask,
  IconCertificate,
  IconPackage,
  IconUsers,
} from "@tabler/icons-react";
import { motion } from "motion/react";

export function MPPharmaBentoGrid() {
  return (
    <>
      <h1 className="text-2xl md:text-7xl text-center mx-auto font-bold dark:text-white">
        Excellence Across Every Dimension
      </h1>
      <p className="max-w-4xl text-base mx-auto text-center md:text-lg mt-2 mb-8 dark:text-neutral-200">
        Explore our expertise — from premium herbal products and uncompromised
        quality standards to a diverse portfolio and a team committed to
        customer satisfaction.
      </p>

      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] px-2">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg]", item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </>
  );
}

const HerbalProducts = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-green-100 dark:border-green-500/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 shrink-0 flex items-center justify-center">
          <IconLeaf className="h-3 w-3 text-white" />
        </div>
        <div className="w-full bg-green-50 h-4 rounded-full dark:bg-green-900/30 flex items-center justify-center">
          <span className="text-xs text-green-700 dark:text-green-300 font-medium">
            Face Care
          </span>
        </div>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-green-100 dark:border-green-500/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <div className="w-full bg-green-50 h-4 rounded-full dark:bg-green-900/30 flex items-center justify-center">
          <span className="text-xs text-green-700 dark:text-green-300 font-medium">
            Essential Oils
          </span>
        </div>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 shrink-0 flex items-center justify-center">
          <IconLeaf className="h-3 w-3 text-white" />
        </div>
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-green-100 dark:border-green-500/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 shrink-0 flex items-center justify-center">
          <IconLeaf className="h-3 w-3 text-white" />
        </div>
        <div className="w-full bg-green-50 h-4 rounded-full dark:bg-green-900/30 flex items-center justify-center">
          <span className="text-xs text-green-700 dark:text-green-300 font-medium">
            Herbal Creams
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

const QualityStandards = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };

  // Quality standards list
  const standards = ["", "", "", "", "", ""];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      {standards.map((standard, i) => (
        <motion.div
          key={"quality-standard" + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + "%",
          }}
          className="flex flex-row rounded-full border border-blue-100 dark:border-blue-500/[0.2] p-2 items-center justify-center space-x-2 bg-blue-50 dark:bg-blue-900/20 w-full h-4"
        >
          <span className="text-xs text-blue-700 dark:text-blue-300 font-medium">
            {standard}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
};

const ProductRange = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full md:min-h-[9rem] min-h-[325px] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #66bb6a, #4caf50, #81c784, #a5d6a7)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};

const TeamExpertise = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <div className="rounded-full h-10 w-10 bg-blue-100 flex items-center justify-center">
          <IconFlask className="h-6 w-6 text-blue-600" />
        </div>
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Research & Development
        </p>
        <p className="border border-blue-500 bg-blue-100 dark:bg-blue-900/20 text-blue-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Innovation
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <div className="rounded-full h-10 w-10 bg-green-100 flex items-center justify-center">
          <IconCertificate className="h-6 w-6 text-green-600" />
        </div>
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Quality Assurance
        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Excellence
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <div className="rounded-full h-10 w-10 bg-amber-100 flex items-center justify-center">
          <IconPackage className="h-6 w-6 text-amber-600" />
        </div>
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Manufacturing
        </p>
        <p className="border border-amber-500 bg-amber-100 dark:bg-amber-900/20 text-amber-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Precision
        </p>
      </motion.div>
    </motion.div>
  );
};

const CustomerSatisfaction = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-purple-100 dark:border-purple-500/[0.2] p-2 items-start space-x-2 bg-white dark:bg-black"
      >
        <div className="rounded-full h-10 w-10 bg-purple-100 flex items-center justify-center shrink-0">
          <IconUsers className="h-6 w-6 text-purple-600" />
        </div>
        <p className="text-xs text-neutral-500">
          Our customer satisfaction is the key to our strength, with over 1000+
          products trusted by businesses across the market...
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-purple-100 dark:border-purple-500/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500">Trusted since 2016</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 shrink-0" />
      </motion.div>
    </motion.div>
  );
};

const items = [
  {
    title: "Herbal Product Range",
    description: (
      <span className="text-sm">
        Premium herbal formulations using natural ingredients for holistic
        wellness.
      </span>
    ),
    header: <HerbalProducts />,
    className: "md:col-span-1",
    icon: <IconLeaf className="h-4 w-4 text-green-600" />,
  },
  {
    title: "Quality Standards",
    description: (
      <span className="text-sm">
        Uncompromised quality with advanced testing and stringent manufacturing
        protocols.
      </span>
    ),
    header: <QualityStandards />,
    className: "md:col-span-1",
    icon: <IconCertificate className="h-4 w-4 text-blue-600" />,
  },
  {
    title: "Product Portfolio",
    description: (
      <span className="text-sm">
        Over 1000+ products spanning herbal, cosmetic, pharmaceutical and
        nutraceutical categories.
      </span>
    ),
    header: <ProductRange />,
    className: "md:col-span-1",
    icon: <IconPackage className="h-4 w-4 text-green-600" />,
  },
  {
    title: "Expert Team",
    description: (
      <span className="text-sm">
        Dedicated specialists with deep experience in pharmaceutical development
        and manufacturing.
      </span>
    ),
    header: <TeamExpertise />,
    className: "md:col-span-2",
    icon: <IconUsers className="h-4 w-4 text-indigo-600" />,
  },
  {
    title: "Customer Focus",
    description: (
      <span className="text-sm">
        World-class packaging and product design delivering exceptional customer
        satisfaction.
      </span>
    ),
    header: <CustomerSatisfaction />,
    className: "md:col-span-1",
    icon: <IconUsers className="h-4 w-4 text-purple-600" />,
  },
];
