import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { FormControl, Grid } from "@mui/material";

import styled from "styled-components";

import { IPayment } from "../../../types/payment.interface";
import { PrimaryButton } from "../../../components/common/buttons/Button";
import GenericInput from "../../../components/common/inputs/GenericInput";
import usePayment from "../Hooks/usePayment";

const StyledTypography = styled.div`
  font-size: 14px;
  color: #da5a51;
  margin: 10px 0;
`;

const schema: Yup.ObjectSchema<Omit<IPayment, "estado">> = Yup.object().shape({
  nombre: Yup.string().required("El nombre es obligatorio"),
  descripcion: Yup.string().required("La descripción es obligatoria"),
  valorMulta: Yup.number()
    .typeError("El valor de la multa debe ser un número")
    .required("El valor de la multa es obligatorio")
    .positive("El valor de la multa debe ser un número positivo"),
  fecha: Yup.string()
    .required("La fecha es obligatoria")
    .typeError("La fecha debe ser una fecha válida"),
  cedula: Yup.number()
    .typeError("La cédula debe ser un número")
    .required("La cédula es obligatoria")
    .positive("La cédula debe ser un número positivo")
    .integer("La cédula debe ser un número entero"),
});

const PaymentForm = () => {
  const { handleOnSubmit } = usePayment();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm<IPayment>({
    shouldUnregister: false,
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: IPayment) => {
    const payment: IPayment = {
      nombre: data.nombre,
      descripcion: data.descripcion,
      valorMulta: Number(data.valorMulta),
      fecha: data.fecha,
      cedula: Number(data.cedula),
      estado: true,
    };

    handleOnSubmit(payment);
    reset();
    setValue("nombre", "");
    setValue("descripcion", "");
    setValue("valorMulta", "");
    setValue("fecha", "");
    setValue("cedula", "");
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ width: "60%", margin: "5% auto 0 auto" }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" fullWidth>
            <StyledTypography>Nombre</StyledTypography>
            <GenericInput
              id={"nombre"}
              type={"text"}
              control={control}
              props={{
                helperText: errors.nombre?.message,
                error: !!errors.nombre,
              }}
              label={""}
              options={["RETRASO APORTE", "INASISTENCIA", "ACTIVIDAD"]}
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
            <StyledTypography>Descripción</StyledTypography>
            <GenericInput
              id={"descripcion"}
              type={"text"}
              control={control}
              props={{
                helperText: errors.descripcion?.message,
                error: !!errors.descripcion,
              }}
              label={""}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" fullWidth>
            <StyledTypography>Valor de la Multa</StyledTypography>
            <GenericInput
              id={"valorMulta"}
              type={"text"}
              control={control}
              props={{
                helperText: errors.valorMulta?.message,
                error: !!errors.valorMulta,
              }}
              label={""}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" fullWidth>
            <StyledTypography>Fecha de Pago</StyledTypography>
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
          <PrimaryButton type="submit" fullWidth>
            Pagar
          </PrimaryButton>
        </Grid>
      </Grid>
    </form>
  );
};

export default PaymentForm;
