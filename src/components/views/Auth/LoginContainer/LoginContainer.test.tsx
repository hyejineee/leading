/* eslint-disable global-require */
import {
  LoginPageState,
  LoginProvider,
  useLoginPageState,
} from 'src/contexts/LoginContext/LoginContext';
import LoginUseCase from 'src/useCases/LoginUseCase/LoginUseCase';
import AlertMessage, {
  AlertProvider,
} from 'src/components/commons/AlertMessage';
import Action from '@common/types/Action';
import { render, screen } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import { ReactNode } from 'react';
import { instance, mock } from 'ts-mockito';
import LoginContainer from './LoginContainer';

jest.mock('next/router', () => require('next-router-mock'));
jest.mock('@auth/contexts/loginContext/loginContext', () => {
  const originModule = jest.requireActual(
    '@auth/contexts/loginContext/loginContext',
  );

  return {
    __esModule: true,
    ...originModule,
    useLoginPageState: jest.fn(),
  };
});

const mockUseLoginPageState = useLoginPageState as jest.MockedFunction<
  typeof useLoginPageState
>;

describe('LoginContainer', () => {
  const customRender = () => {
    const mockLoginUseCase = mock<LoginUseCase>();

    const wrapper = ({ children }: { children: ReactNode }) => (
      <AlertProvider>
        <AlertMessage>
          <LoginProvider loginUseCase={instance(mockLoginUseCase)}>
            {children}
          </LoginProvider>
        </AlertMessage>
      </AlertProvider>
    );

    return render(
      <LoginContainer>
        <div />
      </LoginContainer>,
      {
        wrapper,
      },
    );
  };

  beforeEach(() => {
    mockRouter.push('/auth/login');
  });

  describe('uiState의 name 값이 ', () => {
    context('GO_TO_MAIN_PAGE', () => {
      it('메인 페이지로 이동한다.', () => {
        mockUseLoginPageState.mockImplementationOnce(
          () => new Action<LoginPageState, null>(LoginPageState.SUCCESS_LOGIN),
        );

        customRender();

        expect(mockRouter.asPath).toBe('/');
      });
    });

    context('SHOW_ERROR', () => {
      context('메세지가 있을 경우', () => {
        it('메시지를 보여준다.', () => {
          const errorMessage = 'error message!';
          mockUseLoginPageState.mockImplementationOnce(
            () =>
              new Action<LoginPageState, null>(LoginPageState.FAIL_LOGIN, {
                message: errorMessage,
              }),
          );

          customRender();

          expect(screen.getByText(errorMessage)).toBeInTheDocument();
        });
      });

      context('메세지가 없을 경우', () => {
        it('메시지를 보여주지 않는다.', () => {
          const errorMessage = 'error message!';
          mockUseLoginPageState.mockImplementationOnce(
            () =>
              new Action<LoginPageState, null>(LoginPageState.FAIL_LOGIN, {
                message: undefined,
              }),
          );

          customRender();

          expect(screen.queryByText(errorMessage)).not.toBeInTheDocument();
        });
      });
    });
  });
});
