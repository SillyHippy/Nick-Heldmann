import { Mail, Phone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useTypingEffect } from "@/hooks/useTypingEffect";

const tagline =
  "Recent business administration graduate seeking to leverage strong collaboration skills, project management experience, and a customer-first mindset to bring value to a growing team.";

export function HeroSection() {
  const { displayed, done } = useTypingEffect(tagline, 25, 600);

  return (
    <section
      id="about"
      className="min-h-[90vh] flex items-center justify-center pt-20 pb-16 px-6"
    >
      <div className="container mx-auto max-w-3xl text-center">
        <Avatar className="h-28 w-28 mx-auto mb-8 border-4 border-primary/20 shadow-lg">
          <AvatarFallback className="bg-primary text-primary-foreground text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            NH
          </AvatarFallback>
        </Avatar>

        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 tracking-tight">
          Nick Heldmann
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed min-h-[4rem]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {displayed}
          {!done && <span className="inline-block w-0.5 h-5 bg-primary ml-0.5 animate-pulse align-middle" />}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-10" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          <a
            href="mailto:Nickheldmannbridges@gmail.com"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4" />
            Nickheldmannbridges@gmail.com
          </a>
          <span className="hidden sm:inline text-border">|</span>
          <a
            href="tel:+12069532438"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4" />
            (206) 953-2438
          </a>
        </div>

        <Button asChild size="lg" className="shadow-md bg-primary text-primary-foreground hover:bg-primary/90">
          <a href="/Nick_Heldmann_Resume.pdf" download className="gap-2">
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </Button>
      </div>
    </section>
  );
}
