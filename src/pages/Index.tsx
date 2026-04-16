import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Gallery from "@/components/Gallery";
import Promo from "@/components/Promo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <Gallery />
      <Promo />
      <Footer />
    </main>
  );
};

export default Index;