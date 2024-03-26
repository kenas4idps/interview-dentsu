import { TextFieldProps } from "@mui/material";
import { FieldValues, RegisterOptions } from "react-hook-form";
import { KeyboardEvent } from "react";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { ILLEGAL_CHARACTER_REGEX } from "@utils/constants";
import { cn } from "@lib/cn";

type Rule =
  | Omit<
      RegisterOptions<FieldValues, string>,
      "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs"
    >
  | undefined;

export type Props = {
  name: string;
  label: string;
  readOnly?: boolean;
  showBorder?: boolean;
  inputHalfWidth?: boolean;
  isDisable?: boolean;
  errMsg?: string;
  onKeyDown?: (e: KeyboardEvent<HTMLDivElement>) => void;
  rules?: Rule;
} & TextFieldProps;

const CustomTextField = ({
  name = "",
  readOnly = false,
  showBorder = true,
  label,
  className,
  inputHalfWidth = false,
  rules,
  isDisable,
  onKeyDown,
  errMsg,

  ...restProps
}: Props) => {
  return (
    <Controller
      rules={rules}
      render={({ field }) => (
        <div
          className={`flex flex-row items-center py-2 pr-2 ${
            inputHalfWidth ? "basis-1/2" : "basis-full"
          }`}
        >
          <p className="w-40">
            {label}
            {rules?.required && <span className="text-error">*</span>}
          </p>
          <TextField
            {...field}
            className={cn(className, "flex-1")}
            {...restProps}
            disabled={isDisable ? true : false}
            error={!!errMsg}
            onKeyDown={(event) => {
              !!onKeyDown && onKeyDown(event);
              if (!ILLEGAL_CHARACTER_REGEX.test(event.key)) {
                event.preventDefault();
              }
            }}
            sx={
              readOnly
                ? {
                    ".MuiInputBase-input": {
                      padding: "10px",
                      fontSize: "14px",
                      backgroundColor: "#f0f0f0",
                      WebkitTextFillColor: "#000000",
                    },
                  }
                : {
                    ".MuiInputBase-input": isDisable
                      ? {
                          padding: "10px",
                          fontSize: "14px",
                          backgroundColor: "#EAEAEB",
                        }
                      : {
                          padding: "10px",
                          fontSize: "14px",
                        },

                    "&.Mui-focused .MuiOutlinedInput-notchedOutline,.MuiOutlinedInput-notchedOutline":
                      showBorder
                        ? {}
                        : {
                            border: "none",
                          },
                  }
            }
          />
        </div>
      )}
      name={name}
    />
  );
};

export default CustomTextField;
