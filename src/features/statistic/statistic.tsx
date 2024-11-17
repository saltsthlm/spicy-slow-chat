import { statisticFeature } from ".";

export async function Statistics() {
  const amountOfMessages = await statisticFeature.service.getMessageCount();
  const amountOfFetches = await statisticFeature.service.getFetchCount();
  const messagesPerUser =
    await statisticFeature.service.getMessageCountPerUser();

  const fetchesPerUser = await statisticFeature.service.getFetchCountPerUser();
  const newMessageCountByFetch =
    await statisticFeature.service.getNewMessageCountByFetch();

  const getAllUsernames = await statisticFeature.service.getAllUsernames();

  return (
    <>
      <h1>Statistics</h1>
      <h2>Messages: {amountOfMessages[0].count}</h2>
      <h2>Fetches: {amountOfFetches[0].count}</h2>

      <ul>
        Usernames
        {getAllUsernames.map((user, index) => {
          return (
            <li key={index}>
              <h2>{user.username}</h2>
            </li>
          );
        })}
      </ul>
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
      <ul>
        Fetches per User:
        {fetchesPerUser.map((user) => {
          return (
            <li key={user.username}>
              User: {user.username}, count: {user.count}
            </li>
          );
        })}
      </ul>
      <div>
        New Message Count By Fetch: {JSON.stringify(newMessageCountByFetch)}
      </div>
    </>
  );
}
