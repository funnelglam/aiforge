export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full border-b border-white/10 bg-black/70 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="text-xl font-bold text-white">
          AIForge
        </div>

        <div className="hidden gap-8 text-gray-300 md:flex">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <button className="rounded-lg bg-white px-5 py-2 font-semibold text-black">
          Sign In
        </button>
      </div>
    </nav>
  );
}