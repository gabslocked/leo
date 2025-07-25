"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"

export default function LandingPage() {
  const [contactReason, setContactReason] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const formData = new FormData(e.currentTarget)
    
    // Coletar todos os dados do formulário
    const data = {
      nome: formData.get('nome'),
      instituicao: formData.get('instituicao'),
      cargo: formData.get('cargo'),
      cidade: formData.get('cidade'),
      telefone: formData.get('telefone'),
      email: formData.get('email'),
      contactReason: contactReason,
      subReclamacao: formData.getAll('sub-reclamacao'),
      mensagem: formData.get('mensagem'),
      timestamp: new Date().toISOString()
    }
    
    try {
      const response = await fetch('https://api.leonardosiqueira.com.br/webhook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      
      if (response.ok) {
        alert("Formulário enviado com sucesso!")
        // Resetar o formulário
        e.currentTarget.reset()
        setContactReason("")
      } else {
        throw new Error('Erro ao enviar formulário')
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
      alert("Erro ao enviar formulário. Tente novamente.")
    }
  }

  const TitleText = ({ children }: { children: React.ReactNode }) => (
    <span className="bg-blue-700 px-2 py-1 leading-tight">{children}</span>
  )

  return (
    <div className="bg-[#061329] text-white min-h-screen font-sans m-0 p-0">
      <header className="relative w-full h-[200px] sm:h-[250px] md:h-auto md:aspect-video m-0 p-0">
        {/* Image for mobile (object-cover) */}
        <Image
          src="/images/hero-background.jpg"
          alt="Leo Siqueira em seu gabinete"
          layout="fill"
          quality={100}
          className="object-cover md:hidden" // Hidden on medium and larger screens
        />
        {/* New image for desktop (object-contain) */}
        <Image
          src="/images/hero-background-desktop.png"
          alt="Formulário de Contato Leo Siqueira"
          layout="fill"
          quality={100}
          className="hidden md:block object-cover" // Visible only on medium and larger screens
          style={{ objectPosition: '60% bottom' }}
        />
      </header>

      <main className="w-full px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-12 text-[rgba(255,255,255,1)] bg-slate-300">
        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 md:space-y-12">
          <p className="text-sm sm:text-base leading-5 sm:leading-6 font-sans text-blue-950 text-center tracking-tight font-normal px-2">
            Preencha o formulário abaixo com sua demanda, sugestão ou interesse em conversar.{" "}
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>Nossa equipe analisará sua solicitação e retornará o mais breve
            possível.
          </p>

          {/* Informações Básicas */}
          <div className="bg-[#0A1F44] p-3 sm:p-4 md:p-6 lg:p-8 rounded-lg bg-transparent border-blue-950 border-2 border-solid shadow-md">
            <h2 className="font-bold mb-4 sm:mb-6 text-center underline text-lg sm:text-2xl md:text-3xl lg:text-4xl text-[rgba(15,27,56,1)]">
              INFORMAÇÕES BÁSICAS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              <div className="space-y-2">
                <Label className="text-blue-950" htmlFor="nome">
                  Nome completo:
                </Label>
                <Input
                  className="bg-transparent border-blue-950 text-black"
                  id="nome"
                  name="nome"
                  placeholder="Digite seu nome"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label className="text-blue-950" htmlFor="instituicao">
                  Instituição (opcional):
                </Label>
                <Input
                  className="bg-transparent border-blue-950 text-black"
                  id="instituicao"
                  name="instituicao"
                  placeholder="Ex: Empresa, ONG, Câmara Municipal, etc."
                />
              </div>
              <div className="space-y-2">
                <Label className="text-blue-950" htmlFor="cargo">
                  Cargo/Função (se aplicável):
                </Label>
                <Input
                  className="bg-transparent border-blue-950 text-black"
                  id="cargo"
                  name="cargo"
                  placeholder="Ex: Vereador, Assessor"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-blue-950" htmlFor="cidade">
                  Cidade:
                </Label>
                <Input
                  className="bg-transparent border-blue-950 text-black"
                  id="cidade"
                  name="cidade"
                  placeholder="Ex: Palmas - TO"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label className="text-blue-950" htmlFor="telefone">
                  Telefone (com DDD):
                </Label>
                <Input
                  className="bg-transparent border-blue-950 text-black"
                  id="telefone"
                  name="telefone"
                  type="tel"
                  placeholder="(99) 99999-9999"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label className="text-blue-950" htmlFor="email">
                  E-mail:
                </Label>
                <Input
                  className="bg-transparent border-blue-950 text-black"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Digite seu e-mail"
                  required
                />
              </div>
            </div>
          </div>

          {/* Sobre o que você quer falar */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-blue-950 underline mb-6">
              SOBRE O QUE VOCÊ QUER FALAR COM A GENTE?
            </h2>
            <p className="text-center text-blue-950 mb-6 text-sm sm:text-base px-4">Escolha uma das opções abaixo</p>

            <RadioGroup value={contactReason} onValueChange={setContactReason} className="space-y-3 sm:space-y-4">
              {/* Opção 1 - Reclamação */}
              <div className="bg-[#0A1F44] rounded-lg p-3 sm:p-4 md:p-6 border-2 border-transparent hover:border-blue-300 transition-all w-full max-w-full overflow-hidden">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <RadioGroupItem value="reclamacao" id="r1" className="mt-1 sm:mt-2 flex-shrink-0" />
                  <div className="flex-1 min-w-0 w-full">
                    <Label
                      htmlFor="r1"
                      className="font-bold text-sm sm:text-base md:text-lg text-white flex items-start gap-2 sm:gap-3 leading-tight cursor-pointer break-words"
                    >
                      <span className="break-words overflow-wrap-anywhere">
                        Reclamação/Pedido/Sugestão/Elogio ou apoio
                      </span>
                    </Label>

                    {contactReason === "reclamacao" && (
                      <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-4 animate-in slide-in-from-top-2 duration-300">
                        <div className="grid grid-cols-1 gap-2 sm:gap-3 pl-0 sm:pl-2">
                          <div className="flex items-center space-x-2 p-2 rounded hover:bg-blue-900/30 w-full">
                            <input
                              type="radio"
                              name="sub-reclamacao"
                              id="sub-reclamacao"
                              className="w-4 h-4 flex-shrink-0"
                            />
                            <Label
                              htmlFor="sub-reclamacao"
                              className="text-white text-xs sm:text-sm md:text-base cursor-pointer break-words"
                            >
                              Reclamação
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 p-2 rounded hover:bg-blue-900/30 w-full">
                            <input
                              type="radio"
                              name="sub-reclamacao"
                              id="sub-pedido"
                              className="w-4 h-4 flex-shrink-0"
                            />
                            <Label
                              htmlFor="sub-pedido"
                              className="text-white text-xs sm:text-sm md:text-base cursor-pointer break-words"
                            >
                              Pedido
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 p-2 rounded hover:bg-blue-900/30 w-full">
                            <input
                              type="radio"
                              name="sub-reclamacao"
                              id="sub-sugestao"
                              className="w-4 h-4 flex-shrink-0"
                            />
                            <Label
                              htmlFor="sub-sugestao"
                              className="text-white text-xs sm:text-sm md:text-base cursor-pointer break-words"
                            >
                              Sugestão
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 p-2 rounded hover:bg-blue-900/30 w-full">
                            <input
                              type="radio"
                              name="sub-reclamacao"
                              id="sub-elogio"
                              className="w-4 h-4 flex-shrink-0"
                            />
                            <Label
                              htmlFor="sub-elogio"
                              className="text-white text-xs sm:text-sm md:text-base cursor-pointer break-words"
                            >
                              Elogio ou apoio
                            </Label>
                          </div>
                        </div>
                        <div className="space-y-2 sm:space-y-3 w-full">
                          <Label className="text-white font-medium text-xs sm:text-sm md:text-base">
                            Descreva melhor o que deseja compartilhar:
                          </Label>
                          <textarea
                            className="w-full bg-blue-900/20 border-2 border-blue-700 rounded-lg p-2 sm:p-3 text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 focus:bg-blue-900/30 transition-all min-h-[60px] sm:min-h-[80px] resize-none text-xs sm:text-sm"
                            placeholder="Digite aqui sua mensagem..."
                            rows={3}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Opção 2 - Emendas */}
              <div className="bg-[#0A1F44] rounded-lg p-3 sm:p-4 md:p-6 border-2 border-transparent hover:border-blue-300 transition-all w-full max-w-full overflow-hidden">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <RadioGroupItem value="emendas" id="r2" className="mt-1 sm:mt-2 flex-shrink-0" />
                  <div className="flex-1 min-w-0 w-full">
                    <Label
                      htmlFor="r2"
                      className="font-bold text-sm sm:text-base md:text-lg text-white flex items-start gap-2 sm:gap-3 leading-tight cursor-pointer break-words"
                    >
                      <span className="break-words overflow-wrap-anywhere">Pedido de emendas</span>
                    </Label>

                    {contactReason === "emendas" && (
                      <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-4 animate-in slide-in-from-top-2 duration-300">
                        <div className="space-y-2 sm:space-y-3 w-full">
                          <div>
                            <Label className="text-white font-medium mb-1 sm:mb-2 block text-xs sm:text-sm md:text-base">
                              Título do pedido:
                            </Label>
                            <input
                              type="text"
                              className="w-full bg-blue-900/20 border-2 border-blue-700 rounded-lg p-2 sm:p-3 text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 focus:bg-blue-900/30 transition-all text-xs sm:text-sm"
                              placeholder="Ex: Construção de praça no bairro..."
                            />
                          </div>
                          <div>
                            <Label className="text-white font-medium mb-1 sm:mb-2 block text-xs sm:text-sm md:text-base">
                              Descreva a proposta com detalhes:
                            </Label>
                            <textarea
                              className="w-full bg-blue-900/20 border-2 border-blue-700 rounded-lg p-2 sm:p-3 text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 focus:bg-blue-900/30 transition-all min-h-[80px] sm:min-h-[100px] resize-none text-xs sm:text-sm"
                              placeholder="Detalhe sua proposta aqui..."
                              rows={4}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Opção 3 - Conversa */}
              <div className="bg-[#0A1F44] rounded-lg p-3 sm:p-4 md:p-6 border-2 border-transparent hover:border-blue-300 transition-all w-full max-w-full overflow-hidden">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <RadioGroupItem value="conversa" id="r3" className="mt-1 sm:mt-2 flex-shrink-0" />
                  <div className="flex-1 min-w-0 w-full">
                    <Label
                      htmlFor="r3"
                      className="font-bold text-sm sm:text-base md:text-lg text-white flex items-start gap-2 sm:gap-3 leading-tight cursor-pointer break-words"
                    >
                      <span className="break-words overflow-wrap-anywhere">Marcar uma conversa</span>
                    </Label>
                    <p className="text-xs sm:text-sm text-blue-200 mt-1 sm:mt-2 opacity-90 leading-relaxed break-words">
                      *As solicitações são analisadas com critério pela equipe. Faremos o possível para atender, mas por
                      conta da alta demanda nem sempre será viável agendar com todos.
                    </p>

                    {contactReason === "conversa" && (
                      <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-4 animate-in slide-in-from-top-2 duration-300">
                        <div className="space-y-2 sm:space-y-3 w-full">
                          <div>
                            <Label className="text-white font-medium mb-1 sm:mb-2 block text-xs sm:text-sm md:text-base">
                              Tema principal ou motivo do contato:
                            </Label>
                            <input
                              type="text"
                              className="w-full bg-blue-900/20 border-2 border-blue-700 rounded-lg p-2 sm:p-3 text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 focus:bg-blue-900/30 transition-all text-xs sm:text-sm"
                              placeholder="Ex: Discussão sobre políticas públicas..."
                            />
                          </div>
                          <div>
                            <Label className="text-white font-medium mb-1 sm:mb-2 block text-xs sm:text-sm md:text-base">
                              Detalhe mais sobre o que você gostaria de conversar:
                            </Label>
                            <textarea
                              className="w-full bg-blue-900/20 border-2 border-blue-700 rounded-lg p-2 sm:p-3 text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 focus:bg-blue-900/30 transition-all min-h-[80px] sm:min-h-[100px] resize-none text-xs sm:text-sm"
                              name="mensagem"
                              placeholder="Descreva em detalhes o que gostaria de discutir..."
                              rows={4}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </RadioGroup>

            <div className="border-l-4 p-4 rounded-r-lg mt-6 border-[rgba(10,31,68,1)] bg-[rgba(13,26,44,0.059782608695652176)]">
              <p className="text-center text-blue-900 text-sm sm:text-base leading-relaxed">
                <span className="font-semibold">Importante:</span> A equipe do Leo vai analisar sua solicitação. A
                pessoa responsável pelo tema indicado deve entrar em contato logo que possível. Faremos o possível para
                atender a todos, de acordo com a demanda.
              </p>
            </div>
          </div>

          {/* Preferências de Comunicação */}
          <div className="bg-[#0A1F44] p-3 sm:p-4 md:p-6 lg:p-8 rounded-lg bg-transparent">
            <h2 className="font-bold mb-4 sm:mb-6 text-center sm:text-2xl md:text-3xl underline text-lg text-[rgba(15,27,56,1)]">
              PREFERÊNCIAS DE COMUNICAÇÃO
            </h2>
            <div className="space-y-4 sm:space-y-6 text-center">
              <div>
                <p className="mb-3 sm:mb-4 sm:text-lg md:text-xl text-blue-950 px-2 text-lg">
                  Deseja receber conteúdos do Leo pelo WhatsApp?
                </p>
                <RadioGroup className="flex flex-row space-x-4 text-center items-center justify-center">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sim" id="whatsapp-sim" />
                    <Label className="text-base text-blue-950" htmlFor="whatsapp-sim">
                      Sim
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="nao" id="whatsapp-nao" />
                    <Label className="text-base text-blue-950" htmlFor="whatsapp-nao">
                      Não
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <p className="mb-2 text-xl text-blue-950">Gostaria de assinar a newsletter semanal?</p>
                <RadioGroup className="flex flex-row space-x-4 text-center items-center justify-center">
                  <div className="flex space-x-2 items-center">
                    <RadioGroupItem value="sim" id="newsletter-sim" />
                    <Label className="text-base text-blue-950 my-0" htmlFor="newsletter-sim">
                      Sim
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 text-blue-950 text-base">
                    <RadioGroupItem value="nao" id="newsletter-nao" />
                    <Label className="text-base" htmlFor="newsletter-nao">
                      Não
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>

          {/* Termo de Consentimento */}
          <div className="bg-[#0A1F44] p-3 sm:p-4 md:p-6 lg:p-8 rounded-lg bg-transparent">
            <h2 className="font-bold mb-4 sm:mb-6 text-center sm:text-2xl md:text-3xl underline text-blue-950 text-lg">
              TERMO DE CONSENTIMENTO (LGPD)
            </h2>
            <div className="flex space-x-3 text-blue-950 items-start">
              <Checkbox id="terms" required className="mt-1" />
              <Label htmlFor="terms" className="bg-transparent text-blue-950 sm:text-base leading-relaxed text-xs px-0">
                Autorizo o uso dos meus dados para que a equipe do mandato entre em contato para as comunicações por
                e-mail ou WhatsApp, conforme minhas preferências acima.
              </Label>
            </div>
          </div>

          <div className="text-center px-4">
            <Button
              type="submit"
              size="lg"
              className="font-bold hover:bg-blue-800 active:bg-blue-900 focus:bg-blue-800 px-6 sm:px-8 md:px-12 lg:px-16 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg bg-blue-950 w-full sm:w-auto min-w-[200px] text-white transition-colors duration-200 hover:scale-105 active:scale-95 transform"
            >
              ENVIAR FORMULÁRIO
            </Button>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  )
}

const SocialIcon = ({
  href,
  platform,
  label,
}: {
  href: string
  platform: "youtube" | "instagram" | "linkedin" | "x"
  label: string
}) => {
  const getIconStyles = () => {
    switch (platform) {
      case "youtube":
        return "bg-red-600 hover:bg-red-700"
      case "instagram":
        return "bg-gradient-to-br from-purple-600 via-pink-600 to-orange-400 hover:from-purple-700 hover:via-pink-700 hover:to-orange-500"
      case "linkedin":
        return "bg-blue-600 hover:bg-blue-700"
      case "x":
        return "bg-black hover:bg-gray-800"
      default:
        return "bg-gray-600 hover:bg-gray-700"
    }
  }

  const getIconContent = () => {
    switch (platform) {
      case "youtube":
        return (
          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        )
      case "instagram":
        return (
          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        )
      case "linkedin":
        return (
          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        )
      case "x":
        return (
          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className={`p-3 sm:p-3 md:p-4 rounded-lg transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center ${getIconStyles()}`}
    >
      {getIconContent()}
    </a>
  )
}

const Footer = () => {
  return (
    <footer className="pt-8 sm:pt-12 pb-6 sm:pb-8 text-center bg-[rgba(0,20,54,1)]">
      <div className="relative w-full mx-0 my-0 px-0">
        <Image
          src="/images/Obrigado.png"
          alt="Obrigado pelo contato"
          width={1200}
          height={900}
          className="w-full h-auto max-w-full px-[6%]"
        />
      </div>
      <div className="w-full px-3 sm:px-4 mt-4 sm:mt-6">
        <div className="flex justify-center gap-3 sm:gap-4 mt-3 sm:mt-4 flex-wrap">
          <SocialIcon href="#" platform="youtube" label="Siga Leo Siqueira no Youtube" />
          <SocialIcon href="#" platform="instagram" label="Siga Leo Siqueira no Instagram" />
          <SocialIcon href="#" platform="linkedin" label="Siga Leo Siqueira no LinkedIn" />
          <SocialIcon href="#" platform="x" label="Siga Leo Siqueira no X" />
        </div>
      </div>
    </footer>
  )
}
