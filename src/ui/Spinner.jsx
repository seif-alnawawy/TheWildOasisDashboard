export default function Spinner({ size }) {
  return (
    <div className="flex w-full justify-center">
      <div
        className={`${
          size === "small" ? "size-8" : "size-16"
        } animate-spin rounded-full border-b-transparent bg-conic from-brand-50 to-brand-600 p-2`}
      >
        <div className="size-full rounded-full bg-surface" />
      </div>
    </div>
  );
}
