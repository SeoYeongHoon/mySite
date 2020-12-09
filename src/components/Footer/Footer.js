import React from 'react';
import { Button } from '../../globalStyles';
import { FooterContainer,
         FooterSubscription,
         FooterSubHeading,
         FooterSubText,
         Form,
         FormInput
        } from './Footer.elements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join Us
                </FooterSubHeading>
                <FooterSubText>
                    You can unsubscribe at any time.
                </FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Email" />
                        <Button fontBig>JOIN</Button>
                </Form>
            </FooterSubscription>
        </FooterContainer>
    )
}

export default Footer;
