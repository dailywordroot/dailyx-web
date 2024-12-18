"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import Header from "@/components/ui/header"
import { http } from "@/lib/http"
import { toast } from "sonner"
import { Skeleton } from "@/components/ui/skeleton"
import cancelSubs from "@/lib/cancel-subscription"

interface IdiomaConfig {
  languageId: number | string
  take: number
  tipoEnvio: string
  isActive: boolean
}

interface configType {
  username: string
  email: string
  plan: {
    subscriptionId: string
    endDate: string
    plan: {
      duration: string
    }
  }
  configuration: {
    userLanguages: IdiomaConfig[]
  }
}

export default function ConfigPage() {
  // const [nome, setNome] = useState("Usuário")
  // const [email, setEmail] = useState("usuario@email.com")
  // @typescript-eslint/no-explict-any
  const [config, setConfig] = useState<configType>({ 
    email: "",
    username: "",
    plan: {
      endDate: '',
      subscriptionId: '',
      plan: {
        duration: ''
      },
    },
    configuration: {
      userLanguages: []
    } 
});
  const [loading, setLoading] = useState(true);
  const [idiomasConfig, setIdiomasConfig] = useState<IdiomaConfig[]>([
    { languageId: "2", take: 2, tipoEnvio: "Texto", isActive: true }
  ])

  const handleAddIdioma = () => {
    const languages = [1, 2, 3]
    const userLanguages: IdiomaConfig[] = config.configuration.userLanguages || []
    const languageId: string | number = userLanguages.map(x => x.languageId).find(x => !languages.includes(+x)) || 1;

    const newLanguage: IdiomaConfig = {
      take: 2,
      languageId,
      isActive: true,
      tipoEnvio: "Texto"
    }
    
    config.configuration.userLanguages.push(newLanguage)

    setIdiomasConfig([...idiomasConfig, { languageId: "", take: 2, tipoEnvio: "Texto", isActive: true }])
  }

  const updateIdiomaConfig = (index: number, field: keyof IdiomaConfig, value: string | number | boolean) => {
    if (index >= 0 && index < config.configuration.userLanguages.length) {
      config.configuration.userLanguages[index] = {
        ...config.configuration.userLanguages[index],
        [field]: value
      }

      const newConfig = [...idiomasConfig]
      newConfig[index] = { ...newConfig[index], [field]: value }
      setIdiomasConfig(newConfig)
    }
  }  
  const addIdioma = async (index: number) => {

    const { languageId = '0', take } = config.configuration.userLanguages[index]
    
    try {
      await http.post(`/users-configurations/${languageId}`, { take })
      toast.info("Língua criada com sucesso!");
      const newConfig = [...idiomasConfig]
      setIdiomasConfig(newConfig)
      await getUserConfig()
    }
    catch {
      toast.error("Não foi possível criar essa língua")
    }


  }
  const removeIdioma = async (index: number) => {

    const { languageId = '0' } = config.configuration.userLanguages[index]

    config.configuration.userLanguages.splice(index, 1)
    
    try {
      await http.delete(`/users-configurations/${languageId}`)
      toast.info("Língua deletada com sucesso!");
      const newConfig = [...idiomasConfig]
      newConfig.splice(index, 1)
      setIdiomasConfig(newConfig)
      await getUserConfig()
    }
    catch {
      toast.error("Não foi possível remover a língua")
    }


  }
  const getUserConfig = async () => {
    setLoading(true);
    try {
      const result = await http.get("/users-configurations");
      setConfig(result as configType);
    } finally {
      setLoading(false);
    }
  }

  const handleSubmit = async () => {
    try {
      await http.put("/users-configurations", config);
      toast.success("Configurações salvas com sucesso!")
    } catch {
      toast.error("Erro ao enviar configurações")
    }
  }
  const cancelSubscription = async () => {
    const subscriptionId = config.plan.subscriptionId;
    try {
      await getUserConfig() 
      await http.post(`/users-configurations/cancel-subscription/${subscriptionId}`);
      await cancelSubs({ subscriptionId });
      toast('Plano cancelado com sucesso')
    }
    catch {
      toast.error('Não foi possível cancelar seu plano, entre em contato ou tente novamente')
    }
  }

  useEffect(() => {
    getUserConfig()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen p-4 sm:p-6 md:p-8 bg-gradient-to-br from-cyan-50 to-cyan-100">
        <Card className="w-full max-w-[800px] mx-auto shadow-xl border-cyan-200">
          <CardHeader className="px-4 sm:px-6">
            <Skeleton className="h-8 w-[200px] mx-auto" />
          </CardHeader>
          <CardContent className="space-y-6 px-4 sm:px-6">
            <div className="space-y-4">
              <Skeleton className="h-6 w-[180px]" />
              <div className="grid gap-4">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
              </div>
            </div>
            <div className="space-y-4">
              <Skeleton className="h-6 w-[220px]" />
              <div className="space-y-4">
                <Skeleton className="h-[120px] w-full" />
                <Skeleton className="h-[120px] w-full" />
              </div>
              <Skeleton className="h-10 w-[200px]" />
            </div>
            <Skeleton className="h-12 w-full" />
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div>
      <Header/>

      <div className="min-h-screen p-4 sm:p-6 md:p-8 bg-gradient-to-br from-cyan-50 to-cyan-100">
        <Card className="w-full max-w-[800px] mx-auto shadow-xl border-cyan-200">
          <CardHeader className="px-4 sm:px-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-center text-cyan-900">Configurações</h1>
          </CardHeader>
          <CardContent className="space-y-6 px-4 sm:px-6">
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-cyan-800">Informações Pessoais</h2>
              <div className="grid gap-4">
                <div>
                  <label className="text-sm sm:text-base text-cyan-700">Nome do usuário</label>
                  <Input
                    value={config?.username}
                    onChange={(e) => setConfig({ ...config, username: e.target.value })}
                    className="border-cyan-200 focus:border-cyan-400 bg-white/50 text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="text-sm sm:text-base text-cyan-700">Email</label>
                  <Input
                    value={config?.email}
                    disabled={true}
                    className="border-cyan-200 focus:border-cyan-400 bg-white/50 text-sm sm:text-base"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-cyan-800">Plano</h2>
              <div className="flex gap-8">
                <div>
                  <label className="text-sm sm:text-base text-cyan-700">Tipo de Plano</label>
                  <div className="flex justify-between items-center mt-2">
                  
                    <Select
                      value={config?.plan.plan.duration}
                      disabled={true}
                      >
                      {/* style={{ border: '1px solid cyan.200', backgroundColor: 'whiteAlpha.500', fontSize: '0.875rem', padding: '0.5rem 1rem' }} */}
                      <SelectTrigger style={{ border: '1px solid cyan.200', backgroundColor: 'whiteAlpha.500', fontSize: '0.875rem', padding: '0.5rem 1rem' }}>
                        <SelectValue placeholder="Selecione um plano" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1m">1 mês</SelectItem>
                        <SelectItem value="3m">3 meses</SelectItem>
                        <SelectItem value="6m">6 meses</SelectItem>
                        <SelectItem value="1y">1 ano</SelectItem>
                      </SelectContent>
                    </Select>

                  
                  </div>
                </div>
                  <div>
                    <label className="text-sm sm:text-base text-cyan-700">Data Atual</label>
                    <Input
                      value={new Date().toLocaleDateString()}
                      disabled={true}
                      style={{ border: '1px solid cyan.200', backgroundColor: 'whiteAlpha.500', fontSize: '0.875rem', padding: '0.5rem 1rem', marginTop: '0.5rem' }}
                    />
                  </div>

                {config.plan?.subscriptionId && (
                  <div className="flex" style={{ alignItems: 'self-end' }}>
                    {/* <Button variant={'outline'}>Cancelar</Button> */}
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="outline">Cancelar</Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Você tem certeza ?</AlertDialogTitle>
                          <AlertDialogDescription>
                            Após o término do seu plano, você não receberá mais mensagens. Deseja confirmar?                        </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel onClick={cancelSubscription}>Continuar</AlertDialogCancel>
                          <AlertDialogAction>Cancelar</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-cyan-800">Configurações de Idiomas</h2>
              {/* @typescript-eslint/no-explict-any */}
              {config?.configuration?.userLanguages?.map((lang: any, index: number) => (
                <section key={index} className="mb-6 p-4 bg-white/30 rounded-lg border border-cyan-100">
                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-end">
                    <div className="w-full sm:flex-1">
                      <label className="text-sm sm:text-base text-cyan-700">Idioma</label>
                      <Select
                        value={lang?.languageId?.toString()}
                        onValueChange={(value) => updateIdiomaConfig(index, "languageId", value)}
                      >
                        <SelectTrigger className="border-cyan-200 bg-white/50 text-sm sm:text-base">
                          <SelectValue placeholder="Selecione um idioma" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">Inglês</SelectItem>
                          <SelectItem value="2">Espanhol</SelectItem>
                          <SelectItem value="3">Francês</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="w-full sm:w-[200px]">
                      <label className="text-sm sm:text-base text-cyan-700">Palavras por dia</label>
                      <Select
                        value={lang?.take?.toString()}
                        onValueChange={(value) => updateIdiomaConfig(index, "take", parseInt(value))}
                      >
                        <SelectTrigger className="border-cyan-200 bg-white/50 text-sm sm:text-base">
                          <SelectValue placeholder="Quantidade" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2">2 palavras</SelectItem>
                          <SelectItem value="3">3 palavras</SelectItem>
                          <SelectItem value="4" disabled>4 palavras</SelectItem>
                          <SelectItem value="5" disabled>5 palavras</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="w-full sm:w-[200px]">
                      <label className="text-sm sm:text-base text-cyan-700">Tipo de envio</label>
                      <Select
                        value={lang?.type || 'Texto'}
                        onValueChange={(value) => updateIdiomaConfig(index, "tipoEnvio", value)}
                        disabled
                      >
                        <SelectTrigger className="border-cyan-200 bg-white/50 text-sm sm:text-base">
                          <SelectValue placeholder="Tipo de envio" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Texto">Texto</SelectItem>
                          <SelectItem value="Imagem" disabled>Imagem</SelectItem>
                          <SelectItem value="Tradução" disabled>Tradução</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="w-full sm:w-[200px]">
                      <label className="text-sm sm:text-base text-cyan-700">Horário de envio</label>
                      <Input
                        type="time"
                        value="06:00"
                        disabled
                        className="border-cyan-200 bg-white/50 text-sm sm:text-base"
                      />
                    </div>

                    {!lang.id
                    ? (
                    <Button
                      variant="link"
                      onClick={() => addIdioma(index)}
                      className="text-sm sm:text-base w-full sm:w-auto text-cyan-600 hover:text-cyan-800"
                      disabled={config?.configuration?.userLanguages?.length > 3}
                    >
                      Adicionar
                    </Button>  
                    )
                    : (
                    <Button
                      variant="ghost"
                      onClick={() => removeIdioma(index)}
                      className="text-sm sm:text-base w-full sm:w-auto text-red-600 hover:text-red-800"
                      disabled={config?.configuration?.userLanguages?.length <= 1}
                    >
                      Remover
                    </Button>
                    )
                    }
                  </div>
                </section>
              ))}
              <Button
                onClick={handleAddIdioma}
                disabled={config?.configuration?.userLanguages?.length >= 3}
                className="mt-4 bg-cyan-600 hover:bg-cyan-700 text-white text-sm sm:text-base w-full sm:w-auto"
              >
                Adicionar Idioma
              </Button>
            </div>

            <Button 
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white mt-6 text-sm sm:text-base py-2 sm:py-3"
              onClick={() => handleSubmit()}
            >
              Salvar Configurações
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
