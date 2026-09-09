"use client";

import {
    FaGithub,
    FaDiscord,
    FaTiktok,
    FaNpm,
    FaYoutube,
} from "react-icons/fa";
import { SiRoblox, SiGmail } from "react-icons/si";
import fonts from "@/hooks/fontManager";
import NameChanger from "./nameChanger";

export default function Footer() {
    const currentSongUrl = "https://www.youtube.com/watch?v=e1xCOsgWG0M";

    return (
        <footer
            className="
                relative
                mt-32
                overflow-hidden
                border-t
                border-cyan-400/20
                bg-gray-950/60
                px-8
                py-16
                backdrop-blur-2xl
            "
        >
            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-linear-to-br
                    from-cyan-500/5
                    via-transparent
                    to-blue-500/5
                "
            />

            <div className="relative z-10 mx-auto max-w-6xl">
                <div className="grid gap-12 md:grid-cols-3">

                    <div>
                        <div
                            className="flex items-center gap-4"
                            style={{
                                fontFamily: fonts.style.inter.fontFamily,
                            }}
                        >
                            <img
                                src="/icon.png"
                                alt="Sarthak's profile picture"
                                className="
                                    h-24
                                    w-24
                                    shrink-0
                                    rounded-full
                                    object-cover
                                    border
                                    border-cyan-400/20
                                    shadow-lg
                                "
                            />

                            <h2 className="text-2xl font-bold text-cyan-400">
                                <NameChanger />
                            </h2>
                        </div>

                        <p
                            className="
                                mt-4
                                max-w-sm
                                text-gray-400
                            "
                            style={{
                                fontFamily: fonts.style.roboto.fontFamily,
                            }}
                        >
                            Full stack developer and master at slacking off
                        </p>
                    </div>

                    <div className="ml-20">
                        <h3
                            className="
                                mb-5
                                text-lg
                                font-semibold
                                text-white
                            "
                            style={{
                                fontFamily: fonts.style.inter.fontFamily,
                            }}
                        >
                            Navigation
                        </h3>

                        <nav className="flex flex-col gap-3">
                            {[
                                ["Home", "home"],
                                ["About Me", "about"],
                                ["Skills", "skills"],
                                ["Projects", "projects"],
                            ].map(([name, id]) => (
                                <a
                                    key={id}
                                    href={`#${id}`}
                                    className="
                                        w-fit
                                        text-gray-400
                                        transition-colors
                                        duration-200
                                        hover:text-cyan-400
                                    "
                                >
                                    {name}
                                </a>
                            ))}
                        </nav>
                    </div>

                    <div>
                        <h3
                            className="
                                mb-5
                                text-lg
                                font-semibold
                                text-white
                            "
                            style={{
                                fontFamily: fonts.style.inter.fontFamily,
                            }}
                        >
                            Current Song on Repeat
                        </h3>

                        <a
                            href={currentSongUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                group
                                flex
                                items-center
                                gap-4
                                rounded-2xl
                                border
                                border-white/10
                                bg-white/5
                                p-4
                                transition-all
                                duration-300
                                hover:border-red-400/40
                                hover:bg-white/10
                            "
                        >
                            <div
                                className="
                                    flex
                                    h-12
                                    w-12
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-red-500/10
                                    text-red-500
                                    transition-transform
                                    duration-300
                                    group-hover:scale-110
                                "
                            >
                                <FaYoutube size={24} />
                            </div>

                            <div>
                                <p className="font-medium text-white">
                                    DECO*27 - The Vampire feat. Hatsune Miku
                                </p>

                                <p className="text-sm text-gray-500">
                                    Listen on YouTube →
                                </p>
                            </div>
                        </a>
                    </div>
                </div>

                <div
                    className="
                        mt-12
                        flex
                        flex-wrap
                        items-center
                        justify-between
                        gap-6
                        border-t
                        border-white/10
                        pt-8
                    "
                >
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} Sarthak. All rights reserved.
                    </p>

                    <div className="flex items-center gap-5 text-xl">
                        <a
                            href="https://www.roblox.com/users/1648277089/profile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                text-red-500
                                transition-colors
                                hover:text-white
                            "
                        >
                            <SiRoblox />
                        </a>

                        <a
                            href="mailto:sarthak.ghoshal22@gmail.com"
                            className="
                                text-green-500
                                transition-colors
                                hover:text-white
                            "
                        >
                            <SiGmail />
                        </a>

                        <a
                            href="https://github.com/websitedeb"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                text-gray-400
                                transition-colors
                                hover:text-white
                            "
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://discord.com/users/822134854073450608"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                text-blue-500
                                transition-colors
                                hover:text-white
                            "
                        >
                            <FaDiscord />
                        </a>

                        <a
                            href="https://www.tiktok.com/@sarthak_ghoshal"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                text-pink-500
                                transition-colors
                                hover:text-white
                            "
                        >
                            <FaTiktok />
                        </a>

                        <a
                            href="https://www.npmjs.com/~web_dev_guy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                text-yellow-500
                                transition-colors
                                hover:text-white
                            "
                        >
                            <FaNpm />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}