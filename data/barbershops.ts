import { prisma } from "@/lib/prisma";


export const getBarbershops = async () => {
    const barbershops = await prisma.barbershop.findMany();
    return barbershops;
}