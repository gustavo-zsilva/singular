import { Container, Content, Heading, TopHeading, OverviewText, LinearGradient, ScrollIndicator } from "./styles"
import { FiChevronDown } from 'react-icons/fi'

export function Main() {
    return (
        <Container>
            <Content>
                <TopHeading>Yeah,</TopHeading>
                <Heading>its big brain time</Heading>

                <LinearGradient>
                    <OverviewText>
                        A solução para o problema mundial de educação.
                    </OverviewText>
                </LinearGradient>
            </Content>

            <ScrollIndicator>
                <FiChevronDown size={32}  />
            </ScrollIndicator>
        </Container>
    )
}