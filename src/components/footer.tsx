import Link from 'next/link';

interface FooterLink {
  label: string;
  url: string;
}

const footerLinks: FooterLink[] = [
  { label: 'About Us', url: '/about' },
  { label: 'Contact', url: '/contact' },
  { label: 'Privacy Policy', url: '/privacy' },
  { label: 'Terms of Service', url: '/terms' },
];

export function Footer() {
  return (
    <footer className="bg-orange-400 text-white py-12">
      <div className="container mx-auto px-4 space-y-12">
        {/* Footer Links */}
        <div className="flex justify-center space-x-8">
          {footerLinks.map((link) => (
            <Link key={link.label} href={link.url} passHref>
              {/* No <a> tag needed */}
              <span className="text-lg hover:text-blue-400 transition-colors duration-200 cursor-pointer">
                {link.label}
              </span>
            </Link>
          ))}
        </div>

        {/* Copyright Section */}
        <div className="text-center text-sm text-black mt-6">
          <p>© {new Date().getFullYear()} Society for Electronic Transactions and Security. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
