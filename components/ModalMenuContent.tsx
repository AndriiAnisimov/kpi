import AffiliateList from "./AffiliateList";
import Badge from "./Badge";
import BusinessQuestionList from "./BusinessQuestionList";
import CopyLink from "./CopyLink";
import Highchart from "./Highchart";
import KpiList from "./KpiList";
import MetricCount from "./MetricCount";
import MetricLast from "./MetricLast";
import MetricPage from "./MetricPage";
import MetricType from "./MetricType";
import Modal from "./Modal";
import RequestButton from "./RequestButton";
import { TableCellsIcon } from "@heroicons/react/24/outline";

type ModalType = "KPI" | "Layouts" | "Storyboards" | null;

export default function ModalContent({ type, onClose }: { type: ModalType; onClose: () => void }) {
  return (
    <Modal onClose={onClose}>
      <CopyLink />
      <div className="bg-slate-100 rounded text-gray-500 mx-auto p-4 w-20 h-20">
        <TableCellsIcon />
      </div>
      
      <div className="flex justify-center items-center mt-4">
        <h2 className="text-3xl mr-1">{type}</h2>
        <Badge title={type} />
      </div>

      {type === "KPI" && (
        <>
          <AffiliateList />

          <div className="grid gap-x-8 gap-y-4 grid-cols-4 mt-8">
            <div className="verical-line"><MetricCount /></div>
            <div className="verical-line"><MetricType /></div>
            <div className="verical-line"><MetricPage /></div>
            <div className="verical-line"><MetricLast /></div>
          </div>
          
          <BusinessQuestionList />
        </>
      )}

      {type === "Layouts" && (
        <>
          <KpiList />
          <h2 className="text-2xl text-center mt-4">Trend for Favorites KPI</h2>
          <Highchart />
        </>
      )}

      {type === "Storyboards" && (
        <>
          <KpiList />
          <AffiliateList />
          <BusinessQuestionList />
          <div className="mt-4 mx-auto w-[88px]">
            <RequestButton />
          </div>
        </>
      )}
    </Modal>
  );
};
