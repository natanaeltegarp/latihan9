import {
  Card,
  CardBody,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import "../App.css";

const Project = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get("https://api.github.com/users/natanaeltegarp/repos")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <span>Loading... </span>;
  }
  if (error) {
    return <span>{error}</span>;
  }
  return (
    <div className="project">
      <h1>My Projects</h1>
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
      <div className="project-item">
        {data.map((project, index) => {
          return (
            <Card maxW="sm" key={index}>
              <CardBody>
                <Image
                  src="https://picsum.photos/300?grayscale"
                  alt="Green double couch with wooden legs"
                  borderRadius="1g"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{project.name}</Heading>
                  <Text>{project.description}</Text>
                </Stack>
              </CardBody>
              <Divider />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
