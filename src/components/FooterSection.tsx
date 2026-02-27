import { Mail, Phone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FooterSection() {
  return (
    <footer className="bg-foreground text-primary-foreground py-12 px-6">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
          Let's Connect
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-sm opacity-80">
          <a
            href="mailto:Njheldmann@gmail.com"
            className="inline-flex items-center gap-2 hover:opacity-100 transition-opacity"
          >
            <Mail className="h-4 w-4" />
            Njheldmann@gmail.com
          </a>
          <a
            href="tel:+12069532438"
            className="inline-flex items-center gap-2 hover:opacity-100 transition-opacity"
          >
            <Phone className="h-4 w-4" />
            (206) 953-2438
          </a>
        </div>

        <Button asChild variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
          <a href="/Nick_Heldmann_Resume.pdf" download className="gap-2">
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </Button>

        <p className="text-xs opacity-50 mt-8">
          © {new Date().getFullYear()} Nick Heldmann. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
