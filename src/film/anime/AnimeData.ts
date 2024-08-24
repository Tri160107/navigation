export type Anime = {
    id: number|string;
    title: string;
    image: string;
    year: string;
    rate: number;
    description: string;
  };
  
 export const animeData: Anime[] = [
    {
      id: Math.floor(Math.random() * 1000) + 1,
      title: "Spy x Family",
      image: "https://m.media-amazon.com/images/M/MV5BYTgxZDYyOTMtYzcyZS00YjRmLWEyZGQtMWE2ZjRjNTYwZGIyXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg",
      year: "2022",
      rate: 8.3,
      description: "Loid Forger, an undercover spy, creates a fake family to complete his mission, unaware that his new wife is an assassin and his adopted daughter is a telepath."
    },
    {
      id: Math.floor(Math.random() * 1000) + 1,
      title: "Jujutsu Kaisen",
      image: "https://m.media-amazon.com/images/M/MV5BNGY4MTg3NzgtMmFkZi00NTg5LWExMmEtMWI3YzI1ODdmMWQ1XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_FMjpg_UX1000_.jpg",
      year: "2020",
      rate: 8.6,
      description: "Yuji Itadori, a high school student with extraordinary physical abilities, joins a secret organization of sorcerers to fight cursed spirits after ingesting a powerful cursed object."
    },
    {
      id: Math.floor(Math.random() * 1000) + 1,
      title: "Classroom of the Elite",
      image: "https://m.media-amazon.com/images/M/MV5BM2RlMjliMGUtY2RiOS00NmQ0LTgxNGItZTlhN2U3NDE3ZTFmXkEyXkFqcGdeQXVyNjc3NTI5MDY@._V1_.jpg",
      year: "2017",
      rate: 7.7,
      description: "Kiyotaka Ayanokōji, a student in Class D at a prestigious high school, navigates intense competition and psychological challenges, becoming entangled in the school's complex social dynamics."
    },
    {
      id: Math.floor(Math.random() * 1000) + 1,
      title: "More Than a Married Couple, But Not Lovers",
      image: "https://m.media-amazon.com/images/M/MV5BNmM1ZjM3ZWItN2UwNC00YjEwLTkzZjMtZDdjNWU5NWMyYmViXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg",
      year: "2022",
      rate: 7.5,
      description: "A high school romcom about a young couple who are forced to act as if they are married for a school assignment."
    },
    {
      id: Math.floor(Math.random() * 1000) + 1,
      title: "Sword Art Online",
      image: "https://m.media-amazon.com/images/M/MV5BYmI2ZWNlMGQtYTIxMi00MDFjLWI0ZTAtMGFmMzlkZTExMGIzXkEyXkFqcGdeQXVyNjg3MDM4Mzc@._V1_FMjpg_UX1000_.jpg",
      year: "2012",
      rate: 7.5,
      description: "Players of a virtual reality MMORPG find themselves trapped in the game, and they must fight their way to freedom."
    }
  ];
  