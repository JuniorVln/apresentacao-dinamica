import { useEffect, useRef, useState } from "react";
import Globe, { type GlobeMethods } from "react-globe.gl";
import type { Destination } from "../data/destinations";

interface WorldViewProps {
    destinations: Destination[];
    onSelect: (destination: Destination) => void;
    activeDestinationId: string | null;
    language: "en" | "pt";
}

export const WorldView: React.FC<WorldViewProps> = ({
    destinations,
    onSelect,
    activeDestinationId,
    language,
}) => {
    const globeRef = useRef<GlobeMethods | undefined>(undefined);
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    // Auto-rotate logic or fly-to logic
    useEffect(() => {
        if (globeRef.current) {
            // Initial setup for controls if needed
            globeRef.current.controls().autoRotate = true;
            globeRef.current.controls().autoRotateSpeed = 0.5;
        }
    }, []);

    useEffect(() => {
        // When active destination changes, fly to it
        if (activeDestinationId && globeRef.current) {
            const dest = destinations.find((d) => d.id === activeDestinationId);
            if (dest) {
                globeRef.current.pointOfView(
                    { lat: dest.coordinates.lat, lng: dest.coordinates.lng, altitude: 1.5 },
                    1500
                );
                globeRef.current.controls().autoRotate = false;
            }
        } else if (!activeDestinationId && globeRef.current) {
            // When zooming out / closing slides, go back to a worldview
            globeRef.current.pointOfView({ lat: 20, lng: 0, altitude: 2.5 }, 1500);
            globeRef.current.controls().autoRotate = true;
        }
    }, [activeDestinationId, destinations]);


    return (
        <div className="relative h-screen w-full bg-slate-950">
            <Globe
                ref={globeRef}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
                pointsData={destinations}
                pointLat={(d: object) => (d as Destination).coordinates.lat}
                pointLng={(d: object) => (d as Destination).coordinates.lng}
                pointColor={(d: object) => (d as Destination).id === hoveredId ? "#4ade80" : "#facc15"}
                pointAltitude={activeDestinationId ? 0 : 0.1} // Hide points when zoomed in? Or keep them
                pointRadius={(d: object) => (d as Destination).id === hoveredId ? 0.8 : 0.5}
                onPointHover={(d) => {
                    setHoveredId(d ? (d as Destination).id : null);
                    document.body.style.cursor = d ? 'pointer' : 'default';
                }}
                onPointClick={(d) => onSelect(d as Destination)}
                pointLabel={(d: object) => `
                <div style="background: rgba(0,0,0,0.8); color: white; padding: 4px 8px; border-radius: 4px; font-family: sans-serif;">
                    ${(d as Destination)[language].name}
                </div>
            `}
            />

            {!activeDestinationId && (
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center pointer-events-none">
                    <h1 className="text-4xl font-light text-white tracking-widest uppercase opacity-80">
                        {language === "en" ? "Explore The World" : "Explore o Mundo"}
                    </h1>
                    <p className="text-gray-400 mt-2 text-sm">
                        {language === "en" ? "Spin the globe & click a pin" : "Gire o globo e clique em um pino"}
                    </p>
                </div>
            )}
        </div>
    );
};
