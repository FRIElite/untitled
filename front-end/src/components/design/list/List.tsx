import { Box, Flex, Text, SimpleGrid, Image, Button, Skeleton, Heading, Icon, useColorMode } from '@chakra-ui/core';
import React, { ReactElement } from 'react';
import { useCookies } from 'react-cookie';
import { useQuery } from 'react-query';
import { getGenreById } from '../../../utils/utils';
import { MovieGenre } from '../extra/MovieGenre';

const movies_data = [
    {
        image_url:
            'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
        title: 'The Avengers',
        release_date: '4th May 2012',
        genres: ['Action', 'Adventure', 'Sci-Fi'],
    },
    {
        image_url:
            'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
        title: 'The Avengers',
        release_date: '4th May 2012',
        genres: ['Action', 'Adventure', 'Sci-Fi'],
    },
    {
        image_url:
            'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
        title: 'The Avengers',
        release_date: '4th May 2012',
        genres: ['Action', 'Adventure', 'Sci-Fi'],
    },
    {
        image_url:
            'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
        title: 'The Avengers',
        release_date: '4th May 2012',
        genres: ['Action', 'Adventure', 'Sci-Fi'],
    },
    {
        image_url:
            'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
        title: 'The Avengers',
        release_date: '4th May 2012',
        genres: ['Action', 'Adventure', 'Sci-Fi'],
    },
];

export function List(): ReactElement {
    const [cookies, setCookie, removeCookie] = useCookies(['reco']);
    let { isLoading, error, data }: any = useQuery<any, any>('repoData', async () =>
        fetch((process.env.REACT_APP_URL || 'localhost') + '/user/' + cookies?.auth?.username).then((res) => res.json())
    );

    const [showAmount, setShowAmount] = React.useState(5);
    console.log(data);

    const movie_list = React.useMemo(() => {
        if (isLoading) return <Skeleton width="100%" height="100px" />;
        const movies = [];
        for (let i = 0; i < data?.ratedMovies?.length || 0; i++) {
            if (i >= showAmount) break;
            movies.push(<MovieDetails movie_data={data?.ratedMovies[i]} index={i}/>);
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
            {showAmount < data?.ratedMovies?.length && (
                <Button borderRadius="0px" width="100%" mt={1} onClick={() => setShowAmount(showAmount + 5)}>
                    Load more
                </Button>
            )}
        </Box>
    );
}
function MovieDetails({ movie_data, index }: any) {
    const [hover, setHover] = React.useState(false);
    const { colorMode, toggleColorMode } = useColorMode();
    const is_light: boolean = colorMode == 'light';
    const [movie, setMovie] = React.useState();
    const [cookies, setCookie, removeCookie] = useCookies(['reco']);
    // let { isLoading, error, data }: any = useQuery<any, any>([`movie_data_${index}`, index], async () =>
    //     fetch((process.env.REACT_APP_URL || 'localhost') + '/movie/' + movie_data._id).then((res) => res.json())
    // );
    // console.log({new_data: data});
    const [data, setData] = React.useState<any>();
    React.useEffect(() => {
        fetch((process.env.REACT_APP_URL || 'localhost') + '/movie/' + movie_data._id).then((res) => res.json()).then((res) => {
            setData(res);
        });
        console.log((process.env.REACT_APP_URL || 'localhost') + '/movie/' + movie_data._id);
        
    })
    // movie_data = {
    //     image_url:
    //         'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
    //     title: 'The Avengers',
    //     release_date: '4th May 2012',
    //     genres: ['Action', 'Adventure', 'Sci-Fi'],
    // };
    // if(isLoading || error) return <Skeleton width="100%" height="100px" />;
    if(!data) return <Skeleton width="100%" height="100px" />;
    return (
        <Flex
            bg={is_light ? 'gray.100' : 'gray.700'}
            padding="5px 5px 5px 5px"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            transition="ease-in-out height 0.5s"
            direction="row"
            justify="space-between"
            height={hover ? '300px' : '80px'}
        >
            <Flex direction="row">
                <Image height="100%" src={data?.poster_path} alt="Dan Abramov" border="1px solid white" />
                <Flex direction="column" justify="flex-start" height="100%" ml="15px">
                    <Heading size="lg" mb="5px">
                        {data.title}
                    </Heading>
                    <Flex direction="row" mb="10px">
                        {data?.genre_ids?.map((genre: string) => (
                            <MovieGenre mr="5px" children={getGenreById( genre)} />
                        ))}
                    </Flex>

                    {hover && (
                        <Flex direction="column" justify="flex-start">
                            <Text>Release date: {data?.release_date}</Text>
                            <Text>{data?.overview}</Text>
                        </Flex>
                    )}
                </Flex>
            </Flex>
            <Flex direction="column" height="100%" justify="flex-start" mr="15px" mt="20px">
                <Flex direction="row">
                    {new Array(10).fill(0).map((a: any, i: number) => {
                        const color: string = i < movie_data.userRating ? 'yellow.300' : is_light ? 'gray.300' : 'white';
                        return <Icon name="star" color={color} mr="3px" size="30px" />;
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