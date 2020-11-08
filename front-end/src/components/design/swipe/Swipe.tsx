import React, { ReactElement, Component } from 'react';
import {
    AspectRatioBox,
    Flex,
    Heading,
    IconButton,
    Image,
    useColorMode,
    Text,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    Box,
    Tag,
    Icon,
    Button,
    Skeleton,
} from '@chakra-ui/core';
import { useQuery, QueryCache, ReactQueryCacheProvider } from 'react-query';
import { useTrail, animated } from 'react-spring';
export function Swipe(): ReactElement {
    let { isLoading, error, data }: any = useQuery<any, any>('repoData', () =>
        fetch((process.env.REACT_APP_URL || "localhost") + '/recommend/test1').then((res) => res.json())
    );
    const [rating, setRating] = React.useState(5);
    const { colorMode, toggleColorMode } = useColorMode();
    const is_light: boolean = colorMode == 'light';
    const colors = ['red', 'green', 'blue', 'orange', 'purple', 'yellow'];

    const max_rating: number = 10;

    // const movie_data: any = {
    //     image_url:
    //         'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
    //     title: 'The Avengers',
    //     release_date: '4th May 2012',
    //     genres: ['Action', 'Adventure', 'Sci-Fi'],
    // };

    if (data)
        data.image_url = 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg';

    const movie_thumb = React.useMemo(
        () => (
            <Box position="absolute" top={5}>
                <Flex direction="column" justify="flex-start" align="center" w="200px">
                    {isLoading  ? (
                        <Skeleton width="100%" height="300px"/>
                    ) : (
                        <>
                            <Heading
                                size="lg"
                                mb="10px"
                                width="200px"
                                whiteSpace="normal"
                                textAlign="center"
                                height="30px"
                            >
                                {data.title}
                            </Heading>
                            <Image
                                width="250px"
                                src={data?.image_url}
                                alt="Dan Abramov"
                                border="2px solid white"
                                // borderColor={is_light ? 'black' : 'white'}
                            />
                            <Flex
                                direction="row"
                                justify="flex-start"
                                align="flex-start"
                                mt="10px"
                                wrap="wrap"
                                maxWidth="100%"
                                position="relative"
                            >
                                {data.genres?.map((genre: string, i: number) => (
                                    <Box
                                        border="1px solid #9F7AEA"
                                        mb="5px"
                                        mr={i !== data.genres.length - 1 ? '5px' : '0px'}
                                        borderRadius="4px"
                                        padding="0px 4px 0px 4px"
                                        fontWeight="500"
                                        color="#9F7AEA"
                                        children={genre}
                                        fontSize={10}
                                        textTransform="capitalize"
                                    />
                                ))}
                            </Flex>
                        </>
                    )}
                </Flex>
            </Box>
        ),
        [data]
    );

    return (
        <Flex width="100%" direction="column" justify="center" align="center" mt="0px" pr="15%" pl="15%">
            <Flex h="10px" width="100%" direction="row" justify="center">
                {new Array(max_rating).fill(0).map((a: any, i: number) => {
                    const color: string = i <= rating ? 'yellow.300' : is_light ? 'gray' : 'white';
                    return <Icon name="star" color={color} mr={i !== 0 ? '3px' : '0px'} />;
                })}
            </Flex>
            <Slider
                max={max_rating}
                min={0}
                defaultValue={rating}
                onChange={(value: number) => setRating(value)}
                mt="30px"
            >
                <SliderTrack />
                <SliderFilledTrack />
                <SliderThumb>
                    <Box color="tomato" />
                    {movie_thumb}
                </SliderThumb>
            </Slider>
            <Flex mt="450px" direction="row" w="100%" justify="space-evenly">
                <Button width="30%" variant="solid" variantColor="green" children="Vote" />
                <Button width="30%" variant="solid" variantColor="blue" children="Skip" />
            </Flex>
        </Flex>
    );
}
