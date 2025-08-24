"use client"

import * as React from "react"
import { Moon, Sun, Paintbrush, Palette, Feather } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Palette className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("poetic")}>
          <Feather className="mr-2 h-4 w-4" />
          <span>Poetic Pastel</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark & Mystical</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("nature")}>
          <Sun className="mr-2 h-4 w-4" />
          <span>Nature-inspired</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("artistic")}>
          <Paintbrush className="mr-2 h-4 w-4" />
          <span>Artistic & Creative</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}