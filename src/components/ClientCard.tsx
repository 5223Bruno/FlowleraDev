"use client";

import { cn } from "@/lib/utils";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface ClientCardProps {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  className?: string;
}

export function ClientCard({ id, name, category, image, description, tags, className }: ClientCardProps) {
  return (
    <div className={cn("group relative w-full h-[500px] overflow-hidden rounded-xl bg-card border border-border/10 shadow-2xl transition-all duration-500 hover:shadow-primary/10 hover:border-primary/30", className)}>
      {/* Background Image with Zoom Effect */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-80" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end items-start z-10">
        <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
          <Badge variant="outline" className="mb-4 bg-black/50 backdrop-blur border-primary/50 text-primary tracking-widest uppercase text-xs font-heading">
            {category}
          </Badge>
          
          <h3 className="text-4xl font-heading font-bold text-white mb-2 leading-tight">
            {name}
          </h3>
          
          <p className="text-gray-300 max-w-md mb-6 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
            {tags.map((tag) => (
              <span key={tag} className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded border border-white/10">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300 translate-y-4 group-hover:translate-y-0">
            <Link href={`/project/${id}`}>
              <Button className="font-heading tracking-wide bg-primary text-primary-foreground hover:bg-primary/90">
                VER PROJETO <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white">
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
