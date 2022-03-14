export function Spinner({ className }) {
  return (
    <div class="flex items-center">
      <div
        className={`animate-spin inline-block border-t border-b border-l-2 ${className} rounded-full`}
        role="status"
      ></div>
    </div>
  );
}
