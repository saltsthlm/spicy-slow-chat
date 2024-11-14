import { MessageSelect } from "../types";

export const USER_MESSAGES: MessageSelect[] = [
  {
    id: 1,
    username: "alice92",
    timestamp: BigInt(1699890000000),
    content: "Hello, everyone! Excited to join the chat 😊",
  },
  {
    id: 2,
    username: "bob_dev",
    timestamp: BigInt(1699890035000),
    content: "Hey Alice! Welcome! What projects are you working on?",
  },
  {
    id: 3,
    username: "charlie_coder",
    timestamp: BigInt(1699890100000),
    content:
      "Anyone here using TypeScript for backend development? I've got some questions!",
  },
  {
    id: 4,
    username: "alice92",
    timestamp: BigInt(1699890150000),
    content: "Thanks, Bob! Working on a mobile app right now. How about you?",
  },
  {
    id: 5,
    username: "dave_design",
    timestamp: BigInt(1699890200000),
    content:
      "Hey all, any recommendations for good resources on UX design? Trying to improve my skills.",
  },
];
