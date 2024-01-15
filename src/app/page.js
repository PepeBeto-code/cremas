import GaleriaReseñas from "@/componentes/Galerias/GaleriaReseñas";
import SliderTiposCremas from "@/componentes/Sliders/SliderTiposCremas";
import { Container } from "reactstrap";
export default function Home() {
  return (
    <main>
      <div
        id="ImgPrinc"
        className="flex justify-content-center align-items-center flex-col md:h-[70vh] h-[90vh]"
      >
          <h1 className="text-white">
            ¡Descubre las mejores cremas corporales para una piel radiante y
            saludable!
          </h1>
          <p className="text-white">
            Descubre el secreto de una piel suave y radiante con la selección de
            las mejores cremas corporales disponibles en Amazon. Aquí
            encontrarás reseñas detalladas y consejos útiles que te ayudarán a
            elegir la crema corporal perfecta para tus necesidades.
          </p>
        </div>
      <Container>
        <section className="">
          <h2>Tipos De Cremas Para La Piel</h2>
          <div className="mt-[1rem]">
          <SliderTiposCremas />
          </div>
        </section>
        <section className="flex items-center flex-col">
          <h2>Para una piel radiante y bien cuidada</h2>
          <p className="pl-[0px] pr-[0px]">
            Una piel verdaderamente nutrida va más allá de simplemente aplicar
            crema corporal. Descubre la excelencia en cuidado personal
            explorando nuestras reseñas destacadas. Eleva tu rutina con
            productos recomendados por quienes valoran una piel radiante
          </p>
          <GaleriaReseñas />
        </section>
      </Container>
    </main>
  );
}
