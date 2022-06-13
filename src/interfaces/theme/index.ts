export interface ThemeInterface {
  screen: Screen;
  font: {
    weightSemibold: string;
  };
  container: Container;
  formElement: FormElement;
  formButton: FormButton;
}

interface Container {
  color: Color;
  background: Color;
  border: Color;
}

interface FormElement {
  background: Color;
  color: Color;
  border: Color;
}

interface FormButton {
  background: Color;
  color: Color;
  border: Color;
}

interface Screen {
  mobile: number;
  tablet: number;
  desktop: number;
}

interface Color {
  primary?: string;
  secondary?: string;
  tertiary?: string;
  success?: string;
  error?: string;
  validated?: string;
}
