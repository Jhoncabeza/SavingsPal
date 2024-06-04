import { Controller } from "react-hook-form";

import {
  FormControl,
  InputLabel,
  TextFieldProps,
  Grid,
  SelectChangeEvent,
  FormControlLabel,
  Switch,
} from "@mui/material";

import { CustomTextField } from "./styles/styles";

import SelectInput from "./SelectInput";

interface InputProps {
  id: string;
  type?: string;
  label: string;
  options?: string[];
  control: any;
  props: TextFieldProps;
  isSwitch?: boolean;
}

const GenericInput: React.FC<InputProps> = ({
  id,
  type = "text",
  label,
  options,
  control,
  isSwitch = false,
  props,
}) => {
  return options ? (
    <FormControl variant="outlined" fullWidth error={!!props?.error}>
      <InputLabel id={`${id}-label`}>{label}</InputLabel>
      <Grid item sm={12}>
        <Controller
          name={id}
          control={control}
          render={({ field }) => (
            <SelectInput
              labelId={`${id}-label`}
              id={id}
              label={label}
              value={field.value}
              onChange={(e: SelectChangeEvent<unknown>) => {
                field.onChange(e.target.value);
              }}
              options={options}
            />
          )}
        />
        {props.helperText && (
          <p style={{ color: "#DA5A51", margin: "5px 0 0 0" }}>
            {props.helperText}
          </p>
        )}
      </Grid>
    </FormControl>
  ) : (
    <Grid item sm={12}>
      {isSwitch ? (
        <Controller
          name={id}
          control={control}
          render={({ field }) => (
            <FormControlLabel
              control={
                <Switch
                  checked={field.value}
                  onChange={(e) => field.onChange(e.target.checked)}
                />
              }
              label={label}
            />
          )}
        />
      ) : (
        <Controller
          name={id}
          control={control}
          render={({ field }) => (
            <CustomTextField
              {...field}
              id={id}
              type={type}
              label={label}
              variant="outlined"
              error={!!props.error}
              helperText={props.helperText}
              disabled={props.disabled}
            />
          )}
        />
      )}
    </Grid>
  );
};

export default GenericInput;
