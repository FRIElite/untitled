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
import { MovieGenre } from '../extra/MovieGenre';
import { useCookies } from 'react-cookie';
import { getGenreById } from '../../../utils/utils';
export function Swipe(): ReactElement {
    const [cookies, setCookie, removeCookie] = useCookies(['reco']);
    console.log(cookies?.auth?.username);

    let { isLoading, error, data }: any = useQuery<any, any>('swipe', () =>
        fetch((process.env.REACT_APP_URL || 'localhost') + '/recommend/' + cookies?.auth?.username)
            .then((res) => res.json())
            .then((res) => {
                return fetch((process.env.REACT_APP_URL || 'localhost') + '/movie/' + res._id).then((res) =>
                    res.json()
                );
            })
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

    console.log(data);

    const movie_thumb = React.useMemo(
        () => (
            <Box position="absolute" top={5}>
                <Flex direction="column" justify="flex-start" align="center" w="200px">
                    {isLoading ? (
                        <Skeleton width="100%" height="300px" />
                    ) : (
                        <>
                            <Heading size="lg" mb="10px" width="300px" whiteSpace="normal" textAlign="center">
                                {data.title}
                            </Heading>
                            <Image
                                width="250px"
                                src={data?.poster_path}
                                alt="Dan Abramov"
                                border="2px solid white"
                                borderColor={is_light ? 'black' : 'white'}
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
                                {data.genre_ids?.map((genre: string, i: number) => (
                                    <MovieGenre mr={i !== data.genre_ids.length - 1 ? '5px' : '0px'} children={getGenreById(genre)} />
                                ))}
                            </Flex>
                        </>
                    )}
                </Flex>
            </Box>
        ),
        [data]
    );

    const vote = () => {
        if (!data) return;
        console.log({ data });

        fetch((process.env.REACT_APP_URL || 'localhost') + '/vote/' + cookies?.auth?.username, {
            method: 'PUT',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({
                _id: data._id,
                userRating: rating,
            }),
        }).then(() => window.location.reload());
    };

    return (
        <Flex width="100%" direction="column" justify="center" align="center" mt="0px" pr="15%" pl="15%">
            <Flex h="10px" width="100%" direction="row" justify="center">
                {new Array(max_rating).fill(0).map((a: any, i: number) => {
                    const color: string = i < rating ? 'yellow.300' : is_light ? 'gray.300' : 'white';
                    return <Icon name="star" color={color} mr="3px" size="30px" />;
                })}
            </Flex>
            <Slider
                max={max_rating}
                min={0}
                defaultValue={rating}
                onChange={(value: number) => setRating(value)}
                mt="35px"
            >
                <SliderTrack />
                <SliderFilledTrack />
                <SliderThumb>
                    <Box color="tomato" />
                    {movie_thumb}
                </SliderThumb>
            </Slider>
            <Flex mt="500px" direction="row" w="100%" justify="space-evenly">
                <Button width="30%" variant="solid" variantColor="green" children="Vote" onClick={vote} />
                <Button
                    width="30%"
                    variant="solid"
                    variantColor="blue"
                    children="Skip"
                    onClick={() => window.location.reload()}
                />
            </Flex>
        </Flex>
    );
}
