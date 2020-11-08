import {
    Box,
    Flex,
    SimpleGrid,
    Image,
    Button,
    Skeleton,
    Heading,
    useColorMode,
    IconButton,
} from '@chakra-ui/core';
import React, { ReactElement } from 'react';
import { useCookies } from 'react-cookie';
import { getGenreById } from '../../../utils/utils';
import { MovieGenre } from '../extra/MovieGenre';

export function Rate(): ReactElement {
    const [cookies, setCookie, removeCookie] = useCookies(['reco']);
    const [data, setData] = React.useState<any>();

    const [showAmount, setShowAmount] = React.useState(5);

    React.useEffect(() => {
        fetch((process.env.REACT_APP_URL || 'localhost') + '/user/' + cookies?.auth?.username).then((res) => res.json()).then((res) => setData(res))
    }, []);

    const movie_list = React.useMemo(() => {
        if (!data) return <Skeleton width="100%" height="100px" />;
        const movies = [];
        for (let i = 0; i < data?.unratedMovies?.length || 0; i++) {
            if (i >= showAmount) break;
            movies.push(<MovieDetails movie_data={data?.unratedMovies[i]} index={i} />);
        }
        return (
            <SimpleGrid columns={1} spacing={1}>
                {movies}
            </SimpleGrid>
        );
    }, [data, showAmount]);
    return (
        <Box mr="15px" ml="15px">
            {movie_list}
            {showAmount < data?.unratedMovies?.length && (
                <Button borderRadius="0px" width="100%" mt={1} onClick={() => setShowAmount(showAmount + 5)}>
                    Load more
                </Button>
            )}
        </Box>
    );
}
function MovieDetails({ movie_data, index }: any) {
    const [hover, setHover] = React.useState(-1);
    const { colorMode } = useColorMode();
    const is_light: boolean = colorMode == 'light';
    const [cookies, setCookie, removeCookie] = useCookies(['reco']);
    const [hide, setHide] = React.useState(false);

    const [data, setData] = React.useState<any>();
    React.useEffect(() => {
        fetch((process.env.REACT_APP_URL || 'localhost') + '/movie/' + movie_data._id)
            .then((res) => res.json())
            .then((res) => {
                setData(res);
            });
    });
    const vote = (rating: number) => {
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
        }).then(() => setHide(true));
    };
    if (hide) return <></>;
    if (!data) return <Skeleton width="100%" height="100px" />;
    return (
        <Flex
            bg={is_light ? 'gray.100' : 'gray.700'}
            padding="5px 5px 5px 5px"
            transition="ease-in-out height 0.5s"
            direction="row"
            justify="space-between"
            height={'80px'}
        >
            <Flex direction="row">
                <Image height="100%" src={data?.poster_path} alt="Dan Abramov" border="1px solid white" />
                <Flex direction="column" justify="flex-start" height="100%" ml="15px">
                    <Heading size="lg" mb="5px">
                        {data.title}
                    </Heading>
                    <Flex direction="row" mb="10px">
                        {data?.genre_ids?.map((genre: string) => (
                            <MovieGenre mr="5px" children={getGenreById(genre)} />
                        ))}
                    </Flex>
                </Flex>
            </Flex>
            <Flex direction="column" height="100%" justify="flex-start" mr="15px" mt="20px">
                <Flex direction="row">
                    {new Array(10).fill(0).map((a: any, i: number) => {
                        const color: string = i <= hover ? 'yellow.300' : is_light ? 'gray.300' : 'white';
                        return (
                            <IconButton
                                aria-label=""
                                variant="ghost"
                                color={color}
                                mr="3px"
                                icon="star"
                                onClick={() => vote(i + 1)}
                                onMouseEnter={() => setHover(i)}
                                onMouseLeave={() => setHover(-1)}
                            />
                        );
                    })}
                </Flex>
            </Flex>
        </Flex>
    );
}