// import { useState } from "react";
import MainLayout from "../../components/Layout/MainLayout";
import { ChevronRight } from "lucide-react";

export default function Home() {
  // const [open, setOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "Nike Air Zoom",
      category: "Running Shoes",
      price: "$129",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200",
    },
    {
      id: 2,
      name: "Adidas Ultra",
      category: "Sport Sneakers",
      price: "$149",
      image:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1200",
    },
    {
      id: 3,
      name: "Puma Velocity",
      category: "Training Shoes",
      price: "$119",
      image:
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1200",
    },
    {
      id: 4,
      name: "Gym Hoodie",
      category: "Sportswear",
      price: "$89",
      image:
        "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1200",
    },
  ];

  const categories = [
    "Football",
    "Running",
    "Basketball",
    "Gym",
    "Accessories",
  ];

  return (
    <MainLayout>
      <div className="min-h-screen bg-slate-950 text-white">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
            {/* LEFT */}
            <div>
              <p className="mb-4 text-sm font-semibold tracking-widest text-lime-400">
                NEW COLLECTION 2026
              </p>

              <h2 className="mb-6 text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
                TRAIN LIKE A<span className="text-lime-400"> CHAMPION</span>
              </h2>

              <p className="mb-8 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
                Premium sportswear and accessories designed for performance,
                comfort and modern lifestyle.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <button className="rounded-2xl bg-lime-500 px-8 py-4 font-bold text-black transition hover:bg-lime-400">
                  Shop Now
                </button>

                <button className="rounded-2xl border border-slate-700 px-8 py-4 transition hover:border-lime-500 hover:text-lime-400">
                  Explore Collection
                </button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1400"
                className="h-[320px] w-full rounded-3xl object-cover shadow-2xl sm:h-[500px]"
              />

              <div className="absolute bottom-4 left-4 rounded-2xl bg-black/60 px-4 py-3 backdrop-blur">
                <p className="text-sm text-slate-300">Professional Training</p>

                <p className="text-xl font-bold text-lime-400">Sport Edition</p>
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORY */}
        <section className="px-4 py-10 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Categories</h2>

              <button className="flex items-center gap-1 text-lime-400">
                View All
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
              {categories.map((item) => (
                <div
                  key={item}
                  className="cursor-pointer rounded-3xl border border-slate-800 bg-slate-900 p-6 text-center transition hover:border-lime-500 hover:bg-slate-800"
                >
                  <h3 className="font-semibold">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="px-4 py-10 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Featured Products</h2>

              <button className="flex items-center gap-1 text-lime-400">
                View All
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition hover:-translate-y-2 hover:border-lime-500"
                >
                  <div className="overflow-hidden">
                    <img
                      src={product.image}
                      className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-5">
                    <p className="mb-2 text-sm text-slate-400">
                      {product.category}
                    </p>

                    <h3 className="mb-4 text-xl font-bold">{product.name}</h3>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-lime-400">
                        {product.price}
                      </span>

                      <button className="rounded-xl bg-lime-500 px-4 py-2 font-semibold text-black transition hover:bg-lime-400">
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BANNER */}
        <section className="px-4 py-10 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-[40px] bg-lime-500 px-8 py-12 text-center text-black lg:flex-row lg:text-left">
            <div>
              <p className="mb-2 text-sm font-bold tracking-widest">
                LIMITED OFFER
              </p>

              <h2 className="text-3xl font-black lg:text-5xl">UP TO 50% OFF</h2>
            </div>

            <button className="rounded-2xl bg-black px-8 py-4 font-bold text-white transition hover:bg-slate-900">
              Shop Sale
            </button>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-slate-800 px-4 py-10 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <div>
              <h2 className="mb-2 text-2xl font-black text-lime-400">TSport</h2>

              <p className="text-slate-400">
                Premium sportswear for modern athletes.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-slate-400">
              <a href="#">Home</a>
              <a href="#">Shop</a>
              <a href="#">Categories</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </MainLayout>
  );
}
