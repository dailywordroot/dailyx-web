
"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Home() {
  const gradientColors = [
    "from-blue-400 via-cyan-400 to-cyan-500",
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
      {/* <div className="absolute inset-0 overflow-hidden">
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
      </div> */}

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
        </motion.div>
      </div>

      {/* Seção de Benefícios */}
      <div className="bg-cyan-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Por que escolher nossa plataforma?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">Aprendizado Inteligente</h3>
              <p className="text-gray-600">Algoritmo adaptativo que evolui com você</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">Método Científico</h3>
              <p className="text-gray-600">Baseado em estudos de neurociência</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">Resultados Reais</h3>
              <p className="text-gray-600">Acompanhe sua evolução em tempo real</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Seção Como Funciona */}
      <div className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Como Funciona</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/email-template.jpeg"
                alt="Email Diário"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800">Receba palavras diariamente</h3>
              <p className="text-lg text-gray-600">
                Todo dia você receberá um email personalizado com novas palavras para aprender,
                exercícios práticos e dicas de memorização.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <span className="text-cyan-500">✓</span>
                  <span>Emails personalizados</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-cyan-500">✓</span>
                  <span>Acompanhamento de progresso</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-cyan-500">✓</span>
                  <span>Exercícios interativos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Oferta Especial */}
      <div className="bg-cyan-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Oferta por Tempo Limitado! 🎉</h2>
          <p className="text-xl text-gray-600 mb-4">
            Assine agora e ganhe <span className="font-bold text-cyan-600">um desconto</span> nos primeiros 3 meses!
          </p>
          <p className="text-lg text-gray-500 mb-8">
            Não perca essa oportunidade única de transformar seu aprendizado.
          </p>
          <Button 
            className={`bg-gradient-to-r ${gradientColors[currentGradient]} text-white px-8 py-6 text-lg rounded-full transition-all duration-500 transform hover:scale-105 hover:shadow-2xl font-medium`}
            asChild
          >
            <Link href="/planos">
              Aproveitar Oferta
            </Link>
          </Button>
        </div>
      </div>

    </div>
  )
}
