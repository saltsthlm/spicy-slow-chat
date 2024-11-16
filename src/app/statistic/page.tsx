import { Statistics } from "@/features/";

export default async function Home() {
  const amountOfMessages = await statisticsFeature.service.getMessageCount();
  const amountOfFetches = await statisticsFeature.service.getFetchCount();
  return <Statistics />;
}
