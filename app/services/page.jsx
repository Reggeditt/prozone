import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Building, 
  Zap, 
  Shield, 
  Camera, 
  Wrench, 
  PaintBucket,
  Ruler,
  Eye,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { constructionContent } from "@/lib/construction-content";

const categoryIcons = {
  "Design & Planning": Ruler,
  "Construction": Building,
  "Utilities": Wrench,
  "Security & Automation": Shield,
  "Finishing Works": PaintBucket,
};

const serviceIcons = {
  "Architectural Drawings": Ruler,
  "Structural Drawings": Building,
  "Quantity Surveying": Eye,
  "General Construction": Building,
  "Site Supervision": CheckCircle,
  "Electrical Works": Zap,
  "Plumbing Works": Wrench,
  "Ruzor Wiring": Zap,
  "CCTV Camera Installation": Camera,
  "Electric Fencing": Shield,
  "House Electric Fencing": Shield,
  "Gate Automation": Shield,
  "Garage Automation": Shield,
  "Painting Works": PaintBucket,
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Construction Services
            </h1>
            <p className="text-xl text-orange-100 mb-8">
              Comprehensive construction solutions from design to completion, 
              delivered with precision and excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {constructionContent.home.featuredServices.map((service, index) => (
                <Badge key={index} variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                  {service}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer a complete range of construction services organized into 
              specialized categories to meet all your building needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {constructionContent.services.categories.map((category, index) => {
              // const IconComponent = categoryIcons[category.title as keyof typeof categoryIcons] || Building;
              const IconComponent = categoryIcons[category.title] || Building;
              
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors">
                      <IconComponent className="h-8 w-8 text-orange-600 group-hover:text-white transition-colors" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-gray-600">
                          <CheckCircle className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant="ghost" 
                      className="w-full text-orange-600 hover:text-orange-700 hover:bg-orange-50 font-semibold group"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Service List
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Browse our comprehensive list of construction services, each delivered 
              with professional expertise and attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {constructionContent.services.allServices.map((service, index) => {
              const IconComponent = serviceIcons[service] || Building;
              
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-full mx-auto mb-3 flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                      <IconComponent className="h-6 w-6 text-orange-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-2">
                      {service}
                    </h3>
                    <p className="text-xs text-gray-600">
                      Professional {service.toLowerCase()} services
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Services?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Licensed & Certified</h3>
                    <p className="text-gray-600">All our services are delivered by licensed professionals with industry certifications.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Quality Materials</h3>
                    <p className="text-gray-600">We use only high-quality materials from trusted suppliers to ensure durability.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Timely Completion</h3>
                    <p className="text-gray-600">We pride ourselves on completing projects on time and within budget.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Warranty & Support</h3>
                    <p className="text-gray-600">All our work comes with comprehensive warranties and ongoing support.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Construction services"
                className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-600 text-white p-6 rounded-lg shadow-xl">
                <div className="text-2xl font-bold mb-1">500+</div>
                <div className="text-orange-100">Satisfied Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and detailed quote for your construction needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold"
            >
              Call Now: {constructionContent.contact.info.phones[0]}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}