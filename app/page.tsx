"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import { APP_NAME } from "@/lib/constants"
import { useState } from "react"
import createCheckout from "@/lib/create-checkout"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Home() {

  const [currentImage, setCurrentImage] = useState("/email/ingles.png")
  const [loadingHome, SetLoadingHome] = useState(false);
  const [loadingPlanM, SetLoadingPlanM] = useState(false);
  const [loadingPlanT, SetLoadingPlanT] = useState(false);
  const [loadingPlanS, SetLoadingPlanS] = useState(false);
  const [loadingPlanA, SetLoadingPlanA] = useState(false);

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
                      src="/logo.png"
                      //src="https://static.vecteezy.com/system/resources/previews/021/276/936/non_2x/cute-axolotl-axolotl-illustration-sea-salamander-sea-life-marine-life-png.png"
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
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    className="text-gray-600 hover:text-gray-900 font-medium"
                    href="#planos"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#planos')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Planos
                  </motion.a>
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
                variant="outline"
                className="border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-50 text-lg px-8 py-4"
                asChild
              >
                <Link href="/login">Entrar</Link>
              </Button>

              <Button
                disabled={loadingHome}
                className="bg-gradient-to-r from-cyan-400 to-cyan-600 text-white hover:shadow-lg transition-all text-lg px-8 py-4"
                onClick={() => createCheckout({ planType: '1m', setLoading: SetLoadingHome })}
              >{ loadingHome ? "Carregando checkout" : 'Começar' }
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
               
              <Image
                src="/home.png"
                alt="Página inicial"
                width={500}
                height={500}
                className="rounded-lg shadow-xl"
              />             
              
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
          <div className="flex justify-center gap-4 mb-8">
            <button onClick={() => setCurrentImage("/email/ingles.png")} className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg hover:bg-gray-50">
              🇺🇸 Inglês
            </button>
            <button onClick={() => setCurrentImage("/email/espanhol.png")} className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg hover:bg-gray-50">
              🇪🇸 Espanhol
            </button>
            <button onClick={() => setCurrentImage("/email/frances.png")} className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg hover:bg-gray-50">
              🇫🇷 Francês
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src={currentImage || "/email-template.jpeg"}
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
                <li className="flex items-center space-x-3">
                  <span className="text-cyan-500">✓</span>
                  <span>Idiomas disponíveis: Inglês, Espanhol e Francês - com novos idiomas em breve!</span>                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Planos */}
      <div id="planos" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Escolha o plano que melhor se adapta a você</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-cyan-100 rounded-2xl shadow-lg border-2 border-cyan-500 flex flex-col justify-between"
            >
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-xl font-bold text-cyan-500 mb-2">Plano Mensal</h3>
                <p className="text-cyan-500">R$ 9.99</p>
                <p className="text-cyan-500">O mais usado</p>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <span className="text-cyan-500">✓</span>
                    <span>1 mês de acesso</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-cyan-500">✓</span>
                    <span>Idiomas disponíveis: Inglês, Espanhol e Francês</span>
                  </li>
                </ul>
              </div>
              <button disabled={loadingPlanM} className="mt-4 bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded" onClick={() => createCheckout({ planType: '1m', setLoading: SetLoadingPlanM })}>
                {loadingPlanM ? 'Carregando checkout...' : 'Iniciar'}
              </button>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-2xl shadow-lg flex flex-col justify-between"
            >
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Plano Trimestral</h3>
                <p className="text-gray-600">R$ 19.99</p>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <span className="text-gray-600">✓</span>
                    <span>3 meses de acesso</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-gray-600">✓</span>
                    <span>Idiomas disponíveis: Inglês, Espanhol e Francês</span>
                  </li>
                </ul>
              </div>
              <button disabled={loadingPlanT} className="mt-4 bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded" onClick={() => createCheckout({ planType: '3m', setLoading: SetLoadingPlanT })}>
                {loadingPlanT ? 'Carregando checkout...' : 'Iniciar'}
              </button>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-2xl shadow-lg flex flex-col justify-between"
            >
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Plano Semestral</h3>
                <p className="text-gray-600">R$ 34.99</p>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <span className="text-gray-600">✓</span>
                    <span>6 meses de acesso</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-gray-600">✓</span>
                    <span>Idiomas disponíveis: Inglês, Espanhol e Francês</span>
                  </li>
                </ul>
              </div>
              <button disabled={loadingPlanS} className="mt-4 bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded" onClick={() => createCheckout({ planType: '6m', setLoading: SetLoadingPlanS })}>
                {loadingPlanS ? 'Carregando checkout...' : 'Iniciar'}
              </button>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-2xl shadow-lg flex flex-col justify-between"
            >
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Plano Anual</h3>
                <p className="text-gray-600">R$ 59.99</p>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <span className="text-gray-600">✓</span>
                    <span>1 ano de acesso</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-gray-600">✓</span>
                    <span>Idiomas disponíveis: Inglês, Espanhol e Francês</span>
                  </li>
                </ul>
              </div>
              <button disabled={loadingPlanA} className="mt-4 bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded" onClick={() => createCheckout({ planType: '1y', setLoading: SetLoadingPlanA })}>
                {loadingPlanA ? 'Carregando checkout...' : 'Iniciar'}
              </button>
            </motion.div>
          </div>
        </div>
      </div>
      

      <div id="faq" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Perguntas Frequentes</h2>
          <div className="space-y-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger><strong className="text-lg">Como funciona?</strong></AccordionTrigger>
                <AccordionContent>
                  Diariamente, às 6h da manhã, você receberá palavras aleatórias da língua que escolheu para expandir seu vocabulário. Além disso, você pode ver como isso funciona em #como-funciona. Isso ajudará a manter seu aprendizado dinâmico e atraente.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger><strong className="text-lg">Consigo configurar mais linguas?</strong></AccordionTrigger>
                <AccordionContent>
                  Sim, você pode configurar de 1 a 3 linguas atualmente, sendo espanhol, francês e português. Estamos trabalhando para trazer mais opções de linguas em breve, para que você possa explorar novos horizontes linguísticos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger><strong className="text-lg">Quais são as formas de pagamento?</strong></AccordionTrigger>
                <AccordionContent>
                  Atualmente, aceitamos cartões de crédito como forma de pagamento. Isso torna mais fácil para você se inscrever e começar a aprender.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger><strong className="text-lg">Como posso entrar em contato com o suporte ao cliente?</strong></AccordionTrigger>
                <AccordionContent>
                  Para entrar em contato conosco, envie um email para <a href="mailto:contato@dailyword.com" className="text-cyan-500 hover:text-cyan-700">contato@dailyword.com</a>. Estamos aqui para ajudá-lo em qualquer momento.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Seção de Oferta Especial */}
      <div className="bg-cyan-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Comece Agora</h2>
          <p className="text-xl text-gray-600 mb-4">
            Escolha um plano e comece sua jornada de aprendizado
          </p>
          <p className="text-lg text-gray-500 mb-8">
            Transforme seu aprendizado de idiomas de forma simples e eficiente
          </p>
          <Button 
            className="bg-gradient-to-r from-cyan-400 to-cyan-600 text-white px-8 py-6 text-lg rounded-full transition-all duration-500 transform hover:scale-105 hover:shadow-2xl font-medium"
            asChild
          >
            <Link href="#planos">
              Ver Planos
            </Link>
          </Button>
        </div>
      </div>

      

    </div>
  )
}
