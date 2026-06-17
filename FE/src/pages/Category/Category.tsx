import MainLayout from "../../components/Layout/MainLayout";
export default function Category() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-slate-950 text-white">
        <h1 className="text-3xl font-bold">Category Page</h1>
        <p className="mt-4 text-lg">This is the category page.</p>
      </div>
      <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-3xl font-bold">Running Shoes</h2>

          <p className="text-slate-400">128 products found</p>
        </div>

        <select className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-2">
          <option>Newest</option>
          <option>Price Low → High</option>
          <option>Price High → Low</option>
        </select>
      </div>
      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
        <h3 className="mb-4 font-bold">Brand</h3>

        <div className="space-y-3">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Nike
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Adidas
          </label>
        </div>
      </div>
      <div className="mt-12 flex justify-center gap-2">
        <button className="h-10 w-10 rounded-xl border">1</button>

        <button className="h-10 w-10 rounded-xl bg-lime-500 text-black">
          2
        </button>

        <button className="h-10 w-10 rounded-xl border">3</button>
      </div>
    </MainLayout>
  );
}
