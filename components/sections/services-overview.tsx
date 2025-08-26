import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Building, 
  Zap, 
  Shield, 
  Camera, 
  Wrench, 
  PaintBucket,
  ArrowRight 
} from "lucide-react";
import { constructionContent } from "@/lib/construction-content";

const serviceIcons = {
  "General Construction": Building,
  "Electrical Works": Zap,
  "Gate Automation": Shield,
  "CCTV Installation": Camera,
  "Plumbing Works": Wrench,
  "Painting Works": PaintBucket,
};

export function ServicesOverview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Construction Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From design to completion, we provide comprehensive construction solutions 
            tailored to your specific needs and requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {constructionContent.home.featuredServices.map((service, index) => {
            const IconComponent = serviceIcons[service as keyof typeof serviceIcons] || Building;
            
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors">
                    <IconComponent className="h-8 w-8 text-orange-600 group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {service}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 text-sm mb-4">
                    Professional {service.toLowerCase()} services with quality assurance and timely delivery.
                  </p>
                  <Button 
                    variant="ghost" 
                    className="text-orange-600 hover:text-orange-700 p-0 h-auto font-semibold group"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold"
          >
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
