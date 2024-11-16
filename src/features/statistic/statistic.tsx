import { statisticFeature } from ".";

export async function Statistics() {
  const amountOfMessages = await statisticFeature.service.getMessageCount();
  const amountOfFetches = await statisticFeature.service.getFetchCount();

  return (
    <>
      <h1>Statistics</h1>
      <h2>Messages: {amountOfMessages[0].count}</h2>
      <h2>Fetches: {amountOfFetches[0].count}</h2>
    </>
  );
}
