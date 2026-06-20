"use client";
import { useState } from "react";
import {
  UtensilsCrossed,
  Fish,
  IceCream,
  Clock,
  Pizza,
  Beef,
  Store,
} from "lucide-react";

const categories = [
  { id: "buffet",      label: "Buffet",       Icon: UtensilsCrossed },
  { id: "sushi",       label: "Sushi",        Icon: Fish },
  { id: "sobremesas",  label: "Sobremesas",   Icon: IceCream },
  { id: "horario",     label: "Horário",      Icon: Clock },
  { id: "pizzas",      label: "Pizzas Doces", Icon: Pizza },
  { id: "carnes",      label: "Carnes",       Icon: Beef },
  { id: "ambiente",    label: "Ambiente",     Icon: Store },
];

interface Props {
  onSelect?: (id: string) => void;
}

export default function CategoryButtons({ onSelect }: Props) {
  const [active, setActive] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setActive(id);
    onSelect?.(id);
  };

  return (
    <div className="flex gap-4 flex-wrap justify-center">
      {categories.map(({ id, label, Icon }) => (
        <button
          key={id}
          aria-label={`Ver ${label}`}
          className={`cat-btn${active === id ? " active" : ""}`}
          onClick={() => handleClick(id)}
        >
          <span className="cat-btn-circle">
            <Icon />
          </span>
          <span className="cat-btn-label">{label}</span>
        </button>
      ))}
    </div>
  );
}
