import { User } from "./Users";

export const PostData = [
  {
    imageUrl: User[2].url,
    user: User[0].user,
    likes: 3092,
    profile_picture: User[0].url,
    caption:
      "show off myslef Lorem ipsum dolor  Obcaecati veritatis officiis dolores alias voluptatum amet cum repellat voluptate!😍😍😍😍",
    comments: [
      {
        user: User[1].user,
        userImage: User[1].url,
        comment: "Hey ! you're looking great . 😘😘😘😘😘",
      },
      {
        user: User[2].user,
        userImage: User[2].url,
        comment: "That is very cool ❤️❤️❤️❤️❤️",
      },
      {
        user: User[4].user,
        userImage: User[4].url,
        comment: "You are so nice ! 😍😍😍😍😍😍",
      },
    ],
  },
  {
    imageUrl: User[0].url,
    user: User[2].user,
    likes: 3092,
    caption: "going to lol !",
    profile_picture: User[2].url,
    comments: [
      {
        user: User[1].user,
        userImage: User[1].url,
        comment: "😘😘😘😘😘",
      },
      {
        user: User[0].user,
        userImage: User[0].url,
        comment: "Love you darling Lorem ipsum dolor sit amet.❤️❤️❤️❤️❤️",
      },
    ],
  },
  {
    imageUrl: User[4].url,
    user: User[1].user,
    likes: 3092,
    caption: "Mood is mood Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, ex? 😊😊😊😊😊😊",
    profile_picture: User[1].url,
    comments: [
      {
        user: User[2].user,
        userImage: User[2].url,
        comment: "Hey man , you'r great 😍😍😍😍! ",
      },
      {
        user: User[0].user,
        userImage: User[0].url,
        comment: "wow ! looking very stunning 😊😊😊",
      },
      {
        user: User[3].user,
        userImage: User[3].url,
        comment: "👌👌👌👌👌👌👌👌 ",
      },
      {
        user: User[4].user,
        userImage: User[4].url,
        comment: "You are  awesome 😍😍😍😍😍😍",
      },
    ],
  },
];
