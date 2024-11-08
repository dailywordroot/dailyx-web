"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"

export default function RegisterPage() {
  const [isFullRegistration, setIsFullRegistration] = useState(false)
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isFullRegistration) {
      console.log({ username, email, password })
    } else {
      console.log({ email })
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 to-cyan-100 px-4 py-8">
      <Card className="w-full max-w-[400px] shadow-xl border-cyan-200">
        <CardHeader className="px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-cyan-900">
            {isFullRegistration ? "Cadastro Completo" : "Cadastro Temporário"}
          </h1>
          <p className="text-sm sm:text-base text-center text-cyan-600 mt-2">Crie sua conta para começar</p>
        </CardHeader>
        <CardContent className="px-4 sm:px-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {isFullRegistration ? (
              <>
                <div className="space-y-3">
                  <Input
                    type="text"
                    placeholder="Seu nome de usuário"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border-cyan-200 focus:border-cyan-400 bg-white/50 w-full"
                  />
                  <Input
                    type="email"
                    placeholder="Seu e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-cyan-200 focus:border-cyan-400 bg-white/50 w-full"
                  />
                  <Input
                    type="password"
                    placeholder="Sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border-cyan-200 focus:border-cyan-400 bg-white/50 w-full"
                  />
                </div>
              </>
            ) : (
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-cyan-200 focus:border-cyan-400 bg-white/50 w-full"
                />
                <p className="text-xs sm:text-sm text-cyan-600">
                  Apenas e-mail é necessário para cadastro temporário
                </p>
              </div>
            )}
            <Button 
              type="submit" 
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold text-sm sm:text-base"
            >
              {isFullRegistration ? "Criar Conta" : "Cadastrar"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-2 px-4 sm:px-6">
          <Button
            variant="ghost"
            onClick={() => setIsFullRegistration(!isFullRegistration)}
            className="text-cyan-600 hover:text-cyan-800 text-sm sm:text-base w-full"
          >
            {isFullRegistration 
              ? "Voltar para cadastro temporário" 
              : "Fazer cadastro completo"
            }
          </Button>
          <p className="text-xs sm:text-sm text-cyan-600 hover:text-cyan-800 text-center w-full">
            <Link href="/login">Já tem uma conta? Faça login</Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
