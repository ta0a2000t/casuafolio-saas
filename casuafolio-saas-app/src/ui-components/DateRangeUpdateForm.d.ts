/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { DateRange } from "../API.ts";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DateRangeUpdateFormInputValues = {
    start?: string;
    end?: string;
};
export declare type DateRangeUpdateFormValidationValues = {
    start?: ValidationFunction<string>;
    end?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DateRangeUpdateFormOverridesProps = {
    DateRangeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    start?: PrimitiveOverrideProps<TextFieldProps>;
    end?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DateRangeUpdateFormProps = React.PropsWithChildren<{
    overrides?: DateRangeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    dateRange?: DateRange;
    onSubmit?: (fields: DateRangeUpdateFormInputValues) => DateRangeUpdateFormInputValues;
    onSuccess?: (fields: DateRangeUpdateFormInputValues) => void;
    onError?: (fields: DateRangeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DateRangeUpdateFormInputValues) => DateRangeUpdateFormInputValues;
    onValidate?: DateRangeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DateRangeUpdateForm(props: DateRangeUpdateFormProps): React.ReactElement;
