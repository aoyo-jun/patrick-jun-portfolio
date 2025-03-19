interface HeaderItemsProps {
    mainText: string;
    shortcut: string;
    href: string;
}

export default function HeaderItems({mainText, shortcut, href}: HeaderItemsProps) {
    return (
        <a href={href}>
            <div className="flex items-center justify-center bg-default-primary hover:bg-default-secondary h-[27px] px-[9px] pt-[9px] pb-[11px] rounded-[3px] tracking-[-0.02em]">
                <span className="font-koho mr-[6px]">
                    [<span className="font-kodemono">{shortcut}</span>]
                </span>
                {mainText}
            </div>
        </a>
    )
}