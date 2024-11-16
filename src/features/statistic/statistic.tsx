import { statisticFeature } from ".";

export async function Statistics() {
  const amountOfMessages = await statisticFeature.service.getMessageCount();
  const amountOfFetches = await statisticFeature.service.getFetchCount();
  const messagesPerUser =
    await statisticFeature.service.getMessageCountPerUser();

  return (
    <>
      <h1>Statistics</h1>
      <h2>Messages: {amountOfMessages[0].count}</h2>
      <h2>Fetches: {amountOfFetches[0].count}</h2>
      <ul>
        Messages per User:
        {messagesPerUser.map((user) => {
          return (
            <li key={user.username}>
              User: {user.username}, count: {user.count}
            </li>
          );
        })}
      </ul>
    </>
  );
}
