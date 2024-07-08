import NavBar from "@/components/NavBar";

export default function DefaultLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <header>
      <NavBar />
      <main>{children}</main>
    </header>
  );
}
