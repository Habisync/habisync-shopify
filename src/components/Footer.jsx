export default function Footer() {
  return (
    <footer className="bg-futuristicGray text-center text-white py-6">
      <p className="text-sm">&copy; 2025 Habisync. All rights reserved.</p>
      <div className="mt-4">
        <a href="https://facebook.com" className="mx-2 hover:text-futuristicGreen">Facebook</a>
        <a href="https://twitter.com" className="mx-2 hover:text-futuristicGreen">Twitter</a>
        <a href="https://instagram.com" className="mx-2 hover:text-futuristicGreen">Instagram</a>
      </div>
      <p className="mt-2 text-xs text-gray-500">Terms | Privacy | GDPR Compliant</p>
    </footer>
  );
}
