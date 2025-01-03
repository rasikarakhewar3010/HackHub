const sampleHackathons = [
    {
        name: "Blockchain Revolution",
        date: "2025-01-05T10:00:00Z",
        registrationDate: "2024-12-30T10:00:00Z", // Registration date before event date
        duration: 36,
        description: "A 36-hour event focused on blockchain technology and its potential applications across industries.",
        theme: "Blockchain",
        maxParticipants: 150,
        prize: 5000,
        image: {
            filename: "hackathon2",
            url: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/code-hackathon-event-poster-design-template-d7c8ddfd12e11fd2b9c6b70241626091_screen.jpg?ts=1567076214",
        },
        owner: "6746d818b599cd14e894500e",
    },
    {
        name: "Green Tech Innovation",
        date: "2024-12-10T08:00:00Z",
        registrationDate: "2024-12-06T08:00:00Z", // Registration date before event date
        duration: 24,
        description: "A 24-hour challenge for green tech solutions that aim to address environmental sustainability.",
        theme: "Green Technology",
        maxParticipants: 100,
        prize: 3000,
        image: {
            filename: "hackathon3",
            url: "https://codehackathon.github.io/assets/poster/w12.jpg",
        },
        owner: "6746d818b599cd14e894500e",
    },
    {
        name: "Cybersecurity Challenge",
        date: "2024-12-12T11:00:00Z",
        registrationDate: "2024-12-08T11:00:00Z", // Registration date before event date
        duration: 48,
        description: "A competition designed to test participants' skills in securing networks and systems from cyber threats.",
        theme: "Cybersecurity",
        maxParticipants: 150,
        prize: 7000,
        image: {
            filename: "hackathon4",
            url: "https://www.shutterstock.com/image-vector/hackathon-banner-illustration-abstract-futuristic-260nw-2535147257.jpg",
        },
        owner: "6746d818b599cd14e894500e",
    },
    {
        name: "Smart Cities Hackathon",
        date: "2024-12-15T09:00:00Z",
        registrationDate: "2024-12-10T09:00:00Z", // Registration date before event date
        duration: 72,
        description: "A 3-day event focused on building smart city solutions to improve urban living.",
        theme: "Smart Cities",
        maxParticipants: 300,
        prize: 10000,
        image: {
            filename: "hackathon5",
            url: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/code-hackathon-event-poster-design-template-d7c8ddfd12e11fd2b9c6b70241626091_screen.jpg?ts=1567076214",
        },
        owner: "6746d818b599cd14e894500e",
    },
    {
        name: "Healthcare Hackathon",
        date: "2024-12-30T08:00:00Z",
        registrationDate: "2024-12-25T08:00:00Z", // Registration date before event date
        duration: 36,
        description: "A 36-hour event to create innovative healthcare solutions to improve patient care and healthcare delivery.",
        theme: "Healthcare",
        maxParticipants: 120,
        prize: 6000,
        image: {
            filename: "hackathon6",
            url: "https://www.shutterstock.com/image-vector/hackathon-banner-illustration-abstract-futuristic-260nw-1662606928.jpg",
        },
        owner: "6746d818b599cd14e894500e",
    },
    {
        name: "Fintech Future",
        date: "2025-01-05T10:00:00Z",
        registrationDate: "2024-12-31T10:00:00Z", // Registration date before event date
        duration: 48,
        description: "A hackathon where participants will create innovative fintech solutions for the next generation of financial services.",
        theme: "Fintech",
        maxParticipants: 200,
        prize: 8000,
        image: {
            filename: "hackathon7",
            url: "https://cdn5.vectorstock.com/i/1000x1000/59/69/hackathon-event-banner-vector-23395969.jpg",
        },
        owner: "6746d818b599cd14e894500e",
    },
    {
        name: "VR/AR Experience",
        date: "2025-01-10T11:00:00Z",
        registrationDate: "2025-01-05T11:00:00Z", // Registration date before event date
        duration: 24,
        description: "A 24-hour event where participants will design immersive virtual and augmented reality experiences.",
        theme: "Virtual Reality & Augmented Reality",
        maxParticipants: 100,
        prize: 4000,
        image: {
            filename: "hackathon8",
            url: "https://arqus-alliance.eu/wp-content/uploads/2024/07/hackathon-designs-arqus-3x2-600.jpg",
        },
        owner: "6746d818b599cd14e894500e",
    },
    {
        name: "Robotics Revolution",
        date: "2025-01-15T09:00:00Z",
        registrationDate: "2025-01-10T09:00:00Z", // Registration date before event date
        duration: 48,
        description: "A hackathon to build innovative robots capable of solving real-world problems using robotics technologies.",
        theme: "Robotics",
        maxParticipants: 150,
        prize: 7500,
        image: {
            filename: "hackathon9",
            url: "https://storage.googleapis.com/reskilll/poster%20bannerH0xBQup.png",
        },
        owner: "6746d818b599cd14e894500e",
    },
    {
        name: "AI in Healthcare",
        date: "2025-01-20T10:00:00Z",
        registrationDate: "2025-01-15T10:00:00Z", // Registration date before event date
        duration: 24,
        description: "A 24-hour hackathon to create AI-powered healthcare applications that can improve patient outcomes.",
        theme: "AI & Healthcare",
        maxParticipants: 100,
        prize: 4500,
        image: {
            filename: "hackathon10",
            url: "https://s3-h2s-v2.s3.ap-south-1.amazonaws.com/2024-05-25T10%3A34%3A31.104Z-homepage%20fintech.png",
        },
        owner: "6746d818b599cd14e894500e",
    },
    {
        name: "Tech for Good",
        date: "2025-01-25T08:00:00Z",
        registrationDate: "2025-01-20T08:00:00Z", // Registration date before event date
        duration: 36,
        description: "A 36-hour event focused on using technology to solve social problems and improve the community.",
        theme: "Tech for Social Impact",
        maxParticipants: 200,
        prize: 6000,
        image: {
            filename: "hackathon11",
            url: "https://s3-h2s-v2.s3.ap-south-1.amazonaws.com/2024-05-20T07%3A10%3A31.885Z-homepage%201.png",
        },
        owner: "6746d818b599cd14e894500e",
    },
    {
        name: "Data Science Sprint",
        date: "2025-02-01T09:00:00Z",
        registrationDate: "2025-01-27T09:00:00Z", // Registration date before event date
        duration: 48,
        description: "A hackathon to develop cutting-edge data science models and solutions for real-world data challenges.",
        theme: "Data Science",
        maxParticipants: 150,
        prize: 7500,
        image: {
            filename: "hackathon12",
            url: "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/935/099/datas/medium_square.jpg",
        },
        owner: "6746d818b599cd14e894500e",
    },
    {
        name: "AI in Education",
        date: "2025-02-05T10:00:00Z",
        registrationDate: "2025-01-30T10:00:00Z", // Registration date before event date
        duration: 24,
        description: "A 24-hour hackathon to create AI-powered solutions to enhance education and learning experiences.",
        theme: "AI & Education",
        maxParticipants: 120,
        prize: 5000,
        image: {
            filename: "hackathon13",
            url: "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/935/056/datas/medium_square.jpg",
        },
        owner: "6746d818b599cd14e894500e",
    },
    {
        name: "Sustainable Tech Hackathon",
        date: "2025-02-10T09:00:00Z",
        registrationDate: "2025-02-05T09:00:00Z", // Registration date before event date
        duration: 48,
        description: "A hackathon focused on building sustainable tech solutions to tackle climate change and environmental issues.",
        theme: "Sustainability & Tech",
        maxParticipants: 200,
        prize: 9000,
        image: {
            filename: "hackathon14",
            url: "https://allhackathons.com/media/data/2/developerweek-ai-ml-2024-hackathon-partnered-with-aws.None.400x300_q85_background-%23ffffff_crop_upscale.jpg",
        },
        owner: "6746d818b599cd14e894500e",
    },
  ];
  
  module.exports = { data: sampleHackathons };
  