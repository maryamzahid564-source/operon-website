export default function ImagePlaceholder({
  className = "",
  aspect = "aspect-[4/3]",
}: {
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      className={`${aspect} w-full bg-mist ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0) 60%)",
      }}
    />
  );
}
