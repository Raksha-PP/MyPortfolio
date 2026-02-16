import React, { useEffect, useRef } from "react";
import { BookOpen, ExternalLink } from "lucide-react";

const Publications = () => {
  const publicationsRef = useRef<HTMLDivElement>(null);

  const publications = [
    {
      title:
        "Optimizing Gas Costs in a Decentralized Voting System: A Smart Contract Approach",
      conference: "ICSSES-2025, Siddaganga Institute of Technology",
      year: "2025",
      link: "https://ieeexplore.ieee.org/document/11009257",
    },
    {
      title:
        "Blockchain - Enabled Hybrid Approach for Reliable Detection and Privacy Preservation of PII",
      conference: "ICECIT-2025, Siddaganga Institute of Technology",
      year: "2025",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      });
    });

    const elements =
      publicationsRef.current?.querySelectorAll(".publication-card");

    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="publications" className="py-20 bg-dark-300">
      <div className="section-container" ref={publicationsRef}>
        <h2 className="section-title">Publications</h2>
        <p className="section-subtitle">
          Research contributions presented at national conferences
        </p>

        <div className="max-w-4xl mx-auto grid gap-6">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="publication-card opacity-0 glass-card p-6 flex items-start space-x-4"
            >
              <div className="h-12 w-12 bg-orange-500/10 rounded-lg flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-orange-500" />
              </div>

              <div className="flex-1">
                <h3 className="font-bold text-lg">{pub.title}</h3>

                <p className="text-muted-foreground text-sm mt-1">
                  Presented at {pub.conference}
                </p>

                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xs px-3 py-1 bg-dark-100 rounded-full border border-orange-500/10">
                    {pub.year}
                  </span>

                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-orange-500"
                    >
                      View Paper
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;

