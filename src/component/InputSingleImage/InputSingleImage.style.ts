import styled from "@emotion/styled";
import { Sizing } from "./InputSingleImage.props";

const fontSizes: Record<Sizing, string> = {
  small: `
        font-size: 14px;
    `,
  medium: `
        font-size: 16px;
    `,
  large: `
        font-size: 18px;
    `,
};

const paddingSizes: Record<Sizing, string> = {
  small: `
        padding: 4px 8px;
    `,
  medium: `
        padding: 6px 12px;
    `,
  large: `
        padding: 8px 16px;
    `,
};

export const Container = styled.div``;

export const LabelContainer = styled.div<{ sizing: Sizing }>`
  ${({ sizing }) => fontSizes[sizing] + paddingSizes[sizing]}
`;

export const InputContainer = styled.div``;

export const Input = styled.button`
  width: 100%;
  border-radius: 8px;
  border: 0;
  aspect-ratio: 1;
  cursor: pointer;
  background-color: lightgrey;
  display: grid;
  align-items: center;
  justify-items: center;
`;

export const Item = styled.button`
  width: 100%;
  padding: 0;
  border: 0;
  border-radius: 8px;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  aspect-ratio: 1;
  cursor: pointer;
  object-fit: cover;
`;

export const ErrorContainer = styled.div<{ sizing: Sizing }>`
  ${({ sizing }) => fontSizes[sizing] + paddingSizes[sizing]}
`;
