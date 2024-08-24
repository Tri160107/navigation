export type LiveAction = {
    id: number|string;
    title: string;
    image: string;
    year: string;
    rate: number;
    description: string;
  };
  
 export const liveactionData: LiveAction[] = [
    {
      id: Math.floor(Math.random() * 1000) + 1,
      title: "Transformers: Age of Extinction",
      image: "https://m.media-amazon.com/images/M/MV5BMjEwNTg1MTA5Nl5BMl5BanBnXkFtZTgwOTg2OTM4MTE@._V1_FMjpg_UX1000_.jpg",
      year: "2014",
      rate: 5.6,
      description: "When humanity allies with a bounty hunter in pursuit of Optimus Prime, the Autobots turn to a mechanic and his family for help."
    },
    {
      id: Math.floor(Math.random() * 1000) + 1,
      title: "Harry Potter and the Sorcerer's Stone",
      image: "https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_FMjpg_UX1000_.jpg",
      year: "2001",
      rate: 7.6,
      description: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world."
    },
    {
      id: Math.floor(Math.random() * 1000) + 1,
      title: "Joker",
      image: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      year: "2019",
      rate: 8.4,
      description: "Arthur Fleck, a party clown and a failed stand-up comedian, leads an impoverished life with his ailing mother. However, when society shuns him and brands him as a freak, he decides to embrace the life of crime and chaos in Gotham City."
    },
    {
      id: Math.floor(Math.random() * 1000) + 1,
      title: "Real Steel",
      image: "https://m.media-amazon.com/images/M/MV5BNmY2MzdkZGQtNzBlNy00YjI3LWFiYTAtNThiNmVhMTQyZDhkXkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_.jpg",
      year: "2011",
      rate: 7.1,
      description: "In a near future where robot boxing is a top sport, a struggling ex-boxer feels he's found a champion in a discarded robot."
    },
    {
      id: Math.floor(Math.random() * 1000) + 1,
      title: "John Wick",
      image: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_FMjpg_UX1000_.jpg",
      year: "2014",
      rate: 7.4,
      description: "An ex-hitman comes out of retirement to track down the gangsters who killed his dog and stole his car."
    }
  ];
  