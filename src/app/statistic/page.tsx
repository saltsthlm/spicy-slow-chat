import { Statistics, statisticFeature } from "@/features/";

export default async function Home() {
  const amountOfMessages = await statisticFeature.service.getMessageCount();
  const amountOfFetches = await statisticFeature.service.getFetchCount();
  return <Statistics />;
}
