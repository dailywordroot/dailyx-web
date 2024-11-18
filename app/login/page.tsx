"use client"

import axios, { AxiosError } from 'axios';
import { Dispatch, SetStateAction, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { toast } from "sonner"
import Link from "next/link"

export default function LoginPage() {
  const [isRegistered, setIsRegistered] = useState(false)
  const [isVerify, setIsVerify] = useState(false)
  const [email, setEmail] = useState("")
  const [otpCode, setOtpCode] = useState("")
  const [password, setPassword] = useState("")


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if(isVerify) await login(email, otpCode);
    else await verify(email, setIsVerify);

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
                  {!isVerify
                  ? (
                    <Input
                      type="email"
                      placeholder="Seu e-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border-cyan-200 focus:border-cyan-400 bg-white/50 w-full text-sm sm:text-base"
                    />
                  )
                  : (
                    <Input
                      type="number"
                      placeholder="Código de acesso"
                      value={otpCode}
                      onChange={(e) => setOtpCode(e.target.value)}
                      className="border-cyan-200 focus:border-cyan-400 bg-white/50 w-full text-sm sm:text-base"
                    />
                    )
                  }
                  <p className="text-xs sm:text-sm text-cyan-600 hover:text-cyan-800 text-center">
                    {!isVerify
                      ? <Link href="/register">Criar uma nova conta</Link>
                      : <span>Reenviar código de acesso</span>
                    }
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
async function login(email: string, otpCode: string) {
  const statusMessage: any = {
    201: "Sucesso",
  };

  try {
    const { status, data } = await axios.post('http://localhost:3001/auth/login', { email, otpCode });
    // console.log({ data })
    toast.info(statusMessage[status] || data?.response?.message);
    localStorage.setItem('access_token', data?.access_token);
    localStorage.setItem('imageUrl', data?.imageUrl);
    window.location.href = '/home';
  }
  catch (error: any) {
    toast.error(statusMessage[error.status] || error?.response?.data?.message || "Aconteceu um erro inesperado");
  }
}
async function verify(email: string, setIsVerify: Dispatch<SetStateAction<boolean>>) {
  const statusMessage: any = {
    201: "Um código de verificação foi enviado para o seu e-mail !",
    400: "E-mail não encontrado!"
  };

  try {
    const { status } = await axios.post('http://localhost:3001/auth/verify', { email });

    toast.info(statusMessage[status || 400]);

    setIsVerify(status == 201);
  }
  catch (error: any) {
    toast.error(statusMessage[error.status] || "Aconteceu um erro inesperado");
  }
}

