export type Actor = {
    id: number|string;
    name: string;
    image: string;
    born: string;
    movie: string;
    award: string;
  };
  
 export const actorData: Actor[] = [
    {
      id: Math.floor(Math.random() * 1000) + 1,
      name: "Robert Downey Jr.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE5_fhgs_IZExj92k7fpmWwg3DAsEDlcAeaxKf7HiH6mg7OhJL",
      born: "1965",
      movie: "Iron Man, Sherlock Holmes, Avengers: Endgame",
      award: "Golden Globe Award, BAFTA Award, People's Choice Award"
    },
    {
      id: Math.floor(Math.random() * 1000) + 1,
      name: "Chris Evans",
      image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSAYaNvIozXqfG0QAbpCZ6cRnXJg2gdNT0puCY2f-KGHk6Z5ire",
      born: "1981",
      movie: "Captain America: The First Avenger, Snowpiercer, Avengers: Endgame",
      award: "People's Choice Award, MTV Movie Award, Teen Choice Award"
    },
    {
      id: Math.floor(Math.random() * 1000) + 1,
      name: "Chris Hemsworth",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHxCgUxxr_WRgrfE58S5lfp5UUgB5r_F-RGaNPLZh0lR2y2UNe",
      born: "1983",
      movie: "Thor, Rush, Avengers: Endgame",
      award: "People's Choice Award, MTV Movie Award, Teen Choice Award"
    },
    {
      id: Math.floor(Math.random() * 1000) + 1,
      name: "Megan Fox",
      image: "https://m.media-amazon.com/images/M/MV5BMTc5MjgyMzk4NF5BMl5BanBnXkFtZTcwODk2OTM4Mg@@._V1_.jpg",
      born: "1986",
      movie: "Transformers, Jennifer's Body, Teenage Mutant Ninja Turtles",
      award: "Teen Choice Award, Scream Award, Golden Raspberry Award"
    },
    {
      id: Math.floor(Math.random() * 1000) + 1,
      name: "Emma Watson",
      image: "https://m.media-amazon.com/images/M/MV5BN2JhNTNjNWMtNmUwZC00YjBjLWIwOGQtNDBkNTcyMWIxNjEzXkEyXkFqcGdeQXVyMzQ3Nzk5MTU@._V1_.jpg",
      born: "1990",
      movie: "Harry Potter and the Sorcerer's Stone, Beauty and the Beast, Little Women",
      award: "British Artist of the Year, MTV Movie Award, Teen Choice Award"
    }
  ];
  