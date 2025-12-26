import Image from "next/image";

import BookingItem from "@/components/ui/booking-item";
import Header from "@/components/ui/header";
import { prisma } from "@/lib/prisma";
import banner from "@/public/banner.png";

// Server Component

export default async function Home() {
  const barbershops = await prisma.barbershop.findMany();

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

      <div className="mt-4 px-4 space-y-4">
        <h3 className="text-xs font-bold uppercase">Agendedametos</h3>
        <BookingItem />
      </div>
      {barbershops.map((barbershop) => (
        <div key={barbershop.id}>
          <h3 className="">{barbershop.name}</h3>
        </div>
      ))}
    </div>
  );
}


