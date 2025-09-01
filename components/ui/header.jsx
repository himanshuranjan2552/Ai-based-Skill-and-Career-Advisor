import React from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import {
  ChevronDownIcon,
  House,
  Info,
  LayoutDashboard,
  Send,
  StarsIcon,
} from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { checkUser } from "@/lib/inngest/checkUser";

const DASHBOARD_ROUTE = "/dashboard";

const Header = async () => {
  await checkUser();
  return (
    <div>
      <header className="fixed top-0 w-full border-b bg-background/80 z-50">
        <nav className="container mx-auto px-4 h-16 flex items-center space-x-4 justify-center">
          <Link href={DASHBOARD_ROUTE}>
            <Button variant="ghost">
              <LayoutDashboard className="h-4 w-4" />
              <span className="hidden md:block">Dashboard</span>
            </Button>
          </Link>
          <Link href="/">
            <Button variant="ghost">
              <House className="h-4 w-4" />
              <span className="hidden md:block">Home</span>
            </Button>
          </Link>
          <Link href="/skillIQ">
            <Button variant="ghost">
              <House className="h-4 w-4" />
              <span className="hidden md:block">Skill IQ</span>
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="ghost">
              <Info className="h-4 w-4" />
              <span className="hidden md:block">About</span>
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="ghost">
              <Send className="h-4 w-4" />
              <span className="hidden md:block">Contact</span>
            </Button>
          </Link>
          <div className="absolute top-0 right-10 p-4 flex gap-2">
            <SignedIn></SignedIn>
          </div>
          <div className="absolute top-0 left-0 p-4 flex mx-auto"></div>
        </nav>
        <div className="absolute top-0 right-0 p-4 items-center flex space-x-4">
          <SignedOut>
            <SignInButton>
              <Button variant="ghost">Sign In</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant={"secondary"}>
                  <StarsIcon className="h-4 w-4" />
                  <span className="hidden md:block">AI Tools</span>
                  <ChevronDownIcon className="h-2 w-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href={"/Skill IQ"} className="flex items-center gap-2">
                    <StarsIcon className="h-4 w-4" />
                    <span>Skill IQ</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/billing"} className="flex items-center gap-2">
                    <StarsIcon className="h-4 w-4" />
                    <span>Billing</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/team"} className="flex items-center gap-2">
                    <StarsIcon className="h-4 w-4" />
                    <span>Team</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href={"/subscription"}
                    className="flex items-center gap-2"
                  >
                    <StarsIcon className="h-4 w-4" />
                    <span>Subscription</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-25 h-25",
                  userButtonPopoverCard: "shadow-lg",
                  userPreviewMainIdentifier: "font-semibold",
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
