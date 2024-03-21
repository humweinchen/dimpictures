import Link from "next/link";
import { RiVimeoFill, RiInstagramFill } from "react-icons/ri";
import type { ReactNode, FunctionComponent } from "react";
import { useRouter } from "next/router";
import { RxHamburgerMenu } from "react-icons/rx";

const links = [
  { label: "home", to: "/home" },
  { label: "about us", to: "/about" },
  { label: "works", to: "/works" },
  { label: "contact", to: "/contact" },
];

export const Layout: FunctionComponent<{
  children: ReactNode;
  bgColor?: string;
}> = ({ children, bgColor }) => {
  const router = useRouter();

  return (
    <main
      className="relative flex min-h-screen flex-col"
      style={{ background: bgColor ?? "white" }}
    >
      <input
        type="checkbox"
        id="drawer-toggle"
        className="peer sr-only relative"
      />
      <nav className="sticky top-0 z-20 flex h-[70px] w-full flex-row items-center justify-between bg-black px-5 sm:px-12">
        <Link
          href="/"
          className="text-title font-bebas text-3xl tracking-wide text-primary text-opacity-100 transition duration-300 ease-in-out hover:text-opacity-0"
        >
          Dim Pictures.
        </Link>
        <div className="hidden h-full flex-row items-center gap-9 md:flex">
          {links.map((link) => (
            <Link
              href={link.to}
              className={`flex h-full flex-col justify-center border-b-4 text-xl font-thin capitalize text-primary transition-colors duration-200 hover:border-b-primary ${router.pathname.startsWith(link.to) ? "border-b-primary" : "border-b-transparent"}`}
              key={link.label}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden flex-row items-center gap-5 text-3xl md:flex">
          <RiVimeoFill
            color="white"
            onClick={() => window.open("https://vimeo.com/user214194019")}
          />
          <RiInstagramFill
            color="white"
            onClick={() =>
              window.open("https://www.instagram.com/dimpictures2022/")
            }
          />
        </div>
        <label htmlFor="drawer-toggle" className="block text-white md:hidden">
          <RxHamburgerMenu size={30} />
        </label>
      </nav>
      <label
        htmlFor="drawer-toggle"
        className="fixed left-0 top-0 z-20 hidden min-h-screen w-full bg-black opacity-0 transition-opacity duration-300 ease-in-out peer-checked:block peer-checked:select-none peer-checked:opacity-70"
      />
      <div className="fixed right-0 top-0 z-30 h-full w-64 translate-x-full transform bg-gray-900 shadow-lg transition-all duration-500 peer-checked:translate-x-0">
        <div className="flex h-full flex-col px-6 pb-12 pt-4">
          <h2 className="font-bebas text-3xl tracking-wide text-primary">
            DIM PICTURES.
          </h2>
          <div className="mt-12 flex flex-col gap-6">
            {links.map((link, i) => (
              <Link
                key={i}
                href={link.to}
                className={`text-left font-arial text-xl capitalize text-white decoration-white underline-offset-8${router.pathname.startsWith(link.to) ? " underline" : ""}`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-row items-center gap-5 text-3xl">
              <RiVimeoFill
                color="white"
                onClick={() => window.open("https://vimeo.com/user214194019")}
              />
              <RiInstagramFill
                color="white"
                onClick={() =>
                  window.open("https://www.instagram.com/dimpictures2022/")
                }
              />
            </div>
          </div>
        </div>
      </div>
      {children}
      {router.asPath.includes("works") && <div className="min-h-[52px]" />}
      <div className="absolute bottom-0 w-full bg-black py-4 text-center font-arial text-sm font-thin text-primary">
        © {new Date().getFullYear()} DIM PICTURES.
      </div>
    </main>
  );
};
