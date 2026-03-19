// ADA: Decorative SVG illustration with aria-hidden="true". Not informational content.

export function BellTowerSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 600"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        {/* Dusk sky gradient */}
        <linearGradient id="skyGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1B2A4A" />
          <stop offset="35%" stopColor="#2E3F6B" />
          <stop offset="55%" stopColor="#7A4A3A" />
          <stop offset="75%" stopColor="#C65D3E" />
          <stop offset="90%" stopColor="#D4944A" />
          <stop offset="100%" stopColor="#C9A84C" />
        </linearGradient>

        {/* Tower body gradient — warm gold to ivory */}
        <linearGradient id="towerGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#A88636" />
          <stop offset="30%" stopColor="#C9A84C" />
          <stop offset="70%" stopColor="#D4BA6A" />
          <stop offset="100%" stopColor="#B8963A" />
        </linearGradient>

        {/* Shadow side of tower */}
        <linearGradient id="towerShadow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1B2A4A" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#1B2A4A" stopOpacity="0" />
        </linearGradient>

        {/* Spire gradient */}
        <linearGradient id="spireGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FAF5E9" />
          <stop offset="40%" stopColor="#C9A84C" />
          <stop offset="100%" stopColor="#B8963A" />
        </linearGradient>

        {/* Glow behind tower */}
        <radialGradient id="sunGlow" cx="0.5" cy="0.72" r="0.3">
          <stop offset="0%" stopColor="#D4944A" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#C65D3E" stopOpacity="0" />
        </radialGradient>

        {/* Stars twinkle filter */}
        <filter id="starGlow">
          <feGaussianBlur stdDeviation="0.8" />
        </filter>
      </defs>

      {/* Sky background */}
      <rect width="400" height="600" fill="url(#skyGradient)" />

      {/* Sun glow behind tower */}
      <rect width="400" height="600" fill="url(#sunGlow)" />

      {/* Stars in the upper sky */}
      <g filter="url(#starGlow)" fill="#FAF5E9" opacity="0.6">
        <circle cx="45" cy="35" r="1" />
        <circle cx="120" cy="60" r="0.8" />
        <circle cx="310" cy="25" r="1.2" />
        <circle cx="355" cy="70" r="0.7" />
        <circle cx="80" cy="100" r="0.9" />
        <circle cx="280" cy="90" r="1" />
        <circle cx="160" cy="40" r="0.6" />
        <circle cx="370" cy="130" r="0.8" />
        <circle cx="30" cy="150" r="0.7" />
        <circle cx="340" cy="160" r="0.9" />
      </g>

      {/* Distant treeline silhouette — far background */}
      <path
        d="M0,520 Q20,505 40,512 Q55,500 70,510 Q85,498 100,508 Q115,495 130,505 Q145,492 165,502 Q180,490 200,498 Q215,488 235,496 Q250,485 270,495 Q285,482 305,492 Q320,480 340,490 Q355,478 375,488 Q390,480 400,485 L400,600 L0,600 Z"
        fill="#0D1F16"
        opacity="0.7"
      />

      {/* Mid-ground treeline — closer, darker */}
      <path
        d="M0,540 Q15,528 30,535 Q45,522 55,530 Q65,520 80,528 Q95,518 110,526 Q125,516 140,524 Q150,515 165,522 Q175,512 185,520 L185,520
        Q195,530 200,525 Q210,515 220,522 Q230,512 245,520 Q255,510 270,518 Q280,508 295,516 Q305,506 320,514 Q330,504 345,512 Q355,502 370,510 Q380,500 395,508 L400,505 L400,600 L0,600 Z"
        fill="#0A1A10"
        opacity="0.85"
      />

      {/* Ground plane */}
      <rect x="0" y="545" width="400" height="55" fill="#081208" />

      {/* Tower base — main rectangular body */}
      <rect x="168" y="250" width="64" height="300" fill="url(#towerGradient)" />

      {/* Shadow overlay on left side of tower */}
      <rect x="168" y="250" width="20" height="300" fill="url(#towerShadow)" />

      {/* Tower base foundation — wider at bottom */}
      <path
        d="M160,540 L162,530 L238,530 L240,540 Z"
        fill="#A88636"
      />
      <rect x="162" y="530" width="76" height="20" fill="#B8963A" />

      {/* Brick texture lines on tower */}
      <g stroke="#B8963A" strokeWidth="0.5" opacity="0.3">
        {/* Horizontal mortar lines */}
        <line x1="168" y1="270" x2="232" y2="270" />
        <line x1="168" y1="285" x2="232" y2="285" />
        <line x1="168" y1="300" x2="232" y2="300" />
        <line x1="168" y1="315" x2="232" y2="315" />
        <line x1="168" y1="330" x2="232" y2="330" />
        <line x1="168" y1="345" x2="232" y2="345" />
        <line x1="168" y1="360" x2="232" y2="360" />
        <line x1="168" y1="375" x2="232" y2="375" />
        <line x1="168" y1="390" x2="232" y2="390" />
        <line x1="168" y1="405" x2="232" y2="405" />
        <line x1="168" y1="420" x2="232" y2="420" />
        <line x1="168" y1="435" x2="232" y2="435" />
        <line x1="168" y1="450" x2="232" y2="450" />
        <line x1="168" y1="465" x2="232" y2="465" />
        <line x1="168" y1="480" x2="232" y2="480" />
        <line x1="168" y1="495" x2="232" y2="495" />
        <line x1="168" y1="510" x2="232" y2="510" />
        <line x1="168" y1="525" x2="232" y2="525" />
      </g>

      {/* Upper narrowing section */}
      <path
        d="M168,250 L164,240 L172,220 L172,220 L228,220 L236,240 L232,250 Z"
        fill="#C9A84C"
      />

      {/* Upper tower section — narrower */}
      <rect x="172" y="160" width="56" height="60" fill="url(#towerGradient)" />

      {/* Transition cornice from narrow to main */}
      <path
        d="M166,220 L172,220 L172,218 L228,218 L228,220 L234,220 L236,224 L164,224 Z"
        fill="#D4BA6A"
      />

      {/* Bell opening — large arched window near top */}
      <path
        d="M183,170 L183,200 L217,200 L217,170 Q217,155 200,155 Q183,155 183,170 Z"
        fill="#1B2A4A"
        opacity="0.9"
      />
      {/* Bell arch highlight */}
      <path
        d="M185,170 L185,198 L215,198 L215,170 Q215,157 200,157 Q185,157 185,170 Z"
        fill="none"
        stroke="#D4BA6A"
        strokeWidth="1.5"
      />

      {/* Bell inside the opening */}
      <path
        d="M194,172 Q194,167 200,167 Q206,167 206,172 L208,182 Q208,185 200,185 Q192,185 192,182 Z"
        fill="#C9A84C"
        opacity="0.8"
      />
      {/* Bell clapper */}
      <line x1="200" y1="180" x2="200" y2="188" stroke="#B8963A" strokeWidth="1.5" />
      <circle cx="200" cy="189" r="1.5" fill="#B8963A" />

      {/* Second tier narrowing */}
      <path
        d="M172,160 L170,155 L176,145 L224,145 L230,155 L228,160 Z"
        fill="#C9A84C"
      />

      {/* Cornice detail at second transition */}
      <rect x="169" y="155" width="62" height="3" fill="#D4BA6A" />

      {/* Spire base section */}
      <rect x="180" y="110" width="40" height="35" fill="url(#towerGradient)" />

      {/* Small arched windows on spire base */}
      <path
        d="M190,120 L190,135 L198,135 L198,120 Q198,114 194,114 Q190,114 190,120 Z"
        fill="#1B2A4A"
        opacity="0.7"
      />
      <path
        d="M202,120 L202,135 L210,135 L210,120 Q210,114 206,114 Q202,114 202,120 Z"
        fill="#1B2A4A"
        opacity="0.7"
      />

      {/* Spire transition */}
      <path
        d="M178,110 L180,110 L180,108 L220,108 L220,110 L222,110 L224,114 L176,114 Z"
        fill="#D4BA6A"
      />

      {/* Main spire — pointed top */}
      <path
        d="M188,108 L200,40 L212,108 Z"
        fill="url(#spireGradient)"
      />

      {/* Spire edge highlights */}
      <line x1="200" y1="40" x2="188" y2="108" stroke="#FAF5E9" strokeWidth="0.5" opacity="0.4" />
      <line x1="200" y1="40" x2="212" y2="108" stroke="#1B2A4A" strokeWidth="0.5" opacity="0.2" />

      {/* Spire finial / cross at very top */}
      <line x1="200" y1="28" x2="200" y2="42" stroke="#FAF5E9" strokeWidth="1.5" />
      <line x1="195" y1="34" x2="205" y2="34" stroke="#FAF5E9" strokeWidth="1.5" />
      <circle cx="200" cy="27" r="2" fill="#FAF5E9" />

      {/* Lower arched windows on main tower body */}
      <g fill="#1B2A4A" opacity="0.6">
        {/* Row 1 */}
        <path d="M190,265 L190,280 L198,280 L198,265 Q198,259 194,259 Q190,259 190,265 Z" />
        <path d="M202,265 L202,280 L210,280 L210,265 Q210,259 206,259 Q202,259 202,265 Z" />
        {/* Row 2 */}
        <path d="M190,310 L190,325 L198,325 L198,310 Q198,304 194,304 Q190,304 190,310 Z" />
        <path d="M202,310 L202,325 L210,325 L210,310 Q210,304 206,304 Q202,304 202,310 Z" />
        {/* Row 3 */}
        <path d="M190,355 L190,370 L198,370 L198,355 Q198,349 194,349 Q190,349 190,355 Z" />
        <path d="M202,355 L202,370 L210,370 L210,355 Q210,349 206,349 Q202,349 202,355 Z" />
        {/* Row 4 */}
        <path d="M190,400 L190,415 L198,415 L198,400 Q198,394 194,394 Q190,394 190,400 Z" />
        <path d="M202,400 L202,415 L210,415 L210,400 Q210,394 206,394 Q202,394 202,400 Z" />
        {/* Row 5 — larger bottom windows */}
        <path d="M188,455 L188,475 L199,475 L199,455 Q199,447 193.5,447 Q188,447 188,455 Z" />
        <path d="M201,455 L201,475 L212,475 L212,455 Q212,447 206.5,447 Q201,447 201,455 Z" />
      </g>

      {/* Window sill details */}
      <g fill="#D4BA6A" opacity="0.4">
        <rect x="188" y="280" width="12" height="1.5" />
        <rect x="200" y="280" width="12" height="1.5" />
        <rect x="188" y="325" width="12" height="1.5" />
        <rect x="200" y="325" width="12" height="1.5" />
        <rect x="188" y="370" width="12" height="1.5" />
        <rect x="200" y="370" width="12" height="1.5" />
        <rect x="188" y="415" width="12" height="1.5" />
        <rect x="200" y="415" width="12" height="1.5" />
        <rect x="186" y="475" width="14" height="1.5" />
        <rect x="200" y="475" width="14" height="1.5" />
      </g>

      {/* Warm light glow from bell opening */}
      <ellipse cx="200" cy="180" rx="12" ry="8" fill="#D4944A" opacity="0.15" />

      {/* Foreground ground details — grass silhouette */}
      <path
        d="M0,555 Q5,548 10,555 Q15,545 20,555 Q25,547 30,555 Q35,546 40,555 Q45,548 50,555 Q55,546 60,555 Q65,548 70,555 Q75,547 80,555 Q85,546 90,555 Q95,548 100,555 Q105,547 110,555 Q115,546 120,555 Q125,548 130,555 Q135,546 140,555 Q145,548 150,555 Q155,547 160,555 L160,600 L0,600 Z"
        fill="#050D05"
      />
      <path
        d="M240,555 Q245,547 250,555 Q255,546 260,555 Q265,548 270,555 Q275,546 280,555 Q285,548 290,555 Q295,547 300,555 Q305,546 310,555 Q315,548 320,555 Q325,546 330,555 Q335,548 340,555 Q345,547 350,555 Q355,546 360,555 Q365,548 370,555 Q375,547 380,555 Q385,546 390,555 Q395,548 400,555 L400,600 L240,600 Z"
        fill="#050D05"
      />

      {/* Atmospheric haze at horizon */}
      <rect x="0" y="480" width="400" height="40" fill="#C65D3E" opacity="0.08" />
    </svg>
  );
}
