type BrandMarkProps = {
  className?: string;
};

// Inline so the colours follow the site's theme toggle, not only the system setting.
export function BrandMark({ className }: BrandMarkProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <g transform="translate(-2 2)">
        <path
          className="brand-mark__body"
          d="M8 52V12h12v8h8v8h8v-8h8v8h12v24H44V32h-8v8h-8v-8h-8v20Z"
        />
        <path className="brand-mark__block" d="M48 8h12v12H48Z" />
      </g>
    </svg>
  );
}
