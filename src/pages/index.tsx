import Head from "next/head"
import { Flex, Text } from '@chakra-ui/react'


export default function Home(){
  return(
    <>
    <Head>
      <title>AppNavalha - Seu sistema completo</title>
    </Head>
    <Flex background="barber.900" height="100vh" justifyContent="center" alignItems="center">
      <Text>Home page</Text>
    </Flex>
    </>
  )
}