import Head from "next/head";
import Layout from "@/components/Layout";
import Poster from "@/components/Poster/Poster";
import Loading from "@/components/Loading/Loading";
import Link from "next/link";
import styles from "@/styles/Home.module.scss";
import { useEffect } from "react";
import { getMovieData } from "@/redux/actions/movies";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/reducers";
import { useCallback, useState } from "react";

const Home = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const data = useSelector((state: RootState) => state.movies);
  const [ loading, setLoading ] = useState(true);
  const getData = useCallback(async () => dispatch(getMovieData()), [dispatch]);

  useEffect(() => {
    if (!data.movies.length) getData();
    else setLoading(false);
  }, [data]);

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
          <Loading loading = {loading}/>
          <div className={styles.movie_poster}>
            {data.movies.map((movie, idx) => (
              <Link href={"movie/" + movie.imdbID} key={idx}>
                <Poster imageLink={movie.Poster} title={movie.Title} />
              </Link>
            ))}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Home;
