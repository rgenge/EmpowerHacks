import prisma from "@/lib/prisma";

export default async function handler(req, res) {
    // const { name, email } = req.query;

    // try {
    //     const newUer = await prisma.User.create({
    //         data: {
    //             name,
    //             email,
    //         },
    //     });

    //     res.json({ user: newUer, error: null });
    // } catch (error) {
    //     res.json({ error: error.message, user: null });
    // }

    const { image, email, password,userSkills, currentStatus, currentEmployment, studentClass, jobAvailability, location, profileImage} = req.query;
    try {
        const newUer = await prisma.User.create({
            data: {
                image,
                email,
                password,
                userSkills,
                currentStatus,
                currentEmployment,
                studentClass,
                jobAvailability,
                location,
                profileImage,
            },
        });

        res.json({ user: newUer, error: null });
    } catch (error) {
        res.json({ error: error.message, user: null });
    }
}