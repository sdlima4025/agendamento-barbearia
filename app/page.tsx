import Image from "next/image";

import BarbershopItem from "@/components/ui/barbershop-item";
import BookingItem from "@/components/ui/booking-item";
import Header from "@/components/ui/header";
import {
  PageContainer,
  PageSectionContent,
  PageSectionScroller,
  PageSectionTitle,
} from "@/components/ui/page";
import { getBarbershops } from "@/data/barbershops";
import banner from "@/public/banner.png";

// Server Component

export default async function Home() {
  const barbershops = await getBarbershops();

  return (
    <div>
      <Header />
      <PageContainer>
        <Image
          src={banner}
          alt="Agende com os Melhores"
          sizes="100vw"
          className="h-auto w-full"
        />

        {/* Composition Pattern */}
        <PageSectionContent>
          <PageSectionTitle>Agendamentos</PageSectionTitle>
          <BookingItem />
        </PageSectionContent>

        <PageSectionContent>
          <PageSectionTitle>Barbearias</PageSectionTitle>
          <PageSectionScroller>
            {barbershops?.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </PageSectionScroller>
        </PageSectionContent>
      </PageContainer>
    </div>
  );
}
