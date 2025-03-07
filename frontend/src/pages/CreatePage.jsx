import { Button, Container, Heading, VStack, useColorModeValue,Box } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useProductStore } from '../store/product.js';

export const CreatePage = () => {

  const [newProduct,stateNewProduct] =useState({

    name:"",
    price:"",
    image:""
  });
  
  const {createProduct}=useProductStore()

  const handleAddProduct = async() =>{
    const {success, message} = await createProduct(newProduct);
    console.log('Success : ', success);
    console.log('Message: ', message);

  }

  return <Container maxW={"container.sm"}>
    <VStack spacing={8}>
      <Heading as={"h1"} size={"2x1"}> Create New Product </Heading>
      <Box  w="full" bg={useColorModeValue("white","gray.800")} p = {6} rounded = {'lg'} shadow = {'md'} > 

      <VStack spacing={4}> 
      
      <input placeholder='Product Name' name='name' value={newProduct.name} 
      onChange={(e) => stateNewProduct({...newProduct, name:e.target.value})}/>

      <input placeholder='Price' name='price' value={newProduct.price} 
            onChange={(e) => stateNewProduct({...newProduct, price:e.target.value})}/>

      <input placeholder='Image URL' name='image' value={newProduct.image} 
            onChange={(e) => stateNewProduct({...newProduct, image:e.target.value})}/>
      

      <Button colorScheme='blue' onClick={handleAddProduct} w='full'> Add Product </Button>
      </VStack>

      
      </Box>
    </VStack>
  </Container>
};

export default CreatePage;