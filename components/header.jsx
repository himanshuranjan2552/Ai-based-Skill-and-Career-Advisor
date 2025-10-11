import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import {
  ChevronDownIcon,
  FileChartLineIcon,
  LayoutDashboardIcon,
  LibraryIcon,
  StarsIcon,
  WaypointsIcon,
} from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { checkUser } from "@/lib/checkUser";
import Image from "next/image";

// const DASHBOARD_ROUTE = "/dashboard";

const Header = async () => {
  // this function checks if the user is logged in or not
  await checkUser();

  // Render the header with navigation links and user authentication buttons
  return (
    <div suppressHydrationWarning>
      <header className="fixed top-0 w-full border-b z-50 bg-stone-200">
        <nav className="container  top-0 left-0 mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Path NEXUS"
              width={180}
              height={80}
              className=" h-12 py-1 w-auto object-contain"
            />
          </Link>
          <div className="container mx-auto px-4 h-16 flex items-center space-x-4 justify-center">
            <Link href="/about">
              <Button variant="ghost">
                <span className="hidden md:block">About</span>
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="ghost">
                <WaypointsIcon className="h-4 w-4" />
                <span className="hidden md:block">Path Finder</span>
              </Button>
            </Link>
            <DropdownMenu className="bg-stone-200">
              <DropdownMenuTrigger>
                <Button variant={"ghost"}>
                  <StarsIcon className="h-4 w-4" />
                  <span className="hidden md:block">Features</span>
                  <ChevronDownIcon className="h-2 w-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href={"/dashboard"} className="flex items-center gap-2">
                    <LayoutDashboardIcon className="h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/Skill_IQ"} className="flex items-center gap-2">
                    <StarsIcon className="h-4 w-4" />
                    <span>Skill-IQ</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/team"} className="flex items-center gap-2">
                    <FileChartLineIcon className="h-4 w-4" />
                    <span>Skill Gap Analysis</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/about">
              <Button variant="ghost">
                <LibraryIcon className="h-4 w-4 font-light" />
                <span className="hidden md:block">Resources</span>
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="ghost">
                <span className="hidden md:block">Contact</span>
              </Button>
            </Link>
          </div>
        </nav>
        <div className="absolute top-0 right-0 p-4 items-center flex space-x-4">
          <SignedOut>
            <SignInButton>
              <Button className="font-bold" variant="ghost">
                LOG IN
              </Button>
            </SignInButton>
            <SignUpButton>
              <Button
                className="text-white font-semibold bg-teal-600"
                variant="ghost"
              >
                SIGN UP
              </Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-25 h-25",
                  userButtonPopoverCard: "shadow-lg",
                  userPreviewMainIdentifier: "font-semibold",
                  size: "lg",
                },
              }}
              afterSignOutUrl=""
            />
          </SignedIn>
        </div>
      </header>
    </div>
  );
};

export { Header };
