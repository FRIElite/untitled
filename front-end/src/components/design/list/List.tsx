import { Box, Flex, Text, SimpleGrid, Image, Button, Skeleton } from '@chakra-ui/core';
import React, { ReactElement } from 'react';
import { useQuery } from 'react-query';

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
    let { isLoading, error, data }: any = useQuery<any, any>('repoData', () =>
        fetch('https://untitled-app-001.herokuapp.com/user/test1').then((res) => res.json())
    );

    const movie_list = React.useMemo(() => {
        if(isLoading) return <Skeleton width="100%" height="100px" />
        return (
            <SimpleGrid columns={1} spacing={1}>
                {data?.[0].ratedMovies?.map((movie_data: any) => (
                    <MovieDetails movie_data={movie_data} />
                ))}
                <Button borderRadius="0px">Load more</Button>
            </SimpleGrid>
        );
    }, [data]);
    return (
        <Box mr="15px" ml="15px">
            {movie_list}
        </Box>
    );
}
function MovieDetails({ movie_data }: any) {
    const [hover, setHover] = React.useState(false);
    movie_data.image_url =
        'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg';
    const settings = hover
        ? {
              height: '250px',
          }
        : {
              height: '80px',
          };
    return (
        <Flex
            bg="tomato"
            padding="5px 5px 5px 5px"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            transition="ease-in-out height 0.5s"
            direction="row"
            justify="flex-start"
            {...settings}
        >
            <Image
                height="100%"
                src={movie_data?.image_url}
                alt="Dan Abramov"
                border="1px solid white"
                // borderColor={is_light ? 'black' : 'white'}
            />
            <Text>{movie_data.title}</Text>
            <Text>{movie_data.genres.join(', ')}</Text>
        </Flex>
    );
}
