"use client";
import { Provider } from "react-redux";
import { store } from "@/store";

import AffiliateList from "@/components/AffiliateList";
import BusinessQuestionList from "@/components/BusinessQuestionList";
import KpiList from "@/components/KpiList";
import MetricCount from "@/components/MetricCount";
import MetricLast from "@/components/MetricLast";
import MetricPage from "@/components/MetricPage";
import MetricType from "@/components/MetricType";
import RequestButton from "@/components/shared/RequestButton";

export default function TestPage() {
  return (
    <Provider store={store}>
      <KpiList />
      <AffiliateList />

      <div className="grid gap-x-8 gap-y-4 grid-cols-4 mt-8">
        <div className="verical-line"><MetricCount /></div>
        <div className="verical-line"><MetricType /></div>
        <div className="verical-line"><MetricPage /></div>
        <div className="verical-line"><MetricLast /></div>
      </div>
      
      <BusinessQuestionList />
      <div className="mt-4 mx-auto w-[88px]">
        <RequestButton />
      </div>
    </Provider>
  );
}
