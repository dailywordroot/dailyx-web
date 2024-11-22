"use client"

import { useEffect, useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import Header from "@/components/ui/header"
import { http } from "@/lib/http"

interface Palavra {
  id: number
  createdAt: string
  palavra: string
  languageId: number
  tipo: string
  word: {
    name: string
  }
}
interface Languages {
  1: Palavra[],
  2: Palavra[],
  3: Palavra[]
}

export default function HomePage() {
  const [busca, setBusca] = useState("")
  const [idiomaFiltro, setIdiomaFiltro] = useState("1")
  // const [idiomaAtual, setIdiomaAtual] = useState("Português")
  
  // Dados de exemplo - substituir por dados reais da API
  const [palavras, setPalavras] = useState<Languages>({ "1": [], "2": [], "3": [] })

  const palavrasFiltradas = 
    palavras?.[idiomaFiltro as unknown as 1 | 2 | 3]?.filter(palavra => {
      const matchBusca = palavra.word?.name.toLowerCase().includes(busca.toLowerCase())
      const matchIdioma = String(palavra.languageId) == idiomaFiltro
      return matchBusca && matchIdioma
    })

    console.log(palavras, {...palavras})

    console.log({palavrasFiltradas, palavras, idiomaFiltro})

  useEffect(() => { 
    getWordsSend(setPalavras, '1');
  }, [])


  return (
    <>
      <Header />
      <div className="min-h-screen p-4 sm:p-6 md:p-8 bg-gradient-to-br from-cyan-50 to-cyan-100">
        <Card className="w-full max-w-[1200px] mx-auto shadow-xl border-cyan-200">
          <CardHeader className="px-4 sm:px-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-center text-cyan-900">Minhas Palavras</h1>
            <p className="text-sm sm:text-base text-center text-cyan-600 mt-2">Gerencie seu vocabulário pessoal</p>
          </CardHeader>
          <CardContent className="px-4 sm:px-6">
            <div className="flex flex-col gap-4 mb-6">
              <div className="flex flex-col sm:flex-row gap-4">
                
              <div className="relative flex-1">
                <Input
                  placeholder="Buscar palavra..."
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                  className="border-cyan-200 focus:border-cyan-400 bg-white/50 pr-10"
                />
                <button 
                  onClick={() => getWordsSend(setPalavras, idiomaFiltro)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-cyan-500 hover:text-cyan-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  </svg>
                </button>
              </div>
                
                {/* <Input
                  placeholder="Buscar palavra..."
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                  className="border-cyan-200 focus:border-cyan-400 bg-white/50 flex-1"
                /> */}

                <Select value={idiomaFiltro} onValueChange={v => {
                  setIdiomaFiltro(v)
                  if(!palavras[v as unknown as 1 | 2 | 3]?.length) {
                    getWordsSend(setPalavras, v)
                  }
                }}>
                  <SelectTrigger className="w-full sm:w-[180px] border-cyan-200 focus:border-cyan-400 bg-white/50">
                    <SelectValue placeholder="Filtrar por idioma" />
                  </SelectTrigger>
                  <SelectContent>
                    {/* <SelectItem value="0">Todos os idiomas</SelectItem> */}
                    <SelectItem value="1">Inglês</SelectItem>
                    <SelectItem value="2">Espanhol</SelectItem>
                    <SelectItem value="3">Francês</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="rounded-md border border-cyan-200 overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-cyan-900 whitespace-nowrap px-4 sm:px-6">Data</TableHead>
                    <TableHead className="text-cyan-900 whitespace-nowrap px-4 sm:px-6">Palavra</TableHead>
                    <TableHead className="text-cyan-900 whitespace-nowrap px-4 sm:px-6">Tipo</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {palavras[idiomaFiltro as unknown as 1 | 2 | 3]?.map((palavra) => (
                    <TableRow key={palavra.id} className="cursor-pointer hover:bg-cyan-50">
                      <TableCell className="text-cyan-800 whitespace-nowrap px-4 sm:px-6">
                        {new Date(palavra.createdAt).toLocaleDateString('pt-BR')}
                      </TableCell>
                      <TableCell className="font-medium text-cyan-800 px-4 sm:px-6" title={palavra?.word?.name}>
                        {palavra.word.name}
                      </TableCell>
                      <TableCell className="text-cyan-800 whitespace-nowrap px-4 sm:px-6">
                        {'Descrição'}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
// @typescript-eslint/no-explict-any
async function getWordsSend(setPalavras: Function, languageId: string) {
  const response = await http.get(`/word-sends?languageId=${languageId}`)
  // 
  setPalavras((v: Languages) => {
    return {
      ...v,
      [languageId as unknown as keyof Languages]: response
    };
  });
  return response
}