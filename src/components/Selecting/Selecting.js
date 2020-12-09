import React from 'react';
import { Button } from '../../globalStyles';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  SelectingSection,
  SelectingWrapper,
  SelectingHeading,
  SelectingContainer,
  SelectingCard,
  SelectingCardInfo,
  SelectingCardIcon,
  SelectingCardPlan,
  SelectingCardCost,
  SelectingCardLength,
  SelectingCardFeatures,
  SelectingCardFeature
} from './Selecting.elements';

function Selecting() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <SelectingSection>
        <SelectingWrapper>
          <SelectingHeading>Our Services</SelectingHeading>
          <SelectingContainer>
            <SelectingCard to='/sign-up'>
              <SelectingCardInfo>
                <SelectingCardIcon>
                  <GiRock />
                </SelectingCardIcon>
                <SelectingCardPlan>Starter Pack</SelectingCardPlan>
                <SelectingCardCost>$99.99</SelectingCardCost>
                <SelectingCardLength>per month</SelectingCardLength>
                <SelectingCardFeatures>
                  <SelectingCardFeature>100 New Users</SelectingCardFeature>
                  <SelectingCardFeature>$10,000 Budget</SelectingCardFeature>
                  <SelectingCardFeature>Retargeting analytics</SelectingCardFeature>
                </SelectingCardFeatures>
                <Button primary>Choose Plan</Button>
              </SelectingCardInfo>
            </SelectingCard>
            <SelectingCard to='/sign-up'>
              <SelectingCardInfo>
                <SelectingCardIcon>
                  <GiCrystalBars />
                </SelectingCardIcon>
                <SelectingCardPlan>Gold Rush</SelectingCardPlan>
                <SelectingCardCost>$299.99</SelectingCardCost>
                <SelectingCardLength>per month</SelectingCardLength>
                <SelectingCardFeatures>
                  <SelectingCardFeature>1000 New Users</SelectingCardFeature>
                  <SelectingCardFeature>$50,000 Budget</SelectingCardFeature>
                  <SelectingCardFeature>Lead Gen Analytics</SelectingCardFeature>
                </SelectingCardFeatures>
                <Button primary>Choose Plan</Button>
              </SelectingCardInfo>
            </SelectingCard>
            <SelectingCard to='/sign-up'>
              <SelectingCardInfo>
                <SelectingCardIcon>
                  <GiCutDiamond />
                </SelectingCardIcon>
                <SelectingCardPlan>Diamond Kings</SelectingCardPlan>
                <SelectingCardCost>$999.99</SelectingCardCost>
                <SelectingCardLength>per month</SelectingCardLength>
                <SelectingCardFeatures>
                  <SelectingCardFeature>Unlimited Users</SelectingCardFeature>
                  <SelectingCardFeature>Unlimited Budget</SelectingCardFeature>
                  <SelectingCardFeature>24/7 Support</SelectingCardFeature>
                </SelectingCardFeatures>
                <Button primary>Choose Plan</Button>
              </SelectingCardInfo>
            </SelectingCard>
          </SelectingContainer>
        </SelectingWrapper>
      </SelectingSection>
    </IconContext.Provider>
  );
}
export default Selecting;