import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { WorldView } from "./components/WorldView";
import { SlideView } from "./components/SlideView";
import { destinations } from "./data/destinations";
import { Globe as GlobeIcon } from "lucide-react";

function App() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [language, setLanguage] = useState<"en" | "pt">("en");

  const activeDestination = destinations.find((d) => d.id === activeId);

  const handleNext = () => {
    const currentIndex = destinations.findIndex((d) => d.id === activeId);
    const nextIndex = (currentIndex + 1) % destinations.length;
    setActiveId(destinations[nextIndex].id);
  };

  const handlePrev = () => {
    const currentIndex = destinations.findIndex((d) => d.id === activeId);
    const prevIndex =
      (currentIndex - 1 + destinations.length) % destinations.length;
    setActiveId(destinations[prevIndex].id);
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "pt" : "en"));
  };

  return (
    <div className="relative h-[100dvh] w-full overflow-hidden bg-black text-white">
      {/* 3D Globe View - Always rendered in background */}
      <WorldView
        destinations={destinations}
        activeDestinationId={activeId}
        onSelect={(d) => setActiveId(d.id)}
        language={language}
      />

      {/* Language Toggle - Only show when no slide is active for cleaner look, or top left always */}
      <div className="absolute top-6 left-6 z-50">
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 font-medium text-white backdrop-blur transition hover:bg-white/20"
        >
          <GlobeIcon size={18} />
          <span className="uppercase tracking-widest text-xs md:text-sm">
            {language === "en" ? "English" : "Português"}
          </span>
        </button>
      </div>

      {/* Slide Overlay - Rendered when a destination is active */}
      <AnimatePresence>
        {activeDestination && (
          <SlideView
            key={activeDestination.id}
            destination={activeDestination}
            onClose={() => setActiveId(null)}
            onNext={handleNext}
            onPrev={handlePrev}
            language={language}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
