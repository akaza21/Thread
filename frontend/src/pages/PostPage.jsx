import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Text,
  useStatStyles,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import Actions from "../components/Actions";
import Comment from "../components/Comment";

const PostPage = () => {
  const [liked, setLiked] = useState(false);
  return (
    <>
      <Flex>
        <Flex w={"full"} alignItems={"center"} gap={3}>
          <Avatar
            src="/zuck-avatar.png"
            size={"md"}
            name="Mark Zuckerberg"
          ></Avatar>
          <Flex>
            <Text fontSize={"sm"} fontWeight={"bold"}>
              markzuckerberg
            </Text>
            <Image src="/verified.png" w="4" h="4" ml={4}></Image>
          </Flex>
        </Flex>
        <Flex gap={4} alignItems={"center"}>
          <Text fontSize={"sm"} color={"gray.light"}>
            1d
          </Text>
          <BsThreeDots />
        </Flex>
      </Flex>
      <Text my={3}>Let's talk about Threads.</Text>
      <Box
        borderRadius={10}
        overflow={"hidden"}
        // border={"3px solid"}
        borderColor={"gray.light"}
      >
        <Image src={"/post1.png"} w={"full"} />
      </Box>
      <Flex gap={3} my={3}>
        <Actions liked={liked} setLiked={setLiked}></Actions>
      </Flex>

      <Flex gap={2} alignItems={"center"}>
        <Text color={"gray.light"} fontSize={"sm"}>
          238 replies
        </Text>
        <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
        <Text color={"gray.light"} fontSize={"sm"}>
          {" "}
          {200 + (liked ? 1 : 0)} likes
        </Text>
      </Flex>
      <Divider my={4}></Divider>
      <Flex justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text fontSize={"2xl"}>👋</Text>
          <Text color={"gray.light"}>Get the app to like, reply and post.</Text>
        </Flex>
        <Button>Get</Button>
      </Flex>
      <Divider my={4}></Divider>
      <Comment comments="looks really good!" createdAt="2d" likes={100} username="alex" userAvatar="https://bit.ly/dan-abramov"/>
      <Comment comments="amazing!" createdAt="2d" likes={44} username="jake" userAvatar="https://bit.ly/kent-c-dodds"/>
      <Comment comments="clean" createdAt="2d" likes={4} username="george" userAvatar="https://bit.ly/code-beast"/>
      <Comment comments="omg!" createdAt="2d" likes={20} username="perry" userAvatar="https://bit.ly/ryan-florence"/>
     
    </>
  );
};

export default PostPage;
