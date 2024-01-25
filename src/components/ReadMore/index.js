import {useState} from 'react'
import {
  MainContainer,
  CardContainer,
  MainHeading,
  MainPara,
  Description,
  Image,
  ButtonWrapper,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [isReadMore, setIsReadMore] = useState(false)
  const description = isReadMore
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)
  const buttonText = isReadMore ? 'Read Less' : 'Read More'

  const onClickButton = () => setIsReadMore(prevState => !prevState)

  return (
    <>
      <MainContainer>
        <CardContainer>
          <MainHeading>React Hooks</MainHeading>
          <MainPara>Hooks are a new addition to React</MainPara>
          <Image
            src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
            alt="ReactHooksImage"
          />
          <Description>{description}</Description>

          <ButtonWrapper>
            <Button type="button" onClick={onClickButton}>
              {buttonText}
            </Button>
          </ButtonWrapper>
        </CardContainer>
      </MainContainer>
    </>
  )
}

export default ReadMore
