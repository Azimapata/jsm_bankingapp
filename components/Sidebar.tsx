'use client'

import Link from 'next/link'; // Import Link from Next.js
import Image from 'next/image';
import React from 'react';
import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import Footer from './Footer';

const Sidebar = ({ user }: SiderbarProps) => { 
    // Fixed typo: SiderbarProps to SidebarProps

    const pathname = usePathname();

  return (
    <section className='sidebar'>
      <nav className="flex flex-col gap-4">
        <Link href="/" className='mb-12 cursor-pointer items-center gap-2 flex '> {/* Added flex for alignment */}
          <Image 
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt='Horizon logo'
            className='size-[24px] max-xl:size-14' // Ensure this class is defined in your Tailwind config
          />
          <h1 className="sidebar-logo">Horizon</h1>
        </Link>

        {sidebarLinks.map((item) => {
            const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
            return(
               <Link href={item.route} 
               key={item.label} 
               className={cn('sidebar-link',{'bg-bank-gradient':isActive})}>
                <div className='relative size-6'>
                    <Image src={item.imgURL}
                    alt={item.label}
                    fill
                    className={cn({
                        'brightness-[3] invert-0': isActive
                    })}
                    />
                </div>
                <p className={cn('sidebar-label', {
                    '!text-white' : isActive
                })}>
                    {item.label}
                </p>
               </Link> 
            )
        } )}
        
        USER
      </nav>
      

      <Footer   />
    </section>
  );
}

export default Sidebar;
