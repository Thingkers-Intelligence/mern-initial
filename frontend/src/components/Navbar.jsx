import React from 'react'
import { Button, Center, Container, Flex, HStack, useColorMode } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { PhoneIcon, AddIcon, WarningIcon, PlusSquareIcon } from '@chakra-ui/icons'
import {IoMoon} from 'react-icons/io5'
import {LuSun} from 'react-icons/lu'
import { Text } from '@chakra-ui/react'


export const Navbar = () => {

  const {colorMode,toggleColorMode} = useColorMode();




  return  <Container maxW={"1140 px"} px={4} > 
  
  <Flex
  h={16} alignItems={'center'} justifyContent={'space-between'} flexDirection={{base:'column', sm:'row'}}
  >

  <Text
    bgGradient='linear(to-l, #7928CA, #FF0080)'
    bgClip='text'
    fontSize={{base:'22', sm:'28'}}
    fontWeight='extrabold'
    textAlign = {'center'}
  >
  <Link to={"/"}> Product Store</Link>
  </Text>

  <HStack spacing={2} align={'center'}> 
    <Link to={'/create'}>  <Button>  <PlusSquareIcon fontSize={20}></PlusSquareIcon> </Button> </Link>

    <Button onClick={toggleColorMode}> {colorMode === 'light'? <IoMoon/>:<LuSun size="20"/> }
    
    </Button>

  </HStack>

  </Flex>

  </Container>
}
