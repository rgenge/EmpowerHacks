import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  // Check if the request method is POST
  if (req.method === "POST") {
    // Get the input values from the request body
    const {image,
      email,
      password,
      userSkills,
      currentStatus,
      currentEmployment,
      studentClass,
      jobAvailability,
      location,
      profileImage} = req.body;
    // Use Prisma to insert the data into the database
    const result = await prisma.user.create({
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
    // Send a success response with the created data
    res.status(200).json(result);
  } else {
    // Send an error response for other methods
    res.status(405).json({ message: "Method not allowed" });
  }
}