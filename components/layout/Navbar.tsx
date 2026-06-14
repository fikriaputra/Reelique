"use client";

import { useEffect, useState } from "react";

import Logo from "../ui/Logo";
import NavLink from "../ui/NavLink";
import SearchInput from "../ui/SearchInput";
import SearchModal from "../ui/SearchModal";
import Container from "../ui/Container";

import { NAVIGATION_ITEMS } from "@/constants/navigation";

import {
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] =
    useState("home");

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [searchOpen, setSearchOpen] =
    useState(false);

  useEffect(() => {
    const sections = [
      "home",
      "now-showing",
      "movies",
      "top-movies",
      "coming-soon",
    ];

    const handleScroll = () => {
      const scrollPosition =
        window.scrollY + 150;

      for (const id of sections) {
        const section =
          document.getElementById(id);

        if (!section) continue;

        const top = section.offsetTop;
        const height =
          section.offsetHeight;

        if (
          scrollPosition >= top &&
          scrollPosition < top + height
        ) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  useEffect(() => {
    if (searchOpen) {
      setMenuOpen(false);
    }
  }, [searchOpen]);

  return (
    <>
      <header
        className="
          fixed
          top-0
          left-0
          right-0

          z-50

          border-b
          border-white/10

          bg-[#050816]/80
          backdrop-blur-xl
        "
      >
        <Container>
          <div
            className="
              flex
              h-20
              items-center
              justify-between
            "
          >
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex gap-10">
              {NAVIGATION_ITEMS.map(
                (item) => (
                  <NavLink
                    key={item.title}
                    href={item.href}
                    title={item.title}
                    active={
                      item.href ===
                      `#${activeSection}`
                    }
                  />
                )
              )}
            </nav>

            {/* Desktop Search */}
            <div className="hidden md:block">
              <SearchInput />
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-3 md:hidden">

              <SearchInput
                mobile
                onMobileClick={() => {
                  setMenuOpen(false);
                  setSearchOpen(true);
                }}
              />

              <button
                onClick={() =>
                  setMenuOpen(
                    !menuOpen
                  )
                }
                className="
                  flex
                  h-10
                  w-10

                  items-center
                  justify-center

                  rounded-full

                  border
                  border-white/10

                  bg-white/5

                  text-gray-300

                  transition-all

                  hover:border-cyan-400/30
                  hover:text-cyan-400
                "
              >
                {menuOpen ? (
                  <X size={18} />
                ) : (
                  <Menu size={18} />
                )}
              </button>

            </div>
          </div>
        </Container>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="
              border-t
              border-white/10

              bg-[#050816]/95
              backdrop-blur-xl

              lg:hidden
            "
          >
            <div className="flex flex-col px-6 py-5">

              {NAVIGATION_ITEMS.map(
                (item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    onClick={() =>
                      setMenuOpen(
                        false
                      )
                    }
                    className={`
                      py-3
                      text-base
                      transition-all

                      ${
                        item.href ===
                        `#${activeSection}`
                          ? "text-cyan-400"
                          : "text-gray-300"
                      }
                    `}
                  >
                    {item.title}
                  </a>
                )
              )}

            </div>
          </div>
        )}
      </header>

      {/* Mobile Search Modal */}
      <SearchModal
        open={searchOpen}
        onClose={() =>
          setSearchOpen(false)
        }
      />
    </>
  );
}