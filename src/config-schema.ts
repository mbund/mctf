type Organization = {
  name?: string;
  description?: string;
  imageUrl: string;
  url: string;
};

type Connect = {
  twitter?: string;
  github?: string;
  instagram?: string;
  discord?: string;
};

export type Config = {
  name: string;
  description: string;
  sponsors?: readonly Organization[];
  hosts?: readonly Organization[];
  imageUrl: string;
  connect?: Connect;
};
