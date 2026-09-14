"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const projectDetails = {
  evzonetech: {
    title: "Evzonetech",
    description: "Engaging social media posts, campaign creatives, and brand-consistent graphics designed for digital platforms.",
    designs: [
      {
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        caption: "Tech Brand Awareness Post",
      },
      {
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
        caption: "Software Solutions Carousel Slide",
      },
    ],
    carousel: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    ]
  },
  "lancer-seed": {
    title: "Lancer Seed",
    description: "Marketing creatives, product graphics, and promotional visuals for agriculture-focused products.",
    designs: [
      {
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
        caption: "Hybrid Crop Promotional Creative",
      },
    ],
    carousel: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    ]
  },
  "eastern-high-school": {
    title: "Eastern High School",
    description: "Promotional graphics, admissions campaign carousels, and student engagement visual content.",
    designs: [
      {
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
        caption: "Admissions Open Campaign Post",
      },
    ],
    carousel: [
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
    ]
  },
  "fashion-bank": {
    title: "Fashion Bank",
    description: "Customized uniform collections, promotional graphics, and commercial apparel marketing assets.",
    designs: [
      {
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
        caption: "Custom Uniform Collection Showcase",
      },
    ],
    carousel: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
    ]
  },
};

export default function ProjectGalleryPage() {
  const params = useParams();
  const slug = params?.slug;
  const project = projectDetails[slug];

  const [modalImage, setModalImage] = useState(null);
  const [carouselIndices, setCarouselIndices] = useState({});

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white bg-black">
        <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
        <Link href="/#projects" className="text-purple-400 underline">
          &larr; Back to Portfolio
        </Link>
      </div>
    );
  }

  const nextSlide = (len) => {
    setCarouselIndices((prev) => {
      const current = prev[slug] || 0;
      return { ...prev, [slug]: (current + 1) % len };
    });
  };

  const prevSlide = (len) => {
    setCarouselIndices((prev) => {
      const current = prev[slug] || 0;
      return { ...prev, [slug]: (current - 1 + len) % len };
    });
  };

  const activeIndex = carouselIndices[slug] || 0;

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 py-20 relative">
      <Link href="/#projects" className="text-purple-400 hover:underline mb-8 inline-block">
        &larr; Back to Projects
      </Link>

      {/* Main Text Centered */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
        <p className="text-gray-400 text-base md:text-lg">{project.description}</p>
      </div>

      {/* Carousel Section */}
      {project.carousel && project.carousel.length > 0 && (
        <div className="mb-20 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-purple-400 text-center">Campaign Carousel Post</h2>
          <div className="relative rounded-2xl overflow-hidden border border-purple-900/50 bg-[#12052b] h-80 md:h-[450px] flex items-center justify-center">
            <img 
              src={project.carousel[activeIndex]} 
              alt="Carousel slide" 
              className="w-full h-full object-cover cursor-pointer hover:opacity-95 transition"
              onClick={() => setModalImage(project.carousel[activeIndex])}
            />
            <button 
              onClick={() => prevSlide(project.carousel.length)}
              className="absolute left-4 bg-black/60 hover:bg-purple-600 text-white p-3 rounded-full transition"
            >
              &#10094;
            </button>
            <button 
              onClick={() => nextSlide(project.carousel.length)}
              className="absolute right-4 bg-black/60 hover:bg-purple-600 text-white p-3 rounded-full transition"
            >
              &#10095;
            </button>
          </div>
        </div>
      )}

      {/* Design Gallery with Individual Post Captions */}
      <h2 className="text-2xl font-semibold mb-6 text-purple-400 text-center">Design Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {project.designs.map((item, idx) => (
          <div key={idx} className="rounded-xl overflow-hidden border border-purple-900/50 bg-[#12052b] flex flex-col">
            <div className="overflow-hidden h-72 relative cursor-pointer" onClick={() => setModalImage(item.image)}>
              <img src={item.image} alt={item.caption} className="w-full h-full object-cover hover:scale-105 transition duration-300" />
            </div>
            <div className="p-4 text-center bg-black/40 flex-1 flex items-center justify-center">
              <p className="text-sm font-medium text-gray-200">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Modal Preview */}
      {modalImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setModalImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center">
            <button 
              className="absolute top-4 right-4 text-white text-3xl font-bold bg-purple-600 w-10 h-10 rounded-full flex items-center justify-center hover:bg-purple-700"
              onClick={() => setModalImage(null)}
            >
              &times;
            </button>
            <img src={modalImage} alt="Fullscreen preview" className="max-h-[85vh] max-w-full object-contain rounded-lg border border-purple-500/50" />
          </div>
        </div>
      )}
    </div>
  );
}