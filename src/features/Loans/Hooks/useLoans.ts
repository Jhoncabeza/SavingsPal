import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setAllLoands,
  setCurrentLoand,
  setLoadingLoand,
  setShowFormLoand,
  setStateLoand,
} from "../../../store/slices/loands/loandsSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { getAllLoands, getUpdateLoand } from "../../../services/loandService";
import { IRow } from "../../../types";
import { ILoandFormData } from "../../../types/loand.interface";
import { enqueueSnackbar } from "notistack";

const useLoans = () => {
  const dispatch = useDispatch();

  const { allLoands, loadingLoand, currentLoand, showFormLoand, stateLoand } =
    useSelector((state: RootState) => state.loand);

  useEffect(() => {
    dispatch(setLoadingLoand(true));
    setTimeout(() => {
      getAllLoands()
        .then((response) => {
          if (200 === response.status) {
            dispatch(setAllLoands(response.data.data.responseList));
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          dispatch(setLoadingLoand(false));
        });
    }, 1000);
  }, [dispatch, stateLoand]);

  const handleBackLoand = () => {
    dispatch(setCurrentLoand(null));
    dispatch(setShowFormLoand(false));
  };

  const handleRowClick = (loand: IRow) => {
    dispatch(setCurrentLoand(loand));
    dispatch(setShowFormLoand(true));
  };

  const handleOnSubmit = (data: ILoandFormData) => {
    dispatch(setLoadingLoand(true));

    getUpdateLoand({
      idPrestamo: data.idPrestamo,
      nombre: data.nombre,
      apellido: data.apellido,
      cedula: data.cedula,
      estadoPago: data.estadoPago,
      fecha: data.fecha,
      valorMensual: data.valorMensual,
      valorPrestamo: data.valorPrestamo,
      observaciones: data.observaciones,
      plazoPago: data.plazoPago,
      tasaInteres: 0.04,
    })
      .then((response) => {
        enqueueSnackbar(response.data.message, {
          variant: "success",
        });
      })
      .catch((error) => {
        enqueueSnackbar(error.data.message, {
          variant: "error",
        });
      })
      .finally(() => {
        dispatch(setLoadingLoand(false));
        dispatch(setShowFormLoand(!showFormLoand));
        dispatch(setStateLoand(!stateLoand));
      });
  };

  return {
    allLoands,
    loadingLoand,
    currentLoand,
    showFormLoand,
    handleBackLoand,
    handleOnSubmit,
    handleRowClick,
  };
};

export default useLoans;
