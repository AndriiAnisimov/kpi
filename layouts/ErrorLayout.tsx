import NavBar from "@/components/NavBar";

export default function ErrorLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <header>
      <NavBar isErrorPage={true} />
      <main>{children}</main>
    </header>
  );
}
