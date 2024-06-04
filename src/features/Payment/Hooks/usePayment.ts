// Redux
import { useSelector, useDispatch } from "react-redux";

// Store
import { RootState } from "../../../store/store";

// Slice,service and interfaces
import { setLoadingPayment } from "../../../store/slices/payments/paymentsSlice";
import { getCreatePayment } from "../../../services/paymentService";
import { IPayment } from "../../../types/payment.interface";

const usePayment = () => {
  const { loadingPayment } = useSelector((state: RootState) => state.payment);
  const dispatch = useDispatch();

  const handleOnSubmit = (row: IPayment) => {
    dispatch(setLoadingPayment(true));
    getCreatePayment(row)
      .then((createPayment) => {
        console.log(createPayment);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => dispatch(setLoadingPayment(false)));
  };

  return { loadingPayment, handleOnSubmit };
};

export default usePayment;
