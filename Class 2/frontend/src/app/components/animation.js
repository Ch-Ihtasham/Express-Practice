import clsx from "clsx";
import { useInView } from "framer-motion";
import React from "react";
import { Grid, Center, ChevronDown, Box, Tool, Lock } from "lucide-react"; // Import Lucide icons

const platformItems = [
  {
    name: "Vite",
    icon: Tool,  // Example of Lucide icon
    color: "#ffa800",
  },
  {
    name: "Next.js",
    icon: ChevronDown,  // Example of Lucide icon
    color: "#ffffff",
    rayClassName: "!text-gray-1000 dark:!text-gray-0",
  },
  {
    name: "Remix",
    icon: ChevronDown,  // Example of Lucide icon
    color: "#ffffff",
    rayClassName: "!text-gray-1000 dark:!text-gray-0",
  },
];

const uiItems = [
  {
    name: "Material UI",
    icon: Box,  // Example of Lucide icon
    color: "#007FFF",
  },
  {
    name: "Ant Design",
    icon: Box,  // Example of Lucide icon
    color: "#148EFF",
  },
  {
    name: "Chakra UI",
    icon: Box,  // Example of Lucide icon
    color: "#29C6B7",
  },
];

const backendItems = [
  {
    name: "Supabase",
    icon: Tool,  // Example of Lucide icon
    color: "#3ECF8E",
  },
  {
    name: "NestJS",
    icon: Tool,  // Example of Lucide icon
    color: "#E0234E",
  },
  {
    name: "Appwrite",
    icon: Tool,  // Example of Lucide icon
    color: "#FD366E",
  },
];

const authItems = [
  {
    name: "Google",
    icon: Lock,  // Example of Lucide icon
    color: "#EA4335",
  },
  {
    name: "Auth0",
    icon: Lock,  // Example of Lucide icon
    color: "#EB5424",
  },
  {
    name: "Okta",
    icon: (props) => (
      <div className={clsx("p-5", props.className)}>
        <Lock className={clsx("w-6 h-6 text-gray-1000 dark:text-gray-0")} />
      </div>
    ),
    color: "#ffffff",
    rayClassName: "!text-gray-1000 dark:!text-gray-0",
  },
];

export const LandingHeroAnimation = React.memo(function HeroAnimation() {
  const ref = React.useRef(null);
  const inView = useInView(ref);
  const [activePlatform, setActivePlatform] = React.useState(0);
  const [activeUI, setActiveUI] = React.useState(0);
  const [activeBackend, setActiveBackend] = React.useState(0);
  const [activeAuth, setActiveAuth] = React.useState(0);

  React.useEffect(() => {
    if (inView) {
      let t1 = null;
      let t2 = null;
      let t3 = null;

      const interval = setInterval(() => {
        if (t1) clearTimeout(t1);
        if (t2) clearTimeout(t2);
        if (t3) clearTimeout(t3);

        setActivePlatform((prev) => (prev + 1) % platformItems.length);
        t1 = setTimeout(() => {
          setActiveUI((prev) => (prev + 1) % uiItems.length);
        }, 2000);
        t2 = setTimeout(() => {
          setActiveBackend((prev) => (prev + 1) % backendItems.length);
        }, 4000);
        t3 = setTimeout(() => {
          setActiveAuth((prev) => (prev + 1) % authItems.length);
        }, 6000);
      }, 8000);

      return () => {
        clearInterval(interval);
        if (t1) clearTimeout(t1);
        if (t2) clearTimeout(t2);
        if (t3) clearTimeout(t3);
      };
    }
  }, [inView]);

  return (
    <div ref={ref} className={clsx()}>
      <div className={clsx("relative", "w-min")}>
        <Grid
          className={clsx(
            "w-[404px]",
            "h-[360px]",
            "landing-lg:w-[690px]",
            "landing-lg:h-[480px]",
            "left-0",
            "top-0",
            "bottom-0",
            "right-0",
          )}
        />
        <Center
          className={clsx(
            "absolute",
            "left-1/2 top-1/2",
            "-translate-x-1/2 -translate-y-1/2",
            "z-[1]",
          )}
        />
        <div
          className={clsx(
            "hidden",
            "landing-lg:flex",
            "absolute",
            "left-0",
            "top-0",
            "bottom-0",
            "right-0",
            "w-full",
            "h-full",
            "py-12",
            "px-[89px]",
            "flex-col",
            "items-start",
            "justify-between",
          )}
        >
          <div
            className={clsx("w-full", "flex", "items-start", "justify-between")}
          >
            {/* Updated with Lucide icons */}
            {/* Add your animation logic here */}
          </div>
        </div>
      </div>
    </div>
  );
});
