import React, { useEffect, useRef } from "react";
import { BookOpen, ExternalLink } from "lucide-react";

interface Publication {
  title: string;
  conference: string;
  year: string;
  link?: string;
}

const Publications = () => {
  const publicationsRef = useRef<HTMLDivElement>(null);

  const publications: Publication[] = [
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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const childElements =
      publicationsRef.current?.querySelectorAll(".publication-card");

    childElements?.forEach((el) => observer.observe(el));

    return () => {
      childElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="publications" className="py-20 bg-dark-300">
      <div className="section-container" ref={publicationsRef}>
        <h2 className="section-title">Publications</h2>
        <p className="section-subtitle">
          Research contributions presented at national conferences
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {publications.map((pub, index) => (
              <div
                key={pub.title}
                className="publication-card opacity-0 glass-card p-6 flex items-start space-x-4 card-hover"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="h-12 w-12 bg-orange-500/10 rounded-lg flex-shrink-0 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-orange-500" />
                </div>

                <div className="flex-1">
                  <h3 className="font-bold text-lg">{pub.title}</h3>

                  <p className="text-muted-foreground text-sm mt-1 mb-2">
                    Presented at {pub.conference}
                  </p>

                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <span className="text-xs px-3 py-1 bg-dark-100 rounded-full border border-orange-500/10">
                      {pub.year}
                    </span>

                    {pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-orange-500 hover:text-orange-400 transition"
                      >
                        View on IEEE Xplore
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 glass-card p-6 text-center publication-card opacity-0">
            <p className="text-muted-foreground">
              My research focuses on Blockchain, Smart Contracts, Gas
              Optimization, and Privacy-Preserving Systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;

