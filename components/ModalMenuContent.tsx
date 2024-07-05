import { TableCellsIcon } from "@heroicons/react/24/outline";
import AffiliateList from "@/components/AffiliateList";
import Badge from "@/components/shared/Badge";
import BusinessQuestionList from "@/components/BusinessQuestionList";
import CopyLink from "@/components/CopyLink";
import KpiList from "@/components/KpiList";
import MetricCount from "@/components/MetricCount";
import MetricLast from "@/components/MetricLast";
import MetricPage from "@/components/MetricPage";
import MetricType from "@/components/MetricType";
import Modal from "@/components/shared/Modal";
import RequestButton from "@/components/shared/RequestButton";

type ModalType = "KPI" | null;

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
        </>
      )}
    </Modal>
  );
};
