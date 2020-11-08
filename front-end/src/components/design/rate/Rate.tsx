import {
    Box,
    Flex,
    Text,
    SimpleGrid,
    Image,
    Button,
    Skeleton,
    Heading,
    Icon,
    useColorMode,
    IconButton,
} from '@chakra-ui/core';
import React, { ReactElement } from 'react';
import { useCookies } from 'react-cookie';
import { useQuery } from 'react-query';
import { getGenreById } from '../../../utils/utils';
import { MovieGenre } from '../extra/MovieGenre';

export function Rate(): ReactElement {
    const [cookies, setCookie, removeCookie] = useCookies(['reco']);
    let { isLoading, error, data }: any = useQuery<any, any>('ratedata', async () =>
        fetch((process.env.REACT_APP_URL || 'localhost') + '/user/' + cookies?.auth?.username).then((res) => res.json())
    );

    const [showAmount, setShowAmount] = React.useState(5);
    console.log(data);

    const movie_list = React.useMemo(() => {
        if (isLoading) return <Skeleton width="100%" height="100px" />;
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
    const { colorMode, toggleColorMode } = useColorMode();
    const is_light: boolean = colorMode == 'light';
    const [movie, setMovie] = React.useState();
    const [cookies, setCookie, removeCookie] = useCookies(['reco']);
    const [hide, setHide] = React.useState(false);
    // let { isLoading, error, data }: any = useQuery<any, any>([`movie_data_${index}`, index], async () =>
    //     fetch((process.env.REACT_APP_URL || 'localhost') + '/movie/' + movie_data._id).then((res) => res.json())
    // );
    // console.log({new_data: data});
    const [data, setData] = React.useState<any>();
    React.useEffect(() => {
        fetch((process.env.REACT_APP_URL || 'localhost') + '/movie/' + movie_data._id)
            .then((res) => res.json())
            .then((res) => {
                setData(res);
            });
        console.log((process.env.REACT_APP_URL || 'localhost') + '/movie/' + movie_data._id);
    });
    const vote = (rating: number) => {
        if (!data) return;
        console.log({ data });

        fetch((process.env.REACT_APP_URL || 'localhost') + '/vote/' + cookies?.auth?.username, {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({
                _id: data._id,
                userRating: rating,
            }), // body data type must match "Content-Type" header
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

/* 
"{
  "movie_data": {
    "_id": "5fa74a1433af7d2a2ad94ef6",
    "popularity": 139.434,
    "vote_count": 48,
    "video": false,
    "poster_path": "http://image.tmdb.org/t/p/w500/22jwKxZf4rcrmh2NS07SZAQYYNY.jpg",
    "id": 604578,
    "adult": false,
    "backdrop_path": "/324jDHMRHWZ8HLbjRJNwVPYJZT0.jpg",
    "original_language": "en",
    "original_title": "Spontaneous",
    "genre_ids": [
      35,
      27,
      878,
      10749
    ],
    "title": "Spontaneous",
    "vote_average": 7.3,
    "overview": "When students in their high school begin inexplicably exploding (literally...), seniors Mara and Dylan struggle to survive in a world where each moment may be their last.",
    "release_date": "2020-10-02"
  }
}"

*/
