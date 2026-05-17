// App.js
// Create a file named App.css and paste the CSS code below.

/* App.css */

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #eaeded;
}

.navbar {
  background-color: #131921;
  color: white;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 28px;
  font-weight: bold;
  color: orange;
}

.search-bar {
  width: 400px;
  padding: 10px;
  border-radius: 5px;
  border: none;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.hero {
  height: 400px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
}

.hero-content h1 {
  font-size: 50px;
}

.shop-btn {
  padding: 12px 25px;
  background-color: orange;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
}

.products {
  padding: 40px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
}

.product-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  transition: 0.3s;
}

.product-card:hover {
  transform: scale(1.05);
}

.product-card img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.product-info {
  padding: 15px;
}

.price {
  color: green;
  font-size: 24px;
  font-weight: bold;
}

.cart-btn {
  width: 100%;
  padding: 10px;
  background-color: orange;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

.footer {
  background-color: #131921;
  color: white;
  text-align: center;
  padding: 20px;
  margin-top: 40px;
}


export default function AmazonClone() {
  const products = [
    {
      id: 1,
      title: "Wireless Headphones",
      price: 2499,
      image:
        "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Smart Watch",
      price: 3999,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Gaming Mouse",
      price: 1499,
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Laptop",
      price: 55999,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Bluetooth Speaker",
      price: 1999,
      image:
        "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Keyboard",
      price: 999,
      image:
        "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Navbar */}
      <nav className="bg-[#131921] text-white px-6 py-4 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-yellow-400">amazon</h1>
          <input
            type="text"
            placeholder="Search products"
            className="w-[400px] px-4 py-2 rounded-md text-black outline-none"
          />
        </div>

        <div className="flex items-center gap-6 text-sm">
          <div>
            <p>Hello, User</p>
            <h2 className="font-bold">Account</h2>
          </div>

          <div>
            <p>Returns</p>
            <h2 className="font-bold">& Orders</h2>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-2xl">🛒</span>
            <h2 className="font-bold">Cart</h2>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative">
        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1400&auto=format&fit=crop"
          alt="banner"
          className="w-full h-[400px] object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to Amazon Clone</h1>
            <p className="text-lg">Best Deals on Electronics & Gadgets</p>
            <button className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                <p className="text-2xl font-semibold text-green-600 mb-4">
                  ₹{product.price}
                </p>

                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded-lg font-bold transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Electronics",
              "Fashion",
              "Home",
              "Gaming",
              "Books",
              "Mobiles",
              "Fitness",
              "Accessories",
            ].map((category, index) => (
              <div
                key={index}
                className="bg-gray-100 p-8 rounded-2xl text-center shadow hover:bg-yellow-100 transition cursor-pointer"
              >
                <h3 className="font-bold text-lg">{category}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#131921] text-white mt-12 py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">About</h2>
            <p className="text-gray-300">
              This is a React + Tailwind Amazon Clone project.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-gray-300">
              <li>Home</li>
              <li>Products</li>
              <li>Cart</li>
              <li>Orders</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Contact</h2>
            <p className="text-gray-300">Email: support@amazonclone.com</p>
          </div>
        </div>

        <div className="text-center text-gray-400 mt-8 border-t border-gray-700 pt-4">
          © 2026 Amazon Clone. Built with React & Tailwind CSS.
        </div>
      </footer>
    </div>
  );
}
