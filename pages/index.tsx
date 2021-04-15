import Head from '../components/head/Head'
import Background from '../components/background/Background'
import Container from '../components/container/Container'
import UserProvider from '../providers/UserProvider'
import WebsocketProvider from '../providers/WebsocketProvider'
import ChatProvider from '../providers/ChatProvider'

export default function Home() {
  return (
    <>
      <Head />
      <ChatProvider>
        <WebsocketProvider>
          <UserProvider>
            <Background>
              <Container />
            </Background>
          </UserProvider>
        </WebsocketProvider>
      </ChatProvider>
    </>
  )
}
