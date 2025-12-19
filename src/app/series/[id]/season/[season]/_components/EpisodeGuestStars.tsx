interface EpisodeGuestStarsProps {
  guestStars?: Array<{ name: string }>;
}

export function EpisodeGuestStars({ guestStars }: EpisodeGuestStarsProps) {
  if (!guestStars || guestStars.length === 0) return null;

  return (
    <div className="mt-2 text-xs text-gray-500">
      <span className="font-semibold">Guest Stars:</span>{" "}
      {guestStars
        .slice(0, 3)
        .map((star) => star.name)
        .join(", ")}
      {guestStars.length > 3 && "..."}
    </div>
  );
}
