/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Research } from "../API.ts";
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
export declare type ResearchUpdateFormInputValues = {
    isPublished?: boolean;
    intro?: string;
    photos?: string[];
};
export declare type ResearchUpdateFormValidationValues = {
    isPublished?: ValidationFunction<boolean>;
    intro?: ValidationFunction<string>;
    photos?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ResearchUpdateFormOverridesProps = {
    ResearchUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    isPublished?: PrimitiveOverrideProps<SwitchFieldProps>;
    intro?: PrimitiveOverrideProps<TextFieldProps>;
    photos?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ResearchUpdateFormProps = React.PropsWithChildren<{
    overrides?: ResearchUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    research?: Research;
    onSubmit?: (fields: ResearchUpdateFormInputValues) => ResearchUpdateFormInputValues;
    onSuccess?: (fields: ResearchUpdateFormInputValues) => void;
    onError?: (fields: ResearchUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ResearchUpdateFormInputValues) => ResearchUpdateFormInputValues;
    onValidate?: ResearchUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ResearchUpdateForm(props: ResearchUpdateFormProps): React.ReactElement;
