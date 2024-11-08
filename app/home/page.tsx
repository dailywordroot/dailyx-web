"use client"

import { useState } from "react"
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

interface Palavra {
  id: number
  data: string
  palavra: string
  idioma: string
  tipo: string
}

export default function HomePage() {
  const [busca, setBusca] = useState("")
  const [idiomaFiltro, setIdiomaFiltro] = useState("todos")
  // const [idiomaAtual, setIdiomaAtual] = useState("Português")
  
  // Dados de exemplo - substituir por dados reais da API
  const palavras: Palavra[] = [
    { id: 1, data: "2024-01-15", palavra: "Serendipidade", idioma: "Português", tipo: "Texto" },
    { id: 2, data: "2024-01-16", palavra: "Wanderlust", idioma: "Inglês", tipo: "Imagem" },
    { id: 3, data: "2024-01-17", palavra: "Saudade", idioma: "Português", tipo: "Texto" },
  ]

  const palavrasFiltradas = palavras.filter(palavra => {
    const matchBusca = palavra.palavra.toLowerCase().includes(busca.toLowerCase())
    const matchIdioma = idiomaFiltro === "todos" || palavra.idioma === idiomaFiltro
    return matchBusca && matchIdioma
  })

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
                <Input
                  placeholder="Buscar palavra..."
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                  className="border-cyan-200 focus:border-cyan-400 bg-white/50 flex-1"
                />
                <Select value={idiomaFiltro} onValueChange={setIdiomaFiltro}>
                  <SelectTrigger className="w-full sm:w-[180px] border-cyan-200 focus:border-cyan-400 bg-white/50">
                    <SelectValue placeholder="Filtrar por idioma" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos os idiomas</SelectItem>
                    <SelectItem value="Português" disabled>Português</SelectItem>
                    <SelectItem value="Inglês">Inglês</SelectItem>
                    <SelectItem value="Espanhol" disabled>Espanhol</SelectItem>
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
                  {palavrasFiltradas.map((palavra) => (
                    <TableRow key={palavra.id} className="cursor-pointer hover:bg-cyan-50">
                      <TableCell className="text-cyan-800 whitespace-nowrap px-4 sm:px-6">
                        {new Date(palavra.data).toLocaleDateString('pt-BR')}
                      </TableCell>
                      <TableCell className="font-medium text-cyan-800 px-4 sm:px-6">
                        {palavra.palavra}
                      </TableCell>
                      <TableCell className="text-cyan-800 whitespace-nowrap px-4 sm:px-6">
                        {palavra.tipo}
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
