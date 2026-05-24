import { useState } from "react";
import { Menu, X, ShoppingCart, User, Search } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl ">
            <img
              src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/463086070_1082059373518463_4706389957994482687_n.jpg?stp=c8.0.323.323a_dst-jpg_s200x200_tt6&_nc_cat=106&ccb=1-7&_nc_sid=2d3e12&_nc_eui2=AeFZKr2f5R5p8M7GkhHiNUJo8AsAFoLf_SDwCwAWgt_9IOusQFjbxNGI38SgmkBI98gFqXqdJBKef8s60u3fRlsy&_nc_ohc=7zPGyaskPYsQ7kNvwH40HZh&_nc_oc=AdpPTJ2q1hO2RyNuqPIcvnUAHiAceF4QqraD2-h0tBNJrmMgVSH1DzbY2xTH8qydAzI&_nc_zt=24&_nc_ht=scontent.fhan2-5.fna&_nc_gid=UvOwmRP0S_Au3QGuLgTvDg&_nc_ss=7b2a8&oh=00_Af53B4KFzaVJVP70RAj1xoSDReeNvHn3GJAaKgDD5pKkaA&oe=6A1746F8"
              alt="Logo"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-wide text-white">
              SPORT
            </h1>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#"
            className="text-sm font-medium text-slate-300 transition hover:text-lime-400"
          >
            Home
          </a>

          <a
            href="#"
            className="text-sm font-medium text-slate-300 transition hover:text-lime-400"
          >
            Products
          </a>

          <a
            href="#"
            className="text-sm font-medium text-slate-300 transition hover:text-lime-400"
          >
            Categories
          </a>

          <a
            href="#"
            className="text-sm font-medium text-slate-300 transition hover:text-lime-400"
          >
            New Arrival
          </a>

          <a
            href="#"
            className="text-sm font-medium text-slate-300 transition hover:text-lime-400"
          >
            Contact
          </a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-xl border border-slate-800 p-2 text-slate-300 transition hover:border-lime-500 hover:text-lime-400">
            <Search size={20} />
          </button>

          <button className="rounded-xl border border-slate-800 p-2 text-slate-300 transition hover:border-lime-500 hover:text-lime-400">
            <ShoppingCart size={20} />
          </button>

          <button className="rounded-xl border border-slate-800 p-2 text-slate-300 transition hover:border-lime-500 hover:text-lime-400">
            <User size={20} />
          </button>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-slate-800 p-2 text-white md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="space-y-1 border-t border-slate-800 bg-slate-950 px-4 py-4">
          <a
            href="#"
            className="block rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-900 hover:text-lime-400"
          >
            Home
          </a>

          <a
            href="#"
            className="block rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-900 hover:text-lime-400"
          >
            Products
          </a>

          <a
            href="#"
            className="block rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-900 hover:text-lime-400"
          >
            Categories
          </a>

          <a
            href="#"
            className="block rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-900 hover:text-lime-400"
          >
            New Arrival
          </a>

          <a
            href="#"
            className="block rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-900 hover:text-lime-400"
          >
            Contact
          </a>

          {/* Mobile Actions */}
          <div className="flex gap-3 pt-3">
            <button className="flex-1 rounded-xl border border-slate-800 py-3 text-slate-300 transition hover:border-lime-500 hover:text-lime-400">
              <div className="flex items-center justify-center gap-2">
                <Search size={18} />
                Search
              </div>
            </button>

            <button className="flex-1 rounded-xl border border-slate-800 py-3 text-slate-300 transition hover:border-lime-500 hover:text-lime-400">
              <div className="flex items-center justify-center gap-2">
                <ShoppingCart size={18} />
                Cart
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
