"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-cyan-50 to-cyan-100 relative overflow-hidden">
      {/* Formas geométricas decorativas */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-20 -left-20 w-60 h-60 bg-cyan-200/10 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 -right-20 w-80 h-80 bg-cyan-300/10 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-1/3 w-40 h-40 bg-cyan-200/10 rotate-45 blur-2xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center min-h-screen text-center"
        >
          {/* Axolote mascote */}
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="mb-12 hover:scale-110 transition-transform duration-300"
          >
            <Image
              src="https://static.vecteezy.com/system/resources/previews/021/276/936/non_2x/cute-axolotl-axolotl-illustration-sea-salamander-sea-life-marine-life-png.png"
              alt="Axolote mascote"
              width={180}
              height={180}
              className="drop-shadow-2xl"
            />
          </motion.div>

          <motion.div
            animate={{ 
              scale: [1, 1.02, 1],
              rotate: [0, 1, 0] 
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="mb-10"
          >
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-cyan-700 via-cyan-500 to-cyan-300 bg-clip-text text-transparent drop-shadow-lg">
              Aprenda Palavras Novas
            </h1>
          </motion.div>

          <p className="text-2xl md:text-3xl text-cyan-900/80 mb-12 max-w-3xl font-light">
            Expanda seu vocabulário de forma natural e eficiente. 
            <span className="block mt-2 text-cyan-600">Uma palavra por dia, um universo de possibilidades.</span>
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-6 flex flex-col md:flex-row justify-center">
            <Button 
              className="bg-cyan-900 hover:bg-cyan-800 text-white px-10 py-7 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              asChild
            >
              <Link href="/register">
                Comece Agora
              </Link>
            </Button>
            
            <Button 
              variant="outline"
              className="border-2 border-cyan-900 text-cyan-900 hover:bg-cyan-900 hover:text-white px-10 py-7 text-lg rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl"
              asChild
            >
              <Link href="/login">
                Entrar
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="py-24 grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          <motion.div 
            whileHover={{ scale: 1.05, y: -5 }}
            className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-cyan-100 group hover:bg-gradient-to-b hover:from-white hover:to-cyan-50 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-cyan-900 mb-4 group-hover:text-cyan-700">Aprendizado Diário</h3>
            <p className="text-cyan-700/80 group-hover:text-cyan-600">Receba palavras novas todos os dias, personalizadas ao seu nível</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05, y: -5 }}
            className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-cyan-100 group hover:bg-gradient-to-b hover:from-white hover:to-cyan-50 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-cyan-900 mb-4 group-hover:text-cyan-700">Múltiplos Idiomas</h3>
            <p className="text-cyan-700/80 group-hover:text-cyan-600">Aprenda em português, inglês, espanhol e muito mais</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05, y: -5 }}
            className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-cyan-100 group hover:bg-gradient-to-b hover:from-white hover:to-cyan-50 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-cyan-900 mb-4 group-hover:text-cyan-700">Acompanhamento</h3>
            <p className="text-cyan-700/80 group-hover:text-cyan-600">Acompanhe seu progresso e evolução ao longo do tempo</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
