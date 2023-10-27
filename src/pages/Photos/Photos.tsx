// import { useEffect, useState } from "react";
// import JsonPlaseholderAPI from "../../api/JsonPlaseholderAPI/JsonPlaseholderAPI";
import { Grid, ImageList, ImageListItem, Typography } from "@mui/material";
import { Loader } from "../../components/Loader/Loader";
import { useLoaderData, useNavigation } from "react-router-dom";
import type { Photo } from "../../api/JsonPlaseholderAPI/JsonPlaseholderAPI";

const Photos = () => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [photos, setPhotos] = useState([]);

  // useEffect(() => {
  //   setIsLoading(true)
  //   const controller = new AbortController()
  //   JsonPlaseholderAPI.getPhotos({ signal: controller.signal })
  //   .then(setPhotos)
  //   .finally(() => setIsLoading(false))

  //   return () => {
  //     controller.abort()
  //   }
  // }, []);

  // console.log(photos);
  const photos = useLoaderData() as Photo[];
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  //console.log({ photos, isLoading });

  return (<>
    <Typography variant='h5' gutterBottom>
      Photos
    </Typography>
    <Grid container spacing={2}>
      {isLoading ? (
        <Loader />
      ) : (
        <ImageList gap={10} cols={5}>
          {photos.map((photo) => (
            <ImageListItem key={photo.id}>
              <img src={photo.url} alt={photo.title} ></img>
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </Grid>
  </>
  )
};

export { Photos }
