import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import NavIcon from "../assets/img/nav-icon1 (2).svg";
import NavIcon2 from "../assets/img/nav-icon3 (1).svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkActive = (value: string) => {
    setActiveLink(value);
  };

  return (
    <div
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <div>
          {/* Logo */}
          <a href="/" className="text-white text-lg font-bold">
            Logo
          </a>
        </div>
        <div className="hidden md:flex space-x-6">
          {/* Links de Navegação */}
          {["home", "about", "beneficios", "orcamentos"].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className={`text-white text-sm font-medium transition-opacity duration-300 ${
                activeLink === link
                  ? "opacity-100"
                  : "opacity-75 hover:opacity-100"
              }`}
              onClick={() => linkActive(link)}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="p-2 rounded-full border border-white/50">
            <img src={NavIcon} alt="YouTube" className="h-5 w-5" />
          </a>
          <a href="#" className="p-2 rounded-full border border-white/50">
            <img src={NavIcon2} alt="Instagram" className="h-5 w-5" />
          </a>
          {/* Botão */}
          <HashLink
            to="#connect"
            className="relative px-6 py-2 border border-white text-white font-bold text-sm uppercase rounded-lg transition-all duration-300 hover:text-black hover:bg-white"
          >
            Entrar na Comunidade
          </HashLink>
        </div>
      </div>
    </div>
  );
};
