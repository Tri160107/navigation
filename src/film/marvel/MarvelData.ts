export type Marvel = {
    id: number|string;
    title: string;
    image: string;
    year: string;
    rate: number;
    description: string;
  };
  
 export const marvelData: Marvel[] = [
    {
      id: Math.floor(Math.random() * 1000) + 1,
      title: "Thor: Love and Thunder",
      image: "https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      year: "2022",
      rate: 6.2,
      description: "Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct."
    },
    {
      id: Math.floor(Math.random() * 1000) + 1,
      title: "Captain America: Civil War",
      image: "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_FMjpg_UX1000_.jpg",
      year: "2016",
      rate: 7.8,
      description: "Political involvement in the Avengers' affairs causes a rift between Captain America and Iron Man."
    },
    {
      id: Math.floor(Math.random() * 1000) + 1,
      title: "Doctor Strange in the Multiverse of Madness",
      image: "https://m.media-amazon.com/images/M/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_FMjpg_UX1000_.jpg",
      year: "2022",
      rate: 6.9,
      description: "Doctor Strange teams up with a mysterious teenage girl who can travel across multiverses, to battle other-universe versions of himself which threaten to wipe out the multiverse. They seek help from the Scarlet Witch, Wong and others."
    },
    {
      id: Math.floor(Math.random() * 1000) + 1,
      title: "Guardians of the Galaxy Vol. 3",
      image: "https://m.media-amazon.com/images/M/MV5BMDgxOTdjMzYtZGQxMS00ZTAzLWI4Y2UtMTQzN2VlYjYyZWRiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
      year: "2023",
      rate: 7.9,
      description: "Still reeling from the loss of Gamora, Peter Quill rallies his team to defend the universe and one of their own - a mission that could mean the end of the Guardians if not successful."
    },
    {
      id: Math.floor(Math.random() * 1000) + 1,
      title: "Avengers: Endgame",
      image: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
      year: "2019",
      rate: 8.4,
      description: "After the devastating events of Avengers: Cuộc Chiến Vô Cực (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe."
    }
  ];
  