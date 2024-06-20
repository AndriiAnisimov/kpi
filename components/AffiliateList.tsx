import { useSelector } from "react-redux";
import { RootState } from "../store";

import Title from "./Title";

export default function AffiliateList() {
  const assets = useSelector((state: RootState) => state.assets.assets);
  // const favoriteAssets = useSelector((state: RootState) => 
  //   state.assets.assets.filter(asset => asset.favorite === true)
  // );
  const uniqueAffiliates = (Array.from(new Set(assets.filter(asset => asset.affiliate).map(asset => asset.affiliate)))).join(", ");

  return (
    <>
      <Title title="Affiliate List" />
      {uniqueAffiliates}
    </>
  );
}
