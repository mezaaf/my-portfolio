import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTiktok,
} from "@tabler/icons-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-background z-99 w-full border-t px-5 lg:mt-16">
      <div>
        <div className="flex flex-col flex-wrap items-center justify-center gap-5 py-4 lg:flex-row lg:justify-between lg:gap-0">
          <p>&copy; {new Date().getFullYear()} Mezaaf. All rights reserved</p>

          <ul className="flex items-center gap-5">
            <li>
              <Link
                href="https://www.instagram.com/mezaafsopsepoken/"
                target="_blank"
              >
                <IconBrandInstagram className="size-6 opacity-50 transition-all duration-300 hover:opacity-100" />
              </Link>
            </li>
            <li>
              <Link href="https://www.tiktok.com/@mezaaf_" target="_blank">
                <IconBrandTiktok className="size-6 opacity-50 transition-all duration-300 hover:opacity-100" />
              </Link>
            </li>
            <li>
              <Link href="https://www.github.com/mezaaf" target="_blank">
                <IconBrandGithub className="size-6 opacity-50 transition-all duration-300 hover:opacity-100" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
