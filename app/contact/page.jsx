"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { constructionContent } from "@/lib/construction-content";

export default function ContactPage() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [quoteForm, setQuoteForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: ""
  });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const message = `Hello%20my%20name%20is%20${formData.name.split(" ").join("%20")}%20%20${formData.message.split(" ").join("%20")}%20feel%20free%20to%20reach%20out%20to%20me%20at%20${formData.email.split(" ").join("%20")}%20or%20${formData.phone.split(" ").join("%20")}`
    window.open(`https://wa.me/+233266469301?text=${message}`)
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    const message = `
    Hello%20Prozone,%20I%20would%20like%20to%20get%20a%20quote%20for%20my%20${quoteForm.projectType.split(" ").join("%20")}%20project;%20${quoteForm.description.split(" ").join("%20")}.%20My%20timeline%20is%20${quoteForm.timeline.split(" ").join("%20")}.%20I%20have%20a%20budget%20of%20${quoteForm.budget.split(" ").join("%20")}.
    `
    window.open(`https://wa.me/+233266469301?text=${message}`)
  };

  const handleContactChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleQuoteChange = (e) => {
    setQuoteForm({
      ...quoteForm,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-orange-100 mb-8">
              Ready to start your construction project? Get in touch with our expert team 
              for professional consultation and detailed quotes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Phone className="h-8 w-8 mx-auto mb-2" />
                <div className="font-semibold">Call Us</div>
                <div className="text-orange-200">Available 24/7</div>
              </div>
              <div className="text-center">
                <Mail className="h-8 w-8 mx-auto mb-2" />
                <div className="font-semibold">Email Us</div>
                <div className="text-orange-200">Quick Response</div>
              </div>
              <div className="text-center">
                <MapPin className="h-8 w-8 mx-auto mb-2" />
                <div className="font-semibold">Visit Us</div>
                <div className="text-orange-200">Two Locations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Phone Numbers */}
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Phone className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Phone Numbers</h3>
                <div className="space-y-2">
                  {constructionContent.contact.info.phones.map((phone, index) => (
                    <div key={index} className="text-gray-600">
                      <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-orange-600 transition-colors">
                        {phone}
                      </a>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Mail className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Email Address</h3>
                <div className="text-gray-600">
                  <a 
                    href={`mailto:${constructionContent.contact.info.email}`} 
                    className="hover:text-orange-600 transition-colors break-all"
                  >
                    {constructionContent.contact.info.email}
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Locations */}
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Locations</h3>
                <div className="space-y-2">
                  {constructionContent.contact.info.locations.map((location, index) => (
                    <div key={index} className="text-gray-600">
                      <div className="font-medium">{location.city}</div>
                      <div className="text-sm">{location.address}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <div>Mon - Fri: 8:00 AM - 6:00 PM</div>
                  <div>Saturday: 9:00 AM - 4:00 PM</div>
                  <div>Sunday: Emergency Only</div>
                  <div className="text-orange-600 font-medium">24/7 Emergency Support</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Forms */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* General Contact Form */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <MessageSquare className="h-6 w-6 text-orange-600" />
                  <CardTitle className="text-2xl text-gray-900">
                    {constructionContent.contact.form.title}
                  </CardTitle>
                </div>
                <p className="text-gray-600">
                  Have a question or need more information? Send us a message and we'll get back to you promptly.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Full Name *</Label>
                      <Input
                        id="contact-name"
                        name="name"
                        value={contactForm.name}
                        onChange={handleContactChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-phone">Phone Number *</Label>
                      <Input
                        id="contact-phone"
                        name="phone"
                        value={contactForm.phone}
                        onChange={handleContactChange}
                        placeholder="Your phone number"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email Address *</Label>
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={contactForm.email}
                      onChange={handleContactChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="contact-message">Message *</Label>
                    <Textarea
                      id="contact-message"
                      name="message"
                      value={contactForm.message}
                      onChange={handleContactChange}
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg font-semibold"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quote Request Form */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Phone className="h-6 w-6 text-orange-600" />
                  <CardTitle className="text-2xl text-gray-900">
                    {constructionContent.contact.quoteForm.title}
                  </CardTitle>
                </div>
                <p className="text-gray-600">
                  Ready to start your project? Fill out this form to receive a detailed quote tailored to your needs.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleQuoteSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="quote-name">Full Name *</Label>
                      <Input
                        id="quote-name"
                        name="name"
                        value={quoteForm.name}
                        onChange={handleQuoteChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="quote-phone">Phone Number *</Label>
                      <Input
                        id="quote-phone"
                        name="phone"
                        value={quoteForm.phone}
                        onChange={handleQuoteChange}
                        placeholder="Your phone number"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="quote-email">Email Address *</Label>
                    <Input
                      id="quote-email"
                      name="email"
                      type="email"
                      value={quoteForm.email}
                      onChange={handleQuoteChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="quote-project-type">Project Type *</Label>
                    <Select onValueChange={(value) => setQuoteForm({...quoteForm, projectType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential">Residential Construction</SelectItem>
                        <SelectItem value="commercial">Commercial Construction</SelectItem>
                        <SelectItem value="electrical">Electrical Works</SelectItem>
                        <SelectItem value="security">Security & Automation</SelectItem>
                        <SelectItem value="renovation">Renovation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="quote-budget">Budget Range</Label>
                      <Select onValueChange={(value) => setQuoteForm({...quoteForm, budget: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-50k">Under GHS 50,000</SelectItem>
                          <SelectItem value="50k-100k">GHS 50,000 - 100,000</SelectItem>
                          <SelectItem value="100k-500k">GHS 100,000 - 500,000</SelectItem>
                          <SelectItem value="500k-1m">GHS 500,000 - 1,000,000</SelectItem>
                          <SelectItem value="over-1m">Over GHS 1,000,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="quote-timeline">Timeline</Label>
                      <Select onValueChange={(value) => setQuoteForm({...quoteForm, timeline: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">ASAP</SelectItem>
                          <SelectItem value="1-3-months">1-3 Months</SelectItem>
                          <SelectItem value="3-6-months">3-6 Months</SelectItem>
                          <SelectItem value="6-12-months">6-12 Months</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="quote-description">Project Description *</Label>
                    <Textarea
                      id="quote-description"
                      name="description"
                      value={quoteForm.description}
                      onChange={handleQuoteChange}
                      placeholder="Describe your project requirements in detail..."
                      rows={4}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg font-semibold"
                  >
                    Request Quote
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Visit our offices in Accra and Kumasi for in-person consultations and project discussions.
            </p>
          </div>
          
          <div className="bg-gray-200 h-96 rounded-2xl flex items-center justify-center">
            <div className="text-center text-gray-600">
              <MapPin className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
              <p>Map integration would be implemented here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
