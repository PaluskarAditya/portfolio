import React from 'react'
import { Instagram, Linkedin, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className='bg-blue-700 p-3 flex justify-between items-center'>
      <p className='text-sm tracking-tighter text-white'>All rights reserved @Aditya paluskar 2023</p>
      <div className='flex gap-2 justify-center items-center'>
        <Github className="w-4 h-4 text-white" />
        <Linkedin className="w-4 h-4 text-white" />
        <Instagram className="w-4 h-4 text-white" />
      </div>
    </footer>
  )
}
