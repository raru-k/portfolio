'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react'
import {

  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white dark:bg-gray-900">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              alt=""
              src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
              width={32}
              height={32}
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-sm/6 font-semibold text-gray-900 dark:text-white">
            About
          </a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900 dark:text-white">
            Skill
          </a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900 dark:text-white">
            Product
          </a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900 dark:text-white">
            Contact
          </a>
        </PopoverGroup>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                alt=""
                src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
                width={32}
                height={32}
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-50"
                >
                  About
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-50"
                >
                  Skill
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-50"
                >
                  Product
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-50"
                >
                  Contact
                </a>
              </div>

            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
