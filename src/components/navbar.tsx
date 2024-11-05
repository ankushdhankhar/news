'use client'

import * as React from "react"
import Link from "next/link"
import { Menu, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"

const menuItems = [
  { href: "/", label: "Home" },
  { href: "/news", label: "News" },
  { href: "/flipnews", label: "FlipFlop" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav className="w-full bg-white">
      <div className="max-w-5xl mx-auto px-3 py-3">
        <div className="flex items-center justify-between h-16">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <SheetTitle>Hello</SheetTitle>
              <nav className="flex flex-col gap-4">
                {menuItems.map((item, index) => (
                  <React.Fragment key={item.href}>
                    <Link
                      href={item.href}
                      className="block px-2 py-1 text-lg hover:text-pink-600"
                    >
                      {item.label}
                    </Link>
                    {index < menuItems.length - 1 && <Separator />}
                  </React.Fragment>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="font-bold text-xl hover:text-pink-600">
            The Indic Wire
          </Link>
          <Button variant="ghost" size="icon" >
              <Search className="h-6 w-6" />
           </Button>
            
        </div>

        
      </div>
      <div className="w-full border-b-2 border-black squiggle"></div>
    </nav>
  )
}