import { cn } from "@/lib/utils";
import { MessageCircle, QrCode } from "lucide-react";
import { useState } from "react";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  className?: string;
}

export function WhatsAppButton({ phoneNumber, message = "Olá! Vi seu portfólio e gostaria de saber mais.", className }: WhatsAppButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Formatar número para link com validação
  const cleanNumber = phoneNumber.replace(/\D/g, "");
  
  // Validar se o número tem o comprimento correto (mínimo 10 dígitos para Brasil)
  if (cleanNumber.length < 10) {
    console.warn(`Número de WhatsApp inválido: ${phoneNumber}. Mínimo 10 dígitos requerido.`);
  }
  
  const whatsappUrl = `https://wa.me/55${cleanNumber}?text=${encodeURIComponent(message)}`;
  
  // URL para gerar QR Code (usando API pública simples para demonstração)
  // Em produção, idealmente geraria estaticamente ou usaria lib local
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(whatsappUrl)}&bgcolor=25D366&color=ffffff&margin=10`;

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* QR Code Popup (Desktop Only) */}
      <div 
        className={cn(
          "hidden md:block mb-4 bg-white p-2 rounded-xl shadow-2xl transition-all duration-300 origin-bottom-right border-2 border-[#25D366]",
          isHovered ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-4 pointer-events-none"
        )}
      >
        <div className="bg-[#25D366] p-2 rounded-lg">
          <img src={qrCodeUrl} alt="WhatsApp QR Code" className="w-32 h-32" />
        </div>
        <p className="text-center text-xs font-bold text-[#128C7E] mt-2">Escaneie para conversar</p>
      </div>

      {/* Main Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#128C7E] hover:scale-110 transition-all duration-300 animate-in fade-in zoom-in group",
          className
        )}
        aria-label="Conversar no WhatsApp"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
        
        {/* Tooltip for Mobile/Tablet where QR doesn't show */}
        <span className="md:hidden absolute right-full mr-3 bg-white text-black px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
          Fale comigo!
        </span>
      </a>
    </div>
  );
}
