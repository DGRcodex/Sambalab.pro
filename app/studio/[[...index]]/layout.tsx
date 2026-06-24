export const metadata = {
  title: 'Sambalab Blog Studio',
  description: 'Sanity Studio for Sambalab',
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ margin: 0, padding: 0, height: '100vh' }}>
      {children}
    </div>
  );
}
