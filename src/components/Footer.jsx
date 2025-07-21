const Footer = ({ className }) => {
  return (
    <footer
      className={`w-screen bg-[#5542ff] text-white pt-12 pb-10 ${className ?? ""}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* About Section */}
          <div>
            <h2 className="text-xl font-semibold mb-3">VirtuWorld</h2>
            <p className="text-sm text-gray-200 leading-relaxed">
              VirtuWorld is your gateway to the next generation of digital gaming and immersive virtual experiences. Join the revolution now.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:underline cursor-pointer">Home</li>
              <li className="hover:underline cursor-pointer">About</li>
              <li className="hover:underline cursor-pointer">Games</li>
              <li className="hover:underline cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:underline cursor-pointer">Discord</li>
              <li className="hover:underline cursor-pointer">Twitter</li>
              <li className="hover:underline cursor-pointer">YouTube</li>
              <li className="hover:underline cursor-pointer">Blog</li>
            </ul>
          </div>

          {/* Newsletter (Fake Field) */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-sm mb-3 text-gray-200">
              Get the latest news, updates and offers.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 w-full rounded text-black text-sm outline-none"
              />
              <button className="bg-black text-white px-4 py-2 rounded hover:bg-white hover:text-black transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-white/30" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-200">
          <p>© 2024 VirtuWorld. All rights reserved.</p>
          <p className="mt-2 md:mt-0 hover:underline cursor-pointer">
            Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
