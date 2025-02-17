export default function DadtionaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4 py-8 md:py-10">
      <div className="w-full mx-auto max-w-3xl px-4">{children}</div>
    </section>
  );
}
