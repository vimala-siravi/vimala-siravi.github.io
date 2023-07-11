import { Head } from "$fresh/runtime.ts";
import { CSS, render } from "$gfm";
import Card from "../layout/Card.tsx";

interface GitIntroduction {
  intro: string;
}
const GitIntroduction = (props: GitIntroduction) => {
  return (
    <>
      <Head>
        <title>Vimala Siravi Portfolio</title>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>
      <Card>
        <div
          class="p-4 markdown-body "
          dangerouslySetInnerHTML={{ __html: render(props.intro) }}
        />
      </Card>
    </>
  );
};

export default GitIntroduction;
