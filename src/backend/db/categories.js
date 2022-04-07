import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "all",
    description: "All available videos.",
    isActive:true
  },
  {
    _id: uuid(),
    categoryName: "song",
    description: "1980's evergreen bollywood songs.",
  },
  {
    _id: uuid(),
    categoryName: "movie",
    description: "Old bollywood movies.",
  },
  {
    _id: uuid(),
    categoryName: "trailer",
    description: "Trailers of hit boolywood movies.",
  },
  {
    _id: uuid(),
    categoryName: "dialog",
    description: "Best dialogs from bollywood movies.",
  },
];
