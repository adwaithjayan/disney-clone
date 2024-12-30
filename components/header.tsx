import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './themeToggler'
import SearchInput from './searchInput'
import GenreDropDown from './genreDropDown'

function Header() {
  return (
    <header className='fixed w-full flex justify-between z-50 top-0 items-center p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900'>
        <Link href='/' className='mr-10'>
             <Image src='/logo.png' alt='Disny logo' height={100} width={120} className='cursor-pointer dark:invert invert-0'/>
        </Link>
        <div className='flex space-x-2'>
            <GenreDropDown/>
            <SearchInput/>
            <ModeToggle/>
        </div>

    </header>
  )
}

export default Header