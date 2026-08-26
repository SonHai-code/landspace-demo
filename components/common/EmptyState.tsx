export function EmptyState() {
  return (
    <div className="border-y border-ink/15 py-20 text-center">
      <p className="display text-4xl">No hotels found.</p>
      <p className="mt-3 text-sm text-muted">
        Try searching with another keyword.
      </p>
    </div>
  );
}
