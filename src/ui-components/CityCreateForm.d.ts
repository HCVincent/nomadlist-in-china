/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CityCreateFormInputValues = {
    name?: string;
    imageUrl?: string;
};
export declare type CityCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    imageUrl?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CityCreateFormOverridesProps = {
    CityCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    imageUrl?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CityCreateFormProps = React.PropsWithChildren<{
    overrides?: CityCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CityCreateFormInputValues) => CityCreateFormInputValues;
    onSuccess?: (fields: CityCreateFormInputValues) => void;
    onError?: (fields: CityCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CityCreateFormInputValues) => CityCreateFormInputValues;
    onValidate?: CityCreateFormValidationValues;
} & React.CSSProperties>;
export default function CityCreateForm(props: CityCreateFormProps): React.ReactElement;
