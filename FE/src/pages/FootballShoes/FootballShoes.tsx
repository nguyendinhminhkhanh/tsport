import { Search, SlidersHorizontal, X } from "lucide-react";
import { useState } from "react";
import MainLayout from "../../components/Layout/MainLayout";
export default function FootballShoes() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const products = [
    {
      id: 1,
      name: "Nike Mercurial Vapor 16",
      brand: "Nike",
      price: "3.490.000₫",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
    {
      id: 2,
      name: "Adidas Predator Elite",
      brand: "Adidas",
      price: "3.790.000₫",
      image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
    },
    {
      id: 3,
      name: "Puma Future 8",
      brand: "Puma",
      price: "3.290.000₫",
      image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    },
    {
      id: 4,
      name: "Mizuno Alpha",
      brand: "Mizuno",
      price: "4.190.000₫",
      image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f",
    },
  ];

  return (
    <MainLayout>
      <div className="min-h-screen bg-slate-950 text-white">
        {/* Banner */}
        <section className="relative h-[350px]">
          <img
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018"
            alt="Football"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-center text-5xl font-black lg:text-7xl">
              FOOTBALL SHOES
            </h1>

            <p className="mt-4 text-center text-slate-300">
              Professional football boots for every player
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
          {/* Header */}
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-bold">Football Shoes</h2>

              <p className="text-slate-400">120 products available</p>
            </div>

            <div className="grid gap-3 sm:flex sm:items-center sm:gap-3">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-2 lg:hidden"
                aria-label="Open filters"
              >
                <SlidersHorizontal size={18} />
                Filter
              </button>

              <div className="relative w-full sm:flex-1">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                  size={18}
                />

                <input
                  type="text"
                  placeholder="Search football shoes..."
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 py-2 pl-10 pr-4 outline-none"
                />
              </div>

              <select className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 sm:w-auto">
                <option>Newest</option>
                <option>Best Selling</option>
                <option>Price Low → High</option>
                <option>Price High → Low</option>
              </select>
            </div>
          </div>

          {/* Layout */}
          <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
            {/* Sidebar */}
            <aside className="hidden h-fit rounded-3xl border border-slate-800 bg-slate-900 p-6 lg:block">
              <h3 className="mb-5 text-xl font-bold">Filters</h3>

              {/* Brand */}
              <div className="mb-8">
                <h4 className="mb-3 font-semibold">Brand</h4>

                <div className="space-y-2 text-slate-400">
                  <label className="flex gap-2">
                    <input type="checkbox" />
                    Nike
                  </label>

                  <label className="flex gap-2">
                    <input type="checkbox" />
                    Adidas
                  </label>

                  <label className="flex gap-2">
                    <input type="checkbox" />
                    Puma
                  </label>

                  <label className="flex gap-2">
                    <input type="checkbox" />
                    Mizuno
                  </label>
                </div>
              </div>

              {/* Surface */}
              <div className="mb-8">
                <h4 className="mb-3 font-semibold">Surface</h4>

                <div className="space-y-2 text-slate-400">
                  <label className="flex gap-2">
                    <input type="checkbox" />
                    FG
                  </label>

                  <label className="flex gap-2">
                    <input type="checkbox" />
                    AG
                  </label>

                  <label className="flex gap-2">
                    <input type="checkbox" />
                    TF
                  </label>

                  <label className="flex gap-2">
                    <input type="checkbox" />
                    IC
                  </label>
                </div>
              </div>

              {/* Size */}
              <div>
                <h4 className="mb-3 font-semibold">Size</h4>

                <div className="flex flex-wrap gap-2">
                  {[39, 40, 41, 42, 43, 44].map((size) => (
                    <button
                      key={size}
                      className="h-10 w-10 rounded-xl border border-slate-700"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Product Grid */}
            <div>
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition hover:-translate-y-2 hover:border-lime-500"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-56 w-full object-cover transition duration-500 group-hover:scale-110 sm:h-64 md:h-72"
                      />

                      <span className="absolute left-3 top-3 rounded-full bg-lime-500 px-3 py-1 text-xs font-bold text-black">
                        Best Seller
                      </span>
                    </div>

                    <div className="p-5">
                      <p className="mb-2 text-sm text-slate-400">
                        {product.brand}
                      </p>

                      <h3 className="mb-4 text-lg font-bold">{product.name}</h3>

                      <div className="flex items-center justify-between">
                        <span className="text-xl font-black text-lime-400">
                          {product.price}
                        </span>

                        <button className="rounded-xl bg-lime-500 px-4 py-2 font-semibold text-black">
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-10 flex justify-center gap-3">
                <button className="h-10 w-10 rounded-xl border border-slate-700">
                  1
                </button>

                <button className="h-10 w-10 rounded-xl bg-lime-500 font-bold text-black">
                  2
                </button>

                <button className="h-10 w-10 rounded-xl border border-slate-700">
                  3
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Filters Drawer */}
        <div
          className={`fixed inset-0 z-50 flex items-end lg:hidden ${
            mobileFiltersOpen ? "" : "pointer-events-none"
          }`}
        >
          <div
            onClick={() => setMobileFiltersOpen(false)}
            className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
              mobileFiltersOpen ? "opacity-100" : "opacity-0"
            }`}
          />

          <div
            className={`relative w-full max-h-[85vh] overflow-auto rounded-t-2xl bg-slate-900 p-6 shadow-xl transform transition-transform duration-300 ease-in-out ${
              mobileFiltersOpen ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-bold">Filters</h3>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
                className="rounded-full p-2 hover:bg-slate-800"
              >
                <X size={18} />
              </button>
            </div>

            {/* Mobile filters: reuse same groups as sidebar */}
            <div className="space-y-6">
              <div>
                <h4 className="mb-3 font-semibold">Brand</h4>

                <div className="space-y-2 text-slate-400">
                  <label className="flex gap-2">
                    <input type="checkbox" />
                    Nike
                  </label>

                  <label className="flex gap-2">
                    <input type="checkbox" />
                    Adidas
                  </label>

                  <label className="flex gap-2">
                    <input type="checkbox" />
                    Puma
                  </label>

                  <label className="flex gap-2">
                    <input type="checkbox" />
                    Mizuno
                  </label>
                </div>
              </div>

              <div>
                <h4 className="mb-3 font-semibold">Surface</h4>

                <div className="space-y-2 text-slate-400">
                  <label className="flex gap-2">
                    <input type="checkbox" />
                    FG
                  </label>

                  <label className="flex gap-2">
                    <input type="checkbox" />
                    AG
                  </label>

                  <label className="flex gap-2">
                    <input type="checkbox" />
                    TF
                  </label>

                  <label className="flex gap-2">
                    <input type="checkbox" />
                    IC
                  </label>
                </div>
              </div>

              <div>
                <h4 className="mb-3 font-semibold">Size</h4>

                <div className="flex flex-wrap gap-2">
                  {[39, 40, 41, 42, 43, 44].map((size) => (
                    <button
                      key={size}
                      className="h-10 w-10 rounded-xl border border-slate-700"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="rounded-xl border border-slate-700 px-4 py-2"
              >
                Reset
              </button>

              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="rounded-xl bg-lime-500 px-4 py-2 font-semibold text-black"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
