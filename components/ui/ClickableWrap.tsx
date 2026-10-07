import Link from "next/link";

type Props = {
  href: string;
  label: string;            // screen-reader text, e.g. "Read about our Dholuo program"
  children: React.ReactNode;
  className?: string;
};

export function ClickableWrap({ href, label, children, className }: Props) {
  return (
    <div className={`relative ${className ?? ""}`}>
      {children}
      <Link
        href={href}
        className="absolute inset-0 z-20 rounded-[inherit] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay"
      >
        <span className="sr-only">{label}</span>
      </Link>
    </div>
  );
}
