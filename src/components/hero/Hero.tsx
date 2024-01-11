// CSS & Utils
import { cn } from "../../lib/utils";
import "./Hero.css";

// SVGs
import linkedin from "../../svg/linkedin.svg";
import github from "../../svg/github.svg";
import scroll from "../../svg/scroll.svg";
import click from "../../svg/click.svg";
import question from "../../svg/question.svg";

// Icons
import { Mail, X } from "lucide-react";

// Others
import { Dispatch, SetStateAction} from "react";

interface HeroProps {
    isCardSlided: number;
    OnCardClick: () => void;
    isContactClicked: number;
    setIsContactClicked: Dispatch<SetStateAction<number>>;
    OnContactClick: () => void
}

export default function Hero({
    isCardSlided,
    OnCardClick,
    isContactClicked,
    setIsContactClicked,
    OnContactClick
}: HeroProps) {
    return (
        // Collums
        <div className="row-span-8 grid grid-cols-16">
            {/* About me group */}
            {/* Cell 8 */}
            {/* When card is slided, splits Cell 8 in two divs to create the bottom border */}
            {isCardSlided === 1
                ? (<div id="cell-8" className="col-span-1 grid grid-rows-8">
                    <div className="row-span-7 custom-border-r"></div>
                    <div className="row-span-1 custom-border-r"></div>
                </div>)
                : (<div id="cell-8" className="col-span-1 custom-border-r"></div>)
            }
            {/* Cell 9 */}
            {/* When card is slided, splits Cell 9 in two divs to create the bottom border */}
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
                        {/* About Me Card cover */}
                        <div 
                            onClick={() => OnCardClick()}
                            className={cn(
                                "h-[74.75vh] w-[11vw] bg-[#F0F0F0] rounded-xl flex items-center justify-center cursor-pointer z-10 overflow-hidden",
                                isCardSlided === 1 && "slide-left",
                                isCardSlided === 2 && "slide-left-reverse"
                            )}
                        >
                            <p className="unselectable rotate-270 text-[16vmin] tracking-[1.25vmin] text-[#3184D8] mr-[1.62vmin]">CREATIVE</p>
                        </div>
                        {/* About Me Card content */}
                        <div className="absolute h-[72.25vh] w-[9.9vw] rounded-xl bg-[#141414] rotate-gradient after:blur-[0.5rem] flex-row items-center justify-center">
                            <p  className="mt-[4.5vmin] text-center text-[2.5vmin] font-[300] tracking-[0.1vmin] rotate-gradient-text">
                                <span className="text-[2.8vmin]">ABOUT ME</span> <br /> <br /> Greetings! <br /> I'm Patrick Jun, <br /> a passionate <br />
                                and creative <br /> front-end web <br /> developer <br /> with a flair <br /> for crafting <br /> interactive <br /> and visually<br />
                                stunning <br /> websites. <br />
                            </p>
                        </div>
                    </div>
                </div>
                {/* Cell 11 */}
                <div id="cell-11" className="row-span-1 custom-border-l"></div>
            </div>



            {/* Center cards group */}
            <div className="col-span-6 grid grid-rows-8">
                {/* Cell 12 */}
                <div id="cell-12" className="row-span-2 custom-border-l">
                    {/* "Patrick" card outer div */}
                    <div className="absolute flex items-center justify-center h-[22.25vh] w-[37.5vw] z-10">
                        {/* "Patrick" card inner div */}
                        <div className="h-[19.25vh] w-[36vw] bg-[#F0F0F0] rounded-xl flex items-center justify-center overflow-hidden">
                            <p className="unselectable text-[7.187vw] tracking-[1.438vw] text-[#F0F0F0] ml-[0.776vw] mb-[0.719vw] text-outline">PATRICK</p>
                        </div>
                    </div>
                </div>
                <div className="row-span-2 grid grid-cols-6">
                    {/* Cell 13 */}
                    <div id="cell-13" className="col-span-3 custom-border-l custom-border-t flex items-center justify-center">
                        {/* Click me div */}
                        <div className="h-[9.17vh] w-[7.03vw] border-[1px] border-[#F0F0F0] rounded-xl flex items-center justify-center jiggle-horizontal overflow-hidden">
                            <img draggable="false" className="" src={click} alt="clickme" />
                        </div>
                    </div>
                    {/* Cell 14 */}
                    <div id="cell-14" className="col-span-3 custom-border-l custom-border-t">
                        {/* "Jun" card outer div */}
                        <div className="absolute flex items-center justify-center h-[22.25vh] w-[18.750vw] z-10">
                            {/* "Jun" card inner div */}
                            <div className="h-[19.25vh] w-[17.375vw] bg-[#F0F0F0] rounded-xl flex items-center justify-center overflow-hidden">
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
                            <div className={cn(
                                    "flex items-center justify-center h-[22vh] w-[31.250vw]",
                                    isContactClicked === 0 && "custom-border-trans-l custom-border-b",
                                    isContactClicked === 1 && "center-cards-slide-right custom-border-l custom-border-b before:delay-1000",
                                    isContactClicked === 2 && "center-cards-slide-right-reverse custom-border-trans-l custom-border-b before:delay-0",
                                )}
                            >
                                <div className="h-[19.25vh] w-[29.825vw] bg-[#F0F0F0] rounded-xl flex items-center justify-center overflow-hidden">
                                    {isContactClicked === 0 && (<>
                                        <p className="absolute unselectable text-[7.187vw] tracking-[1.438vw] text-[#F0F0F0] ml-[0.9vw] mb-[0.719vw] text-outline">FRONT</p>
                                        <p className="absolute unselectable text-[7.187vw] tracking-[1.438vw] text-[#F0F0F0] ml-[0.9vw] mb-[0.719vw] text-outline opacity-0">READY</p>
                                    </>)}
                                    {isContactClicked === 1 && (<>
                                        <p className="absolute unselectable text-[7.187vw] tracking-[1.438vw] text-[#F0F0F0] ml-[0.9vw] mb-[0.730vw] text-outline disappear animation-delay-1000">FRONT</p>
                                        <p className="absolute unselectable text-[7.187vw] tracking-[1.438vw] text-[#F0F0F0] ml-[0.9vw] mb-[0.719vw] text-outline opacity-0 appear animation-delay-1000">READY</p>
                                    </>)}
                                    {isContactClicked === 2 && (<>
                                        <p className="absolute unselectable text-[7.187vw] tracking-[1.438vw] text-[#F0F0F0] ml-[0.9vw] mb-[0.730vw] text-outline opacity-0 appear">FRONT</p>
                                        <p className="absolute unselectable text-[7.187vw] tracking-[1.438vw] text-[#F0F0F0] ml-[0.9vw] mb-[0.719vw] text-outline disappear">READY</p>
                                    </>)}
                                </div>
                            </div>
                        </div>
                        {/* divs for the grid space */}
                        <div className="absolute h-[33.3vh] w-[6.25vw]">
                            <div className={cn(
                                    "h-[33.3vh] w-[6.25vw]",
                                    isContactClicked === 0 && "custom-border-trans-l",
                                    isContactClicked === 1 && "custom-border-l before:delay-1000 before:duration-300",
                                    isContactClicked === 2 && "custom-border-trans-l before:delay-0",
                                )}
                            ></div>
                        </div>
                        <div className="col-span-3 custom-border-t custom-border-l"></div>
                        <div className="col-span-2 custom-border-t"></div>
                    </div>
                    <div className="col-span-1 grid grid-rows-2">
                        {/* Cell 16 */}
                        <div id="cell-16" className={cn(
                                "row-span-1",
                                isContactClicked === 0 && "custom-border-l custom-border-t custom-border-r",
                                isContactClicked === 1 && "custom-border-t custom-border-trans-l custom-border-trans-r",
                                isContactClicked === 2 && "custom-border-l custom-border-t custom-border-r",
                            )}
                        >
                            {/* Contact button outer div */}
                            <div className="absolute flex items-center justify-center h-[11.175vh] w-[6.25vw] z-10">
                                {/* Contact button inner div */}
                                <div
                                    className={cn(
                                        "h-[8.05vh] w-[4.8vw] bg-[#F0F0F0] rounded-xl flex items-center justify-center cursor-pointer z-10 transition duration-300",
                                        isContactClicked === 0 && "hover:text-[#3184D8]",
                                        isContactClicked === 1 && "center-cards-slide-right hover:text-[#F84444]",
                                        isContactClicked === 2 && "center-cards-slide-right-reverse hover:text-[#3184D8]",
                                    )}
                                    onClick={() => OnContactClick()}
                                >
                                    {isContactClicked === 0 && (<>
                                        <Mail strokeWidth={1.5} className="absolute h-[4.35vh] w-[2.08vw] mt-[0.05vw]" />
                                        <X strokeWidth={1.5} className="absolute h-[4.3vh] w-[2.08vw] opacity-0" />
                                    </>)}
                                    {isContactClicked === 1 && (<>
                                        <Mail strokeWidth={1.5} className="absolute h-[4.35vh] w-[2.08vw] mt-[0.05vw] disappear animation-delay-1000" />
                                        <X strokeWidth={1.5} className="absolute h-[4.3vh] w-[2.08vw] opacity-0 appear animation-delay-1000" />
                                    </>)}
                                    {isContactClicked === 2 && (<>
                                        <Mail strokeWidth={1.5} className="absolute h-[4.35vh] w-[2.08vw] mt-[0.05vw] opacity-0 appear" />
                                        <X strokeWidth={1.5} className="absolute h-[4.3vh] w-[2.08vw] disappear" />
                                    </>)}
                                </div>
                            </div>
                        </div>
                        {/* Cell 17 */}
                        <div id="cell-17" className={cn(
                                "row-span-1",
                                isContactClicked === 0 && "custom-border-l custom-border-t custom-border-r custom-border-b",
                                isContactClicked === 1 && "custom-border-trans-l custom-border-trans-t custom-border-trans-r custom-border-trans-b",
                                isContactClicked === 2 && "custom-border-l custom-border-t custom-border-r custom-border-b",
                            )}></div>  
                    </div>
                </div>
                {/* Cell 18 */}
                <div id="cell-18" className="row-span-2 grid grid-rows-2">
                    {/* "Webdev" card outer div */}
                    <div className="absolute flex items-center justify-center h-[22.25vh] w-[37.5vw] z-10">
                        {/* "Webdev" card inner div */}
                        <div className={cn(
                                "flex items-center justify-center h-[22.25vh] w-[37.5vw]",
                                isContactClicked === 0 && "custom-border-trans-l",
                                isContactClicked === 1 && "center-cards-slide-right custom-border-l before:delay-1000",
                                isContactClicked === 2 && "center-cards-slide-right-reverse custom-border-trans-l before:delay-0",
                            )}
                        >
                            <div className={cn(
                                    "h-[19.25vh] w-[36vw] bg-[#F0F0F0] rounded-xl flex items-center justify-center",
                                    isContactClicked === 1 && "text-[#F0F0F0] hover:text-[#3184D8]",
                                    isContactClicked !== 1 && "text-[#F0F0F0]",
                                )}
                            >
                                {isContactClicked === 0 && (<>
                                    <p className="absolute unselectable text-[7.187vw] tracking-[1.438vw] ml-[0.9vw] mb-[0.719vw] text-outline">WEBDEV</p>
                                    <p className="absolute unselectable text-[7.187vw] tracking-[1.438vw] ml-[0.9vw] mb-[0.719vw] text-outline opacity-0">SUBMIT</p>
                                </>)}
                                {isContactClicked === 1 && (<>
                                    <p className="absolute unselectable text-[7.187vw] tracking-[1.438vw] ml-[0.9vw] mb-[0.730vw] text-outline disappear animation-delay-1000">WEBDEV</p>
                                    <p className="absolute unselectable text-[7.187vw] tracking-[1.438vw] ml-[0.9vw] mb-[0.719vw] text-outline opacity-0 appear animation-delay-1000">SUBMIT</p>
                                </>)}
                                {isContactClicked === 2 && (<>
                                    <p className="absolute unselectable text-[7.187vw] tracking-[1.438vw] ml-[0.9vw] mb-[0.730vw] text-outline opacity-0 appear">WEBDEV</p>
                                    <p className="absolute unselectable text-[7.187vw] tracking-[1.438vw] ml-[0.9vw] mb-[0.719vw] text-outline disappear">SUBMIT</p>
                                </>)}
                            </div>
                        </div>
                    </div>
                    {/* divs for the grid space */}
                    <div className={cn(
                            "row-span-1 grid grid-cols-6",
                            isContactClicked === 0 && "custom-border-l custom-border-r",
                            isContactClicked === 1 && "custom-border-l custom-border-trans-r",
                            isContactClicked === 2 && "custom-border-l custom-border-r",
                        )}
                    >
                        <div className="col-span-5"></div>
                    </div>
                    <div className={cn(
                            "row-span-1",
                            isContactClicked === 0 && "custom-border-l custom-border-r",
                            isContactClicked === 1 && "custom-border-l custom-border-trans-r",
                            isContactClicked === 2 && "custom-border-l custom-border-r",
                        )}
                    ></div>
                </div>
            </div>




            {/* Link buttons group */}
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
                <div id="cell-22" className={cn(
                        "row-span-3",
                        isContactClicked === 0 && "custom-border-t custom-border-r",
                        isContactClicked === 1 && "custom-border-t custom-border-trans-r",
                        isContactClicked === 2 && "custom-border-t custom-border-r",
                    )}
                ></div>
                {/* Cell 23 */}
                <div id="cell-23" className={cn(
                        "row-span-1",
                        isContactClicked === 0 && "custom-border-t custom-border-r",
                        isContactClicked === 1 && "custom-border-trans-t custom-border-trans-r",
                        isContactClicked === 2 && "custom-border-t custom-border-r",
                    )}
                >
                    {/* Scroll button outer div */}
                    <div className="absolute flex items-center justify-center h-[11.175vh] w-[6.25vw] z-10">
                        {/* Scroll button inner div */}
                        <div className={cn(
                            "h-[8.05vh] w-[4.80vw] bg-[#F0F0F0] rounded-xl flex items-center justify-center",
                            isContactClicked === 1 && "mouse-slide-up-right",
                            isContactClicked === 2 && "mouse-slide-up-right-reverse"
                            )}
                        >
                            {isContactClicked === 0 && (<>
                                <img draggable="false" src={scroll} alt="scroll" className="absolute h-[6vh] w-[1.25vw] jiggle-vertical" />
                                <img draggable="false" src={question} alt="question mark" className="absolute h-[5.2vh] w-[2.925vw] opacity-0" />
                            </>)}
                            {isContactClicked === 1 && (<>
                                <img draggable="false" src={scroll} alt="scroll" className="absolute h-[6vh] w-[1.25vw] disappear animation-delay-1000" />
                                <img draggable="false" src={question} alt="question mark" className="absolute h-[5.2vh] w-[2.925vw] opacity-0 appear animation-delay-1000" />
                            </>)}
                            {isContactClicked === 2 && (<>
                                <img draggable="false" src={scroll} alt="scroll" className="absolute h-[6vh] w-[1.25vw] opacity-0 appear" onAnimationEnd={() => setTimeout(() => {setIsContactClicked(0)}, 1600)} />
                                <img draggable="false" src={question} alt="question mark" className="absolute h-[5.2vh] w-[2.925vw] disappear" />
                            </>)}
                        </div>
                    </div>
                </div>
            </div>


            
            {/* Cell 24 */}
            <div id="cell-24" className="col-span-4 grid grid-rows-2">
                <div className="row-span-1"></div>
                <div className="row-span-1 grid grid-cols-4">
                    <div className={cn(
                            "col-span-3",
                            isContactClicked === 0 && "custom-border-trans-t",
                            isContactClicked === 1 && "custom-border-t after:delay-1000",
                            isContactClicked === 2 && "custom-border-trans-t after:delay-0 after:duration-300 before:duration-300",
                        )}
                    ></div>
                    <div className="col-span-1 grid grid-rows-4">
                        <div className={cn(
                                "row-span-1 grid grid-rows-2",
                                isContactClicked === 0 && "custom-border-trans-t custom-border-trans-l custom-border-trans-b",
                                isContactClicked === 1 && "custom-border-t custom-border-l custom-border-b after:delay-1000 before:delay-1000",
                                isContactClicked === 2 && "custom-border-trans-t custom-border-trans-l custom-border-trans-b after:delay-0 before:delay-0 after:duration-300 before:duration-300",
                            )}
                        ></div>
                        <div className={cn(
                                "row-span-1 grid grid-rows-2",
                                isContactClicked === 0 && "custom-border-trans-l custom-border-trans-b",
                                isContactClicked === 1 && "custom-border-l custom-border-b after:delay-1000 before:delay-1000",
                                isContactClicked === 2 && "custom-border-trans-l custom-border-trans-b after:delay-0 before:delay-0 after:duration-300 before:duration-300",
                            )}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    )
}