import React from 'react';
import {
    Box,
    Heading,
    AspectRatio,
    Image,
    Text,
    Center,
    HStack,
    Stack,
} from "native-base";
import { DARK_COLOR, LIGHT_COLOR, PRIMARY_COLOR } from '../../constants/colors';
import { IArticlesProps } from '../../interfaces/News';
import { useColorScheme } from 'react-native';

const CardWithImage = ({ item }: IArticlesProps) => {
    const theme = useColorScheme();
    return (
        <Box borderColor="coolGray.100" borderBottomWidth=".4" marginBottom="5">
            <Box>
                <AspectRatio w="100%" ratio={16 / 9}>
                    <Image
                        source={{
                            uri: item.urlToImage,
                        }}
                        alt="image"
                    />
                </AspectRatio>
                <Center
                    bg={PRIMARY_COLOR}
                    _text={{
                        color: "warmGray.50",
                        fontWeight: "700",
                        fontSize: "xs",
                    }}
                    position="absolute"
                    bottom="0"
                    px="3"
                    py="1.5"
                >
                    {item.source.name}
                </Center>
            </Box>
            <Stack p="4" space={3}>
                <Stack space={2}>
                    <Heading size="md" ml="-1">
                        {item.title}
                    </Heading>
                    <Text
                        fontSize="xs"
                        color={PRIMARY_COLOR}
                        fontWeight="500"
                        ml="-0.5"
                        mt="-1"
                    >
                        {item.author}
                    </Text>
                </Stack>
                <Text fontWeight="400" color={theme == "dark" ? LIGHT_COLOR : DARK_COLOR}>
                    {item.description}
                </Text>
            </Stack>
        </Box>
    );
};

export default CardWithImage;