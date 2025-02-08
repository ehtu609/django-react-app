export default function Products() {
    return <div>Products Component</div>;
  }
  
const products = [
    {
      id: 1,
      name: "Industrial Copper Wire",
      description: "High-quality copper wire for industrial applications.",
      image: "/products/copper-wire.jpg", // ✅ Correct local path
    },
    {
      id: 2,
      name: "Aluminum Conductors",
      description: "Durable aluminum conductors for high-power transmission.",
      image: "/products/aluminum-conductor.jpg",
    },
    {
      id: 3,
      name: "Stainless Steel Wire",
      description: "Corrosion-resistant stainless steel wire for all environments.",
      image: "/products/stainless-steel-wire.jpg",
    },
  ];
  