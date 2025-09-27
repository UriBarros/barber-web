import Head from 'next/head'
import Image from 'next/image'
import logoImg from '../../../public/images/logo.svg'
import { Center, Flex, Input, Text, Button } from '@chakra-ui/react'

import Link from 'next/link'




export default function Login(){
  return(
    <>
    <Head>
      <title>AppNavalha - Seu sistema completo</title>
    </Head>
    <Flex background="barber.900" height="100vh" justifyContent="center" alignItems="center">

      <Flex width={640} direction='column' p={14} rounded={8}>
        <Center p={4}>
          <Image
            src={logoImg}
            quality={100}
            width={240}
            objectFit='fill'
            alt='Logo AppNavalha'
          />
        </Center>

        <Input
          background='barber.400'
          variant='filled'
          size='lg'
          placeholder='email'
          type='email'
          mb={3}
        />

        <Input
          background='barber.400'
          variant='filled'
          size='lg'
          placeholder='*******'
          type='text'
          mb={6}
        />

        <Button 
          background='button.cta'
          mb={6}
          color='gray.900'
          size='lg'
          _hover={{ bg: '#ffb13e' }}
          >
            Acessar
        </Button>

        <Center>
          <Link href='/register'>
            <Text cursor='pointer'>Ainda não tem uma conta? <strong>Cadastre-se</strong></Text>
          </Link>
        
        </Center>

      </Flex>

    </Flex>
    </>
  )
}