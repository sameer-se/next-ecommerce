export default function Footer() {
  return (
    <div>
      <footer className="bg-primary-shade w-full">
        <div className="container">
          <div className="pt-10 pb-10 md:flex justify-between ">
            <div className="mb-4 ml-4 mr-4">
              <p className="text-6xl mb-4">Hekto</p>
              <input type="text" className="h-10 mb-4" />
              <button className="h-10 w-16 bg-secondary text-white  hover:bg-primary">
                Sign up
              </button>
              <p className="text-[#8A8FB9]">Contact Info</p>
              <p className="text-[#8A8FB9]">
                17 Princess Road, London, Greater London NW1 8JR, UK
              </p>
            </div>
            <div className="flex flex-wrap md:flex gap-20">
              <div className="m-4">
                <ul>
                  <li className="text-2xl mb-2">Catagories</li>
                  <li className="text-[#8A8FB9]">Laptops & Computers</li>
                  <li className="text-[#8A8FB9]">Cameras & Photography</li>
                  <li className="text-[#8A8FB9]">Smart Phones & Tablets</li>
                  <li className="text-[#8A8FB9]">Video Games & Consoles</li>
                  <li className="text-[#8A8FB9]">Waterproof Headphones</li>
                </ul>
              </div>
              <div className="m-4">
                <ul>
                  <li className="text-2xl mb-2">Customer Care</li>
                  <li className="text-[#8A8FB9]">My Account</li>
                  <li className="text-[#8A8FB9]">Discount</li>
                  <li className="text-[#8A8FB9]">Returns</li>
                  <li className="text-[#8A8FB9]">Orders History</li>
                  <li className="text-[#8A8FB9]">Order Tracking</li>
                </ul>
              </div>
              <div className="m-4 pb-4">
                <ul>
                  <li className="text-2xl mb-2">Pages</li>
                  <li className="text-[#8A8FB9]">Blog</li>
                  <li className="text-[#8A8FB9]">Browse the Shop</li>
                  <li className="text-[#8A8FB9]">Category</li>
                  <li className="text-[#8A8FB9]">Pre-Built Pages</li>
                  <li className="text-[#8A8FB9]">Visual Composer Elements</li>
                  <li className="text-[#8A8FB9]">WooCommerce Pages</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
