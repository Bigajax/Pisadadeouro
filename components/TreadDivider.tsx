/**
 * Assinatura visual: friso de solado de tênis em dourado.
 * Padrão de "garras" de sola repetido — usado com moderação
 * como divisor entre blocos-chave.
 */
export default function TreadDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden ${className}`} aria-hidden>
      <svg width="100%" height="14" preserveAspectRatio="none" className="block">
        <defs>
          <pattern id="tread" width="46" height="14" patternUnits="userSpaceOnUse">
            <rect x="2" y="4" width="16" height="6" rx="3" fill="#d4af37" opacity="0.5" />
            <rect x="24" y="1" width="9" height="5" rx="2.5" fill="#d4af37" opacity="0.3" />
            <rect x="24" y="8" width="9" height="5" rx="2.5" fill="#d4af37" opacity="0.3" />
            <rect x="38" y="4" width="4" height="6" rx="2" fill="#d4af37" opacity="0.45" />
          </pattern>
        </defs>
        <rect width="100%" height="14" fill="url(#tread)" />
      </svg>
    </div>
  );
}
