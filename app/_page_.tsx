"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Home() {
  const gradientColors = [
    "from-purple-600 via-pink-500 to-red-500",
    "from-blue-600 via-indigo-500 to-purple-500", 
    "from-emerald-600 via-teal-500 to-cyan-500",
    "from-orange-600 via-amber-500 to-yellow-500"
  ];

  const [currentGradient, setCurrentGradient] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGradient((prev) => (prev + 1) % gradientColors.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
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
          className="absolute -top-20 -left-20 w-40 h-40 bg-purple-300/20 rounded-full blur-xl"
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
          className="absolute top-1/2 -right-20 w-60 h-60 bg-pink-300/20 rounded-full blur-xl"
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
          className="absolute bottom-20 left-1/3 w-32 h-32 bg-indigo-400/20 rotate-45 blur-sm"
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center min-h-screen text-center py-12"
        >
          {/* Axolote mascote com animação suave */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [-5, 5, -5],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{
              scale: 1,
              pointsAtY: -3,
              transition: { duration: 0.5 }
            }}
            className="mb-8 cursor-pointer"
          >
            <Image
              src="https://static.vecteezy.com/system/resources/previews/021/276/936/non_2x/cute-axolotl-axolotl-illustration-sea-salamander-sea-life-marine-life-png.png"
              alt="Axolote mascote"
              width={150}
              height={150}
              className="drop-shadow-xl"
            />
          </motion.div>

          <motion.div className="mb-8">
            <h1 className={`text-5xl md:text-6xl font-extrabold bg-gradient-to-r ${gradientColors[currentGradient]} bg-clip-text text-transparent transition-colors duration-1000 ease-in-out`}>
              Palavras que
            </h1>
            <h1 className={`text-5xl md:text-6xl font-extrabold bg-gradient-to-r ${gradientColors[currentGradient]} bg-clip-text text-transparent transition-colors duration-1000 ease-in-out mt-2`}>
              Transformam
            </h1>
          </motion.div>

          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Descubra um novo universo a cada palavra.
            <span className="block mt-2 font-light italic">Seu vocabulário nunca mais será o mesmo.</span>
          </motion.p>

          <div className="space-y-4 md:space-y-0 md:space-x-6 flex flex-col md:flex-row justify-center mb-16">
            <Button 
              className={`bg-gradient-to-r ${gradientColors[currentGradient]} text-white px-8 py-6 text-lg rounded-full transition-all duration-500 transform hover:scale-105 hover:shadow-2xl font-medium`}
              asChild
            >
              <Link href="/register">
                Comece sua Jornada
              </Link>
            </Button>
            
            <Button 
              variant="outline"
              className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-6 text-lg rounded-full transition-all duration-500 hover:shadow-2xl font-medium"
              asChild
            >
              <Link href="/login">
                Já tenho conta
              </Link>
            </Button>
          </div>

          {/* Tags descritivas com animação */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.1)] hover:shadow-[0_0_50px_rgba(0,0,0,0.15)] transition-all duration-500"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">Aprendizado Inteligente</h3>
              <p className="text-gray-600">Algoritmo adaptativo que evolui com você</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.1)] hover:shadow-[0_0_50px_rgba(0,0,0,0.15)] transition-all duration-500"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">Método Científico</h3>
              <p className="text-gray-600">Baseado em estudos de neurociência</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.1)] hover:shadow-[0_0_50px_rgba(0,0,0,0.15)] transition-all duration-500"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">Resultados Reais</h3>
              <p className="text-gray-600">Acompanhe sua evolução em tempo real</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
