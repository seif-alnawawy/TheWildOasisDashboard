import { useMoveBack } from "../hooks/useMoveBack";
import Heading from "../ui/Heading";

export default function NotFoundPage() {
  const moveBack = useMoveBack();

  return (
    <div>
      <div>
        <Heading as="h1">
          The page you are looking for could not be found 😢
        </Heading>
        <button onClick={moveBack} size="large">
          &larr; Go back
        </button>
      </div>
    </div>
  );
}
