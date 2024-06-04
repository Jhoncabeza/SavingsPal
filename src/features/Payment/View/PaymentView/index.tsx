// Form and Hooks
import PaymentForm from "../../Form";
import usePayment from "../../Hooks/usePayment";

// HOC
import _LayoutCustomCard from "../../../../HOC/_LayoutCustomCard/_LayoutCustomCard";

// Modal
import ModalGeneric from "../../../../components/common/modal/ModalGeneric";

const PaymentView = () => {
  const { loadingPayment } = usePayment();

  return (
    <>
      <_LayoutCustomCard title="Pagos" children={<PaymentForm />} />
      <ModalGeneric loading={loadingPayment} />
    </>
  );
};

export default PaymentView;
