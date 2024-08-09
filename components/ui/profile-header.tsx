import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { cn } from "@/lib/utils";
import { BellIcon } from "@heroicons/react/24/outline";
import { Button } from "./button";
import Image from "next/image";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const userNavigation = [
  { name: "Profil", href: "#" },
  { name: "Pengaturan", href: "#" },
  { name: "Keluar", href: "#" },
];

const isLoggedin = false;

export function ProfileHeader() {
  if (!isLoggedin) {
    return (
      <div className="hidden md:block">
        <div className="ml-4 md:ml-6">
          <Button className="border border-primary hover:text-primary">
            Masuk
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="hidden md:block">
      <div className="ml-4 flex items-center md:ml-6">
        <Menu as="div" className="relative ml-3">
          <div>
            <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span className="absolute -inset-1.5" />
              <span className="sr-only">Open user menu</span>
              <Image
                className="rounded-full"
                height={32}
                width={32}
                src={user.imageUrl}
                alt=""
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {userNavigation.map((item) => (
                <Menu.Item key={item.name}>
                  {({ active }) => (
                    <a
                      href={item.href}
                      className={cn(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      {item.name}
                    </a>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}

export function ProfileHeaderResponsive() {
  return (
    <>
      <div className="flex items-center px-5">
        <div className="flex-shrink-0">
          <Image
            className="rounded-full"
            src={user.imageUrl}
            alt="sample"
            width={40}
            height={40}
          />
        </div>
        <div className="ml-3 space-y-1">
          <div className="text-base font-medium leading-none text-gray-900">
            {user.name}
          </div>
          <div className="text-sm font-medium leading-none text-gray-400">
            {user.email}
          </div>
        </div>
      </div>
      <div className="mt-3 space-y-1 px-2">
        {userNavigation.map((item) => (
          <Disclosure.Button
            key={item.name}
            as="a"
            href={item.href}
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100"
          >
            {item.name}
          </Disclosure.Button>
        ))}
      </div>
    </>
  );
}
