import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CreateCarousel({
  nameIDS,
  data,
}: {
  nameIDS: string[];
  data: JSX.Element[];
}) {
//   const [emblaRef, emblaApi] = useEmblaCarousel();

  return (
    <div className="w-full">
      <Carousel>
        <CarouselContent>
          {nameIDS.map((name, index) => (
            <CarouselItem key={name}>{data[index]}</CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
    </div>
  );
}
