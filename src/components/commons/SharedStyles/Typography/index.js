import styled from 'styled-components';

export const Heading1 = styled.span`
  font-size: 56px;
  font-weight: 700;
  line-height: 64px;
  letter-spacing: 0px;
  color: ${props => props.color ?? "var(--clr-white)"};
  margin: ${props => `${props.mt ?? 0} ${props.mr ?? 0} ${props.mb ?? 0} ${props.ml ?? 0}`};
`;

export const Heading2 = styled.span`
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0px;
  color: ${props => props.color ?? "var(--clr-white)"};
  margin: ${props => `${props.mt ?? 0} ${props.mr ?? 0} ${props.mb ?? 0} ${props.ml ?? 0}`};
`;

export const Heading3 = styled.span`
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0px;
  color: ${props => props.color ?? "var(--clr-white)"}
`;

export const Subhead1 = styled.span`
  font-size: 15px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0px;
  color: ${props => props.color ?? "var(--clr-white)"}
`;

export const Subhead2 = styled.span`
  font-size: 13px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  color: ${props => props.color ?? "var(--clr-white)"}
`;

export const Link1 = styled.a`
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 2.57px;
  text-transform: uppercase;
  color: ${props => props.color ?? "var(--clr-white)"}
`;

export const Link2 = styled.a`
  font-size: 9px;
  font-weight: 700;
  line-height: 11px;
  letter-spacing: 1.928px;
  text-transform: uppercase;
  text-decoration: underline;
  color: ${props => props.color ?? "var(--clr-white)"}
`;

export const BodyText = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0px;
  color: ${props => props.color ?? "var(--clr-white)"}
`;