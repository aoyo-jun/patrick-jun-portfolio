import HeaderItems from "./header-items"

export default function Header() {
    return (
        <header className="opacity-100 translate-none rotate-none scale-none transform-none font-kodemono text-[0.725em] lg:text-[0.9em] mx-[12px] my-[12px] lg:mx-0 lg:my-[32px]">
            {/* Outer Div */}
            <div className="flex flex-row items-center justify-start lg:justify-center gap-[2px] lg:gap-[3px]">
                {/* Home */}
                <a href="/">
                    <div className="flex items-center justify-center bg-default-primary hover:bg-default-secondary size-[24px] lg:size-[27px] pt-[9px] pb-[11px] rounded-[3px]">
                        /
                    </div>
                </a>
                {/* Items */}
                <HeaderItems mainText={"ABOUT"} shortcut={"A"} href="#about" />
                <HeaderItems mainText={"PROJECTS"} shortcut={"P"} href="#projects" />
                <HeaderItems mainText={"GITHUB"} shortcut={"G"} href="https://github.com/aoyo-jun" />
                <HeaderItems mainText={"LINKEDIN"} shortcut={"L"} isLinkedin href="https://www.linkedin.com/in/patrick-jun-miyaura-ihy" />
                <HeaderItems mainText={"CONTACT"} shortcut={"C"} href="#contact" />
            </div>
        </header>
    )
}