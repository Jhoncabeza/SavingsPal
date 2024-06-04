import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { FormControl, Grid } from "@mui/material";
import GenericInput from "../../../../components/common/inputs/GenericInput";
import {
  PrimaryButton,
  SecondaryButton,
} from "../../../../components/common/buttons/Button";
import styled from "styled-components";
import { ILoandFormData } from "../../../../types/loand.interface";
import useLoans from "../../Hooks/useLoans";

const StyledTypography = styled.div`
  font-size: 14px;
  color: #da5a51;
  margin: 10px 0;
`;

const schema: Yup.ObjectSchema<ILoandFormData> = Yup.object().shape({
  valorPrestamo: Yup.number()
    .typeError("El valor del préstamo debe ser un número")
    .required("El valor del préstamo es obligatorio")
    .positive("El valor del préstamo debe ser un número positivo"),
  tasaInteres: Yup.number()
    .typeError("La tasa de interés debe ser un número")
    .required("La tasa de interés es obligatoria")
    .positive("La tasa de interés debe ser un número positivo"),
  plazoPago: Yup.number()
    .typeError("El plazo de pago debe ser un número")
    .required("El plazo de pago es obligatorio")
    .positive("El plazo de pago debe ser un número positivo")
    .integer("El plazo de pago debe ser un número entero"),
  valorMensual: Yup.number()
    .typeError("El valor mensual debe ser un número")
    .required("El valor mensual es obligatorio")
    .positive("El valor mensual debe ser un número positivo"),
  fecha: Yup.string().required("La fecha es obligatoria"),
  estadoPago: Yup.string().required("El estado de pago es obligatorio"),
  cedula: Yup.string()
    .typeError("La cédula debe ser un número")
    .required("La cédula es obligatoria"),
  observaciones: Yup.string(),
  nombre: Yup.string()
    .required("Los nombres son obligatorios")
    .min(3, "Los nombres deben tener al menos 3 caracteres"),
  apellido: Yup.string().required("Los apellidos son obligatorios"),
});

const LoandsForm = () => {
  const { currentLoand, handleBackLoand, handleOnSubmit } = useLoans();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoandFormData>({
    shouldUnregister: false,
    defaultValues: {
      ...currentLoand,
    },
    mode: "onChange",
    resolver: yupResolver(schema),
  });

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
                disabled: true,
              }}
              label={""}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" fullWidth>
            <StyledTypography>Apellidos</StyledTypography>
            <GenericInput
              id={"apellido"}
              type={"text"}
              control={control}
              props={{
                helperText: errors.apellido?.message,
                error: !!errors.apellido,
                disabled: true,
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
                disabled: true,
              }}
              label={""}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" fullWidth>
            <StyledTypography>Valor de prestámo</StyledTypography>
            <GenericInput
              id={"valorPrestamo"}
              type={"text"}
              control={control}
              props={{
                helperText: errors.valorPrestamo?.message,
                error: !!errors.valorPrestamo,
              }}
              label={""}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" fullWidth>
            <StyledTypography>Plazo de pago (Meses)</StyledTypography>
            <GenericInput
              id={"plazoPago"}
              type={"text"}
              control={control}
              props={{
                helperText: errors.plazoPago?.message,
                error: !!errors.plazoPago,
              }}
              options={[
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
              ]}
              label={""}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" fullWidth>
            <StyledTypography>Valor Mensual</StyledTypography>
            <GenericInput
              id={"valorMensual"}
              type={"text"}
              control={control}
              props={{
                helperText: errors.valorMensual?.message,
                error: !!errors.valorMensual,
              }}
              label={""}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" fullWidth>
            <StyledTypography>Fecha requerida</StyledTypography>
            <GenericInput
              id={"fecha"}
              type={"date"}
              control={control}
              props={{
                helperText: errors.fecha?.message,
                error: !!errors.fecha,
              }}
              label={""}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" fullWidth>
            <StyledTypography>Estado</StyledTypography>
            <GenericInput
              id={"estadoPago"}
              type={"text"}
              control={control}
              props={{
                helperText: errors.estadoPago?.message,
                error: !!errors.estadoPago,
              }}
              options={["Aprobado", "Denegado", "Pendiente"]}
              label={""}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" fullWidth>
            <StyledTypography>Observaciones de solicitud</StyledTypography>
            <GenericInput
              id={"observaciones"}
              type={"text"}
              control={control}
              props={{
                helperText: errors.observaciones?.message,
                error: !!errors.observaciones,
                multiline: true,
              }}
              label={""}
            />
          </FormControl>
        </Grid>
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
          <SecondaryButton type="button" fullWidth onClick={handleBackLoand}>
            Regresar
          </SecondaryButton>
        </Grid>

        <Grid item xs={12} sm={6}>
          <PrimaryButton type="submit" fullWidth>
            Editar
          </PrimaryButton>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoandsForm;
