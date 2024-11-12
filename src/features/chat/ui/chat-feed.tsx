export function ChatFeed ({messages}:{messages: string[]}) {
  return (
    messages.map((message, index)=>{
      return <div key={index}>{message}</div>
    })
  )
}