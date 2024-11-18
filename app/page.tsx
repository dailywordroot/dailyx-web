"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import { APP_NAME } from "@/lib/constants"

export default function Home() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center min-h-screen text-center py-12"
        >
          {/* Header Redesenhado */}
          <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-white via-white to-cyan-50 backdrop-blur-sm z-50">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="cursor-pointer"
                  >
                    <Image
                      src="https://static.vecteezy.com/system/resources/previews/021/276/936/non_2x/cute-axolotl-axolotl-illustration-sea-salamander-sea-life-marine-life-png.png"
                      alt="Axolote mascote"
                      width={60}
                      height={60}
                      className="drop-shadow-lg hover:drop-shadow-2xl transition-all"
                    />
                  </motion.div>
                  <motion.h1 
                    className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent"
                    whileHover={{ scale: 1.05 }}
                  >
                    {APP_NAME}
                  </motion.h1>
                </div>
                
                <div className="hidden md:flex items-center gap-6">
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    className="text-gray-600 hover:text-gray-900 font-medium"
                    href="#como-funciona"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#como-funciona')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Como Funciona
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    className="text-gray-600 hover:text-gray-900 font-medium"
                    href="#beneficios"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#beneficios')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Benefícios
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    className="text-gray-600 hover:text-gray-900 font-medium"
                    href="#evolucao"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#evolucao')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Evolução
                  </motion.a>
                  <Button 
                    variant="outline"
                    className="border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-50"
                    asChild
                  >
                    <Link href="/login">Entrar</Link>
                  </Button>
                  <Button 
                    className="bg-gradient-to-r from-cyan-400 to-cyan-600 text-white hover:shadow-lg transition-all"
                    asChild
                  >
                    <Link href="/register">Começar Grátis</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-32">
            <motion.div className="mb-12 max-w-4xl text-center">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
                Expanda seu vocabulário de forma inteligente
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 mb-6">
                Aprenda novas palavras diariamente e transforme sua forma de se comunicar com nossa plataforma personalizada.
              </p>
              <p className="text-lg text-gray-500">
                Junte-se a milhares de pessoas que já estão evoluindo conosco.
              </p>
            </motion.div>

            <div className="space-y-4 md:space-y-0 md:space-x-6 flex flex-col md:flex-row justify-center mb-16">
              <Button 
                className="bg-gradient-to-r from-cyan-400 to-cyan-600 text-white px-8 py-6 text-lg rounded-full transition-all duration-500 transform hover:scale-105 hover:shadow-2xl font-medium"
                asChild
              >
                <Link href="/register">
                  Comece Agora Mesmo
                </Link>
              </Button>
              
              <Button 
                variant="outline"
                className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-6 text-lg rounded-full transition-all duration-500 hover:shadow-2xl font-medium"
                asChild
              >
                <Link href="/login">
                  Acessar Minha Conta
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Nova Seção - Progresso Diário */}
      <div id="evolucao" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Pequenos passos, grandes conquistas</h2>
              <p className="text-lg text-gray-600 mb-8">
                Assim como um investimento que cresce com juros compostos, seu vocabulário se expande exponencialmente quando você aprende a cada dia.
              </p>
              <ul className="space-y-4 pl-6">
                <li className="text-gray-700">
                  <span className="text-cyan-500">✓ </span>
                  <span>Acompanhe seu progresso diário</span>
                </li>
                <li className="text-gray-700">
                  <span className="text-cyan-500">✓ </span>
                  <span>Defina metas personalizadas</span>
                </li>
                <li className="text-gray-700">
                  <span className="text-cyan-500">✓ </span>
                  <span>Celebre suas conquistas</span>
                </li>
              </ul>
            </div>
            <div>
              {/* 
              <Image
                src="/grafico.jpeg"
                alt="Gráfico de Progresso"
                width={500}
                height={500}
                className="rounded-lg shadow-xl"
              />
              
              */}
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Benefícios */}
      <div id="beneficios" className="bg-cyan-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Por que escolher nossa plataforma?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">Em Constante Evolução</h3>
              
              <p className="text-gray-600">Nossa plataforma cresce todos os dias com novos idiomas, recursos interativos e ferramentas de aprendizado. Estamos comprometidos em trazer a melhor experiência para você!</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">Método Científico</h3>
              <p className="text-gray-600">Nossa metodologia é fundamentada em estudos avançados de neurociência, garantindo um aprendizado mais eficiente e duradouro</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">Resultados Reais</h3>
              <p className="text-gray-600">Acompanhe sua evolução detalhadamente com métricas e insights personalizados para seu aprendizado</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Seção Como Funciona */}
      <div id="como-funciona" className="bg-white py-20">
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
                Todo dia você receberá um email com novas palavras do seu idioma de escolha para aprender !
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <span className="text-cyan-500">✓</span>
                  <span>Palavras diferentes</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-cyan-500">✓</span>
                  <span>Acompanhamento de progresso</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-cyan-500">✓</span>
                  <span>Suporte personalizado 24/7</span>
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
            className="bg-gradient-to-r from-cyan-400 to-cyan-600 text-white px-8 py-6 text-lg rounded-full transition-all duration-500 transform hover:scale-105 hover:shadow-2xl font-medium"
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
