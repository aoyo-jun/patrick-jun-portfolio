import { cn } from "../lib/utils";
import { useState } from "react";

export default function App() {
  const [isCardSlided, setIsCardSlided] = useState(0);
  
  function OnCardHover() {
    if (isCardSlided === 0 || isCardSlided === 2) {
      setIsCardSlided(1);
    }
  }

  function OnCardUnhover() {
    if (isCardSlided === 1) {
      setIsCardSlided(2);
    }
  }

  return (
    <div className="h-screen w-screen grid grid-rows-9">
      <div className="row-span-1 grid grid-cols-16">
        {/* Cells 1-7 */}
        <div id="cell-1" className="col-span-1 custom-border-b custom-border-r flex items-center justify-center">
          <a href="/">
            <img src="../svg/aoyo-jun-icon-hover.svg" alt="icon"/>
          </a>
        </div>
        <div id="cell-2" className="col-span-2 custom-border-b custom-border-r"></div>
        <div id="cell-3" className="col-span-2 custom-border-b custom-border-r"></div>
        <div id="cell-4" className="col-span-2 custom-border-b custom-border-r"></div>
        <div id="cell-5" className="col-span-4 custom-border-b custom-border-r"></div>
        <div id="cell-6" className="col-span-1 custom-border-b custom-border-r"></div>
        <div id="cell-7" className="col-span-4 custom-border-b"></div>
      </div>
      <div className="row-span-8 grid grid-cols-16">
        {/* Cells 8-9 */}
        {isCardSlided === 1
          ? (<div id="cell-8" className="col-span-1 grid grid-rows-8">
              <div className="row-span-7 custom-border-r"></div>
              <div className="row-span-1 custom-border-r"></div>
            </div>)
          : (<div id="cell-8" className="col-span-1 custom-border-r"></div>)
        }
        <div id="cell-9" className="col-span-2 grid grid-rows-8">
          <div className="row-span-7"></div>
          <div className={cn(
            "row-span-1",
            isCardSlided === 1 && "custom-border-t appear",
            isCardSlided === 2 && "custom-border-t disappear",
          )}></div>
        </div>
        <div className="col-span-2 grid grid-rows-8">
          {/* Cells 10-11 */}
          <div id="cell-10" className="row-span-7 custom-border-b custom-border-l">
            <div onMouseEnter={() => OnCardHover()} onMouseLeave={() => OnCardUnhover()} className="absolute flex items-center justify-center h-[77.75vh] w-[12.625vw] z-10">
              <div className={cn(
                "h-[74.75vh] w-[11vw] bg-[#F0F0F0] rounded-xl",
                isCardSlided === 1 && "slide-left",
                isCardSlided === 2 && "slide-right"
              )}></div>
              <div className={cn(
                "absolute h-[75vh] w-[12.5vw]",
                isCardSlided === 1 && "slide-left",
                isCardSlided === 2 && "slide-right"
              )}></div>
            </div>
          </div>
          <div id="cell-11" className="row-span-1 custom-border-l"></div>
        </div>
        <div className="col-span-6 grid grid-rows-8">
          {/* Cell 12 */}
          <div id="cell-12" className="row-span-2 custom-border-l">
            <div className="absolute flex items-center justify-center h-[22.25vh] w-[37.5vw] z-10">
              <div className="h-[19.25vh] w-[36vw] bg-[#F0F0F0] rounded-xl"></div>
            </div>
          </div>
          <div className="row-span-2 grid grid-cols-6">
            {/* Cells 13-14 */}
            <div id="cell-13" className="col-span-3 custom-border-l custom-border-t"></div>
            <div id="cell-14" className="col-span-3 custom-border-l custom-border-t">
              <div className="absolute flex items-center justify-center h-[22.25vh] w-[18.750vw] z-10">
                <div className="h-[19.25vh] w-[17.375vw] bg-[#F0F0F0] rounded-xl"></div>
              </div>
            </div>
          </div>
          <div className="row-span-2 grid grid-cols-6">
            {/* Cell 15 */}
            <div id="cell-15" className="col-span-5 grid grid-cols-5">
              <div className="absolute flex items-center justify-center h-[22.385vh] w-[31.250vw] z-10">
                <div className="h-[19.25vh] w-[29.825vw] bg-[#F0F0F0] rounded-xl"></div>
              </div>
              <div className="col-span-3 custom-border-t custom-border-l"></div>
              <div className="col-span-2 custom-border-t"></div>
            </div>
            <div className="col-span-1 grid grid-rows-2">
              {/* Cells 16-17 */}
              <div id="cell-16" className="row-span-1 custom-border-l custom-border-t custom-border-r">
                <div className="absolute flex items-center justify-center h-[11.175vh] w-[6.25vw] z-10">
                  <div className="h-[8vh] w-[4.75vw] bg-[#F0F0F0] rounded-xl"></div>
                </div>
              </div>
              <div id="cell-17" className="row-span-1 custom-border-l custom-border-t custom-border-r custom-border-b"></div>  
            </div>
          </div>
          {/* Cell 18 */}
          <div id="cell-18" className="row-span-2 grid grid-rows-2">
            <div className="absolute flex items-center justify-center h-[22.25vh] w-[37.5vw] z-10">
              <div className="h-[19.25vh] w-[36vw] bg-[#F0F0F0] rounded-xl"></div>
            </div>
            <div className="row-span-1 custom-border-l custom-border-r grid grid-cols-6">
              <div className="col-span-5 custom-border-t"></div>
            </div>
            <div className="row-span-1 custom-border-l custom-border-r"></div>
          </div>
        </div>
        <div className="col-span-1 grid grid-row-8">
          {/* Cells 19-23 */}
          <div id="cell-19" className="row-span-1 custom-border-l custom-border-r">
            <div className="absolute flex items-center justify-center h-[11.175vh] w-[6.25vw] z-10">
              <div className="h-[8vh] w-[4.75vw] bg-[#F0F0F0] rounded-xl"></div>
            </div>
          </div>
          <div id="cell-20" className="row-span-1 custom-border-l custom-border-t custom-border-r">
            <div className="absolute flex items-center justify-center h-[11.175vh] w-[6.25vw] z-10">
              <div className="h-[8vh] w-[4.75vw] bg-[#F0F0F0] rounded-xl"></div>
            </div>
          </div>
          <div id="cell-21" className="row-span-2 custom-border-l custom-border-t custom-border-r"></div>
          <div id="cell-22" className="row-span-3 custom-border-t custom-border-r"></div>
          <div id="cell-23" className="row-span-1 custom-border-t custom-border-r">
            <div className="absolute flex items-center justify-center h-[11.175vh] w-[6.25vw] z-10">
              <div className="h-[8vh] w-[4.75vw] bg-[#F0F0F0] rounded-xl"></div>
            </div>
          </div>
        </div>
        {/* Cell 24 */}
        <div id="cell-24" className="col-span-4"></div>
      </div>
    </div>
  )
}
