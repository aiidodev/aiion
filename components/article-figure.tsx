export function ArticleFigure({ seed, label }: { seed: number; label: string }) {
  const kind = seed % 5;
  const bars = Array.from({ length: 8 }, (_, index) => 48 + ((seed * 13 + index * 37) % 210));
  const nodes = Array.from({ length: 6 }, (_, index) => ({
    x: 160 + ((seed * 19 + index * 150) % 860),
    y: 120 + ((seed * 23 + index * 90) % 380),
  }));

  return (
    <svg className="article-figure" viewBox="0 0 1200 675" role="img" aria-label={label}>
      <rect width="1200" height="675" fill="#101012" />
      <g stroke="#2c2b28" strokeWidth="1" fill="none">
        {Array.from({ length: 8 }, (_, index) => (
          <line key={`v${index}`} x1={80 + index * 140} y1="48" x2={80 + index * 140} y2="620" />
        ))}
        {Array.from({ length: 5 }, (_, index) => (
          <line key={`h${index}`} x1="48" y1={70 + index * 130} x2="1152" y2={70 + index * 130} />
        ))}
      </g>
      {kind === 0
        ? bars.map((height, index) => (
            <rect
              key={index}
              x={120 + index * 120}
              y={560 - height}
              width="64"
              height={height}
              fill={index === seed % 8 ? "#f4f1ea" : "none"}
              stroke="#f4f1ea"
            />
          ))
        : null}
      {kind === 1 ? (
        <g fill="none" stroke="#f4f1ea" strokeWidth="1.4">
          {nodes.slice(1).map((node) => (
            <line key={node.x} x1={nodes[0].x} y1={nodes[0].y} x2={node.x} y2={node.y} />
          ))}
          {nodes.map((node) => (
            <circle key={`${node.x}-${node.y}`} cx={node.x} cy={node.y} r={indexRadius(seed, node.x)} fill="#101012" />
          ))}
        </g>
      ) : null}
      {kind === 2
        ? [0, 1, 2, 3].map((layer) => (
            <rect
              key={layer}
              x={180 + layer * 28}
              y={150 + layer * 90}
              width={840 - layer * 56}
              height="70"
              fill={layer === seed % 4 ? "#f4f1ea" : "none"}
              stroke="#f4f1ea"
            />
          ))
        : null}
      {kind === 3 ? (
        <g fill="none" stroke="#f4f1ea" strokeWidth="1.4">
          <rect x="340" y="90" width="520" height="490" />
          {Array.from({ length: 9 }, (_, index) => (
            <line key={index} x1="390" y1={160 + index * 42} x2={780 - ((seed + index) % 4) * 40} y2={160 + index * 42} />
          ))}
        </g>
      ) : null}
      {kind === 4 ? (
        <g fill="none" stroke="#f4f1ea" strokeWidth="1.4">
          {[70, 130, 190, 250].map((radius, index) => (
            <circle key={radius} cx="600" cy="340" r={radius} strokeDasharray={index === seed % 4 ? "0" : "8 10"} />
          ))}
          <circle cx="600" cy="340" r="8" fill="#f4f1ea" stroke="none" />
        </g>
      ) : null}
      <text x="64" y="56" fill="#f4f1ea" fontSize="18" fontFamily="ui-sans-serif, sans-serif" letterSpacing="3">
        {label.toUpperCase()}
      </text>
    </svg>
  );
}

function indexRadius(seed: number, x: number) {
  return 10 + ((seed + x) % 14);
}
