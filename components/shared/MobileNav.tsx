"use client";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <header className="header">
            <Link href="/" className="flex items-center gap-2 md:py-2">
                <Image
                    src="/assets/images/logo-text.svg"
                    width={180}
                    height={28}
                    alt="logo"
                />
            </Link>

            <nav className="flex gap-2">
                <UserButton />
                <Sheet>
                    <SheetTrigger>
                        <Image
                            src="/assets/icons/menu.svg"
                            width={32}
                            height={32}
                            alt="menu"
                            className="cursor-pointer"
                        />
                    </SheetTrigger>
                    <SheetContent className="sheet-content sm:w-64">
                        <>
                            <Image
                                src="/assets/images/logo-text.svg"
                                width={152}
                                height={23}
                                alt="logo"
                                className="cursor-pointer"
                            />

                            <ul className="header-nav_elements">
                                {navLinks.map((link) => {
                                    const isActive = link.route === pathname;

                                    return (
                                        <li
                                            key={link.route}
                                            className={`${
                                                isActive && "gradient-text"
                                            } p-18 flex whitespace-nowrap text-dark-700
                                            `}
                                        >
                                            <Link
                                                className="sidebar-link"
                                                href={link.route}
                                            >
                                                <Image
                                                    src={link.icon}
                                                    alt="icon"
                                                    width={24}
                                                    height={24}
                                                />
                                                {link.label}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </>
                    </SheetContent>
                </Sheet>
            </nav>
        </header>
    );
};

export default MobileNav;
