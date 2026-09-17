"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

const projectDetails = {
  evzonetech: {
    title: "Evzonetech",
    description: "Engaging social media posts, campaign creatives, and brand-consistent graphics designed for digital platforms.",
    designs: [
      { image: "/images/1.png", caption: "Docker CI/CD" },
      { image: "/images/2.png", caption: "Docker CI/CD" },
      { image: "/images/3.png", caption: "Engineering Thinking" },
      { image: "/images/4.png", caption: "Manual Testing VS Automation" },
      { image: "/images/5.png", caption: "SaaS" },
      { image: "/images/6.png", caption: "SaaS" },
      { image: "/images/7.png", caption: "Design Test Mitigate Risk" },
      { image: "/images/8.png", caption: "Business Risk" },
      { image: "/images/9.png", caption: "Playwright Trace Viewer" },
      { image: "/images/14.png", caption: "Eval Scores" },
      {
        images: ["/images/14.jpg", "/images/16.png", "/images/15.png"],
        caption: "LLM EVAL PIPELINE",
      },
      {
        images: ["/images/17.png", "/images/18.png", "/images/19.png", "/images/20.png", "/images/21.png"],
        caption: "PLAYWRIGHT . TEST AUTOMATION",
      },
      {
        images: ["/images/22.png", "/images/23.png", "/images/15.png", "/images/26.png"],
        caption: "Why Test Keeps Breaking",
      },
    ],
  },
  "lancer-seed": {
    title: "Lancer Seed",
    description: "Marketing creatives, product graphics, and promotional visuals for agriculture-focused products.",
    designs: [
        { image: "/images/27.png", caption: "LANCER SEED (LR1240/LR228)" },
                { image: "/images/28.png", caption: "LANCER SEED (LR2808/LR6717)" },
        { image: "/images/29.png", caption: "HYBRID SIALAGE" },
        { image: "/images/30.png", caption: "HYBRID CORN SEED LR2025" },
                { image: "/images/31.png", caption: "GERMINATION" },
                  { image: "/images/32.png", caption: "LANCER SEED LR1240 | LR228" },
                    { image: "/images/33.png", caption: "LANCER SEED LR1240" },
                      { image: "/images/34.png", caption: "12 Rabi-ul-Awwal " },
                      { image: "/images/35.png", caption: "LR1240 " },
                      { image: "/images/36.png", caption: "HYBRID CORN SEED" },
                       { image: "/images/37.png", caption: "HYBRID CORN SEED FLEX" },
                        { image: "/images/38.png", caption: "HYBRID CORN SEED FLEX" },
                         { image: "/images/39.png", caption: "HYBRID CORN SEED FLEX" },
                          { image: "/images/40.png", caption: "HYBRID CORN SEED FLEX" },
                           { image: "/images/41.png", caption: "AGRICULTURE FIELD" },
                            { image: "/images/42.png", caption: "HYBRID CORN SEED LR1240" },
                             { image: "/images/43.png", caption: "14 AUGUST" },
                              { image: "/images/44.png", caption: "HYBRID CORN SEED LR228" },
                              { image: "/images/45.png", caption: "LANCER SEED" },
                              { image: "/images/46.png", caption: "HYBRID SIALAGE LR2025" },
                              { image: "/images/47.png", caption: "HYBRID MUSTARD SEED" },
                              { image: "/images/48.png", caption: "JUMMAH MUBARAK" },
                              { image: "/images/49.png", caption: "HYBRID MUSTARD SEED" },
                              { image: "/images/50.png", caption: "LANCER SEED" },
                              { image: "/images/51.png", caption: "BAHARIA HYBRID CORN SEED LR6717" },
                              { image: "/images/52.png", caption: "CERTIFIED CORN SEED" },
                              { image: "/images/53.png", caption: "HYBRID MAIZE SEED LR2808" },
                              { image: "/images/54.png", caption: "LANCER SEED KISAN KA ITMAD" },


     
    ],
  },
  "eastern-high-school": {
    title: "Eastern High School",
    description: "Promotional graphics, admissions campaign carousels, and student engagement visual content.",
    designs: [
      { image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1", caption: "Admissions Open Campaign Post" },
    ],
  },
  "fashion-bank": {
    title: "Fashion Bank",
    description: "Customized uniform collections, promotional graphics, and commercial apparel marketing assets.",
    designs: [
      { image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8", caption: "Custom Uniform Collection Showcase" },
    ],
  },
};

export default function ProjectGalleryPage() {
  const params = useParams();
  const slug = params?.slug;
  const project = projectDetails[slug];

  const [modalImage, setModalImage] = useState(null);
  const [cardIndices, setCardIndices] = useState({});
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

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
    <div
      className={`min-h-screen bg-cover bg-center transition-all duration-500 ${darkMode ? "dark" : ""}`}
      style={{
        backgroundImage: darkMode
          ? "url('/images/bg-dark.png')"
          : "url('/images/bg-light.png')",
      }}
    >
      <div className={`min-h-screen ${darkMode ? "bg-black/70 text-white" : "bg-white/80 text-black"} pt-24 pb-20 px-6 md:px-16 relative`}>
        
        {/* Navbar */}
        <nav
          className={`flex items-center justify-between px-4 sm:px-6 md:px-16 py-3 md:py-2 backdrop-blur-md shadow-sm fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
            darkMode ? "bg-black/40 text-white" : "bg-white/60 text-black"
          }`}
        >
          <Link href="/#home">
            <img src="/images/logo1.png" alt="Logo" className="h-12 w-auto cursor-pointer" />
          </Link>

          <div className="flex-1"></div>

          <div className="flex items-center gap-6 font-bold">
            <button onClick={() => setDarkMode(!darkMode)} className="text-xl cursor-pointer">
              {darkMode ? "☀️" : "🌙"}
            </button>

            <button className="md:hidden text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? "✖" : "☰"}
            </button>

            <ul className="hidden md:flex text-sm gap-8">
              <li><Link href="/#home" className="hover:text-purple-600 transition-colors">Home</Link></li>
              <li><Link href="/#about" className="hover:text-purple-600 transition-colors">About</Link></li>
              <li><Link href="/#skills" className="hover:text-purple-600 transition-colors">Skills</Link></li>
              <li><Link href="/#projects" className="hover:text-purple-600 transition-colors">Projects</Link></li>
              <li><Link href="/#experience" className="hover:text-purple-600 transition-colors">Experience</Link></li>
            </ul>

            <Link
              href="/#contact"
              className="hidden md:block bg-purple-600 px-4 py-2 rounded-full text-sm hover:bg-purple-700 text-white shadow-[0_0_15px_rgba(168,85,247,0.7)] transition-all duration-300 cursor-pointer text-center"
            >
              Contact Us
            </Link>
          </div>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className={`md:hidden fixed inset-0 z-50 flex flex-col ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
            <div className="flex items-center justify-between px-6 py-4">
              <Link href="/#home" onClick={() => setMenuOpen(false)}>
                <img src="/images/logo1.png" alt="Logo" className="h-12 w-auto" />
              </Link>

              <div className="flex items-center gap-4 z-20">
                <button onClick={() => setDarkMode(!darkMode)} className="text-xl cursor-pointer">
                  {darkMode ? "☀️" : "🌙"}
                </button>
                <button className="text-2xl cursor-pointer" onClick={() => setMenuOpen(false)}>✖</button>
              </div>
            </div>

            <ul className="flex flex-col flex-1 justify-center items-center gap-6 text-lg font-bold text-center">
              <li><Link href="/#home" onClick={() => setMenuOpen(false)}>Home</Link></li>
              <li><Link href="/#about" onClick={() => setMenuOpen(false)}>About</Link></li>
              <li><Link href="/#skills" onClick={() => setMenuOpen(false)}>Skills</Link></li>
              <li><Link href="/#projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
              <li><Link href="/#experience" onClick={() => setMenuOpen(false)}>Experience</Link></li>
              <li className="pt-4">
                <Link href="/#contact" onClick={() => setMenuOpen(false)} className="bg-purple-600 px-6 py-2.5 rounded-full text-sm text-white shadow-[0_0_15px_rgba(168,85,247,0.7)]">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}

        {/* Back Link to Projects Section */}
        <Link href="/#projects" className="text-purple-400 hover:underline mb-6 inline-block font-semibold">
          &larr; Back to Projects
        </Link>

        {/* Main Text Centered */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
          <p className={`${darkMode ? "text-gray-300" : "text-gray-700"} text-base md:text-lg`}>{project.description}</p>
        </div>

        {/* Gallery Grid */}
        <h2 className="text-2xl font-semibold mb-6 text-purple-400 text-center">Project Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.designs.map((item, idx) => {
            const isCarousel = item.images && item.images.length > 0;
            const currentSlide = cardIndices[idx] || 0;
            const displayImage = isCarousel ? item.images[currentSlide] : item.image;

            return (
              <div key={idx} className={`rounded-xl overflow-hidden border ${darkMode ? "border-purple-900/50 bg-[#12052b]" : "border-purple-300 bg-white shadow-md"} flex flex-col relative`}>
                <div 
                  className="overflow-hidden h-72 relative cursor-pointer group" 
                  onClick={() => setModalImage(displayImage)}
                >
                  <img 
                    src={displayImage} 
                    alt={item.caption} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300" 
                  />

                  {isCarousel && item.images.length > 1 && (
                    <>
                      <button 
                        onClick={(e) => prevCardSlide(idx, item.images.length, e)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100 transition z-10 cursor-pointer"
                      >
                        &#10094;
                      </button>
                      <button 
                        onClick={(e) => nextCardSlide(idx, item.images.length, e)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100 transition z-10 cursor-pointer"
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

                <div className={`p-4 text-center ${darkMode ? "bg-black/40 text-gray-200" : "bg-gray-100 text-gray-800"} flex-1 flex items-center justify-center`}>
                  <p className="text-sm font-medium">{item.caption}</p>
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
                className="absolute top-4 right-4 text-white text-3xl font-bold bg-purple-600 w-10 h-10 rounded-full flex items-center justify-center hover:bg-purple-700 z-50 cursor-pointer"
                onClick={() => setModalImage(null)}
              >
                &times;
              </button>
              <img src={modalImage} alt="Fullscreen preview" className="max-h-[85vh] max-w-full object-contain rounded-lg border border-purple-500/50" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}