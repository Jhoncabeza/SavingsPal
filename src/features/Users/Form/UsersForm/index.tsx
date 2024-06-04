import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { FormControl, Grid, Switch } from "@mui/material";
import GenericInput from "../../../../components/common/inputs/GenericInput";
import {
  PrimaryButton,
  SecondaryButton,
} from "../../../../components/common/buttons/Button";
import styled from "styled-components";
import { IUserFormData } from "../../../../types/user.interface";
import useUser from "../../Hooks/useUser";

const StyledTypography = styled.div`
  font-size: 14px;
  color: #da5a51;
  margin: 10px 0;
`;

const schema: Yup.ObjectSchema<IUserFormData> = Yup.object().shape({
  cedula: Yup.number()
    .typeError("La cédula debe ser un número")
    .required("La cédula es obligatoria")
    .positive("La cédula debe ser un número positivo")
    .integer("La cédula debe ser un número entero"),
  nombre: Yup.string()
    .required("Los nombres son obligatorios")
    .min(3, "Los nombres deben tener al menos 3 caracteres"),
  apellidos: Yup.string().required("Los apellidos son obligatorios"),
  fechaNacimiento: Yup.string().required("La fecha es obligatoria").nullable(),
  correoElectronico: Yup.string().required("El correo es obligatorio"),
  estado: Yup.boolean().default(false),
  nombreBanco: Yup.string().required("El banco es obligatorio"),
  idTipoCuenta: Yup.string().required("El tipo de cuenta es obligatorio"),
  numeroCuenta: Yup.number()
    .required("El número de cuenta es obligatorio")
    .min(10, "El número de cuenta debe tener al menos 10 caracteres")
    .typeError("El número de cuenta debe ser un número")
    .required("El número de cuenta es obligatoria")
    .positive("El número de cuenta debe ser un número positivo")
    .integer("El número de cuenta debe ser un número entero"),
});

interface IUserForm {
  handleCreateUserClick: () => void;
  currentUser?: IUserFormData;
}

const UsersForm: React.FC<IUserForm> = ({
  handleCreateUserClick,
  currentUser,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserFormData>({
    shouldUnregister: false,
    defaultValues: {
      ...currentUser,
      fechaNacimiento: currentUser?.fechaNacimiento || "",
      nombreBanco: currentUser?.nombreBanco || "",
      idTipoCuenta: currentUser?.idTipoCuenta || "",
      estado: currentUser?.estado || false,
    },
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const { handleOnSubmit } = useUser();

  return (
    <form
      onSubmit={handleSubmit(handleOnSubmit)}
      style={{ width: "60%", margin: "5% auto 0 auto" }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" fullWidth>
            <StyledTypography>Nombres</StyledTypography>
            <GenericInput
              id={"nombre"}
              type={"text"}
              control={control}
              props={{
                helperText: errors.nombre?.message,
                error: !!errors.nombre,
              }}
              label={""}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" fullWidth>
            <StyledTypography>Apellidos</StyledTypography>
            <GenericInput
              id={"apellidos"}
              type={"text"}
              control={control}
              props={{
                helperText: errors.apellidos?.message,
                error: !!errors.apellidos,
              }}
              label={""}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" fullWidth>
            <StyledTypography>Cédula</StyledTypography>
            <GenericInput
              id={"cedula"}
              type={"text"}
              control={control}
              props={{
                helperText: errors.cedula?.message,
                error: !!errors.cedula,
              }}
              label={""}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" fullWidth>
            <StyledTypography>Fecha de Nacimiento</StyledTypography>
            <GenericInput
              id={"fechaNacimiento"}
              type={"date"}
              control={control}
              props={{
                helperText: errors.fechaNacimiento?.message,
                error: !!errors.fechaNacimiento,
              }}
              label={""}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" fullWidth>
            <StyledTypography>Correo Electrónico</StyledTypography>
            <GenericInput
              id={"correoElectronico"}
              type={"email"}
              control={control}
              props={{
                helperText: errors.correoElectronico?.message,
                error: !!errors.correoElectronico,
              }}
              label={""}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" fullWidth>
            <StyledTypography>Banco</StyledTypography>
            <GenericInput
              id={"nombreBanco"}
              type={"text"}
              control={control}
              props={{
                helperText: errors.nombreBanco?.message,
                error: !!errors.nombreBanco,
              }}
              options={["Banco A", "Banco B", "Banco C"]}
              label={""}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" fullWidth>
            <StyledTypography>Tipo de Cuenta</StyledTypography>
            <GenericInput
              id={"idTipoCuenta"}
              type={"text"}
              control={control}
              props={{
                helperText: errors.idTipoCuenta?.message,
                error: !!errors.idTipoCuenta,
              }}
              options={["Ahorros", "Corriente"]}
              label={""}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" fullWidth>
            <StyledTypography>Número de Cuenta</StyledTypography>
            <GenericInput
              id={"numeroCuenta"}
              type={"text"}
              control={control}
              props={{
                helperText: errors.numeroCuenta?.message,
                error: !!errors.numeroCuenta,
              }}
              label={""}
            />
          </FormControl>
        </Grid>
        {currentUser && (
          <Grid item xs={12} sm={6}>
            <FormControl variant="standard" fullWidth>
              <StyledTypography>Estado</StyledTypography>
              <GenericInput
                id={"estado"}
                control={control}
                isSwitch={true}
                props={{
                  helperText: errors.estado?.message,
                  error: !!errors.estado,
                  value: currentUser?.estado || false,
                }}
                label={""}
              />
            </FormControl>
          </Grid>
        )}
      </Grid>

      <Grid
        container
        spacing={2}
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid item xs={12} sm={6}>
          <SecondaryButton
            type="button"
            fullWidth
            onClick={handleCreateUserClick}
          >
            Regresar
          </SecondaryButton>
        </Grid>

        <Grid item xs={12} sm={6}>
          <PrimaryButton type="submit" fullWidth>
            {!currentUser ? "Crear" : "Editar"}
          </PrimaryButton>
        </Grid>
      </Grid>
    </form>
  );
};

export default UsersForm;
