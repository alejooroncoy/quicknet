import { Button } from "@/components/ui/button";
import {
  SheetContent,
  SheetTrigger,
  Sheet,
  SheetClose,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Logo from "@/assets/logo.png"
import Image from "next/image";

const Header = () => {
  return (
    <header className="px-4 fixed left-0 w-full lg:px-6 h-14 bg-animation z-50">
      <nav className="flex items-center justify-between h-full max-w-7xl mx-auto">
        <Link href="/" className="flex items-center justify-center gap-1">
          <Image src={Logo} alt="QuakeNet" className="size-9" />
          <h1 className="text-lg font-bold">QueakeNet</h1>
        </Link>
        <ul className="hidden gap-4 sm:gap-6 lg:flex">
          <li>
            <Link
              href="/#soluciones"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Soluciones
            </Link>
          </li>
          <li>
            <Link
              href="/sobre-nosotros"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Sobre Nosotros
            </Link>
          </li>
          <li>
            <Link
              href="#contacto-empresa"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Contacto Empresa
            </Link>
          </li>
        </ul>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <ul className="grid gap-4 py-4">
              <li>
                <SheetClose asChild>
                  <Link
                    href="/#soluciones"
                    className="text-sm font-medium hover:underline underline-offset-4"
                  >
                    Soluciones
                  </Link>
                </SheetClose>
              </li>
              <li>
                <SheetClose asChild>
                  <Link
                    href="/sobre-nosotros"
                    className="text-sm font-medium hover:underline underline-offset-4"
                  >
                    Sobre Nosotros
                  </Link>
                </SheetClose>
              </li>
              <li>
                <SheetClose asChild>
                  <Link
                    href="#contacto-empresa"
                    className="text-sm font-medium hover:underline underline-offset-4"
                    prefetch={false}
                  >
                    Contacto Empresa
                  </Link>
                </SheetClose>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Header;
