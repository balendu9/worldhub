"use client";

import { Home, Users2, DollarSign, RefreshCw, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", icon: Home },
    { href: "/guilds", icon: Users2 },
    { href: "/token", icon: DollarSign },
    { href: "/earn", icon: RefreshCw },
    { href: "/profile", icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#0A141D] rounded-t-[25px] p-4">
      <div className="flex justify-between items-center max-w-lg mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link href={item.href} key={item.href}>
              <div
                className={`p-2 rounded-md ${
                  pathname === item.href
                    ? "text-white"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                <Icon className="w-6 h-6" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
