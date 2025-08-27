import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Award, Clock, ArrowRight } from "lucide-react";
import { constructionContent } from "@/lib/construction-content";
import Link from "next/link";

export function AboutPreview() {
  const valueIcons = {
    "Quality Craftsmanship": Award,
    "Timely Delivery": Clock,
    "Safety First Approach": CheckCircle,
    "Transparent Pricing": Users,
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose ProZone Construction?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {constructionContent.about.overview}
            </p>
            
            <div className="space-y-4 mb-8">
              {constructionContent.about.values.map((value, index) => {
                const IconComponent = valueIcons[value as keyof typeof valueIcons] || CheckCircle;

                return (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <IconComponent className="h-4 w-4 text-orange-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{value}</span>
                  </div>
                );
              })}
            </div>

            <div className="bg-orange-50 p-6 rounded-lg mb-8">
              <h3 className="font-semibold text-gray-900 mb-2">Our Mission</h3>
              <p className="text-gray-700">{constructionContent.about.mission}</p>
            </div>

            <Link href={'/about'}>
              <Button 
                size="lg" 
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Construction team at work"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <Card className="absolute -bottom-6 -left-6 bg-white shadow-xl border-0">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-1">15+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
