import React, { useState } from "react";
import {
  Button,
  Box,
  Input,
  Stack,
  Icon,
  Pressable,
  NativeBaseProvider,
  Text,
} from "native-base";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { Image } from "native-base";
import logo from "./assets/log.png";

const Example = () => {
  const [show, setShow] = useState(false);

  return (
    <Box bg="#202024" minHeight="100%">
      <Stack space={4} w="100%" alignItems="center" marginTop="50px">
        <Image
          marginTop="50px"
          source={logo}
          alt="Logo"
          style={{ width: 100, height: 100 }}
        />
        <Text
          bold
          marginTop="50px"
          fontSize="20px"
          style={{ color: "#ffffff" }}
        >
          Acesse sua conta
        </Text>
        <Input
          borderColor="transparent"
          marginTop="70px"
          bg="#121214"
          color="#7C7C9A"
          w={{
            base: "75%",
            md: "25%",
          }}
          InputLeftElement={
            <Icon
              as={<MaterialIcons name="email" />}
              size={5}
              ml="2"
              color="#7C7C8A"
            />
          }
          placeholder="Email"
          placeholderTextColor="#7C7C8A"
        />
        <Input
          borderColor="transparent"
          bg="#121214"
          color="#7C7C9A"
          w={{
            base: "75%",
            md: "25%",
          }}
          
          type={show ? "text" : "password"}
          InputLeftElement={
          <Icon
            as={<MaterialIcons name="vpn-key" />}
            size={5}
            ml="2"
            color="#7C7C8A"
          />
        }
          InputRightElement={
            <Pressable onPress={() => setShow(!show)}>
              <Icon
                as={
                  <MaterialIcons
                    name={show ? "visibility" : "visibility-off"}
                  />
                }
                size={5}
                mr="2"
                color="#7C7C8A"
              />
            </Pressable>
          }
          placeholder="Password"
          placeholderTextColor="#7C7C8A"
        />
        <Box width="75%" marginTop="70px">
          <Button bg="#DC143C" size="sm">
            Entrar
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default function App() {
  return (
    <NativeBaseProvider>
      <Example />
    </NativeBaseProvider>
  );
}
