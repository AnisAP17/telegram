export type ContactType = {
  id: number;
  name: string;
  img: string;
};

export type MessageType = {
  text: string;
  id: string;
  senderId: number;
  receiverId: number;
};
