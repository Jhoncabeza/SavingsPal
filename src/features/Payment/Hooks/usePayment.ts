// Redux
import { useSelector, useDispatch } from "react-redux";

// Store
import { RootState } from "../../../store/store";

// Slice,service and interfaces
import { setLoadingPayment } from "../../../store/slices/payments/paymentsSlice";
import { getCreatePayment } from "../../../services/paymentService";
import { IPayment } from "../../../types/payment.interface";
import { useSnackbar } from "notistack";
import { corregirCodificacion } from "../../../utils";

const usePayment = () => {
  const { loadingPayment } = useSelector((state: RootState) => state.payment);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleOnSubmit = (row: IPayment) => {
    dispatch(setLoadingPayment(true));
    getCreatePayment(row)
      .then((createPayment) => {
        enqueueSnackbar(corregirCodificacion(createPayment.data.message), {
          variant: "success",
        });
      })
      .catch((error) => {
        enqueueSnackbar(corregirCodificacion(error.data.message), {
          variant: "error",
        });
      })
      .finally(() => {
        dispatch(setLoadingPayment(false));
      });
  };

  return { loadingPayment, handleOnSubmit };
};

export default usePayment;
