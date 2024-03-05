/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps } from "@aws-amplify/ui-react";
import { DraftFolioData } from "../API.ts";
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
export declare type DraftFolioDataUpdateFormInputValues = {
    customData?: string;
};
export declare type DraftFolioDataUpdateFormValidationValues = {
    customData?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DraftFolioDataUpdateFormOverridesProps = {
    DraftFolioDataUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    customData?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type DraftFolioDataUpdateFormProps = React.PropsWithChildren<{
    overrides?: DraftFolioDataUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    draftFolioData?: DraftFolioData;
    onSubmit?: (fields: DraftFolioDataUpdateFormInputValues) => DraftFolioDataUpdateFormInputValues;
    onSuccess?: (fields: DraftFolioDataUpdateFormInputValues) => void;
    onError?: (fields: DraftFolioDataUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DraftFolioDataUpdateFormInputValues) => DraftFolioDataUpdateFormInputValues;
    onValidate?: DraftFolioDataUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DraftFolioDataUpdateForm(props: DraftFolioDataUpdateFormProps): React.ReactElement;
