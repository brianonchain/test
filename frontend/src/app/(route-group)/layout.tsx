export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  console.log("route-group layout.tsx");
  return (
    <div>
      <div className="">Route-Group Layout</div>
      {children}
    </div>
  );
}
