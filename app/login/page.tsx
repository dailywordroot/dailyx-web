"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"

export default function LoginPage() {
  const [isRegistered, setIsRegistered] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você implementaria a lógica de autenticação
    console.log({ email, password })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 to-cyan-100 px-4 py-8">
      <Card className="w-full max-w-[400px] shadow-xl border-cyan-200">
        <CardHeader className="px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-cyan-900">Bem-vindo de volta</h1>
          <p className="text-sm sm:text-base text-center text-cyan-600 mt-2">Acesse sua conta para continuar</p>
        </CardHeader>
        <CardContent className="px-4 sm:px-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isRegistered ? (
              <>
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Seu e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-cyan-200 focus:border-cyan-400 bg-white/50 w-full text-sm sm:text-base"
                  />
                  <p className="text-xs sm:text-sm text-cyan-600 hover:text-cyan-800">
                    <Link href="/register">Criar uma nova conta</Link>
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="space-y-2">
                  <Input
                    type="password"
                    placeholder="Sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border-cyan-200 focus:border-cyan-400 bg-white/50 w-full text-sm sm:text-base"
                  />
                  <p className="text-xs sm:text-sm text-cyan-600 hover:text-cyan-800">
                    <Link href="/reset-password">Esqueceu sua senha?</Link>
                  </p>
                </div>
              </>
            )}
            <Button 
              type="submit" 
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold text-sm sm:text-base py-2 sm:py-3"
            >
              {isRegistered ? "Entrar" : "Continuar"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="justify-center px-4 sm:px-6">
          <Button
            variant="ghost"
            onClick={() => setIsRegistered(!isRegistered)}
            className="text-cyan-600 hover:text-cyan-800 hover:bg-cyan-50 text-sm sm:text-base hidden"
          >
            {isRegistered 
              ? "Usar outro e-mail" 
              : "Já tenho uma conta"
            }
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
