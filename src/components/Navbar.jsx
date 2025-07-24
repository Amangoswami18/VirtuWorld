import { useState, useEffect, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [ "Vault",  "About", "Contact"];

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    setIsAudioPlaying((prev) => !prev);
  };

  useEffect(() => {
    if (isAudioPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isAudioPlaying]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#010101] text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center gap-4">
          <img src="/img/logo.png" alt="Logo" className="w-10 h-10" />
          <span className="text-xl font-zentry tracking-widest">VIRTUAL VAULT</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item} className="nav-hover-btn">
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>

        {/* Audio Indicator & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button onClick={toggleAudio} className="flex gap-[2px] items-end justify-center">
            <audio ref={audioRef} src="/audio/loop.mp3" loop className="hidden" />
            {[1, 2, 3, 4].map((bar) => (
              <div
                key={bar}
                className={`w-[2px] h-4 bg-white rounded-sm animate-audio-bar ${
                  isAudioPlaying ? "opacity-100" : "opacity-30"
                }`}
                style={{
                  animationDelay: `${bar * 0.1}s`,
                  animationPlayState: isAudioPlaying ? "running" : "paused",
                }}
              />
            ))}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <ul className="md:hidden bg-[#010101] px-4 pb-4 space-y-3 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="block text-white hover:text-blue-300 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
