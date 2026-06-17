import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
const categories = [
  {
    name: "Football",
    items: ["Football Shoes", "Jerseys", "Footballs", "Shin Guards"],
  },
  {
    name: "Running",
    items: ["Running Shoes", "Apparel", "Sport Watches", "Water Bottles"],
  },
  {
    name: "Basketball",
    items: ["Basketball Shoes", "Jerseys", "Basketballs"],
  },
  {
    name: "Gym",
    items: ["Gym Gloves", "Resistance Bands", "Gym Wear"],
  },
];
export default function CategoryDropdown() {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openMenu = () => {
    clearCloseTimer();
    setOpen(true);
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimer.current = window.setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => {
    return () => clearCloseTimer();
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
      onFocus={openMenu}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          scheduleClose();
        }
      }}
    >
      <button
        type="button"
        className="flex items-center gap-1 text-slate-300 hover:text-lime-400"
        onClick={() => {
          if (open) {
            scheduleClose();
          } else {
            openMenu();
          }
        }}
      >
        Categories
        <ChevronDown size={18} />
      </button>

      {open && (
        <div
          className="hidden md:block absolute left-0 top-full mt-4 w-200 rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl"
          onMouseEnter={openMenu}
          onMouseLeave={scheduleClose}
        >
          <div className="grid grid-cols-4 gap-8">
            {categories.map((category) => (
              <div key={category.name}>
                <h3 className="mb-4 font-bold text-lime-400">
                  {category.name}
                </h3>

                <div className="space-y-2">
                  {category.items.map((item) => (
                    <Link
                      key={item}
                      to={`/category/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block text-slate-400 hover:text-white"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-lime-500 p-6 text-black">
            <h3 className="text-xl font-black">New Collection 2026</h3>

            <p className="mt-2">Discover the latest sports gear.</p>
          </div>
        </div>
      )}
    </div>
  );
}
