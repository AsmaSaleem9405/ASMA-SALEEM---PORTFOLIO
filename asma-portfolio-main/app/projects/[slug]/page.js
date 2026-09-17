"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

const projectDetails = {
  evzonetech: {
    title: "Evzonetech",
    description: "Engaging social media posts, campaign creatives, and brand-consistent graphics designed for digital platforms.",
    designs: [
      {
        image: "/images/1.png",
        caption: "Docker CI/CD",
      },
      {
       image: "/images/2.png",
        caption: "Docker CI/CD",
      },
       {
       image: "/images/3.png",
        caption: "Engineering Thinking",
      },
       {
       image: "/images/4.png",
        caption: "Manual Testing VS Automation",
      },
       {
       image: "/images/5.png",
        caption: "SaaS",
      },
       {
       image: "/images/6.png",
        caption: "SaaS",
      },
       {
       image: "/images/7.png",
        caption: "Design Test Mitigate Risk",
      },
       {
       image: "/images/8.png",
        caption: "Business Risk",
      },
       {
       image: "/images/9.png",
        caption: "Playwright Trace Viewer",
      },
       {
       image: "/images/14.png",
        caption: "Eval Scores",
      },
        {
        images: [
          "/images/14.jpg",
         
          "/images/16.png",
           "/images/15.png",
        ],
        caption: "LLM EVAL PIPELINE",
      },
       {
        images: [
          "/images/17.png",
         
          "/images/18.png",
           "/images/19.png",
            "/images/20.png",
             "/images/21.png",
        ],
        caption: "PLAYWRIGHT . TEST AUTOMATION",
      },
      {
        images: [
          "/images/22.png",
         
          "/images/23.png",
           "/images/15.png",
            "/images/26.png",
        ],
        caption: "Why Test Keeps Breaking",
      },
     
    ],
  },
  "lancer-seed": {
    title: "Lancer Seed",
    description: "Marketing creatives, product graphics, and promotional visuals for agriculture-focused products.",
    designs: [
      // 5 separate individual image cards
      {
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
        caption: "Hybrid Crop Creative 1",
      },
      {
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
        caption: "Hybrid Crop Creative 2",
      },
      {
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        caption: "Hybrid Crop Creative 3",
      },
      {
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
        caption: "Hybrid Crop Creative 4",
      },
      {
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
        caption: "Hybrid Crop Creative 5",
      },
      // 6th card with carousel data (multiple images in one card)
      {
        images: [
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
          "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
        ],
        caption: "Campaign Carousel Set 6",
      },
    ],
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
  },
};

export default function ProjectGalleryPage() {
  const params = useParams();
  const slug = params?.slug;
  const project = projectDetails[slug];

  const [modalImage, setModalImage] = useState(null);
  const [cardIndices, setCardIndices] = useState({});

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

  const nextCardSlide = (cardIdx, len, e) => {
    e.stopPropagation();
    setCardIndices((prev) => {
      const current = prev[cardIdx] || 0;
      return { ...prev, [cardIdx]: (current + 1) % len };
    });
  };

  const prevCardSlide = (cardIdx, len, e) => {
    e.stopPropagation();
    setCardIndices((prev) => {
      const current = prev[cardIdx] || 0;
      return { ...prev, [cardIdx]: (current - 1 + len) % len };
    });
  };

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

      {/* Gallery Grid */}
      <h2 className="text-2xl font-semibold mb-6 text-purple-400 text-center">Project Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {project.designs.map((item, idx) => {
          const isCarousel = item.images && item.images.length > 0;
          const currentSlide = cardIndices[idx] || 0;
          const displayImage = isCarousel ? item.images[currentSlide] : item.image;

          return (
            <div key={idx} className="rounded-xl overflow-hidden border border-purple-900/50 bg-[#12052b] flex flex-col relative">
              <div 
                className="overflow-hidden h-72 relative cursor-pointer group" 
                onClick={() => setModalImage(displayImage)}
              >
                <img 
                  src={displayImage} 
                  alt={item.caption} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300" 
                />

                {/* Show carousel buttons & dots only if it's a multi-image card */}
                {isCarousel && item.images.length > 1 && (
                  <>
                    <button 
                      onClick={(e) => prevCardSlide(idx, item.images.length, e)}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100 transition z-10"
                    >
                      &#10094;
                    </button>
                    <button 
                      onClick={(e) => nextCardSlide(idx, item.images.length, e)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100 transition z-10"
                    >
                      &#10095;
                    </button>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/50 px-2.5 py-1 rounded-full z-10">
                      {item.images.map((_, imgIdx) => (
                        <span 
                          key={imgIdx} 
                          className={`w-2 h-2 rounded-full transition-all ${imgIdx === currentSlide ? 'bg-purple-400 w-4' : 'bg-white/50'}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="p-4 text-center bg-black/40 flex-1 flex items-center justify-center">
                <p className="text-sm font-medium text-gray-200">{item.caption}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Fullscreen Modal Preview */}
      {modalImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setModalImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center">
            <button 
              className="absolute top-4 right-4 text-white text-3xl font-bold bg-purple-600 w-10 h-10 rounded-full flex items-center justify-center hover:bg-purple-700 z-50"
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