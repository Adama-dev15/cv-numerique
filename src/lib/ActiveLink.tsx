"use client";
import { usePathname, useRouter } from "next/navigation";

function ActiveLink(params: any) {
  const { href, children } = params;
  const router = useRouter();
  const usePathName = usePathname();
  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${
        usePathName === href
          ? "text-white"
          : "hover:text-white transition-all duration-100"
      }`}
    >
      {children}
    </a>
  );
}

export default ActiveLink;
