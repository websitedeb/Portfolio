import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaDiscord, FaGithub, FaRegIdBadge, FaNpm, FaTiktok } from "react-icons/fa";
import { SiRoblox } from "react-icons/si";
import { playstore } from "../hooks/store";

const items = [
  {
    text: "Sarthak",
    color: "text-white",
    icon: <FaRegIdBadge className="text-white" />,
  },
  {
    text: "Websitedeb",
    color: "text-gray-400",
    icon: <FaGithub className="text-gray-400" />,
  },
  {
    text: "Reactive",
    color: "text-blue-500",
    icon: <FaDiscord className="text-blue-500" />,
  },
  {
    text: "Web_site_guy",
    color: "text-yellow-500",
    icon: <FaNpm className="text-yellow-500" />,
  },
  {
    text: "Iamlitrss",
    color: "text-red-500",
    icon: <SiRoblox className="text-red-500" />,
  },
  {
    text: "Reactive",
    color: "text-pink-500",
    icon: <FaTiktok className="text-pink-500" />
  }
];

export default function NameChanger() {
  const clicked = playstore((state) => state.clicked);
  const [current, setCurrent] = useState(0);

  return (
    <div className="flex items-center gap-1">
      {items[current].icon}

      <div className={`text-3xl font-bold ${items[current].color}`}>
        {clicked ? (
          <TypeAnimation
            sequence={[
              () => setCurrent(0),
              items[0].text,
              2000,

              () => setCurrent(1),
              items[1].text,
              2000,

              () => setCurrent(2),
              items[2].text,
              2000,

              () => setCurrent(3),
              items[3].text,
              2000,

              () => setCurrent(4),
              items[4].text,
              2000,

              () => setCurrent(5),
              items[5].text,
              2000,
            ]}
            speed={50}
            deletionSpeed={70}
            repeat={Infinity}
            cursor={true}
          />
        ) : (
          items[0].text
        )}
      </div>
    </div>
  );
}