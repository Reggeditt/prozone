import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, ArrowRight, Building, Shield, Zap, Camera } from "lucide-react";
import { constructionContent } from "@/lib/construction-content";

const projectImages = [
  "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
];

const categoryIcons = {
  "Construction": Building,
  "Security & Automation": Shield,
  "Electrical": Zap,
  "Commercial": Building,
};

// Extended project data for demonstration
const allProjects = [
  ...constructionContent.projects.portfolio,
  {
    title: "Modern Shopping Complex",
    category: "Commercial",
    location: "Tema"
  },
  {
    title: "Residential Security System",
    category: "Security & Automation",
    location: "East Legon"
  },
  {
    title: "Industrial Electrical Installation",
    category: "Electrical",
    location: "Tema Industrial Area"
  },
  {
    title: "Luxury Villa Construction",
    category: "Construction",
    location: "Airport Residential"
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Project Portfolio
            </h1>
            <p className="text-xl text-orange-100 mb-8">
              Explore our successful construction projects across Ghana, showcasing 
              our expertise in delivering exceptional results.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-orange-200">Completed Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-orange-200">Cities Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-orange-200">On-Time Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-orange-200">Project Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Highlighting some of our most successful and innovative construction projects 
              that demonstrate our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => {
              const IconComponent = categoryIcons[project.category as keyof typeof categoryIcons] || Building;
              
              return (
                <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={projectImages[index % projectImages.length]}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Badge className="absolute top-4 left-4 bg-orange-600 hover:bg-orange-700">
                      <IconComponent className="h-3 w-3 mr-1" />
                      {project.category}
                    </Badge>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <Calendar className="h-4 w-4 text-gray-600" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      A showcase of our expertise in {project.category.toLowerCase()}, 
                      delivering exceptional results that exceed client expectations and 
                      industry standards.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        Completed 2024
                      </div>
                      <Button 
                        variant="ghost" 
                        className="text-orange-600 hover:text-orange-700 p-0 h-auto font-semibold group"
                      >
                        View Details
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Project Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We specialize in various types of construction projects, each requiring 
              unique expertise and attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Building className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Residential</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Custom homes, apartments, and residential complexes built to the highest standards.
                </p>
                <div className="text-2xl font-bold text-orange-600">150+</div>
                <div className="text-sm text-gray-500">Projects Completed</div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Building className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Commercial</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Office buildings, retail spaces, and commercial complexes for businesses.
                </p>
                <div className="text-2xl font-bold text-orange-600">200+</div>
                <div className="text-sm text-gray-500">Projects Completed</div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Security Systems</h3>
                <p className="text-gray-600 text-sm mb-4">
                  CCTV installation, gate automation, and comprehensive security solutions.
                </p>
                <div className="text-2xl font-bold text-orange-600">100+</div>
                <div className="text-sm text-gray-500">Projects Completed</div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Electrical Works</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Complete electrical installations, wiring, and power system solutions.
                </p>
                <div className="text-2xl font-bold text-orange-600">50+</div>
                <div className="text-sm text-gray-500">Projects Completed</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Case Study: {constructionContent.projects.caseStudies[0].title}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Challenge: {constructionContent.projects.caseStudies[0].challenge}
              </p>
              <p className="text-gray-600 mb-8">
                We successfully integrated eco-friendly materials and sustainable construction 
                practices in a large residential complex, reducing environmental impact by 40% 
                while maintaining cost-effectiveness and structural integrity.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-1">40%</div>
                  <div className="text-sm text-gray-600">Environmental Impact Reduction</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-1">15%</div>
                  <div className="text-sm text-gray-600">Cost Savings Achieved</div>
                </div>
              </div>

              <Button 
                size="lg" 
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold"
              >
                Read Full Case Study
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Sustainable construction project"
                className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join our growing list of satisfied clients. Contact us today to discuss 
            your construction needs and get a detailed project proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              Get Project Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold"
            >
              View More Projects
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
