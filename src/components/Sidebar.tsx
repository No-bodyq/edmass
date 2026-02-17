"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Dashboard from "../../public/dashboard.svg";
import Schools from "../../public/grid.svg";
import Teachers from "../../public/people.svg";
import Classrooms from "../../public/switcher.svg";
import Students from "../../public/students.svg";
import Subjects from "../../public/document.svg";
import Calendar from "../../public/calendar.svg";
import Users from "../../public/users.svg";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { href: "/dashboard", label: "Dashboard", icon: Dashboard },
    { href: "/schools", label: "Schools", icon: Schools },
    { href: "/teachers", label: "Teachers", icon: Teachers },
    { href: "/classrooms", label: "Classrooms", icon: Classrooms },
    { href: "/students", label: "Students", icon: Students },
    { href: "/subjects", label: "Subjects", icon: Subjects },
    { href: "/attendance", label: "Attendance", icon: Students },
    { href: "/school-calendar", label: "School Calendar", icon: Calendar },
    { href: "/bursary", label: "Users", icon: Users },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <aside
        className={`fixed md:static left-0 top-16 md:top-0 h-full md:h-auto md:min-h-[111vh] w-64 text-white shadow-lg transform transition-transform duration-300 md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-40 md:z-auto`}
        style={{ backgroundColor: "#403294" }}
      >
        <div
          className="p-6 flex items-center space-x-4"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          <div className="w-12 h-12">
            <Image src="/avatar.svg" alt="" width={100} height={100} />
          </div>
          <div>
            <h1 className="text-lg font-bold">John Peterson</h1>
            <p className="text-white text-sm" style={{ opacity: 0.8 }}>
              Admin
            </p>
          </div>
        </div>

        <nav className="p-4">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition duration-200 ${
                isActive(item.href)
                  ? "text-white"
                  : "text-white hover:opacity-80"
              }`}
              style={
                isActive(item.href)
                  ? { backgroundColor: "rgba(255,255,255,0.2)" }
                  : {}
              }
            >
              <Image src={item.icon} alt={item.label} width={24} height={24} />
              <span className="font-medium text-sm text-[#EAE6FF]">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
