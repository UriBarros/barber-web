import Head from "next/head"
import { Flex, Text } from '@chakra-ui/react'


export default function Home(){
  return(
    <>
    <Head>
      <title>AppNavalha - Seu sistema completo</title>
    </Head>
    <Flex background = "barber.100">
      <Text>Home page</Text>
    </Flex>
    </>
  )
}