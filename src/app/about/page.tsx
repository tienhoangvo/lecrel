import { Text } from "@/components/ui/Text";
import { css } from "@pigment-css/react";

export default function AboutPage() {
  return (
    <div>
      <Text as="h1" variant="display/large">
        About
      </Text>
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        })}
      >
        <Text variant="body/medium">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem numquam
          vel accusantium voluptates molestias inventore, nisi maiores tenetur
          ipsam laudantium quisquam nobis repudiandae deserunt officia, a at
          sapiente cumque doloremque?
        </Text>
        <Text variant="body/medium">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
          neque quasi natus atque! Sed eaque, tempore illum aliquid itaque
          reiciendis, quis suscipit consectetur modi quia debitis qui nesciunt
          facere doloremque! Minus necessitatibus aut enim ut ea nostrum
          perspiciatis rem, voluptate laudantium, iste eligendi est libero harum
          praesentium quod expedita illo ab nam alias beatae dolores consequatur
          placeat odio! Minima, quia.
        </Text>
        <Text variant="body/medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
          necessitatibus quisquam doloremque, est laboriosam ducimus nulla
          delectus unde placeat in assumenda tempore, adipisci sapiente
          dignissimos provident repellendus aliquid ea. Asperiores. Id vel, nemo
          at commodi optio ea nam quos maiores cum reprehenderit fuga tempora
          necessitatibus ad sequi! Doloribus animi voluptatibus, laudantium
          ullam at ipsum! Tempore id voluptatem vero nisi quasi! Incidunt,
          blanditiis officia dignissimos eos inventore ullam dicta pariatur
          eveniet velit quos, nemo quaerat eius, eaque minima nostrum. Placeat
          laborum nisi excepturi illo, neque dicta adipisci eveniet itaque
          aliquid sint!
        </Text>
      </div>
    </div>
  );
}
