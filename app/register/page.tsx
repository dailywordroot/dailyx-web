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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <Card className="w-[400px] shadow-lg">
        <CardHeader>
          <h1 className="text-2xl font-bold text-center text-blue-900">
            {isFullRegistration ? "Cadastro Completo" : "Cadastro Temporário"}
          </h1>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {isFullRegistration ? (
              <>
                <div className="space-y-2">
                  <Input
                    type="text"
                    placeholder="Seu nome de usuário"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border-blue-200 focus:border-blue-400"
                  />
                  <Input
                    type="email"
                    placeholder="Seu e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-blue-200 focus:border-blue-400"
                  />
                  <Input
                    type="password"
                    placeholder="Sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border-blue-200 focus:border-blue-400"
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
                  className="border-blue-200 focus:border-blue-400"
                />
                <p className="text-sm text-gray-500">
                  Apenas e-mail é necessário para cadastro temporário
                </p>
              </div>
            )}
            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              {isFullRegistration ? "Criar Conta" : "Cadastrar"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <Button
            variant="ghost"
            onClick={() => setIsFullRegistration(!isFullRegistration)}
            className="text-blue-600 hover:text-blue-800"
          >
            {isFullRegistration 
              ? "Voltar para cadastro temporário" 
              : "Fazer cadastro completo"
            }
          </Button>
          <p className="text-sm text-blue-600 hover:text-blue-800">
            <Link href="/login">Já tem uma conta? Faça login</Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
