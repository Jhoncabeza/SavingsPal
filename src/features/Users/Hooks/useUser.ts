import { useEffect } from "react";
import {
  getAllUsers,
  getCreateUser,
  getUpdateStateUser,
} from "../../../services/userService";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useDispatch } from "react-redux";
import {
  setAllUsers,
  setCurrentUser,
  setLoading,
  setShowForm,
  setStateUser,
} from "../../../store/slices/users/usersSlice";
import { useSnackbar } from "notistack";
import { IUserFormData } from "../../../types/user.interface";
import { IRow } from "../../../types";

const useUser = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const { allUsers, showForm, loading, currentUser, stateUser } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(setLoading(true));
    setTimeout(() => {
      getAllUsers()
        .then((response) => {
          if (200 === response.status) {
            dispatch(setAllUsers(response.data.data.responseList));
          }
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          dispatch(setLoading(false));
        });
    }, 1000);
  }, [dispatch, stateUser]);

  const handleCreateUserClick = () => {
    dispatch(setCurrentUser(null));
    dispatch(setShowForm(!showForm));
  };

  const handleSwitchState = (cedula: number, value: boolean) => {
    dispatch(setLoading(true));
    setTimeout(() => {
      getUpdateStateUser({ cedula: cedula, estado: value })
        .then((response) => {
          enqueueSnackbar(response.data.message, {
            variant: "success",
          });
        })
        .catch((error) => {
          enqueueSnackbar(error.response.data.message, {
            variant: "error",
          });
        })
        .finally(() => {
          dispatch(setStateUser(!stateUser));
        });
    }, 1000);
  };

  const handleOnSubmit = (data: IUserFormData) => {
    console.log("data.idTipoCuenta", data);
    const idTipoCuenta = data.idTipoCuenta === "Ahorros" ? "1" : "2";
    dispatch(setLoading(true));

    getCreateUser({
      nombre: data.nombre,
      apellidos: data.apellidos,
      cedula: data.cedula,
      correoElectronico: data.correoElectronico,
      numeroCuenta: data.numeroCuenta,
      nombreBanco: data.nombreBanco,
      idTipoCuenta: idTipoCuenta,
      fechaNacimiento: data.fechaNacimiento,
      estado: data.estado,
    })
      .then((response) => {
        enqueueSnackbar(response.data.message, {
          variant: "success",
        });
      })
      .catch((error) => {
        enqueueSnackbar(error.response.data.message, {
          variant: "error",
        });
      })
      .finally(() => {
        dispatch(setLoading(false));
        dispatch(setShowForm(!showForm));
        dispatch(setStateUser(!stateUser));
      });
  };

  const handleRowClick = (row: IRow) => {
    handleCreateUserClick();
    const user: IUserFormData = {
      nombre: row.nombres.toString(),
      apellidos: row.apellidos.toString(),
      cedula: Number(row.cedula),
      correoElectronico: row.correo.toString(),
      numeroCuenta: Number(row.numerodecuenta),
      nombreBanco: row.banco.toString(),
      fechaNacimiento: row.fecha.toString(),
      idTipoCuenta: row.tipodecuenta.toString(),
      estado: row.estado as boolean,
    };

    dispatch(setCurrentUser(user));
  };

  return {
    allUsers,
    showForm,
    loading,
    currentUser,
    handleCreateUserClick,
    handleSwitchState,
    handleOnSubmit,
    handleRowClick,
  };
};

export default useUser;
