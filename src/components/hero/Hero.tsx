import { cn } from "../../lib/utils";
import { useState } from "react";
import "./Hero.css";
import mail from "../../svg/mail.svg";
import linkedin from "../../svg/linkedin.svg";
import github from "../../svg/github.svg";
import scroll from "../../svg/scroll.svg";
import click from "../../svg/click.svg";

export default function Header() {
    const [isCardSlided, setIsCardSlided] = useState(0);
  
    function OnCardClick() {
        if (isCardSlided === 0 || isCardSlided === 2) {
            setIsCardSlided(1);
        } else {
            setIsCardSlided(2);
        }
    }

    return (
        // Collums
        <div className="row-span-8 grid grid-cols-16">
            {/* Cell 8 */}
            {isCardSlided === 1
                ? (<div id="cell-8" className="col-span-1 grid grid-rows-8">
                    <div className="row-span-7 custom-border-r"></div>
                    <div className="row-span-1 custom-border-r"></div>
                </div>)
                : (<div id="cell-8" className="col-span-1 custom-border-r"></div>)
            }
            {/* Cell 9 */}
            <div id="cell-9" className="col-span-2 grid grid-rows-8">
                <div className="row-span-7"></div>
                <div className={cn(
                    "row-span-1",
                    isCardSlided === 1 && "custom-border-t appear",
                    isCardSlided === 2 && "custom-border-t disappear",
                )}></div>
            </div>
            <div className="col-span-2 grid grid-rows-8">
                {/* Cell 10 */}
                <div id="cell-10" className="row-span-7 custom-border-b custom-border-l">
                    {/* About Me card outer div */}
                    <div className="absolute flex items-center justify-center h-[77.75vh] w-[12.625vw]">
                        {/* About Me Card inner div */}
                        <div 
                            onClick={() => OnCardClick()}
                            className={cn(
                                "h-[74.75vh] w-[11vw] bg-[#F0F0F0] rounded-xl flex items-center justify-center cursor-pointer z-10",
                                isCardSlided === 1 && "slide-left",
                                isCardSlided === 2 && "slide-right"
                            )}
                        >
                            <p className="unselectable rotate-270 text-[16vmin] tracking-[1.25vmin] text-[#3184D8] mr-[1.62vmin]">CREATIVE</p>
                        </div>
                    </div>
                </div>
                {/* Cell 11 */}
                <div id="cell-11" className="row-span-1 custom-border-l"></div>
            </div>
            <div className="col-span-6 grid grid-rows-8">
                {/* Cell 12 */}
                <div id="cell-12" className="row-span-2 custom-border-l">
                    {/* "Patrick" card outer div */}
                    <div className="absolute flex items-center justify-center h-[22.25vh] w-[37.5vw] z-10">
                        {/* "Patrick" card inner div */}
                        <div className="h-[19.25vh] w-[36vw] bg-[#F0F0F0] rounded-xl flex items-center justify-center">
                            <p className="unselectable text-[7.187vw] tracking-[1.438vw] text-[#F0F0F0] ml-[0.776vw] mb-[0.719vw] text-outline">PATRICK</p>
                        </div>
                    </div>
                </div>
                <div className="row-span-2 grid grid-cols-6">
                    {/* Cell 13 */}
                    <div id="cell-13" className="col-span-3 custom-border-l custom-border-t flex items-center justify-center">
                        <div className="h-[9.17vh] w-[7.03vw] border-[1px] border-[#F0F0F0] rounded-xl flex items-center justify-center">
                            <img draggable="false" className="" src={click} alt="clickme" />
                        </div>
                    </div>
                    {/* Cell 14 */}
                    <div id="cell-14" className="col-span-3 custom-border-l custom-border-t">
                        {/* "Jun" card outer div */}
                        <div className="absolute flex items-center justify-center h-[22.25vh] w-[18.750vw] z-10">
                            {/* "Jun" card inner div */}
                            <div className="h-[19.25vh] w-[17.375vw] bg-[#F0F0F0] rounded-xl flex items-center justify-center">
                                <p className="unselectable text-[7.187vw] tracking-[1.438vw] text-[#F0F0F0] ml-[1.85vw] mb-[0.719vw] text-outline">JUN</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row-span-2 grid grid-cols-6">
                    {/* Cell 15 */}
                    <div id="cell-15" className="col-span-5 grid grid-cols-5">
                        {/* "Front" card outer div */}
                        <div className="absolute flex items-center justify-center h-[22.385vh] w-[31.250vw] z-10">
                            {/* "Front" card inner div */}
                            <div className="h-[19.25vh] w-[29.825vw] bg-[#F0F0F0] rounded-xl flex items-center justify-center">
                                <p className="unselectable text-[7.187vw] tracking-[1.438vw] text-[#F0F0F0] ml-[0.9vw] mb-[0.719vw] text-outline">FRONT</p>
                            </div>
                        </div>
                        {/* divs for the grid space */}
                        <div className="col-span-3 custom-border-t custom-border-l"></div>
                        <div className="col-span-2 custom-border-t"></div>
                    </div>
                    <div className="col-span-1 grid grid-rows-2">
                        {/* Cell 16 */}
                        <div id="cell-16" className="row-span-1 custom-border-l custom-border-t custom-border-r">
                            {/* Contact button outer div */}
                            <div className="absolute flex items-center justify-center h-[11.175vh] w-[6.25vw] z-10">
                                {/* Contact button inner div */}
                                <div className="h-[8vh] w-[4.75vw] bg-[#F0F0F0] rounded-xl flex items-center justify-center">
                                    <img draggable="false" className="h-[4.3vh] w-[2.08vw]" src={mail} alt="mail" />
                                </div>
                            </div>
                        </div>
                        {/* Cell 17 */}
                        <div id="cell-17" className="row-span-1 custom-border-l custom-border-t custom-border-r custom-border-b"></div>  
                    </div>
                </div>
                {/* Cell 18 */}
                <div id="cell-18" className="row-span-2 grid grid-rows-2">
                    {/* "Webdev" card outer div */}
                    <div className="absolute flex items-center justify-center h-[22.25vh] w-[37.5vw] z-10">
                        {/* "Webdev" card inner div */}
                        <div className="h-[19.25vh] w-[36vw] bg-[#F0F0F0] rounded-xl flex items-center justify-center">
                            <p className="unselectable text-[7.187vw] tracking-[1.438vw] text-[#F0F0F0] ml-[0.9vw] mb-[0.719vw] text-outline">WEBDEV</p>
                        </div>
                    </div>
                    {/* divs for the grid space */}
                    <div className="row-span-1 custom-border-l custom-border-r grid grid-cols-6">
                        <div className="col-span-5 custom-border-t"></div>
                    </div>
                    <div className="row-span-1 custom-border-l custom-border-r"></div>
                </div>
            </div>
            <div className="col-span-1 grid grid-row-8">
                {/* Cell 19 */}
                <div id="cell-19" className="row-span-1 custom-border-l custom-border-r">
                    {/* LinkedIn button outer div */}
                    <div className="absolute flex items-center justify-center h-[11.175vh] w-[6.25vw] z-10">
                        {/* LinkedIn button inner div */}
                        <div className="h-[8vh] w-[4.75vw] bg-[#F0F0F0] rounded-xl flex items-center justify-center">
                            <img draggable="false" className="h-[3.72vh] w-[1.8vw]" src={linkedin} alt="linkedin" />
                        </div>
                    </div>
                </div>
                {/* Cell 20 */}
                <div id="cell-20" className="row-span-1 custom-border-l custom-border-t custom-border-r">
                    {/* Github button outer div */}
                    <div className="absolute flex items-center justify-center h-[11.175vh] w-[6.25vw] z-10">
                        {/* Github button inner div */}
                        <div className="h-[8vh] w-[4.75vw] bg-[#F0F0F0] rounded-xl flex items-center justify-center">
                            <img draggable="false" className="h-[4vh] w-[2vw]" src={github} alt="github" />
                        </div>
                    </div>
                </div>
                {/* Cell 21 */}
                <div id="cell-21" className="row-span-2 custom-border-l custom-border-t custom-border-r"></div>
                {/* Cell 22 */}
                <div id="cell-22" className="row-span-3 custom-border-t custom-border-r"></div>
                {/* Cell 23 */}
                <div id="cell-23" className="row-span-1 custom-border-t custom-border-r">
                    {/* Scroll button outer div */}
                    <div className="absolute flex items-center justify-center h-[11.175vh] w-[6.25vw] z-10">
                        {/* Scroll button inner div */}
                        <div className="h-[8vh] w-[4.75vw] bg-[#F0F0F0] rounded-xl flex items-center justify-center">
                            <img draggable="false" className="h-[6vh] w-[1.25vw]" src={scroll} alt="scroll" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Cell 24 */}
            <div id="cell-24" className="col-span-4"></div>
        </div>
    )
}