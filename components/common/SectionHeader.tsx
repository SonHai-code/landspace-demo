type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
};
export function SectionHeader({ eyebrow, title, description, light }: Props) {
  return (
    <div className={light ? "text-white" : ""}>
      <>
        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
        <h2 className="display text-5xl leading-[.95] sm:text-6xl">{title}</h2>
        {description && (
          <p
            className={`mt-5 max-w-md text-sm leading-6 ${light ? "text-white/70" : "text-muted"}`}
          >
            {description}
          </p>
        )}
      </>
    </div>
  );
}
