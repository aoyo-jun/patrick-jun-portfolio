import icon from "../../svg/aoyo-jun-icon.svg";
import moon from "../../svg/moon.svg";

export default function Header() {
  return (
    <div className="row-span-1 grid grid-cols-16">
        {/* Cell 1 */}
        <div id="cell-1" className="col-span-1 custom-border-b custom-border-r flex items-center justify-center">
            {/* Logo Icon */}
            <a draggable="false" href="/">
                <img draggable="false" src={icon} alt="icon" className="h-[55px] w-[55px]"/>
            </a>
        </div>
        {/* Cell 2 */}
        <div id="cell-2" className="col-span-2 custom-border-b custom-border-r flex items-center justify-center">
          <p className="unselectable text-[1.354vw] tracking-[0.25vw] text-[#F0F0F0]">ABOUT</p>
        </div>
        {/* Cell 3 */}
        <div id="cell-3" className="col-span-2 custom-border-b custom-border-r flex items-center justify-center">
          <p className="unselectable text-[1.354vw] tracking-[0.25vw] text-[#F0F0F0]">PROJECTS</p>
        </div>
        {/* Cell 4 */}
        <div id="cell-4" className="col-span-2 custom-border-b custom-border-r flex items-center justify-center">
          <p className="unselectable text-[1.354vw] tracking-[0.25vw] text-[#F0F0F0]">CONTACT</p>
        </div>
        {/* Cell 5 */}
        <div id="cell-5" className="col-span-4 custom-border-b custom-border-r"></div>
        {/* Cell 6 */}
        <div id="cell-6" className="col-span-1 custom-border-b custom-border-r flex items-center justify-center">
          <img draggable="false" src={moon} alt="icon" />
        </div>
        {/* Cell 7 */}
        <div id="cell-7" className="col-span-4 custom-border-b"></div>
    </div>
  );
}
