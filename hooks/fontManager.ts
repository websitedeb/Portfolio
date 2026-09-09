import { NextFont } from "next/dist/compiled/@next/font"
import { Roboto, Inter } from "next/font/google"

const roboto : NextFont = Roboto({ subsets: ["latin"], weight:"500"})
const inter : NextFont = Inter({ subsets: ["latin"], weight:"500"})

interface Fonts {
    classname: {
        roboto: string;
        inter: string;
    };
    style: {
        roboto: {
            fontFamily: string;
            fontWeight?: number | undefined;
            fontStyle?: string | undefined;
        };
        inter: {
            fontFamily: string;
            fontWeight?: number | undefined;
            fontStyle?: string | undefined;
        };
    };
}

const fonts : Fonts = {
    classname: {
        roboto: roboto.className,
        inter: inter.className
    },
    style: {
        roboto: roboto.style,
        inter: inter.style
    }
}

export default fonts;