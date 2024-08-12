"use client";

import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Navigation, NavigationResponsive } from "@/components/ui/navigation";
import ApplicationLogo from "@/components/ui/application-logo";
import SearchHeader from "@/components/ui/search-header";
import { ProfileHeader, ProfileHeaderResponsive } from "./ui/profile-header";
import Link from "next/link";

export default function Header() {
  return (
    <Disclosure as="nav" className="sticky top-0 bg-white shadow z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center gap-5 w-full">
                <Link href="/">
                  <ApplicationLogo className="h-12 w-16" />
                </Link>
                <SearchHeader />
                <Navigation />
              </div>
              <ProfileHeader />
              <div className="ml-3 -mr-2 flex md:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md  p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <NavigationResponsive />
            <div className="border-t border-gray-700 pb-3 pt-4">
              <ProfileHeaderResponsive />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
