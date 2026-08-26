import Link from "next/link";

export function Footer() {
  return (
    <footer id="about" className="border-t border-ink/10 bg-[#e7e9e1] py-14">
      <div className="container-shell grid gap-10 sm:grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Link href="/" className="display text-3xl font-semibold">
            staywell<span className="text-coral">.</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-6 text-muted">
            A considered collection of places with a sense of place. Find
            somewhere that feels like yours.
          </p>
        </div>
        <div>
          <p className="eyebrow">Explore</p>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            <Link href="/hotels">All hotels</Link>
            <Link href="/">Our approach</Link>
          </div>
        </div>
        <div>
          <p className="eyebrow">Say hello</p>
          <p className="mt-4 text-sm text-muted">
            hello@staywell.place
            <br />
            Made for slow travel.
          </p>
        </div>
      </div>
      <div className="container-shell mt-14 border-t border-ink/10 pt-5 text-xs text-muted">
        © 2026 Staywell. Places worth staying.
      </div>
    </footer>
  );
}
