import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Modal from "@/components/Modal";
import Button from "@/components/Button";
import { enumPaths } from "@/routes/routesUrls";
import { logOutUser } from "@/redux/reducers/user";
import { clearInsurance } from "@/redux/reducers/insurance";

interface ResultModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

interface resultElements {
  title: string;
  value: string;
}

const ResultElements = ({ title, value }: resultElements) => (
  <div className="flex justify-between gap-10 py-1">
    <p>{title}</p>
    <p>{value}</p>
  </div>
);

const ResultModal: FC<ResultModalProps> = ({ isOpen, setIsOpen }): JSX.Element => {
  const { insurance } = useSelector((state: any) => state.Insurance);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleResetForms = () => {
    navigate(enumPaths.home);
    dispatch(logOutUser());
    dispatch(clearInsurance());
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <h2>بیمه شخص ثالث</h2>
      <ResultElements title="نوع خودرو" value={insurance?.carType?.title} />
      <ResultElements title="مدل خودرو" value={insurance?.carModel?.title} />
      <ResultElements title="بیمه گر " value={insurance?.insuranceCompany?.title} />
      <ResultElements title="درصد تخفیف ثالث" value={insurance?.thirdPartyInsurance?.title} />
      <ResultElements title="درصد تخفیف حوادث راننده" value={insurance?.driverThirdPartyInsurance?.title} />
      <div className="flex justify-end">
        <Button text="استعلام مجدد" className=" px-3 mt-4" onClick={handleResetForms} />
      </div>
    </Modal>
  );
};

export default ResultModal;
