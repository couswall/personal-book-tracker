import { FlexContainer, Icon, Input, Label } from "../../components";
import { ErrorMessage } from "../Login/ErrorMessage";
import { IFormFieldProps} from "./interfaces";

export const FormField: React.FC<IFormFieldProps> = ({
    label,
    placeholder = '',
    fieldName,
    inputType = 'text',
    inputMaxLength = 50,
    iconClass = '',
    errors,
    register,
}) => {
  return (
    <FlexContainer Gap="0.5rem" FlexDirection="column" Width="100%">
        <Label FontSize="0.875rem" FontColor="#333333">
            {label}
        </Label>
        <FlexContainer 
            Gap="0.5rem" Padding="1rem 0px" 
            BorderBottom={errors[fieldName] ? '1px solid #FA4032' : '1px solid #d9d9d9'} 
            AlignItems="center" 
            Width="100%"
        >
            <Icon className={iconClass} FontColor="#333333" FontSize="1rem"/>
            <Input
                Border="none" 
                BorderRadius="0px"
                FontSize="1rem"
                placeholder={placeholder}
                Width="100%"
                FontColor="#333333"
                type={inputType}
                {...register(fieldName)}
                maxLength={inputMaxLength}
            />
        </FlexContainer>
        {errors[fieldName]?.message && <ErrorMessage message={errors[fieldName].message}/>}
    </FlexContainer>
  )
}
