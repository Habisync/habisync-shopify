import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <header className="bg-futuristicGray sticky top-0 z-50 shadow">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <img src="/images/habisync_logo.png" alt="Habisync Logo" className="h-10 mr-4"/>
        <h1 className="text-futuristicGreen text-3xl font-bold">
          <Link to="/">Habisync</Link>
        </h1>
        <nav>
          <ul className="flex space-x-6 text-white">
            <li><Link to="/products" className="hover:text-futuristicGreen transition-all">Products</Link></li>
            <li><Link to="/customizer" className="hover:text-futuristicGreen transition-all">Customizer</Link></li>
            <li><Link to="/installation" className="hover:text-futuristicGreen transition-all">Installation</Link></li>
            <li><Link to="/subscription" className="hover:text-futuristicGreen transition-all">Subscriptions</Link></li>
            <li><Link to="/dropshipping" className="hover:text-futuristicGreen transition-all">Dropshipping</Link></li>
            <li><Link to="/blog" className="hover:text-futuristicGreen transition-all">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-futuristicGreen transition-all">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
