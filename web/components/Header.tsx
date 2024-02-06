import Image from 'next/image'
import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'
import { Button, IconButton } from '@mui/material'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { logout } = useAuth()
  const {user} = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      <div className="flex items-center space-x-1 md:space-x-10">
        <Image
          src="/movies-logo.png"
          width={50}
          height={50}
          className="cursor-pointer object-contain"
          alt="netflix logo"
        />

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          {/* <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li> */}
        </ul>
      </div>

      <div className="flex items-center space-x-4 text-sm font-light">
        <IconButton onClick={() => {}}><MagnifyingGlassIcon className="hidde-n text-white h-6 w-6 sm:inline" /></IconButton>
        <p className="hidde- lg:inline">{user ? <div>{user.email} <Button sx={{ml: '1rem'}} variant="contained" onClick={logout}>Logout?</Button></div> : <Link href="/login">Sign In</Link>}</p>
        {/* <BellIcon className="h-6 w-6" /> */}
        {/* <Link href="/account"> */}
        {/*<Image*/}
        {/*  onClick={logout}*/}
        {/*  src="/avatar.png"*/}
        {/*  alt=""*/}
        {/*  className="cursor-pointer rounded"*/}
        {/*/>*/}
        {/* </Link> */}
      </div>
    </header>
  )
}

export default Header
