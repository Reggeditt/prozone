"use client";

import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
  Building,
  Shield,
  Zap,
  Camera,
  Filter,
} from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/images/gallery/1.jpg",
    title: "Modern Residential Complex",
    category: "Construction",
    location: "East Legon, Accra",
    year: "2024",
    description:
      "A luxury residential complex featuring modern architecture and sustainable building practices.",
  },
  {
    id: 2,
    src: "/images/gallery/2.jpg",
    title: "Commercial Office Building",
    category: "Construction",
    location: "Airport City, Accra",
    year: "2024",
    description:
      "State-of-the-art office building with advanced electrical systems and modern amenities.",
  },
  {
    id: 3,
    src: "/images/gallery/3.jpg",
    title: "Smart Gate Automation System",
    category: "Security & Automation",
    location: "Tema",
    year: "2024",
    description:
      "Advanced gate automation system with remote control and security integration.",
  },
  {
    id: 4,
    src: "/images/gallery/4.png",
    title: "Industrial Electrical Installation",
    category: "Electrical",
    location: "Tema Industrial Area",
    year: "2023",
    description:
      "Complete electrical infrastructure for industrial facility with backup power systems.",
  },
  {
    id: 5,
    src: "/images/gallery/5.jpg",
    title: "CCTV Security Network",
    category: "Security & Automation",
    location: "Kumasi",
    year: "2023",
    description:
      "Comprehensive CCTV surveillance system with 24/7 monitoring capabilities.",
  },
  {
    id: 6,
    src: "/images/gallery/6.jpg",
    title: "Luxury Villa Construction",
    category: "Construction",
    location: "Airport Residential, Accra",
    year: "2023",
    description:
      "Custom luxury villa with premium finishes and smart home integration.",
  },
  {
    id: 7,
    src: "/images/gallery/7.jpg",
    title: "Electric Fencing Installation",
    category: "Security & Automation",
    location: "East Legon, Accra",
    year: "2023",
    description:
      "High-security electric fencing system with advanced monitoring and control features.",
  },
  {
    id: 8,
    src: "/images/gallery/8.png",
    title: "Commercial Electrical Upgrade",
    category: "Electrical",
    location: "Osu, Accra",
    year: "2022",
    description:
      "Complete electrical system upgrade for commercial building with energy-efficient solutions.",
  },
  {
    id: 9,
    src: "/images/gallery/9.jpg",
    title: "Shopping Mall Construction",
    category: "Construction",
    location: "Kumasi City Center",
    year: "2022",
    description:
      "Large-scale commercial construction project with modern retail spaces and parking facilities.",
  },
  {
    id: 10,
    src: "/images/gallery/10.png",
    title: "Home Automation System",
    category: "Security & Automation",
    location: "Madina, Accra",
    year: "2022",
    description:
      "Integrated home automation system with lighting, climate control, and security features.",
  },
  {
    id: 11,
    src: "/images/gallery/11.png",
    title: "Smart Home Security System",
    category: "Security & Automation",
    location: "East Legon, Accra",
    year: "2023",
    description:
      "Comprehensive smart home security system with AI-powered cameras and alarms.",
  },
  {
    id: 12,
    src: "/images/gallery/12.HEIC",
    title: "Advanced Fire Alarm System",
    category: "Security & Automation",
    location: "Kumasi, Ghana",
    year: "2024",
    description:
      "State-of-the-art fire alarm system with smoke detection and emergency response features.",
  },
  {
    id: 13,
    src: "/images/gallery/13.jpg",
    title: "Smart Building Management System",
    category: "Security & Automation",
    location: "Accra, Ghana",
    year: "2024",
    description:
      "Integrated building management system for energy efficiency and security.",
  },
  {
    id: 14,
    src: "/images/gallery/14.jpg",
    title: "Renewable Energy Installation",
    category: "Electrical",
    location: "Cape Coast, Ghana",
    year: "2023",
    description:
      "Solar panel installation for residential and commercial properties.",
  },
  {
    id: 15,
    src: "/images/gallery/15.jpg",
    title: "Electric Vehicle Charging Station",
    category: "Electrical",
    location: "Accra, Ghana",
    year: "2023",
    description:
      "Installation of EV charging stations for public and private use.",
  },
  {
    id: 16,
    src: "/images/gallery/16.jpg",
    title: "Smart Grid Technology",
    category: "Electrical",
    location: "Tamale, Ghana",
    year: "2024",
    description:
      "Implementation of smart grid technology for efficient energy distribution.",
  },
  {
    id: 17,
    src: "/images/gallery/17.jpg",
    title: "Energy Storage Solutions",
    category: "Electrical",
    location: "Kumasi, Ghana",
    year: "2024",
    description:
      "Advanced energy storage systems for residential and commercial use.",
  },
  {
    id: 18,
    src: "/images/gallery/18.jpg",
    title: "Smart Home Energy Management",
    category: "Electrical",
    location: "Accra, Ghana",
    year: "2024",
    description: "Intelligent energy management system for smart homes.",
  },
  {
    id: 19,
    src: "/images/gallery/19.jpg",
    title: "Smart Home Energy Management",
    category: "Electrical",
    location: "Accra, Ghana",
    year: "2024",
    description: "Intelligent energy management system for smart homes.",
  },
  {
    id: 20,
    src: "/images/gallery/20.jpg",
    title: "Smart Home Energy Management",
    category: "Electrical",
    location: "Accra, Ghana",
    year: "2024",
    description: "Intelligent energy management system for smart homes.",
  },
  {
    id: 21,
    src: "/images/gallery/21.jpg",
    title: "Smart Home Energy Management",
    category: "Electrical",
    location: "Accra, Ghana",
    year: "2024",
    description: "Intelligent energy management system for smart homes.",
  },
  {
    id: 22,
    src: "/images/gallery/22.jpg",
    title: "Smart Home Energy Management",
    category: "Electrical",
    location: "Accra, Ghana",
    year: "2024",
    description: "Intelligent energy management system for smart homes.",
  },
  {
    id: 23,
    src: "/images/gallery/23.jpg",
    title: "Smart Home Energy Management",
    category: "Electrical",
    location: "Accra, Ghana",
    year: "2024",
    description: "Intelligent energy management system for smart homes.",
  },
  {
    id: 24,
    src: "/images/gallery/24.jpg",
    title: "Smart Home Energy Management",
    category: "Electrical",
    location: "Accra, Ghana",
    year: "2024",
    description: "Intelligent energy management system for smart homes.",
  },
  {
    id: 25,
    src: "/images/gallery/25.jpg",
    title: "Smart Home Energy Management",
    category: "Electrical",
    location: "Accra, Ghana",
    year: "2024",
    description: "Intelligent energy management system for smart homes.",
  },
  {
    id: 26,
    src: "/images/gallery/26.jpg",
    title: "Smart Home Energy Management",
    category: "Electrical",
    location: "Accra, Ghana",
    year: "2024",
    description: "Intelligent energy management system for smart homes.",
  },
  {
    id: 27,
    src: "/images/gallery/27.jpg",
    title: "Smart Home Energy Management",
    category: "Electrical",
    location: "Accra, Ghana",
    year: "2024",
    description: "Intelligent energy management system for smart homes.",
  },
  {
    id: 28,
    src: "/images/gallery/28.jpg",
    title: "Smart Home Energy Management",
    category: "Electrical",
    location: "Accra, Ghana",
    year: "2024",
    description: "Intelligent energy management system for smart homes.",
  },
];

const categories = [
  "All",
  "Construction",
  "Security & Automation",
  "Electrical",
];

const categoryIcons = {
  Construction: Building,
  "Security & Automation": Shield,
  Electrical: Zap,
  All: Filter,
};

interface GalleryProps {
  showTitle?: boolean;
  itemsPerPage?: number;
  className?: string;
}

export function Gallery({
  showTitle = true,
  itemsPerPage = 6,
  className = "",
}: GalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Filter images based on selected category
  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  // Calculate pagination
  const totalPages = Math.ceil(filteredImages.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentImages = filteredImages.slice(startIndex, endIndex);

  // Reset to first page when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  // Handle category filter
  const handleCategoryChange = (category: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setSelectedCategory(category);
      setIsLoading(false);
    }, 150);
  };

  // Lightbox navigation
  const openLightbox = (index: number) => {
    const globalIndex = galleryImages.findIndex(
      (img) => img.id === currentImages[index].id
    );
    setCurrentImageIndex(globalIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  // Swipe handlers for lightbox
  const swipeHandlers = useSwipeable({
    onSwipedLeft: goToNext,
    onSwipedRight: goToPrevious,
    trackMouse: true,
    preventScrollOnSwipe: true,
  });

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;

      switch (e.key) {
        case "Escape":
          closeLightbox();
          break;
        case "ArrowLeft":
          goToPrevious();
          break;
        case "ArrowRight":
          goToNext();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [lightboxOpen]);

  return (
    <section className={`py-20 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Project Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our portfolio of completed construction projects
              showcasing our expertise across various categories and locations
              in Ghana.
            </p>
          </div>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent =
              categoryIcons[category as keyof typeof categoryIcons];
            const isActive = selectedCategory === category;

            return (
              <Button
                key={category}
                variant={isActive ? "default" : "outline"}
                onClick={() => handleCategoryChange(category)}
                className={`
                  px-6 py-3 font-semibold transition-all duration-300
                  ${
                    isActive
                      ? "bg-orange-600 hover:bg-orange-700 text-white shadow-lg"
                      : "border-orange-200 text-gray-700 hover:border-orange-600 hover:text-orange-600 hover:bg-orange-50"
                  }
                `}
                disabled={isLoading}
              >
                <IconComponent className="h-4 w-4 mr-2" />
                {category}
                {category !== "All" && (
                  <Badge
                    variant="secondary"
                    className={`ml-2 ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {
                      galleryImages.filter((img) => img.category === category)
                        .length
                    }
                  </Badge>
                )}
              </Button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div
          className={`
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 transition-opacity duration-300
          ${isLoading ? "opacity-50" : "opacity-100"}
        `}
        >
          {currentImages.map((image, index) => {
            const IconComponent =
              categoryIcons[image.category as keyof typeof categoryIcons];

            return (
              <Card
                key={image.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Category Badge */}
                  <Badge className="absolute top-4 left-4 bg-orange-600 hover:bg-orange-700 text-white">
                    <IconComponent className="h-3 w-3 mr-1" />
                    {image.category}
                  </Badge>

                  {/* Year Badge */}
                  <Badge
                    variant="secondary"
                    className="absolute top-4 right-4 bg-white/90 text-gray-700"
                  >
                    <Calendar className="h-3 w-3 mr-1" />
                    {image.year}
                  </Badge>

                  {/* Hover Content */}
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                    <div className="flex items-center text-sm text-gray-200">
                      <MapPin className="h-3 w-3 mr-1" />
                      {image.location}
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {image.title}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{image.location}</span>
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {image.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-8">
            <div className="inline-flex items-center space-x-2 text-orange-600">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-orange-600"></div>
              <span className="font-medium">Loading projects...</span>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && currentImages.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Camera className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No Projects Found
            </h3>
            <p className="text-gray-600">
              No projects match the selected category.
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && !isLoading && (
          <div className="flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    className={
                      currentPage === 1
                        ? "pointer-events-none opacity-50"
                        : "cursor-pointer hover:bg-orange-50 hover:text-orange-600"
                    }
                  />
                </PaginationItem>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        onClick={() => setCurrentPage(page)}
                        isActive={currentPage === page}
                        className={`cursor-pointer ${
                          currentPage === page
                            ? "bg-orange-600 text-white hover:bg-orange-700"
                            : "hover:bg-orange-50 hover:text-orange-600"
                        }`}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  )
                )}

                <PaginationItem>
                  <PaginationNext
                    onClick={() =>
                      setCurrentPage(Math.min(totalPages, currentPage + 1))
                    }
                    className={
                      currentPage === totalPages
                        ? "pointer-events-none opacity-50"
                        : "cursor-pointer hover:bg-orange-50 hover:text-orange-600"
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}

        {/* Results Summary */}
        {!isLoading && (
          <div className="text-center mt-8">
            <p className="text-gray-600">
              Showing {currentImages.length} of {filteredImages.length} projects
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
            </p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <div
            {...swipeHandlers}
            className="relative w-full h-full flex items-center justify-center"
          >
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 text-white hover:bg-white/20 h-12 w-12"
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:bg-white/20 h-12 w-12"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:bg-white/20 h-12 w-12"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Main Image */}
            <div className="relative max-w-6xl max-h-[80vh] mx-4">
              <img
                src={galleryImages[currentImageIndex].src}
                alt={galleryImages[currentImageIndex].title}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
            </div>

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
              <div className="max-w-4xl mx-auto text-white">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <Badge variant="secondary" className="bg-white/20 text-white">
                    <Calendar className="h-3 w-3 mr-1" />
                    {galleryImages[currentImageIndex].year}
                  </Badge>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  {galleryImages[currentImageIndex].title}
                </h3>

                <div className="flex items-center text-gray-200 mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{galleryImages[currentImageIndex].location}</span>
                </div>

                <p className="text-gray-300 max-w-2xl">
                  {galleryImages[currentImageIndex].description}
                </p>
              </div>
            </div>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-medium">
              {currentImageIndex + 1} / {galleryImages.length}
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? "bg-orange-600 w-8"
                      : "bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
