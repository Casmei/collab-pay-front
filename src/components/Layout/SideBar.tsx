import React, { forwardRef, ForwardedRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { routes } from "@/routes";

interface Props {
  showNav: boolean;
  isMobile: boolean;
}

const SideBar: React.ForwardRefRenderFunction<HTMLDivElement, Props> = (
  { showNav, isMobile },
  ref
) => {
  const router = useRouter();

  return (
    <div
      ref={ref}
      className={`fixed h-screen w-[250px] flex-shrink-0 flex-col justify-between border-r border-[#23252c] md:flex`}
    >
      <div>
        <div className="flex h-[60px] items-center px-4">
          <Link href={"/"} className="px-2">
            <h1 className="text-lg font-semibold">CollabPay</h1>
          </Link>
        </div>
        <nav className="mt-6 px-4">
          <ul className="flex flex-col gap-2">
            {routes.map((item, index) => (
              <li key={index}>
                <Link href={item.path} className="h-8 rounded-md">
                  <span
                    className={`flex h-8 items-center gap-2 rounded-md px-2 text-sm text-slate-12 ${
                      router.pathname == item.path ? "bg-[#23252c]" : ""
                    }`}
                  >
                    <span className="w-[18px]">{item.icon}</span>
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

SideBar.displayName = "SideBar";

export default forwardRef(SideBar);
