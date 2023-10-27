import { Box, Button, Card, CardContent, FormControl, InputLabel, OutlinedInput, Typography } from "@mui/material";
import { Form, useLoaderData } from "react-router-dom"
import type { Posts } from "../../api/JsonPlaseholderAPI/JsonPlaseholderAPI";

const EditPost = () => {
  const post = useLoaderData() as Posts;

  return (
    <>
      <Typography variant='h5' gutterBottom>
        Edit Post
      </Typography>
      <Card>
        <CardContent>
          <Form method="patch">
            <Box mb={2}>
              <FormControl fullWidth>
                <InputLabel htmlFor="title">Title</InputLabel>
                <OutlinedInput id="title" name="title" label="Title" fullWidth defaultValue={post.title} />
              </FormControl>
            </Box>
            <Box mb={2}>
              <FormControl fullWidth>
                <InputLabel htmlFor="postbody">Text Post</InputLabel>
                <OutlinedInput id="postbody" name="postbody" label="Text Post" fullWidth defaultValue={post.body} />
              </FormControl>
            </Box>
            <Button variant={'contained'} type="submit" color={'primary'}>
              Save
            </Button>
          </Form>
        </CardContent>
      </Card>
    </>
  )
}

export { EditPost }
