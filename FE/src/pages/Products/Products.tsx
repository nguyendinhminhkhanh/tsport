import { useState } from "react";
import {
  ShoppingCart,
  Truck,
  ShieldCheck,
  RotateCcw,
  Star,
  Heart,
} from "lucide-react";

import MainLayout from "../../components/Layout/MainLayout";

export default function ProductDetail() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("42");
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
    "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    "https://images.unsplash.com/photo-1543508282-6319a3e2621f",
  ];

  const sizes = ["39", "40", "41", "42", "43", "44"];

  return (
    <MainLayout>
      <div className="min-h-screen bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8 text-sm text-slate-400">
            Home / Running / Shoes / Nike Air Zoom
          </div>

          {/* Main */}
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Gallery */}
            <div>
              <div className="overflow-hidden rounded-3xl border border-slate-800">
                <img
                  src={images[selectedImage]}
                  alt=""
                  className="h-[500px] w-full object-cover"
                />
              </div>

              <div className="mt-4 grid grid-cols-4 gap-3">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`overflow-hidden rounded-2xl border ${
                      selectedImage === index
                        ? "border-lime-500"
                        : "border-slate-800"
                    }`}
                  >
                    <img
                      src={image}
                      alt=""
                      className="h-24 w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-4 inline-flex rounded-full bg-lime-500 px-4 py-1 text-sm font-semibold text-black">
                Best Seller
              </div>

              <h1 className="mb-4 text-4xl font-black">
                Nike Air Zoom Pegasus 41
              </h1>

              <div className="mb-4 flex items-center gap-4">
                <div className="flex text-yellow-400">
                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />
                </div>

                <span className="text-slate-400">4.9 (125 Reviews)</span>
              </div>

              <div className="mb-2 text-4xl font-black text-lime-400">
                2.990.000₫
              </div>

              <div className="mb-8 text-slate-400">
                Đã bán 1.250 sản phẩm • Còn 12 sản phẩm
              </div>

              <p className="mb-8 leading-7 text-slate-300">
                Giày chạy bộ cao cấp với công nghệ Air Zoom, mang lại khả năng
                giảm chấn vượt trội và cảm giác thoải mái trong mọi cự ly.
              </p>

              {/* Colors */}
              <div className="mb-8">
                <h3 className="mb-3 font-semibold">Màu sắc</h3>

                <div className="flex gap-3">
                  <button className="h-10 w-10 rounded-full bg-black ring-2 ring-lime-500" />
                  <button className="h-10 w-10 rounded-full bg-white border" />
                  <button className="h-10 w-10 rounded-full bg-blue-500" />
                </div>
              </div>

              {/* Sizes */}
              <div className="mb-8">
                <h3 className="mb-3 font-semibold">Kích thước</h3>

                <div className="flex flex-wrap gap-3">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`h-12 w-12 rounded-xl border font-semibold transition ${
                        selectedSize === size
                          ? "border-lime-500 bg-lime-500 text-black"
                          : "border-slate-700"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <h3 className="mb-3 font-semibold">Số lượng</h3>

                <div className="flex w-fit items-center rounded-xl border border-slate-700">
                  <button
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                    className="px-4 py-3"
                  >
                    -
                  </button>

                  <span className="px-6">{quantity}</span>

                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-3"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Buttons */}
              <div className="mb-8 flex flex-col gap-4 sm:flex-row">
                <button className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-lime-500 py-4 font-bold text-black">
                  <ShoppingCart size={20} />
                  Add To Cart
                </button>

                <button className="flex-1 rounded-2xl bg-white py-4 font-bold text-black">
                  Buy Now
                </button>

                <button className="rounded-2xl border border-slate-700 px-5">
                  <Heart />
                </button>
              </div>

              {/* Shipping */}
              <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-900 p-6">
                <div className="flex items-center gap-3">
                  <Truck className="text-lime-400" />
                  <span>Giao hàng toàn quốc</span>
                </div>

                <div className="flex items-center gap-3">
                  <RotateCcw className="text-lime-400" />
                  <span>Đổi trả trong 7 ngày</span>
                </div>

                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-lime-400" />
                  <span>Cam kết chính hãng 100%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <section className="mt-20">
            <h2 className="mb-6 text-3xl font-bold">Product Description</h2>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
              <ul className="space-y-3 text-slate-300">
                <li>✓ Công nghệ Nike Air Zoom</li>
                <li>✓ Upper Mesh thoáng khí</li>
                <li>✓ Trọng lượng 280g</li>
                <li>✓ Hỗ trợ chạy đường dài</li>
                <li>✓ Đệm giảm chấn cao cấp</li>
              </ul>
            </div>
          </section>

          {/* Specifications */}
          <section className="mt-12">
            <h2 className="mb-6 text-3xl font-bold">Specifications</h2>

            <div className="overflow-hidden rounded-3xl border border-slate-800">
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-slate-800">
                    <td className="p-4 font-semibold">Thương hiệu</td>
                    <td className="p-4 text-slate-400">Nike</td>
                  </tr>

                  <tr className="border-b border-slate-800">
                    <td className="p-4 font-semibold">Loại</td>
                    <td className="p-4 text-slate-400">Running Shoes</td>
                  </tr>

                  <tr className="border-b border-slate-800">
                    <td className="p-4 font-semibold">Chất liệu</td>
                    <td className="p-4 text-slate-400">Mesh</td>
                  </tr>

                  <tr>
                    <td className="p-4 font-semibold">Trọng lượng</td>
                    <td className="p-4 text-slate-400">280g</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Related Products */}
          <section className="mt-20">
            <h2 className="mb-8 text-3xl font-bold">Related Products</h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900"
                >
                  <img
                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                    alt=""
                    className="h-64 w-full object-cover"
                  />

                  <div className="p-5">
                    <h3 className="mb-2 font-bold">Nike Air Max</h3>

                    <p className="mb-4 text-slate-400">Running Shoes</p>

                    <div className="font-bold text-lime-400">2.590.000₫</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Mobile Sticky Footer */}
        <div className="fixed bottom-0 left-0 right-0 border-t border-slate-800 bg-slate-950 p-4 md:hidden">
          <div className="flex gap-3">
            <button className="flex-1 rounded-xl border border-slate-700 py-3">
              Cart
            </button>

            <button className="flex-1 rounded-xl bg-lime-500 py-3 font-bold text-black">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
