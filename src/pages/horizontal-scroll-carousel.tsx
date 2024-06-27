import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from 'react';

export const HorizontalScrollCarousel: React.FC = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-60%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  )
}


const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

const cards = [
  {
    url: "https://placehold.co/400",
    title: "Title 1",
    id: 1,
  },
  {
    url: "https://placehold.co/400",
    title: "Title 2",
    id: 2,
  },
  {
    url: "https://placehold.co/400",
    title: "Title 3",
    id: 3,
  },
  {
    url: "https://placehold.co/400",
    title: "Title 4",
    id: 4,
  },
  {
    url: "https://placehold.co/400",
    title: "Title 5",
    id: 5,
  },
  {
    url: "https://placehold.co/400",
    title: "Title 6",
    id: 6,
  },
  {
    url: "https://placehold.co/400",
    title: "Title 7",
    id: 7,
  },
  {
    url: "https://placehold.co/400",
    title: "Title 8",
    id: 8,
  },
  {
    url: "https://placehold.co/400",
    title: "Title 9",
    id: 9,
  },
  {
    url: "https://placehold.co/400",
    title: "Title 10",
    id: 10,
  },
];