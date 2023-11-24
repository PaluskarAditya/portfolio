"use client"

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ChevronRight, Github, Linkedin, Phone } from 'lucide-react';
import { useScroll, useTransform, motion } from 'framer-motion'
import React, { useRef } from 'react';

export default function Page() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <motion.div className='flex flex-col snap-x' ref={ref}>
      <div id='home' style={{scale}} className='snap-center relative from-gray-200 via-white from-10% to-90% bg-gradient-to-b to-white h-screen flex justify-center items-center flex-col'>
        <motion.h1 style={{scale}} className='font-black tracking-tighter text-6xl z-10'>Aditya Paluskar</motion.h1>
        <p className='text-sm mt-1 z-10'>Hello &#128075;, I am Aditya. Full Stack Web Developer & Programmer.</p>
        <p className='font-black text-[10vw] absolute z-0 text-gray-100/10 drop-shadow-sm'>Web Developer</p>
        <div className='z-10 mt-2 gap-2 flex justify-center items-center'>
          <Button className='text-xs' variant={'secondary'} size={'sm'} >
            resume
          </Button>
          <Button className='text-xs' size={'sm'} >
            email
          </Button>
        </div>
      </div>
      <motion.div id='about' style={{opacity}} className='snap-center h-screen flex justify-center items-center'>
        <div className='flex-1 flex flex-col shrink p-7 w-[50-vw]'>
          <h1 className='font-bold tracking-tighter text-4xl'>About me</h1>
          <div className='flex mt-3 flex-col bg-gray-100 rounded-xl border border-gray-100 shadow-lg shadow-gray-100'>
            <div className='bg-white shadow-sm shadow-gray-200 rounded-t-xl flex p-3 justify-start items-center'>
              <div className='border border-gray-100 rounded-full'>
                <img src='/prof.png' className='w-12 h-12 object-center rounded-full' />
              </div>
              <p className='font-bold ml-3 tracking-tighter text-xl'>Aditya Paluskar</p>
            </div>
            <div className='flex flex-col flex-wrap p-3'>
              <div className='relative rounded-full flex flex-wrap shrink rounded-bl-none px-4 bg-white p-2 shadow-lg shadow-gray-100/50'>
                <p className='text-sm'>Hey there, I am Aditya Paluskar based in Mumbai, India.</p>
              </div>
              <div className='rounded-r-full flex  flex-wrap shrink mt-2 px-4 bg-white p-2 shadow-lg shadow-gray-100/50'>
                <p className='text-sm'>A Full Stack Web Developer currently pursuing my undergraduate's <b>B.C.A</b> degree.</p>
              </div>
              <div className='rounded-full flex shrink flex-wrap mt-2 rounded-tl-none px-4 bg-white p-2 shadow-lg shadow-gray-100/50'>
                <p className='text-sm'>Always willing to learn new technologies in the tech industry and implement them for betterment.</p>
              </div>
              <div className='flex justify-end items-center'>
                <div className='bg-blue-700 rounded-full rounded-br-none mt-2 px-3 p-2 shadow-lg shadow-gray-100/50'>
                  <p className='text-white text-sm'>Great ;)</p>
                </div>
              </div>
              <div className='rounded-full shrink flex rounded-bl-none mt-2 px-4 bg-white p-2 shadow-lg shadow-gray-100/50'>
                <p className='text-sm'>I love coding and building projects. Currently, I am working on my skills with <b>NextJS</b>.</p>
              </div>
              <div className='flex justify-end items-center'>
                <div className='bg-blue-700 rounded-full rounded-br-none mt-2 px-3 p-2 shadow-lg shadow-gray-100/50'>
                  <p className='text-white text-sm'>That's really awesome &lt;3 </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex-1 flex p-7 ml-5 justify-center items-center'>
          <h1 className='m-0 font-bold tracking-tighter text-4xl rotate-270 flex h-max w-max text-end rotate-[270deg]'>Education</h1>
          <div className='flex flex-col gap-4 w-[90%]'>
            <div className='bg-gray-100 rounded-md w-full p-3 shadow-lg shadow-gray-100/50'>
              <p className='text-xl font-medium tracking-tighter'>SSC</p>
              <p className='text-sm tracking-tighter flex justify-between items-center'>St. Anthony's High School <span className='font-medium'>2020</span></p>
            </div>
            <div className='bg-gray-100 rounded-md w-full p-3 shadow-lg shadow-gray-100/50'>
              <p className='text-xl font-medium tracking-tighter'>HSC</p>
              <p className='text-sm tracking-tighter flex justify-between items-center'>Chetana's college of Commerce & Arts<span className='font-medium'>2022</span></p>
            </div>
            <div className='bg-gray-100 rounded-md w-full p-3 shadow-lg shadow-gray-100/50'>
              <p className='text-xl font-medium tracking-tighter'>BCA CS</p>
              <p className='text-sm tracking-tighter flex justify-between items-center'>Ibsar<span className='font-medium'>2025</span></p>
            </div>
            <p className='text-center tracking-tighter text-sm mt-2'>to be continued...</p>
          </div>
        </div>
      </motion.div>
      <div id='projects' className='flex flex-col justify-start items-center pt-[90px]'>
        <h1 className='font-bold tracking-tighter text-4xl mb-0'>Projects</h1>
        <div className='grid grid-cols-2 gap-5 p-7 max-w-[700px]'>
          <Card className='shadow-lg shadow-gray-100'>
            <CardContent className='flex flex-col justify-center items-center p-0'>
              <CardHeader className='p-0 w-full relative h-[150px]'>
                <img src='/ecomm.jpg' className='h-full object-cover object-center rounded-t-md' />
                <div className='absolute top-[-7px] left-0 right-0 bottom-0 rounded-t-md bg-black/30 flex justify-center items-center'>
                  <h1 className='font-bold text-center tracking-tighter text-xl text-white mt-0'>Ecommerce<br />Website</h1>
                </div>
              </CardHeader>
              <CardDescription className='p-6 pb-0 tracking-tighter text-center'>
                Ecommerce website built with NextJS, Tailwind CSS, MongoDB, Express, Redux Toolkit.
              </CardDescription>
              <CardFooter className='mt-6 flex gap-2'>
                <Button className='text-xs' size={'sm'} variant={'outline'}>
                  live
                </Button>
                <Button className='text-xs' size={'sm'}>
                  github
                </Button>
              </CardFooter>
            </CardContent>
          </Card>
          <Card className='shadow-lg shadow-gray-100'>
            <CardContent className='flex flex-col justify-center items-center p-0'>
              <CardHeader className='p-0 w-full relative h-[150px]'>
                <img src='/ent.jpg' className='h-full object-cover object-center rounded-t-md' />
                <div className='absolute top-[-7px] left-0 right-0 bottom-0 rounded-t-md bg-black/30 flex justify-center items-center'>
                  <h1 className='font-bold text-center tracking-tighter text-xl text-white mt-0'>Entertainment<br />App</h1>
                </div>
              </CardHeader>
              <CardDescription className='p-6 pb-0 tracking-tighter text-center'>
                Ecommerce website built with NextJS, Tailwind CSS, MongoDB, Express, Redux Toolkit.
              </CardDescription>
              <CardFooter className='mt-6 flex gap-2'>
                <Button className='text-xs' size={'sm'} variant={'outline'}>
                  live
                </Button>
                <Button className='text-xs bg-teal-900' size={'sm'}>
                  github
                </Button>
              </CardFooter>
            </CardContent>
          </Card>
          <Card className='shadow-lg shadow-gray-100'>
            <CardContent className='flex flex-col justify-center items-center p-0'>
              <CardHeader className='p-0 w-full relative h-[150px]'>
                <img src='/chat.jpg' className='h-full object-cover object-center rounded-t-md' />
                <div className='absolute top-[-7px] left-0 right-0 bottom-0 rounded-t-md bg-black/30 flex justify-center items-center'>
                  <h1 className='font-bold text-center tracking-tighter text-xl text-white mt-0'>Chat App</h1>
                </div>
              </CardHeader>
              <CardDescription className='p-6 pb-0 tracking-tighter text-center'>
                Ecommerce website built with NextJS, Tailwind CSS, MongoDB, Express, Redux Toolkit.
              </CardDescription>
              <CardFooter className='mt-6 flex gap-2'>
                <Button className='text-xs' size={'sm'} variant={'outline'}>
                  live
                </Button>
                <Button className='text-xs bg-green-800 ' size={'sm'}>
                  github
                </Button>
              </CardFooter>
            </CardContent>
          </Card>
          <Card className='shadow-lg shadow-gray-100'>
            <CardContent className='flex flex-col justify-center items-center p-0'>
              <CardHeader className='p-0 w-full relative h-[150px]'>
                <img src='/gym.jpg' className='h-full object-cover object-center rounded-t-md' />
                <div className='absolute top-[-7px] left-0 right-0 bottom-0 rounded-t-md bg-black/30 flex justify-center items-center'>
                  <h1 className='font-bold text-center tracking-tighter text-xl text-white mt-0'>Gym Management<br />System</h1>
                </div>
              </CardHeader>
              <CardDescription className='p-6 pb-0 tracking-tighter text-center'>
                Ecommerce website built with NextJS, Tailwind CSS, MongoDB, Express, Redux Toolkit.
              </CardDescription>
              <CardFooter className='mt-6 flex gap-2'>
                <Button className='text-xs' size={'sm'} variant={'outline'}>
                  live
                </Button>
                <Button className='text-xs' size={'sm'}>
                  github
                </Button>
              </CardFooter>
            </CardContent>
          </Card>
        </div>
        <p className='text-sm text-gray-600 cursor-pointer pb-3 '>more projects <ChevronRight className="inline-block w-4 h-4" /></p>
      </div>
      <div id='connect' className='flex justify-center items-center h-screen bg-gradient-to-b from-white via-white to-90% to-gray-200'>
        <div className='flex justify-end items-center flex-1'>
          <div className='flex justify-end items-end p-7'>
            <h1 className='font-black text-right text-7xl tracking-tighter'>Connect <br />with me</h1>
          </div>
          <div className='flex flex-col justify-start items-start p-5 pl-0 gap-3'>
            <div className='cursor-pointer hover:scale-105 transition flex items-center rounded-full shadow-md border-gray-100 border bg-white shadow-gray-100 px-5 py-2'>
              <Linkedin className="w-4 h-5 mr-3" />
              <p className='text-sm'>Linkedin</p>
            </div>
            <div className='cursor-pointer hover:scale-105 transition flex items-center rounded-full shadow-md border-gray-100 border bg-white shadow-gray-100 px-5 py-2'>
              <Github className="w-4 h-5 mr-3" />
              <p className='text-sm'>Github</p>
            </div>
            <div className='cursor-pointer hover:scale-105 transition flex items-center rounded-full shadow-md border-gray-100 border bg-white shadow-gray-100 px-5 py-2'>
              <Phone className="w-4 h-5 mr-3" />
              <p className='text-sm'>Contact</p>
            </div>
          </div>
        </div>
        <div className='flex flex-1 justify-start items-center p-10'>
          <Card className='w-full'>
            <CardHeader>
              <CardTitle className='font-bold tracking-tighter text-2xl'>Message me</CardTitle>
              <CardDescription>
                directly reach me out at my inbox.
              </CardDescription>  
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="" placeholder='Pedro Duarte' />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Email</Label>
                <Input id="username" defaultValue="" placeholder='peduarte@gmail.com' type={'email'}/>
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Message</Label>
                <Input id="username" defaultValue="" placeholder='enter your message...' />
              </div>
            </CardContent>
            <CardFooter>
              <Button>send message</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}
