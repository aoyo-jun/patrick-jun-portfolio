/* eslint-disable no-useless-escape */
import { useRef } from "react";
import { useDrag } from "../hooks/use-drag.js";
import { cn } from "../lib/utils.js";

export default function Main() {
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const draggableRefTitle = useRef(null);
    const draggableRefConsole = useRef(null);
    
    const { position: positionTitle, handleMouseDown: handleMouseDownTitle } = useDrag({ ref: draggableRefTitle });
    const { position: positionConsole, handleMouseDown: handleMouseDownConsole } = useDrag({ ref: draggableRefConsole });

    const titleText = [
        "   ______                __  _               _       __     __   ",
        "  / ____/_______  ____ _/ /_|_|   _____     | |     / /__  / /_  ",
        " / /   / ___/ _ \\/ __ \\/ __/ / | / / _ \\    | | /| / / _ \\/ __ \\ ",
        "/ /___/ /  /  __/ /_/ / /_/ /| |/ /  __/    | |/ |/ /  __/ /_/ / ",
        "\\____/_/   \\___/\\____/\\__/_/ |___/\\___/     |__/|__/\\___/_____/  ",
        "    ____                 __                                      ",
        "   / __ \\___ _   _____  / /___  ____  ___  _____                 ",
        "  / / / / _ \\ | / / _ \\/ / __ \\/ __ \\/ _ \\/ ___/                 ",
        " / /_/ /  __/ |/ /  __/ / /_/ / /_/ /  __/ /                     ",
        "/_____/\\___/|___/\\___/_/\\____/ ____/\\___/_/                      ",
        "                            /_/                                  ",
    ];

    return (
        // Wrapper
        <div className="flex flex-col items-center justify-center lg:justify-start">
            {/* title.exe outer div */}
            <div
                ref={!isMobile ? draggableRefTitle : undefined}
                style={!isMobile ? {top: positionTitle.y, left: positionTitle.x} : undefined}
                className={cn(
                    "flex flex-col items-start justify-start h-[30vh] w-[90vw] my-[20px] border-[1px] border-black-primary rounded-[0.3rem] bg-default-primary p-[5px] lg:p-[8px] pt-0 lg:pt-0 font-kodemono text-[0.6rem] lg:text-[0.7rem] z-1",
                    !isMobile && "fixed top-[100px] left-[30px] h-[35em] w-[65em] my-0 mx-0"
                )}
            >
                {/* title.exe draggable panel */}
                <div onMouseDown={!isMobile ? handleMouseDownTitle : undefined} className="absolute h-[28px] w-full lg:w-[65em] ml-[-9px] mt-[-1px] rounded-t-[0.3rem] z-0"></div>
                {/* title.exe text */}
                <p className="my-[4px] lg:my-[5px] ml-[4px]">title.exe</p>
                {/* title.exe inner div */}
                <div className="flex flex-col items-center lg:items-start justify-center h-full w-full pl-[0.4em] lg:pl-[3.25em] pb-[1em] border-[1px]
                border-black-primary rounded-[0.3rem] bg-black-bg font-spacemono text-default-bg text-[0.7em] md:text-[1em] lg:text-[1.4em] tracking-[-0.01em] leading-[1.4em]">
                    {titleText.map((line, index) => (
                        <p key={index} className="whitespace-pre">{line}</p>
                    ))}
                </div>
            </div>
            {/* console.exe outer div */}
            <div
                ref={!isMobile ? draggableRefConsole : undefined}
                style={!isMobile ? {top: positionConsole.y, left: positionConsole.x} : undefined}
                className={cn(
                    "flex flex-col items-start justify-start h-[30vh] w-[90vw] my-[20px] border-[1px] border-black-primary rounded-[0.3rem] bg-default-primary p-[5px] lg:p-[8px] pt-0 lg:pt-0 font-kodemono text-[0.6rem] lg:text-[0.7rem] z-3",
                    !isMobile && "fixed top-[100px] left-[684px] lg:left-[788px] h-[35em] w-[67.5em] my-0 mx-0"
                )}
            >
                {/* console.exe draggable panel */}
                <div onMouseDown={!isMobile ? handleMouseDownConsole : undefined} className="absolute h-[28px] w-full lg:w-[65em] ml-[-9px] mt-[-1px] rounded-t-[0.3rem] z-2"></div>
                {/* console.exe text */}
                <p className="my-[4px] lg:my-[5px] ml-[4px]">console.exe</p>
                {/* console.exe inner div */}
                <div className="flex flex-col items-start justify-start h-full w-full pl-[0.4em] lg:px-[0.8em] py-[0.8em] border-[1px]
                border-black-primary rounded-[0.3rem] bg-black-bg font-spacemono text-default-bg text-[0.9em] md:text-[1.05em] lg:text-[1.2em] leading-[1.3em]">
                    <p>Use this to control the website design, change the pattern of the dots, listen to some music or even play a game!</p>
                    <p>------------------------------------------------------------------------------</p>
                    <p>Type 'help' to see available commands.</p>
                    <p>------------------------------------------------------------------------------</p>
                </div>
            </div>
        </div>
    )
}