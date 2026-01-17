import Link from "next/link";

export default function Footer() {
  const navLinks1 = [
    { name: "About the CEO", href: "https://anukwu-chekwube.vercel.app" },
    { name: "Services", href: "#service-section" },
    { name: "Our Team", href: "/UI-Components/Pages/Teams" },
  ];

  const navLinks2 = [
    { name: "Gallery", href: "/UI-Components/Pages/Gallery" },
    { name: "Partners", href: "/UI-Components/Pages/Partners" },
    { name: "Terms & Conditions", href: "/" },
  ];

  const socialLinks = [
    {
      href: "https://www.facebook.com/profile.php?id=61585926222846",
      label: "Facebook",
      icon: "bi-facebook",
    },
    {
      href: "https://www.instagram.com/immaginationbiog?igsh=MXA0bTAyZmVyazM4Nw==",
      label: "Instagram",
      icon: "bi-instagram",
    },
    {
      href: "https://vm.tiktok.com/ZSHEWHERev7nT-EFaSL/",
      label: "Tiktok",
      icon: "bi-tiktok",
    },
  ];
  const phoneNumber = [
    { id: 1, number: "+234 802 747 2551" },
    { id: 2, number: "+234 915 573 0950" },
    { id: 3, number: "+234 904 125 1750" },
  ]

  return (
    <>
      <div id="footer-section" className="px-[8%] lg:px-[12%] pb-20 pt-10 mb-0 footer relative bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pb-15">
          <div className="footer-content">
            <Link
              href="/"
              className="text-(--prim) text-2xl lg:text-3xl md:text-4xl font-bold Bebas"
            >
              Imma<span className="text-white">gination</span>
            </Link>
            <h2 className="text-gray-300 text-lg my-5 GolosText">
              Bringing your thoughts to life
            </h2>
            <p className="text-gray-300 GolosText">
              Lejja Park, Ogige Market close to sunday-sunday Market
            </p>
          </div>

          <div className="footer-content py-3">
            <ul className="footer-links flex flex-col">
              {navLinks1.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-gray-300 GolosText mb-1 text-xl transition-all duration-300 hover:text-(--prim) hover:ml-2"
                >
                  {link.name}
                </Link>
              ))}
            </ul>
          </div>

          <div className="footer-content py-3">
            <ul className="footer-links flex flex-col">
              {navLinks2.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-gray-300 GolosText mb-1 text-xl transition-all duration-300 hover:text-(--prim) hover:ml-2"
                >
                  {link.name}
                </Link>
              ))}
            </ul>
          </div>

          <div className="footer-content flex-col gap-2">
            <div className="flex flex-col gap-3 cursor pointer ">
              {phoneNumber.map((phone) => (
                <Link href={`tel:${phone.number}`} key={phone.id} className="text-xl text-(--prim) GolosText">
                  {phone.number}
                </Link>
              ))}
            </div>
            <h2 className="text-2xl text-(--prim) GolosText">
              <Link href="mailto:immaginationbiog@gmail.com">immaginationbiog@gmail.com</Link>
            </h2>
          </div>
        </div>

        <div className="footer-bottom flex justify-between items-center py-8 border-t border-gray-500">
          <p className="text-gray-300 text-lg">
            &copy; 2025 Immagination. All Rights Reserved.
          </p>

          <div className="footer-social flex gap-3 py-6 cursor-pointer">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="text-gray-300 GolosText transition-all duration-300 hover:text-(--prim) font-semibold hover:translate-y-1"
                  aria-label={social.label}
                >
                  <i className={`bi ${social.icon} text-xl`}></i>
                </Link>
              ))}
            </div>
        </div>
      </div>
    </>
  );
}