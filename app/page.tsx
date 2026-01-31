'use client';

import Image from 'next/image';
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.consent) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', phone: '', consent: false });
        setSubmitted(false);
      }, 3000);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center shadow-sm">
                <Image
                  src="/logo.png"
                  alt="Utkal Textorium Logo"
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-slate-900">
                  Utkal Textorium
                </h1>
                <p className="text-sm text-slate-600">
                  Ladies & Kids Wear (Retail Store)
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button
                asChild
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <a
                  href="https://wa.me/919124036678"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  WhatsApp Us
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-slate-300 hover:bg-slate-50"
              >
                <a href="tel:+919124036678">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <section id="about" className="mb-16 scroll-mt-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              About Us
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Utkal Textorium is a retail store in Cuttack offering ladies and
              kids wear including kurtis, suits, dresses, sets and seasonal
              collections. We are committed to providing quality clothing with
              excellent customer service.
            </p>
          </div>
        </section>

        <Separator className="my-12" />

        <section id="contact" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
            Store Information
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-slate-200 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-slate-600" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="tel:+919124036678"
                  className="text-lg text-slate-700 hover:text-slate-900 transition-colors"
                >
                  +91 91240 36678
                </a>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-slate-600" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="mailto:mail@utkaltextorium.com"
                  className="text-lg text-slate-700 hover:text-slate-900 transition-colors break-all"
                >
                  mail@utkaltextorium.com
                </a>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-slate-600" />
                  Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-slate-700 mb-3">
                  CDA Sector 9, Cuttack, Odisha, India
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full"
                >
                  <a
                    href="https://maps.google.com/?q=Cuttack,Odisha,India"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="mr-2 h-4 w-4" />
                    Open in Google Maps
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-slate-600" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-slate-700">
                  <p className="flex justify-between">
                    <span className="font-medium">Mon - Sat:</span>
                    <span>10:00 AM - 8:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-medium">Sunday:</span>
                    <span>Closed</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        <section id="whatsapp-consent" className="mb-16 scroll-mt-20">
          <div className="max-w-2xl mx-auto">
            <Card className="border-green-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Get Updates on WhatsApp
                </CardTitle>
                <CardDescription className="text-center">
                  Stay informed about our latest collections and offers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name (Optional)</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>

                  <div className="flex items-start space-x-3 pt-2">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) =>
                        setFormData({
                          ...formData,
                          consent: checked as boolean,
                        })
                      }
                      required
                    />
                    <Label
                      htmlFor="consent"
                      className="text-sm leading-relaxed cursor-pointer"
                    >
                      I agree to receive updates and promotional messages on
                      WhatsApp from Utkal Textorium. I can opt out anytime by
                      replying STOP.
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700"
                    disabled={!formData.consent}
                  >
                    {submitted ? 'Subscribed!' : 'Subscribe to Updates'}
                  </Button>
                </form>

                <div className="mt-6 space-y-2 text-sm text-slate-600 bg-slate-50 p-4 rounded-lg">
                  <p className="font-medium text-slate-700">
                    Important Information:
                  </p>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>We message only users who opt in.</li>
                    <li>To unsubscribe, reply STOP.</li>
                    <li>To resubscribe, reply START.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        <section id="policies" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
            Policies & Terms
          </h2>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="privacy"
                className="border border-slate-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Privacy Policy
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 space-y-4 pt-4">
                  <div>
                    <h4 className="font-semibold mb-2">
                      Information We Collect
                    </h4>
                    <p>
                      We collect information you provide directly to us,
                      including your name, phone number, and messages when you
                      contact us or opt into our WhatsApp communications.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">How We Use Your Data</h4>
                    <p>
                      Your information is used solely for customer support,
                      order updates, and promotional messages (only with your
                      explicit opt-in consent). We do not sell your personal
                      information to third parties.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Data Sharing</h4>
                    <p>
                      Your data may be shared with WhatsApp/Meta for message
                      delivery and with trusted service providers who assist in
                      our operations. All parties are bound by confidentiality
                      agreements.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Data Retention & Security
                    </h4>
                    <p>
                      We retain your data as long as necessary to provide our
                      services or as required by law. We implement appropriate
                      security measures to protect your information from
                      unauthorized access or disclosure.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Contact Us</h4>
                    <p>
                      For privacy concerns, contact us at
                      mail@utkaltextorium.com or call +91 91240 36678.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="terms"
                className="border border-slate-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Terms & Conditions
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 space-y-4 pt-4">
                  <div>
                    <h4 className="font-semibold mb-2">Website Usage</h4>
                    <p>
                      By accessing this website, you agree to use it for lawful
                      purposes only. All content is provided for informational
                      purposes about our retail store.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Pricing & Availability
                    </h4>
                    <p>
                      Prices and product availability are subject to change
                      without notice. We reserve the right to limit quantities
                      and discontinue items at our discretion.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      Limitation of Liability
                    </h4>
                    <p>
                      Utkal Textorium shall not be liable for any indirect,
                      incidental, or consequential damages arising from the use
                      of this website or our products.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Governing Law</h4>
                    <p>
                      These terms are governed by the laws of India. Any
                      disputes shall be subject to the exclusive jurisdiction of
                      the courts in Cuttack, Odisha.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="whatsapp"
                className="border border-slate-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  WhatsApp Messaging Policy
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 space-y-4 pt-4">
                  <div>
                    <h4 className="font-semibold mb-2">Opt-In Methods</h4>
                    <p>
                      You can opt in to receive WhatsApp messages by completing
                      the consent form on this website or by contacting us
                      directly and providing explicit consent.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Opt-Out Process</h4>
                    <p>
                      You can opt out at any time by replying STOP to any
                      WhatsApp message from us. To resubscribe, reply START.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Message Types</h4>
                    <p>
                      We may send promotional messages about new collections,
                      offers, and updates about our store. We respect your
                      preferences and will only message users who have opted in.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Message Frequency</h4>
                    <p>
                      Message frequency may vary based on promotions and
                      updates. We strive to send relevant information without
                      overwhelming you.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="return"
                className="border border-slate-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Return / Exchange Policy
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 space-y-4 pt-4">
                  <div>
                    <h4 className="font-semibold mb-2">Return Eligibility</h4>
                    <p>
                      Items may be returned or exchanged within 7 days of
                      purchase, provided they are in original condition with
                      tags attached and accompanied by the original receipt.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Non-Returnable Items</h4>
                    <p>
                      Intimate wear, altered items, and items without tags
                      cannot be returned or exchanged for hygiene and quality
                      reasons.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Refund Process</h4>
                    <p>
                      Refunds will be processed in the original payment method
                      within 7-10 business days after we receive and inspect the
                      returned item.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Exchange Process</h4>
                    <p>
                      Exchanges are subject to availability. If the desired item
                      is unavailable, a store credit or refund will be offered.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="pickup"
                className="border border-slate-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Pickup Policy / No Delivery
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 space-y-4 pt-4">
                  <div>
                    <h4 className="font-semibold mb-2">In-Store Shopping Only</h4>
                    <p>
                      Utkal Textorium operates as a physical retail store. We do
                      not offer home delivery services at this time. All
                      purchases must be made in-store.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Store Pickup</h4>
                    <p>
                      Visit our store during business hours to browse our
                      collection and make purchases. Our staff will be happy to
                      assist you with your selections.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Store Location</h4>
                    <p>
                      CDA Sector 9, Cuttack, Odisha, India. Call us at +91 91240
                      36678 for directions or inquiries.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-slate-300 py-12 mt-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Utkal Textorium
              </h3>
              <p className="text-sm mb-4">
                Ladies & Kids Wear - Quality clothing for every occasion.
              </p>
              <div className="space-y-2 text-sm">
                <p>Phone: +91 91240 36678</p>
                <p>Email: mail@utkaltextorium.com</p>
                <p>Location: Cuttack, Odisha, India</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="hover:text-white transition-colors"
                  >
                    Contact Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('policies')}
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('policies')}
                    className="hover:text-white transition-colors"
                  >
                    Terms & Conditions
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('policies')}
                    className="hover:text-white transition-colors"
                  >
                    WhatsApp Messaging Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('policies')}
                    className="hover:text-white transition-colors"
                  >
                    Return/Exchange Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('policies')}
                    className="hover:text-white transition-colors"
                  >
                    Pickup Policy
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="bg-slate-700 my-8" />
          <div className="text-center text-sm">
            <p>© 2026 Utkal Textorium. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
