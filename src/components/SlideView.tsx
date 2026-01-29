import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, X, MapPin, Info } from "lucide-react";
import type { Destination } from "../data/destinations";

interface SlideViewProps {
    destination: Destination;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
    language: "en" | "pt";
}

export const SlideView: React.FC<SlideViewProps> = ({
    destination,
    onClose,
    onNext,
    onPrev,
    language,
}) => {
    const content = destination[language];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 text-white"
        >
            {/* Background Image with Blur/Gradient */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.img
                    key={destination.id}
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.6 }}
                    transition={{ duration: 0.8 }}
                    src={destination.image}
                    alt={content.name}
                    className="h-full w-full object-cover blur-sm brightness-50"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1600&q=80"; // Fallback generic travel image
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 grid h-full w-full max-w-7xl grid-cols-1 gap-4 overflow-y-auto p-4 md:grid-cols-2 md:gap-8 md:overflow-visible md:p-12">
                {/* Left Column: Image & Title */}
                <div className="flex flex-col justify-center space-y-6">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-2"
                    >
                        <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
                            {content.name}
                        </h1>
                        <p className="text-xl font-light text-gray-300 md:text-2xl">
                            {content.subtitle}
                        </p>
                    </motion.div>

                    {/* Featured Image Logic could go here, or just keep it simple with text focus */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="aspect-video w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/20"
                    >
                        <img
                            src={destination.image}
                            alt={content.name}
                            className="h-full w-full object-cover"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1600&q=80";
                            }}
                        />
                    </motion.div>
                </div>

                {/* Right Column: Details & Stats */}
                <div className="flex flex-col justify-center space-y-8">
                    <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-6 rounded-3xl bg-white/10 p-8 backdrop-blur-md"
                    >
                        <div>
                            <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-blue-300">
                                <Info size={20} /> {language === "en" ? "Overview" : "Visão Geral"}
                            </h3>
                            <p className="leading-relaxed text-gray-200">
                                {content.overview}
                            </p>
                        </div>

                        <div>
                            <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-emerald-300">
                                <MapPin size={20} /> {language === "en" ? "Why Visit" : "Por que visitar"}
                            </h3>
                            <ul className="space-y-2">
                                {content.whyVisit.map((reason, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-gray-300">
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                                        {reason}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                            {content.metrics.map((metric, idx) => (
                                <div key={idx}>
                                    <p className="text-xs uppercase tracking-wider text-gray-400">
                                        {metric.label}
                                    </p>
                                    <p className="font-medium text-white">{metric.value}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Navigation Controls */}
            <div className="absolute top-6 right-6 z-50">
                <button
                    onClick={onClose}
                    className="rounded-full bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white/20"
                >
                    <X size={24} />
                </button>
            </div>

            <div className="absolute inset-x-0 bottom-6 z-50 flex justify-center gap-4 md:bottom-12">
                <button
                    onClick={onPrev}
                    className="group flex items-center gap-2 rounded-full px-6 py-3 font-medium text-white transition hover:bg-white/10"
                >
                    <ArrowLeft size={20} className="transition group-hover:-translate-x-1" />
                    {language === "en" ? "Prev" : "Ant."}
                </button>
                <span className="flex items-center text-sm tracking-widest text-gray-500">
                    {language === "en" ? "SWIPE OR USE ARROWS" : "DESLIZE OU USE SETAS"}
                </span>
                <button
                    onClick={onNext}
                    className="group flex items-center gap-2 rounded-full px-6 py-3 font-medium text-white transition hover:bg-white/10"
                >
                    {language === "en" ? "Next" : "Prox."}
                    <ArrowRight size={20} className="transition group-hover:translate-x-1" />
                </button>
            </div>
        </motion.div>
    );
};
