import Person from './component/Person'
import { ChakraProvider } from "@chakra-ui/react"
import { Flex } from "@chakra-ui/react"

export default function Home() {
  const person1 = {
    roll: 'grandfather',
    name: 'John',
    image : '/person1.png',
    sex : 'male',
    color : "blue.500",
  }

  const person2 = {
    roll: 'grandmother',
    name: 'Mary',
    image : '/person1.png',
    sex : 'female',
    color : "pink.500",
  }

  return (
    <>
      <div>
        <ChakraProvider>
          <Flex justifyContent="center" alignItems="center" height="100vh">
            <Person person={person1}/>
          </Flex>
          <Person person={person2}/>
        </ChakraProvider>
      </div>
    </>
  )
}
