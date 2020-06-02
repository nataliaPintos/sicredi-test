import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { HomePage } from './screens/home';
import { LoginPage } from './screens/login';
import { DragonForm } from './components/dragonform';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/header';

test('test if login page has the password and username input', () => {
  const { getByPlaceholderText } = render(<LoginPage />);
  const inputElement = getByPlaceholderText("password");
  const inputElement2 = getByPlaceholderText("username");

  expect(inputElement).toBeInTheDocument();
  expect(inputElement2).toBeInTheDocument();

});

test('test header links ', () => {
  const { getByText } = render(<BrowserRouter> <Header /> </BrowserRouter>);
  const nameElement = getByText("Novo Dragão");
  const typeElement = getByText("Logout");

  expect(nameElement).toBeInTheDocument();
  expect(typeElement).toBeInTheDocument();

});

test('test when passing detail prop false, detail link should appear', () => {
  const { getByText } = render(<BrowserRouter> <DragonForm detail={false}></DragonForm>  </BrowserRouter>);
  const linkElement = getByText("Detalhes");

  expect(linkElement).toBeInTheDocument();
});

test('test when dragons information pass on props, component should render values and delete button on screen', () => {
  const { getByDisplayValue, getByText } = render(<BrowserRouter> <DragonForm name='Dino' type='Water' history='The history of dino' id={10}></DragonForm>  </BrowserRouter>);
  const nameElement = getByDisplayValue("Dino");
  const typeElement = getByDisplayValue("Water");
  const historyElement = getByDisplayValue("The history of dino");
  const deleteElement = getByText("Deletar");

  expect(nameElement).toBeInTheDocument();
  expect(typeElement).toBeInTheDocument();
  expect(historyElement).toBeInTheDocument();
  expect(deleteElement).toBeInTheDocument();

});

test('test when dont pass information about dragon, delete button should not appear to be on newDragon mode', () => {
  const { queryByText } = render(<BrowserRouter> <DragonForm></DragonForm>  </BrowserRouter>);
  const deleteButton = queryByText("Deletar");

  expect(deleteButton).not.toBeInTheDocument();

});



