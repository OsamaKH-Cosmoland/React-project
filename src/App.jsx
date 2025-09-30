import { useState, useMemo } from "react";

const initial = [
  { id: 1, name: "Apple", price: 12 },
  { id: 2, name: "Banana", price: 8 },
  { id: 3, name: "Cherry", price: 15 },
];

export default function App() {
  const [minPrice, setMinPrice] = useState(0);

  // Functional style: map/filter/reduce, no mutations
  const filtered = useMemo(
    () => initial.filter(item => item.price >= Number(minPrice || 0)),
    [minPrice]
  );

  const total = useMemo(
    () => filtered.reduce((sum, item) => sum + item.price, 0),
    [filtered]
  );

  return (
    <main style={{ fontFamily: "system-ui", padding: 24 }}>
      <h1>Fruit Shop</h1>
      <label>
        Min price:{" "}
        <input
          value={minPrice}
          onChange={e => setMinPrice(e.target.value)}
          placeholder="0"
        />
      </label>

      <ul>
        {filtered.map(item => (
          <li key={item.id}>
            {item.name} — ${item.price}
          </li>
        ))}
      </ul>

      <p>Total: ${total}</p>
      <small>
        Built with functional ideas: pure calculations from state, immutability,
        and composition.
      </small>
    </main>
  );
}
