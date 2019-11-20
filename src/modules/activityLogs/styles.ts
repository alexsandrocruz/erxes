import { colors, dimensions, typography } from 'modules/common/styles';
import { WhiteBox } from 'modules/layout/styles';
import styled from 'styled-components';
import styledTS from 'styled-components-ts';

const iconWrapperWidth = 80;

const Timeline = styled.div`
  padding-left: ${iconWrapperWidth}px;
  position: relative;

  &:before {
    border-right: 1px solid ${colors.borderDarker};
    content: '';
    height: 100%;
    position: absolute;
    z-index: 1;
    margin-top: 1px;
    left: ${iconWrapperWidth / 2}px;
  }
`;

const ActivityTitle = styled.h4`
  margin: 0;
  padding: ${dimensions.coreSpacing * 1.5}px 0 ${dimensions.coreSpacing}px;
  font-weight: 400;
  color: ${colors.textPrimary};
`;

const ActivityRow = styled(WhiteBox)`
  padding: ${dimensions.coreSpacing}px;
  position: relative;
  overflow: visible;
  margin-bottom: ${dimensions.coreSpacing}px;
  border-radius: 2px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const FlexCenterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FlexContent = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styledTS<{ isComplete?: boolean; isEditing: boolean }>(
  styled.div
)`
  position: relative;
  margin: ${dimensions.unitSpacing}px;
  flex: 1;
  font-size: 16px;
  padding: 0 ${dimensions.unitSpacing}px;

  > div {
    margin-bottom: ${dimensions.unitSpacing}px;
  }

  h4 {
    text-decoration: ${props => props.isComplete && 'line-through'};
    transition: all ease 0.4s;

    > i {
      margin-right: 5px;
    }
  }

  .icon-edit {
    visibility: hidden;
    transition: all ease 0.3s;
    position: absolute;
    right: ${dimensions.unitSpacing}px;
    top: 5px;
  }

  &:hover {
    cursor: text;
    
    .icon-edit {
      visibility: ${props => !props.isEditing && 'visible'};
    }
  }
`;

const FlexBody = styled.div`
  flex: 1;
  align-self: center;
  word-break: break-word;

  p {
    margin: 0;
    font-weight: 500;
    font-size: 14px;
  }

  > div {
    font-size: ${typography.fontSizeHeading8}px;
  }

  span {
    padding-right: ${dimensions.unitSpacing}px;
  }
`;

const Row = styled.div`
  margin-right: ${dimensions.coreSpacing}px;
`;

const AvatarWrapper = styledTS<{ isUser?: boolean }>(styled.div)`
  margin-right: ${dimensions.unitSpacing}px;
  position: relative;

  a {
    float: none;
  }

  > i {
    position: absolute;
    right: -3px;
    top: 30px;
    background: ${props =>
      props.isUser ? colors.colorCoreGreen : colors.colorCoreRed};
    width: 18px;
    height: 18px;
    text-align: center;
    border-radius: ${dimensions.unitSpacing}px;
    color: ${colors.colorWhite};
    line-height: 16px;
    font-size: ${dimensions.unitSpacing}px;
    border: 1px solid ${colors.colorWhite};
  }

  > div {
    text-align: center;
    font-size: ${typography.fontSizeUppercase}px;
  } 
`;

const ActivityIcon = styledTS<{ color?: string }>(styled.span)`
  display: inline-block;
  position: absolute;
  background-color: ${props => props.color};
  height: ${iconWrapperWidth * 0.4}px;
  width: ${iconWrapperWidth * 0.4}px;
  line-height: ${iconWrapperWidth * 0.4}px;
  text-align: center;
  border-radius: 50%;
  left: ${-iconWrapperWidth + iconWrapperWidth * 0.3}px;
  top: ${dimensions.coreSpacing}px;
  z-index: 2;

  & i {
    margin: 0;
    color: ${colors.colorWhite};
  }
`;

const ActivityDate = styled.div`
  color: ${colors.colorCoreGray};
  font-weight: ${typography.fontWeightLight};
  font-size: 11px;
  margin-left: 5px;
  cursor: help;
`;

const ActivityContent = styledTS<{ isInternalNote: boolean }>(styled.div)`
  margin-top: ${dimensions.unitSpacing}px;
  padding: ${dimensions.unitSpacing}px;
  background: ${props =>
    props.isInternalNote ? colors.bgInternal : colors.borderPrimary};
  box-shadow: 0 1px 2px 0 ${colors.darkShadow};
  word-break:break-word;

  p:last-of-type {
    margin-bottom: 0;
  }

  img {
    max-width: 100%;
  }
`;

const EmailContent = styled.div`
  padding: ${dimensions.unitSpacing}px ${dimensions.coreSpacing}px 0 60px;
  overflow: hidden;

  img {
    max-width: 100%;
  }
`;

const Date = styledTS<{ showDetail?: boolean }>(styled.div)`
  cursor: pointer;
  display: table;
  margin-right: ${dimensions.unitSpacing}px;

  span {
    font-weight: 600;
    color: ${colors.colorSecondary};
  }

  i {
    margin-right: 5px;

    &:before {
      transition: all .15s ease-in-out;
      transform: ${props => props.showDetail && 'rotate(90deg)'};
    }
  }
`;

const Detail = styledTS<{ full?: boolean }>(styled.div)`
  margin-top: ${props =>
    props.full ? dimensions.coreSpacing : dimensions.unitSpacing}px;

  > p {
    margin: ${dimensions.unitSpacing}px 0 ${dimensions.coreSpacing}px;
  }
  `;

const IconWrapper = styledTS<{ isComplete?: boolean }>(styled.div)`
    cursor: pointer;

  > i {
    background: ${props =>
      props.isComplete ? colors.colorCoreGreen : colors.bgLight};
    color: ${props =>
      props.isComplete ? colors.colorWhite : colors.colorShadowGray};
    border-radius: 25px;
    display: inline-block;
    line-height: 25px;
    border: 2px solid ${props =>
      props.isComplete ? colors.colorCoreGreen : colors.colorShadowGray};
    transition: all ease 0.3s;
  }
`;

const Description = styled.div`
  padding: ${dimensions.unitSpacing}px;
  background: ${colors.bgLight};
  border: 1px solid ${colors.borderPrimary};
  border-radius: 2px;
  margin: ${dimensions.coreSpacing}px 0;
`;

const LogWrapper = styled.div`
  flex: 1;
`;

export {
  Timeline,
  ActivityTitle,
  ActivityRow,
  ActivityIcon,
  AvatarWrapper,
  ActivityDate,
  ActivityContent,
  Description,
  EmailContent,
  FlexContent,
  FlexCenterContent,
  FlexBody,
  Row,
  IconWrapper,
  Title,
  Date,
  Detail,
  LogWrapper
};
