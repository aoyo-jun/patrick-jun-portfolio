import HeaderItems from "./HeaderItems"

export default function Header() {
    return (
        <header className="flex items-center justify-start lg:justify-center opacity-100 translate-none rotate-none scale-none transform-none font-kodemono
        text-[0.725em] md:text-[0.8em] lg:text-[0.9em] h-[50px] lg:h-[90px] w-full">
            {/* Outer Div */}
            <div className="flex flex-row items-center justify-center ml-[12px] gap-[2px] lg:gap-[3px]">
                {/* Home */}
                <a href="/">
                    <div className="flex items-center justify-center bg-default-primary hover:bg-default-secondary
                    size-[24px] md:size-[26px] lg:size-[27px] pt-[9px] pb-[11px] rounded-[3px]">
                        /
                    </div>
                </a>
                {/* Items */}
                <HeaderItems mainText={"ABOUT"} shortcutText={"A"} href="#about" />
                <HeaderItems mainText={"PROJECTS"} shortcutText={"P"} href="#projects" />
                <HeaderItems mainText={"GITHUB"} shortcutText={"G"} isGithub href="https://github.com/aoyo-jun" />
                <HeaderItems mainText={"LINKEDIN"} shortcutText={"L"} isLinkedin href="https://www.linkedin.com/in/patrick-jun-miyaura-ihy" />
                <HeaderItems mainText={"CONTACT"} shortcutText={"C"} href="#contact" />
            </div>
        </header>
    )
}