import React, { ReactElement } from 'react';
import {
    Flex,
    Heading,
    Image,
    useColorMode,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    Box,
    Icon,
    Button,
    Skeleton,
} from '@chakra-ui/core';
import { MovieGenre } from '../extra/MovieGenre';
import { useCookies } from 'react-cookie';
import { getGenreById } from '../../../utils/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export function Swipe(): ReactElement {
    const [reload, setReload] = React.useState(true);
    const [cookies, setCookie, removeCookie] = useCookies(['reco']);
    const [data, setData] = React.useState<any>();
    const [rating, setRating] = React.useState(5);
    const { colorMode } = useColorMode();
    const is_light: boolean = colorMode == 'light';

    const max_rating: number = 10;

    React.useEffect(() => {
        console.log((process.env.REACT_APP_URL || 'localhost') + '/recommend/' + cookies?.auth?.username);
        fetch((process.env.REACT_APP_URL || 'localhost') + '/recommend/' + cookies?.auth?.username)
            .then((res) => res.json())
            .then((res) => {
                return fetch((process.env.REACT_APP_URL || 'localhost') + '/movie/' + res._id).then((res) =>
                    res.json()
                );
            })
            .then((res) => setData(res))
            .then(() => setRating(5));
    }, [reload]);

    const movie_thumb = React.useMemo(
        () => (
            <Box position="absolute" top={5}>
                <Flex direction="column" justify="flex-start" align="center" w="200px">
                    {!data ? (
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
                                    <MovieGenre
                                        mr={i !== data.genre_ids.length - 1 ? '5px' : '0px'}
                                        children={getGenreById(genre)}
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

    const vote = () => {
        if (!data) return;

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
        }).then(() => setReload(!reload));
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
                value={rating}
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
            <Flex mt="500px" direction="row" w="80%" justify="space-evenly">
                <Button width="30%" variant="solid" variantColor="green" onClick={vote}>
                    <Box mr="10px">Vote</Box> <FontAwesomeIcon icon="check" />
                </Button>
                <Button
                    width="30%"
                    variant="solid"
                    variantColor="blue"
                    children="Skip"
                    onClick={() => setReload(!reload)}
                />
            </Flex>
        </Flex>
    );
}
