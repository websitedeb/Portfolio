import fonts from "@/hooks/fontManager";
import React from "react";

export default function Article({
    Title,
    Children,
    className = "",
    id,
}: {
    Title: React.ReactNode;
    Children: React.ReactNode;
    className?: string;
    id?: string;
}) {
    return (
        <section
            id={id}
            className={`
                appear
                relative
                mx-auto
                my-24
                w-[90%]
                max-w-6xl
                overflow-hidden
                rounded-3xl

                border border-cyan-400/20
                bg-gray-900/5
                backdrop-blur-2xl

                p-8
                md:p-12

                shadow-2xl
                transition-all
                duration-500

                hover:border-cyan-400/40
                hover:bg-gray-300/10
                hover:shadow-cyan-500/20

                ${className}
            `}
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

            <div className="relative z-10">
                <h2
                    className="
                        mb-6
                        text-4xl
                        font-semibold
                        tracking-tight
                        text-cyan-400
                        md:text-5xl
                    "
                    style={{
                        fontFamily: fonts.style.inter.fontFamily,
                    }}
                >
                    {Title}
                </h2>

                <div
                    className="
                        mb-8
                        h-1
                        w-full
                        rounded-full
                        bg-linear-to-r
                        from-cyan-400
                        to-blue-500
                    "
                />

                <article
                    className="
                        max-w-none
                        text-lg
                        leading-8
                        text-gray-200
                        md:text-xl
                    "
                    style={{
                        fontFamily: fonts.style.roboto.fontFamily,
                    }}
                >
                    {Children}
                </article>
            </div>
        </section>
    );
}