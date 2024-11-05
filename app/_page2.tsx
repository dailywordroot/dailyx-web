"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-100 to-cyan-200 relative overflow-hidden">
      {/* Formas geométricas decorativas */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-20 -left-20 w-40 h-40 bg-cyan-300/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 -right-20 w-60 h-60 bg-blue-300/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-1/3 w-32 h-32 bg-cyan-400/20 rotate-45 blur-sm"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="mb-8"
          >
            <Image
              src="https://static.vecteezy.com/system/resources/previews/021/276/936/non_2x/cute-axolotl-axolotl-illustration-sea-salamander-sea-life-marine-life-png.png"
              alt="Axolote mascote"
              width={150}
              height={150}
              className="drop-shadow-xl"
            />
          </motion.div>

          <motion.div
            animate={{ 
              scale: [1, 1.02, 1],
              rotate: [0, 1, 0] 
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
              Aprenda Palavras Novas
            </h1>
          </motion.div>

          <p className="text-xl md:text-2xl text-cyan-900 mb-8 max-w-2xl">
            Expanda seu vocabulário de forma natural e eficiente. 
            Uma palavra por dia, um universo de possibilidades.
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-center">
            <Button 
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              asChild
            >
              <Link href="/register">
                Comece Agora
              </Link>
            </Button>
            
            <Button 
              variant="outline"
              className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-lg"
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
          className="py-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-cyan-100"
          >
            <h3 className="text-xl font-bold text-cyan-900 mb-4">Aprendizado Diário</h3>
            <p className="text-cyan-700">Receba palavras novas todos os dias, personalizadas ao seu nível</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-cyan-100"
          >
            <h3 className="text-xl font-bold text-cyan-900 mb-4">Múltiplos Idiomas</h3>
            <p className="text-cyan-700">Aprenda em português, inglês, espanhol e muito mais</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-cyan-100"
          >
            <h3 className="text-xl font-bold text-cyan-900 mb-4">Acompanhamento</h3>
            <p className="text-cyan-700">Acompanhe seu progresso e evolução ao longo do tempo</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
