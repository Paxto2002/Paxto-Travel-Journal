const travelData = [
  {
    src: "https://images.unsplash.com/photo-1633773246110-442d2a731938?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Hagia Sophia",
    country: "Turkey",
    googleLocation: "https://maps.app.goo.gl/9Hxw3E4WjUuSUpZz9",
    place: "Hagia Sophia",
    date: "12 August, 2021 - 25 August, 2021",
    description:
      "Hagia Sophia is a historic mosque in Istanbul, Turkey. Originally built as a Byzantine cathedral in 537 AD, it was converted into a mosque in 1453 by the Ottoman Empire. In 1935, it was turned into a museum, but in 2020, it was officially reconverted into a mosque. Today, it serves as a place of worship while also remaining a significant historical and cultural landmark, showcasing a blend of Christian and Islamic influences.",
  },
    {
      src: "https://images.unsplash.com/photo-1620965710670-638576102f4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGhlJTIwZ3JlYXQlMjBweXJhbWlkJTIwb2YlMjBnaXphfGVufDB8fDB8fHwy",
      alt: "Great Pyramid of Giza",
      country: "Egypt",
      googleLocation: "https://maps.app.goo.gl/UrdBYaNgqGAHc8cG9",
      place: "Great Pyramid of Giza",
      date: "5 May, 2022 - 15 May, 2022",
      description:
        "The Great Pyramid of Giza is the oldest and largest of the three pyramids in the Giza pyramid complex. Built around 2600 BC for Pharaoh Khufu, it is one of the Seven Wonders of the Ancient World and remains a significant symbol of ancient Egyptian civilization.",
    },
    {
      src: "https://scrimba.com/links/travel-journal-japan-image-url",
      alt: "Mount Fuji",
      country: "Japan",
      googleLocation:
        "https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu",
      place: "Mount Fuji",
      date: "12 Jan, 2021 - 24 Jan, 2021",
      description:
        "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). It is an iconic symbol of Japan, known for its nearly perfect conical shape. As the most popular tourist site in the country, it attracts millions of visitors each year, including both Japanese and foreign tourists. Many travelers visit to admire its beauty, while others hike to the summit during the official climbing season from July to September.",
    },
    {
      src: "https://images.unsplash.com/photo-1548013146-72479768bada?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8fDI%3Dw=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q29sb3NldW18ZW58MHx8MHx8fDI%3D",
      alt: "Taj Mahal",
      country: "India",
      googleLocation: "https://maps.app.goo.gl/K69p3xpivJQJ9py1A",
      place: "Taj Mahal",
      date: "5 March, 2022 - 15 March, 2022",
      description:
        "The Taj Mahal is a UNESCO World Heritage Site and one of the Seven Wonders of the World. Built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal, it is an architectural masterpiece made of white marble."
    },
    {
      src: "https://images.unsplash.com/photo-1587595742138-7975cf837028?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFjaHUlMjBQaWNjaHV8ZW58MHx8MHx8fDI%3D",
      alt: "Machu Picchu",
      country: "Peru",
      googleLocation: "https://maps.app.goo.gl/3EyZC2kQRXDCMAFy7",
      place: "Machu Picchu",
      date: "15 June, 2023 - 25 June, 2023",
      description:
        "Machu Picchu is an ancient Incan citadel set high in the Andes Mountains of Peru. It was built in the 15th century and later abandoned. Today, it is one of the most visited archaeological sites in the world."
    },
    {
      src: "https://images.unsplash.com/photo-1608037521244-f1c6c7635194?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R3JlYXQlMjB3YWxsJTIwb2YlMjBDaGluYXxlbnwwfHwwfHx8Mg%3D%3D",
      alt: "Great Wall of China",
      country: "China",
      googleLocation: "https://maps.app.goo.gl/o4uWaPFVRNUCgEeb6",
      place: "Great Wall of China",
      date: "1 October, 2022 - 10 October, 2022",
      description:
        "The Great Wall of China is a series of fortifications built to protect Chinese states from invasions. It stretches over 13,000 miles and is one of the most remarkable engineering feats in history."
    },
    {
      src: "https://images.unsplash.com/photo-1636804907108-fa8d2e0f7a90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sb3NldW18ZW58MHx8MHx8fDI%3D",
      alt: "Colosseum",
      country: "Italy",
      googleLocation: "https://maps.app.goo.gl/VhMvNNPwAXHaCBxYA",
      place: "Colosseum, Rome",
      date: "Built: 70-80 AD",
      description:
        "The Colosseum is an ancient amphitheater in Rome, Italy, known for hosting gladiator battles and public spectacles. It is one of the most iconic historical structures in the world."
    }
  ];
  
  export default travelData;
  