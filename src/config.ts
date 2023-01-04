import { Config } from "~/config-schema";

export const config: Config = {
  name: "CTF Name",
  description: "Description of CTF",
  imageUrl: "",
  sponsors: [
    {
      name: "Sponsor 1",
      imageUrl: "http://placeimg.com/640/480/nature",
      url: "",
    },
    {
      name: "Sponsor 2",
      imageUrl: "http://placeimg.com/640/480/arch",
      url: "",
    },
  ],
  hosts: [
    {
      name: "Host 1",
      imageUrl: "http://placeimg.com/640/480/animals",
      url: "",
    },
  ],
  connect: {
    github: "https://github.com/mbund",
  },
} as const;
