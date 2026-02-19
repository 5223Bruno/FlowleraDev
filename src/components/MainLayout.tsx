"use client";

import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { WhatsAppButton } from "./WhatsAppButton";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-background text-foreground font-body">
      {/* Sidebar Fixa - Cartão de Visita */}
      <aside className="hidden lg:flex w-[30%] h-full flex-col justify-between border-r border-border/30 bg-sidebar p-12 relative z-10 shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="space-y-8 relative z-10">
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl mx-auto lg:mx-0 group hover-subtle-lift">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/images/profile.jpg" 
              alt="FLOWERADEV - Web Developer & UI Designer profissional em Ariquemes, RO" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          
          <div className="space-y-2 text-center lg:text-left">
            <h1 className="text-5xl font-heading font-bold tracking-tight text-foreground leading-none animate-subtle-fade-in">
              FLOWERA <span className="text-primary animate-color-shift">DEV</span>
            </h1>
            <p className="text-xl text-muted-foreground font-light tracking-wide opacity-transition animate-subtle-fade-in" style={{ animationDelay: '0.1s' }}>
              Web Developer & UI Designer
            </p>
          </div>

          <div className="space-y-4 pt-8">
            <p className="text-muted-foreground leading-relaxed max-w-md opacity-transition animate-subtle-fade-in" style={{ animationDelay: '0.2s' }}>
              Especialista em criar presenças digitais impactantes para pequenos negócios. 
              Transformo lanchonetes, lojas e serviços locais em marcas digitais de alto nível.
            </p>
            
            <div className="flex flex-col gap-3 pt-4">
              <div className="flex items-center gap-3 text-muted-foreground hover-text-primary icon-smooth">
                <MapPin className="w-5 h-5 animate-gentle-pulse" />
                <span>Ariquemes, RO</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground hover-text-primary icon-smooth">
                <Mail className="w-5 h-5 animate-gentle-pulse" />
                <span>floweradevoficial@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 pt-8 relative z-10">
          <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 button-smooth">
            <Linkedin className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 button-smooth">
            <Github className="w-5 h-5" />
          </Button>
          <Button className="flex-1 rounded-full font-heading tracking-wider text-lg button-smooth">
            FALE COMIGO
          </Button>
        </div>
        
        <div className="pt-4 text-center">
          <Link href="/dashboard" className="text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">
            Acessar Dashboard
          </Link>
        </div>
      </aside>

      {/* Conteúdo Rolável */}
      <main className="flex-1 h-full relative bg-background">
        <WhatsAppButton phoneNumber="6999967607" />
        {/* Mobile Header (Visible only on small screens) */}
        <div className="lg:hidden p-6 border-b border-border/30 flex items-center justify-between bg-sidebar/95 backdrop-blur sticky top-0 z-50">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/profile/me.jpg" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-xl font-heading font-bold">FLOWERA DEV</h1>
              <p className="text-xs text-muted-foreground">Web Developer</p>
            </div>
          </div>
          <Button size="sm">Contato</Button>
        </div>

        <ScrollArea className="h-full w-full">
          <div className="p-6 lg:p-16 max-w-7xl mx-auto space-y-24">
            {children}
            
            <footer className="py-12 border-t border-border/10 text-center text-muted-foreground text-sm">
              <p>&copy; 2026 Flowera Dev. Todos os direitos reservados.</p>
            </footer>
          </div>
        </ScrollArea>
      </main>
    </div>
  );
}
