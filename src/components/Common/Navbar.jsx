'use client'

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false)
      }
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 50) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
        setIsMenuOpen(false)
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const Links = [
    {
      name: "Features",
      href: "#features"
    },
    {
      name: "Why TableMitra",
      href: "#why-tablemitra"
    },
    {
      name: "FAQ",
      href: "#faq"
    },
    {
      name: "Contact Us",
      href: "#contact-us"
    }
  ]

  const handleLinkClick = () => {
    if (isMobile) {
      setIsMenuOpen(false)
    }
  }

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    }
  }

  const menuItemVariants = {
    closed: { opacity: 0, y: -10 },
    open: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        type: 'spring',
        stiffness: 300,
        damping: 24
      }
    })
  }

  const overlayVariants = {
    closed: { opacity: 0 },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <>
      <motion.header
        className='container mx-auto max-w-[88rem] fixed top-3 sm:top-5 z-[100] left-[50%] translate-x-[-50%] bg-[#fff] px-4 sm:px-6 lg:px-3 py-3 sm:py-2 flex justify-between items-center rounded-[12px] sm:rounded-[16px] border-[1px] border-solid border-[#FFE9E7] shadow-2xs w-[calc(100%-1rem)]'
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
          mass: 0.8
        }}
      >

        <Link href={"/"} className='text-[#FE5F1E] font-plusjakartaSans font-bold text-[20px] sm:text-[24px] z-[102]'>
          TableMitra
        </Link>

        <nav className='hidden lg:block'>
          <ul className='flex flex-row items-center gap-x-7'>
            {Links.map((link) => (
              <motion.li
                key={link.name}
                className='text-[16px] text-[#666] hover:text-[#000] font-inter font-medium'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={link.href}>
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        <motion.button
          className='hidden lg:block'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href={"/login"} className='text-[#FE5F1E] font-plusjakartaSans font-bold text-[16px] border border-solid px-4 py-3 rounded-xl border-[#FE5F1E] inline-block'>
            Get Quote
          </Link>
        </motion.button>

        <motion.button
          className='lg:hidden z-[102] w-8 h-8 flex flex-col justify-center items-center gap-[6px] relative'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
        >
          <motion.span
            className='w-6 h-[2px] bg-[#FE5F1E] rounded-full block'
            animate={isMenuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          />
          <motion.span
            className='w-6 h-[2px] bg-[#FE5F1E] rounded-full block'
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className='w-6 h-[2px] bg-[#FE5F1E] rounded-full block'
            animate={isMenuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          />
        </motion.button>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className='fixed inset-0 bg-black/50 z-[97] lg:hidden'
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.div
              className='container mx-auto max-w-[88rem] fixed top-[4.5rem] sm:top-[5.5rem] z-[99] left-[50%] translate-x-[-50%] bg-[#fff] px-4 sm:px-6 py-6 rounded-[12px] sm:rounded-[16px] border-[1px] border-solid border-[#FFE9E7] shadow-2xl w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] lg:hidden'
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <nav>
                <ul className='flex flex-col gap-4'>
                  {Links.map((link, i) => (
                    <motion.li
                      key={link.name}
                      custom={i}
                      variants={menuItemVariants}
                      initial="closed"
                      animate="open"
                      className='text-[16px] text-[#666] hover:text-[#000] font-inter font-medium border-b border-[#FFE9E7] pb-3 last:border-b-0'
                    >
                      <Link href={link.href} onClick={handleLinkClick}>
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  custom={Links.length}
                  variants={menuItemVariants}
                  initial="closed"
                  animate="open"
                  className='mt-6 pt-4 border-t border-[#FFE9E7]'
                >
                  <Link
                    href={"/login"}
                    className='text-[#FE5F1E] font-plusjakartaSans font-bold text-[16px] border border-solid px-6 py-3 rounded-xl border-[#FE5F1E] inline-block w-full text-center'
                    onClick={handleLinkClick}
                  >
                    Get Quote
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
