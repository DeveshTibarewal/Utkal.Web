import { Mail, Phone, MapPin, Calendar } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto space-y-12">
          <section className="text-center space-y-6 py-12 md:py-20">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 bg-clip-text text-transparent">
                UTKAL TEXTORIUM
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-700">
                Coming Soon
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                We're launching soon. Stay tuned.
              </p>
            </div>

            <div className="flex items-center justify-center gap-2 text-slate-500 pt-4">
              <Calendar className="h-5 w-5" />
              <span className="text-sm">
                Expected Launch: MONTH YEAR
              </span>
            </div>
          </section>

          <Separator className="max-w-xs mx-auto" />

          <section className="space-y-8">
            <Card className="border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
                <CardDescription>
                  Get in touch with us for inquiries
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-slate-600 mt-0.5 flex-shrink-0" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-slate-700">
                        Email
                      </p>
                      <a
                        href="mailto:mail@utkaltextorium.com"
                        className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                      >
                        mail@utkaltextorium.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-slate-600 mt-0.5 flex-shrink-0" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-slate-700">
                        Phone
                      </p>
                      <a
                        href="tel:+919124036678"
                        className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                      >
                        +91 91240 36678
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-slate-600 mt-0.5 flex-shrink-0" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-slate-700">
                        Location
                      </p>
                      <p className="text-sm text-slate-600">
                        Cuttack, Odisha, Cuttack
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <footer className="border-t border-slate-200 mt-20">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-sm text-slate-600">
            © {currentYear} UTKAL TEXTORIUM. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
