

const { PrismaClient } = require('@prisma/client')

const db = new PrismaClient()

async function main() {
    try {
        await db.category.createMany({
            data: [
                { name: "TIC'S" },
                { name: "Educación Básica" },
                { name: "Educación Inicial" },
                { name: "Electricidad" },
                { name: "Mecánica" },
                { name: "Química" },
                { name: "Administración de Empresas" },
                { name: "Admisión" },
                { name: "Educación Física" },
                { name: "Inglés" },
            ] 
        })
        
        console.log("Database seeded successfully")
    } catch (error) {
        console.log("An error occurred in seeding database categories", error)
        throw error
    } finally {
        await db.$disconnect()
    }
}


main()