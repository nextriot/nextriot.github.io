import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  margin-bottom: 1.8rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  @media (min-width: 640px) {
    flex-direction: row;
  }
`
const Lead = styled.div`
  padding: 1.6rem;
  flex: 1;
  background-color: var(--formBg);
  line-height: 1.2;
  text-align: center;
`
const Title = styled.em`
  display: block;
  font-family: 'Oranienbaum', 'Bodoni', 'Georgia', serif;
  font-size: 1rem;
  font-style: normal;
  margin-bottom: 0.7rem;
`
const BodyText = styled.p`
  font-size: 0.95rem;
  line-height: 1.3;
  margin-bottom: 0;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  padding: 1.6rem;
  margin-bottom: 0;
`
const Input = styled.input`
  width: 100%;
  height: 54px;
  padding: 0 16px;
  font-size: 0.9rem;
  font-family: 'Roboto', 'Helvetica Neue', 'Segoe UI', 'Arial', sans-serif;
  font-weight: 300;
  border: 1px solid var(--formBg);
  min-width: 0;
`
const Submit = styled.input`
  font-family: 'Oranienbaum', 'Bodoni', 'Georgia', serif;
  font-size: 0.8rem;
  margin-top: 0.8rem;
  height: 44px;
  min-width: 90px;
  padding: 0 8px;
  background-color: var(--formBg);
  color: var(--black);
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 4px;
  transition: background-color 0.3s ease-in;
  will-change: transform;
  cursor: pointer;
  &:hover {
    background-color: #d3d4d6;
  }
`

export { Container, Lead, Form, Title, BodyText, Input, Submit }
