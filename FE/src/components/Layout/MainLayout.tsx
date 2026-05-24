import Navbar from "../Navbar";
interface MainLayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: MainLayoutProps) {
  return (
    <div>
      <Navbar></Navbar>
      {children}
    </div>
  );
}
