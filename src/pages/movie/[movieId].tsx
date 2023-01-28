import Head from "next/head";
import Layout from "@/components/Layout";
import Rating from "@/components/Rating/Rating";
import styles from "@/styles/Movie.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { RootState } from "@/redux/reducers";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Dispatch } from "react";
import { useCallback, useState, useEffect } from "react";
import { getMovieData } from "@/redux/actions/movies";
import Loading from "@/components/Loading/Loading";

const Movie = () => {
  const router = useRouter();
  const [data, setData] = useState<MovieProps>();
  const [loading, setLoading] = useState(true);
  const movieId = router.query.movieId;
  const movieData = useSelector((state: RootState) => state.movies);
  const dispatch: Dispatch<any> = useDispatch();

  const getData = useCallback(async () => {
    dispatch( getMovieData() );
  }, [dispatch] );

  useEffect(() => {
    if (!movieData.movies.length) {
      getData();
    } else {
      setData(movieData.movies.filter((movie) => movie.imdbID == movieId)[0]);
      setLoading(false);
    }
  }, [data]);

  useEffect(() => {
    setData(movieData.movies.filter((movie) => movie.imdbID == movieId)[0]);
  }, [movieData]);

  return (
    <>
      <Head>
        <title>Movie App</title>
        <meta name="description" content="Simple Movie App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <main>
        <Layout>
          <Loading loading={loading} />
          { !loading && (
            <div className={styles.movie_detail}>
              <div className={styles.details}>
                <Link href="/">
                  <div className={styles.back}>← Back to Homepage</div>
                </Link>
                <br />
                <div className={styles.title}>{data?.Title}</div>
                <br />
                <Rating rating={data?.imdbRating} />
                <div className={styles.description}>{data?.Plot}</div>
              </div>
              <div className={styles.poster}>
                <Image
                  alt="poster"
                  src={data ? data.Poster : "/icon.png"}
                  width="600"
                  height="600"
                />
              </div>
            </div>
          )}
        </Layout>
      </main>
    </>
  );
};

export default Movie;
