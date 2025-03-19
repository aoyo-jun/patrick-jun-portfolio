interface HeaderItemsProps {
    mainText: string;
    shortcut: string;
    href: string;
    isLinkedin?: boolean;
}

export default function HeaderItems({mainText, shortcut, href, isLinkedin}: HeaderItemsProps) {
    return (
        <a href={href}>
            <div className="flex items-center justify-center bg-default-primary hover:bg-default-secondary h-[24px] lg:h-[27px] px-[7px] lg:px-[9px] pt-[9px] pb-[9px] lg:pb-[11px] rounded-[3px] tracking-[-0.02em]">
                <span className="font-koho mr-[6px] hidden lg:flex">
                    [<span className="font-kodemono">{shortcut}</span>]
                </span>
                {/* LinkedIn letter spacing fix */}
                {isLinkedin ? (
                    <>
                        <span className="mr-[1px]">LIN</span>
                        KEDIN
                    </>
                ) : (`${mainText}`)}
            </div>
        </a>
    )
}