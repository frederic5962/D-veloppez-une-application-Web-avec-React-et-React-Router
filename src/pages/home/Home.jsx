import Banner from '../../components/banner/Banner';
import Gallery from '../../components/gallery/Gallery';


export default function Home() {
  return (
    <section className="content">
      <Banner />
      <Gallery /> {/* La galerie va gérer les liens */}
    </section>
  );
}
