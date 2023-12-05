import icon from "../../svg/aoyo-jun-icon.svg";
import iconHover from "../../svg/aoyo-jun-icon-hover.svg";
import moon from "../../svg/moon.svg";

export default function Header() {

  return (
    <div className="row-span-1 grid grid-cols-16">
        {/* Cell 1 */}
        <div id="cell-1" className="col-span-1 custom-border-b custom-border-r flex items-center justify-center">
            {/* Logo Icon */}
            <a href="/">
              <img src={iconHover} alt="iconHover" className="absolute h-[5.93vmin] w-[5.93vmin] opacity-0 hover:opacity-100 transition duration-300"/>
              <img src={icon} alt="icon" className="h-[5.93vmin] w-[5.93vmin]"/>
            </a>
        </div>
        {/* Cell 2 */}
        <div id="cell-2" className="col-span-2 custom-border-b custom-border-r flex items-center justify-center">
          <p className="unselectable text-[1.354vw] tracking-[0.25vw] text-[#F0F0F0] hover:text-[#3184D8] transition duration-300 cursor-pointer">ABOUT</p>
        </div>
        {/* Cell 3 */}
        <div id="cell-3" className="col-span-2 custom-border-b custom-border-r flex items-center justify-center">
          <p className="unselectable text-[1.354vw] tracking-[0.25vw] text-[#F0F0F0] hover:text-[#3184D8] transition duration-300 cursor-pointer">PROJECTS</p>
        </div>
        {/* Cell 4 */}
        <div id="cell-4" className="col-span-2 custom-border-b custom-border-r flex items-center justify-center">
          <p className="unselectable text-[1.354vw] tracking-[0.25vw] text-[#F0F0F0] hover:text-[#3184D8] transition duration-300 cursor-pointer">CONTACT</p>
        </div>
        {/* Cell 5 */}
        <div id="cell-5" className="col-span-4 custom-border-b custom-border-r"></div>
        {/* Cell 6 */}
        <div id="cell-6" className="col-span-1 custom-border-b custom-border-r flex items-center justify-center">
          <img draggable="false" src={moon} alt="icon" className="h-[3.02vmin] w-[3.02vmin]" />
        </div>
        {/* Cell 7 */}
        <div id="cell-7" className="col-span-4 custom-border-b"></div>
    </div>
  );
}
