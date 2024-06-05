import { useEffect } from "react";
import {
  getFineType,
  getFundsRaised,
  getInterestRate,
  getLoanedMoney,
  getRaisedMoney,
} from "../../../services/statisticsService";
import { useDispatch, useSelector } from "react-redux";
import {
  setFundsRaised,
  setInterestRate,
  setTotalFundsRaised,
  setTotalInterestRate,
  setTotalLoanedMoney,
  setRaisedMoney,
  setFineType,
} from "../../../store/slices/statistics/statisticsSlice";
import { RootState } from "../../../store/store";

const useStatics = () => {
  const dispatch = useDispatch();

  const {
    fundsRaised,
    totalFundsRaised,
    interestRate,
    totalInterestRate,
    totalLoanedMoney,
    raisedMoney,
    fineType,
  } = useSelector((state: RootState) => state.statistics);

  useEffect(() => {
    getFundsRaised().then((response) => {
      dispatch(setFundsRaised(response.estadisticas));
      dispatch(setTotalFundsRaised(response.total));
    });
    getInterestRate().then((response) => {
      dispatch(setInterestRate(response.estadisticas));
      dispatch(setTotalInterestRate(response.total));
    });
    getLoanedMoney().then((response) => {
      dispatch(setTotalLoanedMoney(response.data));
    });
    getRaisedMoney().then((response) => {
      dispatch(setRaisedMoney(response.estadisticas));
    });
    getFineType().then((response) => {
      dispatch(setFineType(response.estadisticas));
    });
  }, [dispatch]);

  return {
    fundsRaised,
    totalFundsRaised,
    interestRate,
    totalInterestRate,
    totalLoanedMoney,
    raisedMoney,
    fineType,
  };
};

export default useStatics;
