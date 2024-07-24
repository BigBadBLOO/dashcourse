import {Block} from "@/app/components/dsm/Block/block";
import {anchor} from "@/app/constants/anchor";
import {About} from "@/app/components/blocks/about/about";
import {Trading} from "@/app/components/blocks/trading/trading";
import {Objects} from "@/app/components/blocks/objects/objects";
import {Reviews} from "@/app/components/blocks/reviews/reviews";
import {Advantages} from "@/app/components/blocks/advantages/advantages";

import st from './page.module.scss';

export default function Home() {
  return (
    <main className={st.wrap}>
      <Block id={anchor.about}><About /></Block>
      <Block id={anchor.tradings}><Trading /></Block>
      <Block id={anchor.advantages}><Advantages /></Block>
      <Block id={anchor.objects}><Objects /></Block>
      <Block id={anchor.reviews}><Reviews /></Block>
    </main>
  );
}
