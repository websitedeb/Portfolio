"use client";

import PlayButton from "@/components/PlayButton";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { playstore } from "@/hooks/store";

import {
  FaDiscord,
  FaGithub,
  FaNpm,
  FaTiktok,
  FaCode,
  FaPaintBrush,
  FaCog,
  FaDatabase,
  FaMobile,
  FaDesktop,
  FaClipboardCheck,
  FaRobot,
  FaGamepad,
  FaChartBar,
  FaTools,
  FaCloud,
  FaBrain,
  FaFlask,
} from "react-icons/fa";

import { SiRoblox, SiGmail } from "react-icons/si";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import NameChanger from "@/components/nameChanger";
import ThreeDBackground from "@/components/threedbg";
import Article from "@/components/article";
import fonts from "@/hooks/fontManager";
import { ProjectSection } from "@/components/projectSection";
import Footer from "@/components/footer";
import { DotPattern } from "@/components/dotPattern";

interface _Data {
  icon: React.ReactNode;
  name: string;
  img_str: string;
}

type Data = _Data;

function createData(
  icon: React.ReactNode,
  name: string,
  img_str: string
): Data {
  return {
    icon,
    name,
    img_str,
  };
}

const data: Array<Data> = [
  createData(<FaCode color="white" size={24} />,
    "Langs",
    "html,css,js,ts,py,java,luau,rust,md"
  ),
  createData(<FaPaintBrush color="white" size={24} />,
    "Frontend",
    "react,next,tailwindcss,bootstrap,zustand,jquery"
  ),
  createData(<FaCog color="white" size={24} />,
    "Backend",
    "nodejs,express,hono,flask,fastapi"
  ),
  createData(<FaDatabase color="white" size={24} />,
    "Database",
    "mongo,mysql,sqlite"
  ),
  createData(<FaMobile color="white" size={24} />,
    "Mobile",
    "expo,reactnative"
  ),
  createData(<FaDesktop color="white" size={24} />,
    "Desktop",
    "electron,tauri"
  ),
  createData(<FaClipboardCheck color="white" size={24} />,
    "Testing",
    "selenium"
  ),
  createData(<FaRobot color="white" size={24} />,
    "Bot Dev",
    "discordjs"
  ),
  createData(<FaGamepad color="white" size={24} />,
    "Game Dev",
    "robloxstudio,threejs"
  ),
  createData(<FaChartBar color="white" size={24} />,
    "Data Analysis",
    "pandas,numpy,matplotlib,seaborn"
  ),
  createData(<FaBrain color="white" size={24} />,
    "ML",
    "pydantic,tensorflow"
  ),
  createData(<FaFlask color="white" size={24} />,
    "AI",
    "chatgpt,gemini"
  ),
  createData(<FaTools color="white" size={24} />,
    "Tools",
    "vscode,replit,dreamweaver,pycharm,git,github,postman,eclipse,docker,npm,pypi,canva"
  ),
  createData(<FaCloud color="white" size={24} />,
    "Cloud",
    "cloudflare,workers,vercel,render"
  ),
];

export default function Page() {
  const clicked: boolean = playstore((state) => state.clicked);

  return clicked ? (
    <>
      <div className="fixed inset-0 -z-20 overflow-hidden"> 
        <audio
          autoPlay
          loop
          src="https://raw.githubusercontent.com/websitedeb/imagehoster/main/Aizomp3.mp3"
          className="hidden"
        />
      </div>

      <div className="fixed inset-0 -z-10 isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0">
          <DotPattern />
        </div>
        <div className="pointer-events-none absolute inset-0 z-10">
          <ThreeDBackground />
        </div>
      </div>

      <div className="relative z-10 w-full overflow-x-hidden">
        <section
          id="home"
          className="
        flex
        min-h-screen
        w-full
        items-center
        justify-center
        px-4
        py-16
        sm:px-6
        md:px-8
      "
        >
          <Card
            className="
          appear
          w-full
          max-w-xl
          bg-gray-900/35
          text-white
          backdrop-blur-md!
        "
          >
            <CardHeader
              className="
            flex
            flex-col
            items-center
            justify-center
            gap-5
            px-5
            py-6
            sm:flex-row
            sm:px-6
          "
              style={{
                fontFamily: fonts.style.inter.fontFamily,
              }}
            >
              <img
                src="/icon.png"
                alt="Logo"
                className="
              h-24
              w-24
              shrink-0
              rounded-full
              sm:h-28
              sm:w-28
              md:h-32
              md:w-32
            "
              />

              <h1
                className="
                  text-center
                  text-2xl
                  font-bold
                  leading-tight
                  sm:text-left
                  sm:text-3xl
                "
              >
                Hello! <br />
                My name is...
                <br />

                <span className="mt-1 flex items-center justify-center">
                  <span className="ml-1 inline-block xl:min-w-[340px] lg:min-w-[340px]">
                    <NameChanger />
                  </span>
                </span>
              </h1>
            </CardHeader>

            <CardContent
              className="
            px-5
            text-center
            text-base
            text-gray-300
            sm:px-6
            sm:text-lg
          "
              style={{
                fontFamily: fonts.style.inter.fontFamily,
              }}
            >
              <p>
                I am a full stack developer who loves to create new stuff!
                <br />
                I also play instruments and games!
              </p>
            </CardContent>

            <CardFooter
              className="
            flex
            flex-wrap
            items-center
            justify-center
            gap-4
            bg-transparent
            px-5
            pb-6
            text-2xl
            sm:gap-5
            sm:text-3xl
          "
            >
              <a
                href="https://www.roblox.com/users/1648277089/profile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Roblox"
              >
                <SiRoblox className="text-red-500 transition-colors duration-300 hover:text-white" />
              </a>

              <a
                href="mailto:sarthak.ghoshal22@gmail.com"
                aria-label="Email"
              >
                <SiGmail className="text-green-500 transition-colors duration-300 hover:text-white" />
              </a>

              <a
                href="https://github.com/websitedeb"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub className="text-gray-400 transition-colors duration-300 hover:text-white" />
              </a>

              <a
                href="https://discord.com/users/822134854073450608"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
              >
                <FaDiscord className="text-blue-500 transition-colors duration-300 hover:text-white" />
              </a>

              <a
                href="https://www.tiktok.com/@sarthak_ghoshal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <FaTiktok className="text-pink-500 transition-colors duration-300 hover:text-white" />
              </a>

              <a
                href="https://www.npmjs.com/~web_dev_guy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="NPM"
              >
                <FaNpm className="text-yellow-500 transition-colors duration-300 hover:text-white" />
              </a>
            </CardFooter>
          </Card>
        </section>

        <section className="w-full px-4 sm:px-6 md:px-8 mb-85">
          <Article
            id="about"
            Title="Introducing Myself..."
            Children={
              <p>
                I am Sarthak, and I am currently{" "}
                {new Date().getFullYear() - 2010} years old! I mostly create
                full stack apps, but I can do other stuff like programming
                Robots, Discord Bots, and Roblox Games. I am also a swimmer and
                I play instruments like the Piano! I post vidoes on Tiktok and
                Youtube from time to time too!
              </p>
            }
          />
        </section>

        <section className="w-full px-4 sm:px-6 md:px-8 mb-85">
          <Article
            id="skills"
            Title="My Skills"
            Children={
              <TableContainer
                component={Paper}
                elevation={0}
                className="
              w-full
              overflow-x-auto
              overflow-y-hidden
              rounded-2xl!
              border
              border-white/10
              bg-gray-950/60!
              backdrop-blur-xl
              shadow-2xl
            "
              >
                <Table
                  sx={{
                    width: "100%",
                    tableLayout: "fixed",
                    "& .MuiTableCell-root": {
                      borderColor: "rgba(255,255,255,0.06)",
                    },
                  }}
                >
                  <TableHead>
                    <TableRow className="bg-white/5">
                      <TableCell
                        className="
                      w-[45%]
                      py-4!
                      text-xs!
                      font-semibold!
                      uppercase!
                      tracking-widest!
                      text-gray-400!
                      sm:py-5!
                    "
                      >
                        Technology
                      </TableCell>

                      <TableCell
                        className="
                      w-[55%]
                      py-4!
                      text-right!
                      text-xs!
                      font-semibold!
                      uppercase!
                      tracking-widest!
                      text-gray-400!
                      sm:py-5!
                    "
                      >
                        Stack
                      </TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {data.map((row) => (
                      <TableRow
                        key={row.name}
                        className="
                      group
                      transition-all
                      duration-200
                      hover:bg-white/5
                    "
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          className="py-4! sm:py-5!"
                        >
                          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                            <div
                              className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            border
                            border-white/10
                            bg-white/5
                            p-2
                            transition-all
                            duration-200
                            group-hover:border-white/20
                            group-hover:bg-white/10
                            sm:h-12
                            sm:w-12
                          "
                            >
                              {row.icon}
                            </div>

                            <div className="min-w-0">
                              <p
                                className="
                              warp-break-words
                              text-sm
                              font-medium
                              text-white
                              transition-colors
                              group-hover:text-cyan-300
                              sm:text-base
                            "
                              >
                                {row.name}
                              </p>
                            </div>
                          </div>
                        </TableCell>

                        <TableCell
                          align="right"
                          className="py-4! sm:py-5!"
                        >
                          <div className="flex justify-end">
                            <div
                              className="
                            max-w-full
                            rounded-xl
                            p-1
                            transition-all
                            duration-200
                            sm:p-2
                          "
                            >
                              <img
                                src={`https://go-skill-icons.vercel.app/api/icons?i=${row.img_str}`}
                                alt={row.name}
                                className="
                              block
                              max-h-10
                              max-w-full
                              object-contain
                              sm:max-h-12
                            "
                              />
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            }
          />
        </section>

        <section className="w-full px-4 sm:px-6 md:px-8 mb-85">
          <Article
            id="projects"
            Title="My Projects"
            Children={
              <div className="mx-auto w-full max-w-6xl">

                <ProjectSection
                  Title="Saragarhi"
                  Paragraphcontent="A scouting and team management platform built for FRC robotics teams."
                  Link="https://saragarhi.pages.dev"
                  Image={
                    <img
                      src="/projects/saragarhi/icon.png"
                      alt="Saragarhi"
                      className="h-full w-full object-cover"
                    />
                  }
                  Images={Array.from({ length: 5 }, (_, i) => (
                    <img
                      key={i + 1}
                      src={`/projects/saragarhi/image${i + 1}.png`}
                      alt={`Saragarhi ${i + 1}`}
                      className="h-full w-full object-cover"
                    />
                  ))}
                />

                <div className="h-4 sm:h-6" />

                <ProjectSection
                  Title="Romine"
                  Paragraphcontent="A microsoft points bot that automates collecting points."
                  Link="https://romine.pages.dev"
                  Image={
                    <img
                      src="/projects/romine/icon.png"
                      alt="Romine"
                      className="h-full w-full object-cover"
                    />
                  }
                  Images={Array.from({ length: 4 }, (_, i) => (
                    <img
                      key={i + 1}
                      src={`/projects/romine/image${i + 1}.png`}
                      alt={`Romine ${i + 1}`}
                      className="h-full w-full object-cover"
                    />
                  ))}
                />

                <div className="h-4 sm:h-6" />

                <ProjectSection
                  Title="Sharpskript"
                  Paragraphcontent="A custom language I am currently developing, which is a mix of Lua and Typescript."
                  Link="https://github.com/websitedeb/Sharpskript"
                  Image={
                    <img
                      src="/projects/sharpskript/icon.png"
                      alt="Sharpskript"
                      className="h-full w-full object-cover"
                    />
                  }
                  Images={Array.from({ length: 1 }, (_, i) => (
                    <img
                      key={i + 1}
                      src={`/projects/sharpskript/image${i + 1}.png`}
                      alt={`Sharpskript ${i + 1}`}
                      className="h-full w-full object-cover"
                    />
                  ))}
                />

                <div className="h-4 sm:h-6" />

                <ProjectSection
                  Title="Advisha Services"
                  Paragraphcontent="A tax and accounting services website built for Advisha Services."
                  Link="https://advisha-services.pages.dev"
                  Image={
                    <img
                      src="/projects/advisha/icon.png"
                      alt="Advisha Services"
                      className="h-full w-full object-cover"
                    />
                  }
                  Images={Array.from({ length: 1 }, (_, i) => (
                    <img
                      key={i + 1}
                      src={`/projects/advisha/image${i + 1}.png`}
                      alt={`Advisha Services ${i + 1}`}
                      className="h-full w-full object-cover"
                    />
                  ))}
                />

                <div className="h-4 sm:h-6" />

                <ProjectSection
                  Title="Red Alert Robotic's Robot Code"
                  Paragraphcontent="I worked on the code for Red Alert Robotic's FRC robots. The code is written in Java and uses the WPILib library."
                  Link="https://github.com/RAR1741"
                  Image={
                    <img
                      src="/projects/1741/icon.png"
                      alt="Red Alert Robotic's 2025-2028 Robot Code"
                      className="h-full w-full object-cover"
                    />
                  }
                  Images={Array.from({ length: 2 }, (_, i) => (
                    <img
                      key={i + 1}
                      src={`/projects/1741/image${i + 1}.png`}
                      alt={`Red Alert Robotic's 2025-2028 Robot Code ${2024 + i + 1
                        }`}
                      className="h-full w-full object-cover"
                    />
                  ))}
                />
              </div>
            }
          />
        </section>
        <Footer />
      </div>
    </>
  ) : (<PlayButton />
  );
}
