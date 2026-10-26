type BiographyProps = {
  bio: string;
};

export default function Biography({ bio }: BiographyProps) {
  return (
    <div className="mt-3">
      <p className="text-sm leading-relaxed text-[var(--color-slate)] sm:text-base">{bio}</p>
      <div aria-hidden="true" className="mt-4 border-b border-[var(--color-line,#DCE6E5)]" />
    </div>
  );
}
