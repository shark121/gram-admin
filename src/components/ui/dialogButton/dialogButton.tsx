



export default function DialogButton({
  children,
  onClick,
  className,
}: {
  children: string;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`bg-[#f0f0f0] text-black p-2 rounded-md ${className}`}
    >
      {children}
    </button>
  );
}