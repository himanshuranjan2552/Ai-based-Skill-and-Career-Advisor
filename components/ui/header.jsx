import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import {
  ChevronDownIcon,
  House,
  Info,
  LayoutDashboard,
  LogOutIcon,
  Send,
  Settings,
  StarsIcon,
} from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";

const Header = () => {
  return (
    <div>
      <header className="fixed top-0 w-full border-b bg-background/80 z-50">
        <nav className="container mx-auto px-4 h-16 flex items-center space-x-4 justify-center">
          <Link href="/dashboard">
            <Button>
              <LayoutDashboard className="h-4 w-4" />
              <span className="hidden md:block">Dashboard</span>
            </Button>
          </Link>
          <Link href="/home">
            <Button>
              <House className="h-4 w-4" />
              <span className="hidden md:block">Home</span>
            </Button>
          </Link>
          <Link href="/about">
            <Button>
              <Info className="h-4 w-4" />
              <span className="hidden md:block">About</span>
            </Button>
          </Link>
          <Link href="/contact">
            <Button>
              <Send className="h-4 w-4" />
              <span className="hidden md:block">Contact</span>
            </Button>
          </Link>
          <div className="absolute top-0 right-0 p-6 flex gap-4">
            <SignedIn>
              <Link href="/settings">
                <Button>
                  <Settings className="h-4 w-4" />
                  <span className="hidden md:block">Settings</span>
                </Button>
              </Link>
              <SignOutButton>
                <Button>
                  <LogOutIcon className="h-4 w-4" />
                  <span className="hidden md:block">Sign Out</span>
                </Button>
              </SignOutButton>
            </SignedIn>
          </div>
          <div className="absolute top-0 left-0 p-6 gap-2 flex mx-auto">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button>
                  <StarsIcon className="h-4 w-4" />
                  <span className="hidden md:block">AI Tools</span>
                  <ChevronDownIcon className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
        <div className="absolute top-0 right-0 p-5 flex gap-2">
          <SignedOut>
            <SignInButton>
              <Button>Sign In</Button>
            </SignInButton>
            <SignUpButton>
              <Button>Sign Up</Button>
            </SignUpButton>
          </SignedOut>
        </div>
        <div className="absolute top-0 left-0 p-4 flex gap-2">
          <SignedIn>
            <UserButton className="h-5 w-5" />
          </SignedIn>
        </div>
      </header>
    </div>
  );
};

export { Header };
