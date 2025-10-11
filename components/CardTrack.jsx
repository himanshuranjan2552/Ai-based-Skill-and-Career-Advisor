"use client";
import { useEffect, useRef, useState } from "react";
import card01 from "@/assets/card-01.webp";
import card02 from "@/assets/card-02.jpg";
import card03 from "@/assets/card-03.jpg";
import card04 from "@/assets/card-04.jpg";
import card05 from "@/assets/card-05.jpg";
import card06 from "@/assets/card-06.jpg";
import card07 from "@/assets/card-07.jpg";
import card08 from "@/assets/card-08.jpg";
import card09 from "@/assets/card-09.jpg";
import card10 from "@/assets/card-10.jpg";

const cardData = [
  {
    id: 1,
    src: card01,
    alt: "Portrait — Doctor",
    title: "Medical Doctor",
    description:
      "Diagnose and treat patients, perform surgeries, and provide healthcare services",
    salary: "₹24,04,800+",
  },
  {
    id: 2,
    src: card02,
    alt: "Portrait — Businessman",
    title: "Business Executive",
    description:
      "Lead organizations, develop strategies, and drive business growth",
    salary: "₹18,03,600+",
  },
  {
    id: 3,
    src: card03,
    alt: "Portrait — Engineer",
    title: "Software Engineer",
    description:
      "Design and develop software applications, websites, and systems",
    salary: "₹14,42,880+",
  },
  {
    id: 4,
    src: card04,
    alt: "Portrait — Lawyer",
    title: "Legal Counsel",
    description:
      "Provide legal advice, represent clients, and handle legal proceedings",
    salary: "₹21,64,320+",
  },
  {
    id: 5,
    src: card05,
    alt: "Portrait — Businesswoman",
    title: "Marketing Director",
    description:
      "Develop marketing strategies, manage campaigns, and grow brand presence",
    salary: "₹15,63,120+",
  },
  {
    id: 6,
    src: card06,
    alt: "Portrait — Architect",
    title: "Architect",
    description:
      "Design buildings and structures, create blueprints, and oversee construction",
    salary: "₹13,22,640+",
  },
  {
    id: 7,
    src: card07,
    alt: "Portrait — Teacher",
    title: "Education Leader",
    description:
      "Teach students, develop curricula, and shape future generations",
    salary: "₹8,41,680+",
  },
  {
    id: 8,
    src: card08,
    alt: "Portrait — Scientist",
    title: "Research Scientist",
    description:
      "Conduct research, analyze data, and make scientific discoveries",
    salary: "₹11,42,280+",
  },
  {
    id: 9,
    src: card09,
    alt: "Portrait — Marketing Manager",
    title: "Digital Marketing Manager",
    description:
      "Manage online campaigns, analyze metrics, and optimize digital presence",
    salary: "₹10,22,040+",
  },
  {
    id: 10,
    src: card10,
    alt: "Portrait — Consultant",
    title: "Business Consultant",
    description:
      "Advise companies, solve problems, and improve business processes",
    salary: "₹16,83,360+",
  },
];

function CardTrack() {
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [focusedCard, setFocusedCard] = useState(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateCardLayout = () => {
      const visibleCards = getVisibleCardsForWidth();
      const cardWidth = 100 / visibleCards;

      // Remove existing clones
      const clones = container.querySelectorAll(".card-clone");
      clones.forEach((clone) => clone.remove());

      // Set card widths
      const allCards = container.querySelectorAll(".card:not(.card-clone)");
      allCards.forEach((card) => {
        card.style.width = `${cardWidth}%`;
      });

      // Add clones for seamless loop
      for (let i = 0; i < visibleCards; i++) {
        const originalCard = allCards[i];
        if (originalCard) {
          const clone = originalCard.cloneNode(true);
          clone.classList.add("card-clone");
          clone.style.width = `${cardWidth}%`;
          container.appendChild(clone);
        }
      }
    };

    updateCardLayout();
    window.addEventListener("resize", updateCardLayout);

    return () => window.removeEventListener("resize", updateCardLayout);
  }, []);

  function getVisibleCardsForWidth() {
    if (typeof window === "undefined") return 8;
    if (window.innerWidth >= 1200) return 8;
    if (window.innerWidth >= 768) return 5;
    return 2;
  }

  function handleCardHover(cardId, isHover) {
    const container = containerRef.current;
    if (!container) return;

    if (isHover) {
      setIsPaused(true);
      setFocusedCard(cardId);
      container.classList.add("paused");
    } else {
      setIsPaused(false);
      setFocusedCard(null);
      container.classList.remove("paused");
    }
  }

  function handleCardFocus(cardId) {
    const container = containerRef.current;
    if (!container) return;

    setIsPaused(true);
    setFocusedCard(cardId);
    container.classList.add("paused");
  }

  function handleCardBlur() {
    const container = containerRef.current;
    if (!container) return;

    setIsPaused(false);
    setFocusedCard(null);
    container.classList.remove("paused");
  }

  function handleKeyDown(e) {
    if (e.key === "Escape") {
      handleCardBlur();
    }
  }

  return (
    <div className="card-track w-full h-64 sm:h-80 lg:h-96">
      <div
        ref={containerRef}
        className="card-track-container h-full"
        onKeyDown={handleKeyDown}
      >
        {cardData.map((card) => (
          <div
            key={card.id}
            className={`card h-full relative ${
              focusedCard === card.id ? "focused" : ""
            }`}
            tabIndex={0}
            role="button"
            aria-label={card.alt}
            aria-pressed={focusedCard === card.id}
            onMouseEnter={() => handleCardHover(card.id, true)}
            onMouseLeave={() => handleCardHover(card.id, false)}
            onFocus={() => handleCardFocus(card.id)}
            onBlur={handleCardBlur}
          >
            <img
              src={card.src}
              alt={card.alt}
              loading="eager"
              className="w-full h-full object-cover"
            />

            {/* Career Details Overlay */}
            <div className="card-overlay absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 transition-opacity duration-300 flex flex-col justify-end p-6">
              <div className="text-white">
                <h3 className="text-xl font-bold font-poppins mb-2">
                  {card.title}
                </h3>
                <p className="text-sm font-poppins mb-3 leading-relaxed">
                  {card.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-green-400 font-semibold font-poppins">
                    {card.salary}
                  </span>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full font-poppins">
                    Learn More
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardTrack;
