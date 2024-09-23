import { Button } from "@/components/Button";
import { Text } from "@/components/Text";

export default function HomePage() {
  return (
    <div>
      <Text variant="display/large" as="h1">
        Hello Pigment
      </Text>
      <Button>Get started</Button>
    </div>
  );
}
