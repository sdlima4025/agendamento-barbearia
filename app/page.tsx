import Image from "next/image";

import BarbershopItem from "@/components/ui/barbershop-item";
import BookingItem from "@/components/ui/booking-item";
import Header from "@/components/ui/header";
import { getBarbershops } from "@/data/barbershops";
import banner from "@/public/banner.png";

// Server Component

export default async function Home() {
  const barbershops = await getBarbershops();

  return (
    <div>
      <Header />
      <div className="px-4">
        <Image
          src={banner}
          alt="Agende com os Melhores"
          sizes="100vw"
          className="h-auto w-full"
        />
      </div>

      <div className="mt-4 space-y-4 px-4">
        <h3 className="text-xs font-bold uppercase">Agendedametos</h3>
        <BookingItem />
      </div>
      <div className="flex gap-4 overflow-x-auto">
        {barbershops?.map((barbershop) => (
          <BarbershopItem key={barbershop.id} barbershop={barbershop} />
        )) ?? []}
      </div>
    </div>
  );
}
