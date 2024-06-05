import { useEffect } from "react";
import {
  getFundsRaised,
  getInterestRate,
} from "../../../services/staticsService";
import { useDispatch, useSelector } from "react-redux";
import {
  setFundsRaised,
  setInterestRate,
  setTotalFundsRaised,
  setTotalInterestRate,
} from "../../../store/slices/statistics/statisticsSlice";
import { RootState } from "../../../store/store";

const useStatics = () => {
  const dispatch = useDispatch();

  const { fundsRaised, totalFundsRaised, interestRate, totalInterestRate } =
    useSelector((state: RootState) => state.statistics);

  useEffect(() => {
    getFundsRaised().then((response) => {
      dispatch(setFundsRaised(response.estadisticas));
      dispatch(setTotalFundsRaised(response.total));
    });
    getInterestRate().then((response) => {
      dispatch(setInterestRate(response.estadisticas));
      dispatch(setTotalInterestRate(response.total));
    });
  }, [dispatch]);

  return { fundsRaised, totalFundsRaised, interestRate, totalInterestRate };
};

export default useStatics;
