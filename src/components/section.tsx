import { PropsWithChildren } from "react"

type SectionProps = PropsWithChildren<{ title?: string }>;

export default function Section({ children, title }: SectionProps) {
  return (
    <section className="text-lg mt-10">
      {title && <h2 className="text-2xl font-bold leading-loose mb-2">{title}</h2>}
      {children}
    </section>
  );
}
